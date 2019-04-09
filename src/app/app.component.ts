import { LoadingService } from './../services/loading.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSomethingLoading: boolean = false;
  screenWidth: number;

  constructor(private ls: LoadingService) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit() {
    this.ls.loadingStatus.subscribe(value => {
      this.isSomethingLoading = value;
    });
  }

  ngOnDestroy(){
    this.ls.loadingStatus.unsubscribe();
  }
}
