import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  listTitle = 'Users List';
  users = [
    {
      name : 'Shoaib'
    },
    {
      name : 'Ali'
    },
    {
      name : 'Saim'
    },
    {
      name : 'Ahmed'
    },
    {
      name : 'Aimal'
    },
    {
      name : 'Qazi'
    },
  ]
}
