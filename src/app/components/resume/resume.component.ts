import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  @Input() resumeData: any;




  constructor() {
    this.resumeData = this.resumeData;

  }

  ngOnInit(): void {
  }

}
