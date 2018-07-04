import { Component, OnInit } from '@angular/core';

import { WorldcupApiService } from '../worldcup-api.service';

@Component({
  selector: 'app-first-stage',
  templateUrl: './first-stage.component.html',
  styleUrls: ['./first-stage.component.css']
})
export class FirstStageComponent implements OnInit {

  matches = [];

  constructor(private _api: WorldcupApiService) { }

  ngOnInit() {
    this._api.getMatches().subscribe(data => {
      this.matches = data.filter(match => match.stage_name == "First stage")
      console.log(this.matches);
    })
  }

}
