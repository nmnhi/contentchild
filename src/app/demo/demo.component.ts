import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit() {
    this.paragraphEl.nativeElement.textContent = 'This is paragraph value';
    console.log(this.paragraphEl.nativeElement.textContent);
  }
  @ContentChild('paragraph') paragraphEl!: ElementRef;
}
