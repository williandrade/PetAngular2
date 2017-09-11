import { Component } from '@angular/core';

import { ActiveStateService } from './active-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private state : ActiveStateService){
  }

  ngAfterViewChecked(){
  }
}
