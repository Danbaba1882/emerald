import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {EmeraldService} from '../emerald.service';
declare var jQuery: any;
import * as bootstrap from 'bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

target;
name;
mobile;
email;
ptype;
project;
file;
success;
successmessage;
selectedFile = [];
filenames;
  constructor(private eservice: EmeraldService) { }

  ngOnInit(): void {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files;
  }

submitProject(event){
  this.target = event.target;
  this.name = this.target.querySelector('#name').value;
  this.mobile = this.target.querySelector('#mobile').value;
  this.email = this.target.querySelector('#email').value;
  this.ptype = this.target.querySelector('#ptype').value;
  this.project = this.target.querySelector('#project').value;
  this.file = this.selectedFile;
  console.log(this.file);
  this.eservice.submitProject(this.name, this.mobile, this.email, this.ptype, this.project, this.file).subscribe(data => {
    this.successmessage = data;
    this.success = this.successmessage.success;
    console.log(this.success);
    console.log('this is data ' + data);
});
}}
