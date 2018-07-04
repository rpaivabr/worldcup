import { Component, OnInit, Input } from '@angular/core';

import { WorldcupApiService } from '../worldcup-api.service';

@Component({
  selector: 'app-roundof16',
  templateUrl: './roundof16.component.html',
  styleUrls: ['./roundof16.component.css']
})
export class Roundof16Component implements OnInit {

  // @Input() matches = []
  matches = [];

  constructor(private _api: WorldcupApiService) { }

  ngOnInit() {
    this._api.getMatches().subscribe(data => {
      this.matches = data.filter(match => match.stage_name == "Round of 16")
      console.log(this.matches);
    })
  }

}
