import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Resource {
	path?: string;
	type?: string;
	mimeType?: string;
}

export class ResourcePage {
	content?: Resource[];
}

@Injectable({
  providedIn: 'root'
})
export class Resources {

	baseUrl = 'http://localhost:8090/api';

	constructor(private http: HttpClient) { }
	
	getStatIcon(stat: string) : string {
		switch (stat.toLowerCase()) {
			case 'health':
        		return 'stat_health.svg';
			case 'def':
			case 'defense':
        		return 'shield.svg';
			case 'difficulty':
			case 'diff':
        		return 'star.svg';
			case 'str':
        		return 'stat_str.svg';
			case 'upp':
        		return 'stat_upp.svg';
			case 'agi':
			case 'agility':
        		return 'stat_agility.svg';
			case 'luck':
        		return 'stat_luck.svg';
			case 'mana':
        		return 'stat_mana.svg';
			case 'mul':
        		return 'multiply.svg';
			case 'card':
        		return 'card-draw.svg';
			case 'hand':
        		return 'hand.svg';
			case 'noise':
			case 'noice':
			case 'no':
        		return 'noise.svg';
			case 'fire':
        		return 'fire.svg';
			case 'area':
        		return 'area.svg';
			case 'cone':
        		return 'cone.svg';
			case 'move':
        		return 'walk.svg';
			case 'fly':
        		return 'wings.svg';
			case 'teleport':
        		return 'teleport.svg';
			case 'target':
        		return 'reticle.svg';
			case 'group':
        		return 'group.svg';
			case 'poison':
        		return 'poison.svg';
			case 'magic':
        		return 'magic.png';
			case 'cold':
        		return 'snowflake.svg';
			case 'range':
        		return 'range.svg';
			case 'time':
        		return 'time.svg';
			case 'p':
			case 'physical':
			case 'nmagic':
        		return 'sword.png';
		}
		return '?';
	}
	getDiceIcon(type: string) : string {
		switch (type.toLowerCase()) {
			case 'a':
			case 'attack':
        		return 'attack_dice.svg';
		}
		return '?';
	}
	
	getResources(type?: string, search?: string): Observable<ResourcePage> {
		let params = new HttpParams();
		if (type) {
			params = params.set('type', type);
		}
		if (search) {
			params = params.set('search', search);
		}
		return this.http.get<ResourcePage>(this.baseUrl + '/resources', { params: params });
	}

	getResource(path: string): Observable<Resource> {
		return this.http.get<Resource>(this.baseUrl + '/resources/' + path + '/info');
	}

	delete(path: string) {
		return this.http.delete<void>(this.baseUrl + '/resources/' + path);
	}
	upload(type: string, files: File[]) {

		const formData = new FormData();

		console.info('Uploading files:', files);
		files.forEach(file => {
			formData.append("file", file);
		});


		return this.http.post<void>(this.baseUrl + '/resources/upload/' + type, formData);

	}  
	uploadFile(type: string, file: File) {

		const formData = new FormData();

		formData.append("file", file);


		return this.http.post<void>(this.baseUrl + '/resources/upload/' + type, formData);

	}  
}
