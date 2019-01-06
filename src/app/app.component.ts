import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  
 
  onAllumer() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    console.log('On allume tout !');
}
  onEteindre(){
    for(let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

  
 
}
