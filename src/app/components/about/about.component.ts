import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() resumeData: any;




  constructor() {
    this.resumeData = this.resumeData;

  }

  ngOnInit(): void {
  }

}
