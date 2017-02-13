import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'supersport-contact',
	moduleId: module.id,
	templateUrl: 'supersport-contact.component.html'
})

export class SupersportContactComponent implements OnInit {

	constructor(
		private titleService: Title) { }
    ngOnInit() {
        this.titleService.setTitle('Supersports - Contact');
    }
  onSubmit(form: any):void {
  	console.log('You have submitted value:', form);
  }
}