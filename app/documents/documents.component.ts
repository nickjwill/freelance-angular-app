import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	
	documents: Document[] = [
	{
	  title: "My first doc",
	  description: "asdfdf fdgfg",
	  file_url: 'http://google.com',
	  updated_at: '12/8/18',
	  image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
	},
	{
	  title: "My second doc",
	  description: "asdfdf fdgfg",
	  file_url: 'http://google.com',
	  updated_at: '12/8/18',
	  image_url: 'https://static.pexels.com/photos/167964/pexels-photo-167964.jpeg',
	},
	{
	  title: "My third doc",
	  description: "asdfdf fdgfg",
	  file_url: 'http://google.com',
	  updated_at: '12/8/18',
	  image_url: 'https://static.pexels.com/photos/461064/pexels-photo-461064.jpeg',
	}
	]
}
