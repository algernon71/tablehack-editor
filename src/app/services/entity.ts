import { Observable, of } from "rxjs";
import { CardPrintData } from "../components/print/print-cards/print-cards";



export interface EntityDataSource {
    getTypeId(): string;
    getInfo(): EntityInfo;
    getColumns(): EntityColumn[];
    importRow(importData: Entity): Observable<Entity>;
    saveRow(row: any): Observable<any>;
    fetchRow(row: any): Observable<any>;
    deleteRow(row: any): Observable<void>;
    addRow(): Observable<any>;

    fetchRows(page: number, pageSize: number): Observable<EntityPage>;
}

export class ArrayDataSource implements EntityDataSource {



    constructor(private info: EntityInfo, public data: any[]) {

    }

    getInfo(): EntityInfo {
        return this.info;
    }

    getTypeId(): string {
        return this.info.typeId;
    }

    addRow(): Observable<any> {

        const row: Entity = {
            id: "" + (this.data.length + 1),
            name: '',
            image: ''


        };

        this.data.push(row);
        return of(row);
    }

    deleteRow(row: any): Observable<void> {
        const idx = this.data.findIndex(r => r == row);
        if (idx >= 0) {
            this.data.splice(idx, 1);
        }
        return of();
    }

    fetchRow(row: any): Observable<any> {
        return of(row);
    }

    fetchRows(page: number, pageSize: number): Observable<EntityPage> {
        const result: EntityPage = {
            content: this.data
        };
        return of(result);
    }

    getColumns(): EntityColumn[] {
        return this.info.columns;
    }

    importRow(importData: Entity): Observable<Entity> {
        this.data.push(importData);
        return of(importData);
    }

    saveRow(row: any): Observable<any> {
        return of(row);
    }






}

export class EntityInfo {

    columns: EntityColumn[] = [];
    printPath?: string;
    printField?: string;
    printCards?: (entity: Entity) => CardPrintData[];

    constructor(
        public name: string,
        public typeId: string,
        columns?: EntityColumn[]) {

        this.printPath = typeId;
        if (columns) {
            this.columns = columns;

        }
    }


    column(column: EntityColumn): EntityInfo {
        this.columns.push(column);

        return this;
    }
    nonPrintable(): EntityInfo {
        this.printPath = undefined;

        return this;
    }

    printable(field: string): EntityInfo {
        this.printField = field;

        return this;
    }

    print(printCards?: (entity: Entity) => CardPrintData[]): EntityInfo {
        this.printCards = printCards;
        return this;
    }


    buildPrintCards(entity: Entity): CardPrintData[] {
        if (!this.printCards) {
            const cards: CardPrintData[] = [];

            const card: any = {};
            card[this.printField!] = entity;
            cards.push(card);

            return cards;

        } else {
            return this.printCards(entity);
        }
    }
}

export class EntityPage {
    content?: any[];
    page?: number;
    size?: number;
}

export class Entity {
    id?: any;
    name?: string;
    image?: string;
    updated? = false;

}


export class EntityColumn {
    icon?: string;
    description!: string;
    editable? = true;
    values?: any[];
    width?: string;
    largeCard = false;
    constructor(public type: string, public name: string, public label: string) {
    }

    public withIcon(icon: string): EntityColumn {
        this.icon = icon;
        return this;
    }

    public static reference(name: string, label: string): EntityColumn {
        return new EntityColumn('reference', name, label);
    }
    public static string(name: string, label: string): EntityColumn {
        return new EntityColumn('string', name, label);
    }
    public static image(name: string, label: string): EntityColumn {
        return new EntityColumn('image', name, label);
    }
    public static card(name: string, label: string, large: boolean): EntityColumn {
        const field = new EntityColumn('card', name, label);

        field.largeCard = large;
        return field;
    }

    public static enum(name: string, label: string, values: any[]): EntityColumn {
        const field = new EntityColumn('enum', name, label);

        field.values = values;
        return field;
    }
    public static number(name: string, label: string): EntityColumn {
        return new EntityColumn('number', name, label);
    }

    getCard(row: any): CardPrintData {
        const card: any = {};

        card.largeCard = this.largeCard;
        card[this.name] = row;
        return card;
    }
    getShownValue(row: any) {
        const value = this.getValue(row);
        switch (this.type) {
            case 'enum':
                const valueEntry = this.values?.find(v => v.id == value);
                if (valueEntry) {
                    return valueEntry.name;
                } else {
                    return '?' + value + '?';
                }
            default:
                return value;
        }
    }

    getValue(row: any) {
        const parts = this.name.split('.');
        let i = 0;
        let value = row[parts[i]];
        while (i + 1 < parts.length) {
            i++;
            if (value) {
                value = value[parts[i]];
            } else {
                console.error('Invalid value path: ' + this.name, row);
            }
        }
        return value;
    }

    setValue(row: any, value: any) {
        const parts = this.name.split('.');
        let i = 0;
        let valueRef = row;
        while (i + 1 < parts.length) {
            valueRef = valueRef[parts[i]];
            i++;

        }
        valueRef[parts[i]] = value;
        row.wasUpdated = true;
        row.xyz = true;
        console.info('setValue', row, value, row.updated);
    }
}


