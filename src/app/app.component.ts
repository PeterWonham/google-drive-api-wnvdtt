import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';
import { Observable } from 'rxjs';
import { GapiSession } from './gapi.session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  file$: Observable<any[]>;

  constructor(
    private gapiSession: GapiSession
  ) // private fileService: FileService

  {}

  ngOnInit() {
    this.gapiSession.signIn();
    //   this.fileService.getImages().subscribe(
    //     value => console.log(value)
    //   )
  }
}
