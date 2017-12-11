import { Component } from '@angular/core';
import { Document } from './doument';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	
	documents: Document[] = [
	{
	  title: "My first doc",
	  description: "asdfdf fdgfg",
	  file_url: 'http://google.com',
	  updated_at: '12/8/18',
	  image_url: 'http://google.com',
	},
	{
	  title: "My second doc",
	  description: "asdfdf fdgfg",
	  file_url: 'http://google.com',
	  updated_at: '12/8/18',
	  image_url: 'http://google.com',
	},
	{
	  title: "My third doc",
	  description: "asdfdf fdgfg",
	  file_url: 'http://google.com',
	  updated_at: '12/8/18',
	  image_url: 'http://google.com',
	}
	]
}
