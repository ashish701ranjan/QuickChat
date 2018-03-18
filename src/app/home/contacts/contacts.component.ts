import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  public contactList: Array<{name: string}> = [];
  ngOnInit() {
    let tempName = "Name";
    for (let i = 0; i < 10; i ++) {
      this.contactList.push({name: tempName + (i + 1)});
    }
  }

}
