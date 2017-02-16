import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

class ContactForm {
  contactname: string;
  contactemail: string;
  contactmessage: string; 
}

@Component({
	selector: 'supersport-contact',
	moduleId: module.id,
	templateUrl: 'supersport-contact.component.html'
})

export class SupersportContactComponent implements OnInit {
  model:ContactForm = new ContactForm();
  hasBeenSubmitted: boolean;

	constructor(
		private titleService: Title) { }
    ngOnInit() {
        this.titleService.setTitle('Supersports - Contact');
        this.hasBeenSubmitted = false;
    }
    
    register(form:NgForm, event:Event) {
      event.preventDefault();
      // info to server
      this.hasBeenSubmitted = true;
    }
  }
}