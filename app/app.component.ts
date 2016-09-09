import {Component} from '@angular/core';
import {AboutService} from './services/about.service';
import {HeaderComponent} from "./components/header.component";
import {AboutComponent} from "./components/about.component";
import {SidebarComponent} from "./components/sidebar.component";
import {PrefooterComponent} from "./components/prefooter.component";
import {FooterComponent} from "./components/footer.component";
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'xcaret-app',
  templateUrl: 'app/views/About/index.html',
  providers: [AboutService],
  directives:  [ 
                 HeaderComponent,
                 AboutComponent,
                 SidebarComponent,
                 PrefooterComponent,
                 FooterComponent
               ]
})

export class AppComponent {

  public abouts;

  constructor(private _aboutService: AboutService) { 
  }

  ngOnInit() {
    this.getAbouts();
  }



  getAbouts() {
    this._aboutService.getAbouts().subscribe(

      // the first argument is a function which runs on success
      data => { 
        this.abouts = data
      },
      // the second argument is a function which runs on error
      error => {
         console.error("Error in Script");
         return Observable.throw(error);
       }
    );
  }

}
