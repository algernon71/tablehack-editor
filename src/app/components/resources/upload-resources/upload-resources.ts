import { Component, Input } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

@Component({
  selector: 'app-upload-resources',
  imports: [],
  templateUrl: './upload-resources.html',
  styleUrl: './upload-resources.scss'
})
export class UploadResources {
  @Input()
	type?: string;
	
	files?: File[];
	constructor(public resourcesService: ResourcesService) {
	}

	changeFiles(event: any) {
		console.info('filechange:', event);
		this.files = event;
		console.info('files:', this.files);
	}

	upload() {
		this.resourcesService.upload(this.type!, this.files!).subscribe(result => {
			console.info('upload:', result);
		});
	}
}
