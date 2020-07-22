import { Component, OnInit } from '@angular/core';
import {EmeraldService} from '../emerald.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  target;
  name;
  mobile;
  email;
  message;
  constructor(private eservice: EmeraldService) { }

  ngOnInit(): void {
  }

  sendMessage(event){
    this.target = event.target;
    this.name = this.target.querySelector('#name').value;
    this.mobile = this.target.querySelector('#mobile').value;
    this.email = this.target.querySelector('#email').value;
    this.message = this.target.querySelector('#message').value;
    this.eservice.sendMessage(this.name, this.mobile, this.email, this.message).subscribe(data => {
      console.log('this is data ' + data);
  });

  }
}
