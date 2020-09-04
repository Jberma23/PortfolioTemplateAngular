import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() resumeData: any;




  constructor() {
    this.resumeData = this.resumeData;

  }

  ngOnInit(): void {
  }

}
