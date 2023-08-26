import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  authenticatedUser!: string | null;

  ngOnInit() {
    this.authenticatedUser = sessionStorage.getItem('username')
  }
}
