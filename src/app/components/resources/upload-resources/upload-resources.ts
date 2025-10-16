import { Component, Input } from '@angular/core';
import { Resources } from 'src/app/services/resources';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

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
	constructor(public resourcesService: Resources) {
	}

	changeFiles(event: any) {
		console.info('filechange:', event);
		this.files = event.target.files;
    const file:File = event.target.files[0];
		console.info('file:', file);
    this.files = [file];

		console.info('files:', this.files);
	}

	upload() {
		this.resourcesService.upload(this.type!, this.files!).subscribe(result => {
			console.info('upload:', result);
		});
	}
}
