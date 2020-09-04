import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() resumeData: any;




  constructor() {
    this.resumeData = this.resumeData;

  }

  ngOnInit(): void {
  }

}
