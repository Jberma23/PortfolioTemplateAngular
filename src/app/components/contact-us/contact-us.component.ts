import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @Input() resumeData: any;




  constructor() {
    this.resumeData = this.resumeData;

  }

  ngOnInit(): void {
  }

}
