import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as data from './elements.data';
import { Select2OptionData } from 'ng2-select2/ng2-select2';

@Component({
  selector: 'app-source-info',
  templateUrl: './source-info.component.html',
  styleUrls: ['./source-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SourceInfoComponent implements OnInit {
	date: Date = new Date(2016, 5, 10);


//const select2CountryData: Select2OptionData[] = [
  //{text: 'Afghanistan', id: 'AF'},
  getSelect2CountryList(): Select2OptionData[] {
    return data.select2CountryData;
  }
	//testList: Select2OptionData[] = [
	//	{id:'1', text:'one'}, {id:'2', text:'two'}, {id:'3', text:'three'}];

  constructor() { }

  ngOnInit() {
  	(jQuery('.js-slider') as any).slider();
  	//jQuery('.selectpicker').selectpicker();
  }

}
