import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable()
export class WorldcupApiService {

  PATH = "https://worldcup.sfg.io/matches"

  constructor(private _http: HttpClient) { }

  getMatches(){
    return this._http.get<any[]>(this.PATH)
  }

}
