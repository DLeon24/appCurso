import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
})
export class FechaactualComponent implements OnInit {
  public today = Date.now();
  constructor() { }

  ngOnInit() {
  }

}
