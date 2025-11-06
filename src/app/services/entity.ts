import { Observable } from "rxjs";
import { CardPrintData } from "../components/print/print-cards/print-cards";



export interface EntityDataSource {
    getColumns(): EntityColumn[];
    importRow(importData: Entity): Observable<Entity>;
    saveRow(row: any): Observable<any>;
    fetchRow(row: any): Observable<any>;
    deleteRow(row: any): Observable<void>;
    addRow(): Observable<any>;

    fetchRows(page: number, pageSize: number): Observable<EntityPage>;
}

export class EntityInfo {
    path!: string;
    columns!: EntityColumn[];
}

export class EntityPage {
    content?: any[];
    page?: number;
    size?: number;
}

export class Entity {
    id?: number;
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

    public static enum(name: string, label: string, values: string[]): EntityColumn {
        const field = new EntityColumn('string', name, label);

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

    getValue(row: any) {
        const parts = this.name.split('.');
        let i = 0;
        let value = row[parts[i]];
        while (i + 1 < parts.length) {
            i++;
            value = value[parts[i]];
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

