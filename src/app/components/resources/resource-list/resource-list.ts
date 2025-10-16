import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource, ResourcePage, Resources } from 'src/app/services/resources';
import { ResourceReference } from '../resource-reference/resource-reference';
import { MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { UploadResources } from "../upload-resources/upload-resources";

@Component({
  selector: 'app-resource-list',
  imports: [ResourceReference, MatTableModule, MatToolbar, MatIcon, UploadResources],
  templateUrl: './resource-list.html',
  styleUrl: './resource-list.scss'
})
export class ResourceList {
	search = '';
	type?: string;
	page?: ResourcePage;
	displayedColumns: string[] = ['path', 'preview', 'actions'];

	constructor(public resourcesService: Resources,
		private router: Router,
		private route: ActivatedRoute) {

	}

	searchInput(event: any) {
		this.search = event.target.value;
		this.reload();
	}
	
	files?: File[];

	// @ViewChild(NgxFileDragDropComponent) drop?: NgxFileDragDropComponent;


	changeFiles(event: any) {
		this.files = event;
	}

	upload() {

		this.resourcesService.upload(this.type!, this.files!).subscribe(result => {
//			this.drop?.clear();
			this.reload();
		});
	}


	ngOnInit() {
		this.refreshType();
		this.router.events.subscribe((res) => {
			this.refreshType();
		});
	}
	refreshType() {
		console.info('refreshType');
		const type = this.route.parent?.snapshot.paramMap.get("type");
		this.setType(type!);
	}

	setType(type: string) {
		if (this.type != type) {
			this.type = type;
			this.reload();
		}

	}
	remove(resource: Resource) {
		this.resourcesService.delete(resource.path!).subscribe(response => {
			this.reload();
		});
	}


	reload() {
		this.resourcesService.getResources(this.type, this.search).subscribe(response => {
			console.info('resources( ' + this.type + ' ) :', response);
			this.page = response;
		});
	}
}
