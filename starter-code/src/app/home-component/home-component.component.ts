import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from '../movie-info.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(
    public movieTruc : MovieInfoService

  ) { }

  ngOnInit() {
  }

}
