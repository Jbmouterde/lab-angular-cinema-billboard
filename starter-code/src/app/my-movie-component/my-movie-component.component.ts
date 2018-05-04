import { Component, OnInit } from '@angular/core';
import { MovieInfoService, Movie } from '../movie-info.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId : string; 
  movieInfo : Movie;


  constructor(
    private request : ActivatedRoute, 
    public movieTruc : MovieInfoService , 
    private resThang : Router
  ) { }

  ngOnInit() {
    this.request.paramMap
    .subscribe((myParams)=> {
      console.log(myParams);
      
      // {path : 'contact/:blahId'}
      this.movieId = myParams.get('id')
      this.movieInfo = this.movieTruc.getMovie(this.movieId)
      console.log(this.movieTruc)
      console.log(this.movieTruc.getMovie(this.movieId))
    })

  }
  confirm(){
    const {title} = this.movieInfo
    
    // const isOkay = confirm(`Àre you sure you to go Back?`)
    // if (isOkay){
      //DELETE CONTACT 
      // this.movieTruc.deleteContact(this.movieId);
      //redirect
      this.resThang.navigateByUrl('/')
    
  }
}
