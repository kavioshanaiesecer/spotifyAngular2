import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.services';
import {Artist} from '../../Artist';
import {Album} from '../../Album';
import {ActivatedRoute} from '@angular/router';
import {routing} from '../../app.routes';


@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: `artist.component.html`,
  
  
})
export class ArtistComponent implements OnInit { 
    id:string;
    artist: Artist[];
    album: Album[];

    constructor(private SpotifyService:SpotifyService,
    private _route:ActivatedRoute){

    }

    ngOnInit(){
        this._route.params.map(params=>params['id']).subscribe((id=>{
            this.SpotifyService.getArtist(id).subscribe(artist =>{
                this.artist = artist;
            })
        }))
    }
}
