import { Artist } from './../models/artist';
import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  searchStr: string;
  searchRes: Artist[];

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;
    });
  }

}
