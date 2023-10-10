import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  id = "";

  constructor(private route:ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param["id"];
    });
  }



}
