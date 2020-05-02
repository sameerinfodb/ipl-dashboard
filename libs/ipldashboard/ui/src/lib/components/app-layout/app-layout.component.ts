import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ipt-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  listTeams(event: Event) {
    this.router.navigate(['/teams']);
  }

  listPlayers(event: Event) {
    console.log('List Players Clicked');
  }

  listPlayersByTeam(event: Event) {
    console.log('List Players by Teams');
  }
}
