import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

    const config = {
      apiKey: "AIzaSyC82b3p6GjkkB0E2RfXY9gELbRACkqwYKw",
      authDomain: "bookmanagementng.firebaseapp.com",
      databaseURL: "https://bookmanagementng.firebaseio.com",
      projectId: "bookmanagementng",
      storageBucket: "",
      messagingSenderId: "693124580618",
      appId: "1:693124580618:web:9807b22c062d92ab"
    };
    firebase.initializeApp(config);

  }
}
