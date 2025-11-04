import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Resource, Resources } from 'src/app/services/resources';

@Component({
	selector: 'app-resource-reference',
	imports: [],
	templateUrl: './resource-reference.html',
	styleUrl: './resource-reference.scss'
})
export class ResourceReference {
	@Input()
	path?: string;

	@Input()
	resource?: Resource;

	@Input()
	thumbnail = true;

	preview = false;

	constructor(
		private resourcesService: Resources,
		public dialog: MatDialog) {
	}

	ngOnInit() {
		if (this.path) {
			this.resourcesService.getResource(this.path!).subscribe(response => {
				this.resource = response;
			});
		}
	}
}
