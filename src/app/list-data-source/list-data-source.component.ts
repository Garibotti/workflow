import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-data-source',
  templateUrl: './list-data-source.component.html',
  styleUrls: ['./list-data-source.component.scss']
})
export class ListDataSourceComponent implements OnInit {

	 sources = [
					{id:1, name:'Moedas'},
					{id:2, name:'Taxa de Juros'},
					{id:3, name:'Renda familiar'}
					];
	constructor() { }

	ngOnInit() {
	}

}
