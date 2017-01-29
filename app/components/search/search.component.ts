import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.services';
import {Artist} from '../../artist';
import {Routes, RouterModule} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: `search.component.html`,
  providers: [SpotifyService],
  
  

})
export class SearchComponent  { 
 searchStr:string;
 searchRes:Artist[];

 constructor(private SpotifyService:SpotifyService){

 }

searchMusic(){
  this.SpotifyService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes=(res.artists.items);
  });
}  

}


 