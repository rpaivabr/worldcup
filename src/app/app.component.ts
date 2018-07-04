import { Component, OnInit } from '@angular/core';

import { WorldcupApiService } from './worldcup-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  allMatches = [];

  constructor(private _api: WorldcupApiService){}

  ngOnInit(){
    this._api.getMatches().subscribe(data => {
      this.allMatches = data;
      console.log(this.allMatches);
    })
  }
}
