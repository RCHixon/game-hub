import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public sort!: string; // come back to this later
  constructor() { }
  ngOnInit(): void {
    
  }
}
