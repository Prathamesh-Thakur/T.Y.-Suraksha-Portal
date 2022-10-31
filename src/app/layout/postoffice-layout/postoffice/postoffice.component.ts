import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  p_name: string;
  sr_no: number;
  token_id: number;
  reports: string;
  date: string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {sr_no: 1, p_name: 'Hales', token_id: 10079, reports: '', date: '2/3/2016', status:'received' },
  {sr_no: 2, p_name: 'Helios', token_id: 40026, reports: '', date: '12/5/2012', status:'received'},
  {sr_no: 3, p_name: 'Litha',token_id: 6941, reports: '', date: '10/2/2015', status:'received'},
  {sr_no: 4, p_name: 'Berys', token_id: 90122, reports: '', date: '29/11/2013', status:'received'},
  {sr_no: 5, p_name: 'Boris', token_id: 10811, reports: '', date: '4/10/2012', status:'received'},
  {sr_no: 6, p_name: 'Carlin', token_id: 120107, reports: '', date: '9/1/2015', status:'received'},
  {sr_no: 7, p_name: 'Nita', token_id: 140067, reports: '', date: '3/4/2014', status:'received'},
  {sr_no: 8, p_name: 'Olap', token_id: 159994, reports: '', date: '30/9/2013', status:'received'},
  {sr_no: 9, p_name: 'Fluos', token_id: 189984, reports: '', date: '31/10/2012', status:'received'},
  {sr_no: 10, p_name: 'Nina', token_id: 201797, reports: '', date: '20/1/2012', status:'received'},
];

@Component({
  selector: 'app-postoffice',
  templateUrl: './postoffice.component.html',
  styleUrls: ['./postoffice.component.css']
})
export class PostofficeComponent implements OnInit {

  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['sr_no', 'token_id', 'p_name', 'reports','date', 'status'];

  constructor() { }

  ngOnInit(): void {
  }

}
