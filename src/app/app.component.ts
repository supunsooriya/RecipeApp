import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recepyApp';
  loadedFeature = 'recipes';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(){
   firebase.initializeApp({
    apiKey: "AIzaSyBiKYzvXsLqsyB_2ISCJD5571kW16KzN8Q"
   });
  }
}
