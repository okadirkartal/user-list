import { Component, OnInit } from '@angular/core';
import { IPagination } from './models/IPagination';
import { UserService } from './services/userService';
import { LoaderService } from './services/loaderService';
import { Subscription } from 'rxjs';
import { LoaderState } from 'src/app/models/loaderState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'AngularTestTask';
  errorMessage: string;
  pages: IPagination;
  p: number = 1;
  count: number = 4;
  constructor(private userService: UserService,
    private loaderService: LoaderService) { }

  show = false;

  private subscription: Subscription;

  ngOnInit(): void {

    this.subscription = this.loaderService.loaderState.subscribe(
      (state: LoaderState) => {
        this.show = state.show;
      }
    );

    this.userService.getUsers().subscribe(
      pages => {
        this.pages = pages
      },
      error => this.errorMessage = <any>error
    );

  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
