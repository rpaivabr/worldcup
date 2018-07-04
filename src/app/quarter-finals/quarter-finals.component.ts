import { Component, OnInit } from '@angular/core';

import { WorldcupApiService } from '../worldcup-api.service';

@Component({
  selector: 'app-quarter-finals',
  templateUrl: './quarter-finals.component.html',
  styleUrls: ['./quarter-finals.component.css']
})
export class QuarterFinalsComponent implements OnInit {

  matches = [];

  constructor(private _api: WorldcupApiService) { }

  ngOnInit() {
    this._api.getMatches().subscribe(data => {
      this.matches = data.filter(match => match.stage_name == "Quarter-finals")
      console.log(this.matches);
    })
  }

}
