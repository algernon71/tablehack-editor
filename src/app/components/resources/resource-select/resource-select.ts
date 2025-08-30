import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import {map,mergeMap, startWith} from 'rxjs/operators';
import { Resources, Resource } from 'src/app/services/resources';

@Component({
  selector: 'app-resource-select',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, AsyncPipe, MatAutocompleteModule, ReactiveFormsModule],
  templateUrl: './resource-select.html',
  styleUrl: './resource-select.scss'
})
export class ResourceSelect {
	pathCtrl = new FormControl('');

	@Input()
	name = 'Symbol';

	@Input()
	type?: string;
	@Input()
	subType?: string;
	@Input()
	path?: string;

	@Output()
	pathChange = new EventEmitter<string>();

	selected?: Resource;

	resources?: Observable<Resource[]>;

	constructor(
		private resourcesService: Resources,
		public dialog: MatDialog) {

	}

	ngOnInit() {
    	this.pathCtrl.setValue(this.path!);
		this.resources = this.pathCtrl.valueChanges.pipe(
		      startWith(''), mergeMap(value => this.resourcesService.getResources(this.type, value!)))
		      .pipe(map(page => page.content!));
	}

	
	resourceSelected(resource: Resource) {
    	this.selected = resource;
    	this.path = resource.path;
    	this.pathChange.emit(this.path);
		console.info('select:', resource);
	}
}
