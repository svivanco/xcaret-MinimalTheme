import {Component} from '@angular/core';
import {AboutService} from './about.service';
import {HeaderComponent} from "./components/header.component";
import {FooterComponent} from "./components/footer.component";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/views/about.html'
  //styleUrls: ['../assets/css/styles.css'],
  directives:  [ 
                 HeaderComponent,
                 FooterComponent
               ]
})

export class AppComponent {

  public books;
  public abouts;

  constructor(private _aboutService: AboutService) { 
  }

  ngOnInit() {
    this.getAbouts();
    this.getBooks();
  }


  getBooks() {
    this._aboutService.getBooks().subscribe(

      // the first argument is a function which runs on success
      data => { 
        this.books = data
      },
      // the second argument is a function which runs on error
      error => {
         console.error("Error");
         return Observable.throw(error);
       }
    );
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



  getAbout2() {
    this._aboutService.getAbout().subscribe(
      data => {
        this.aboutData = data
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }



}
