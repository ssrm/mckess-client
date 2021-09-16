import { Component } from '@angular/core';
import { GuessResponse, GuessStatus } from './models/guess-response';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mckesson-client';
  gameId: string;
  response: GuessResponse;
  errorMessage: string;
  abandonSuccess: boolean;
  guessStatus =  GuessStatus;
  guessCharacter: string;

  locationUri: string;

  constructor(public appService: AppService) {
    this.start();
  }

  guess() {
    this.appService.guess(this.guessCharacter, this.locationUri).subscribe((response) => {
      this.response = response;
    });
  }

  abandon() {
    this.appService.abandon(this.locationUri).subscribe((response) => {
      if (response.status  !== 201) {
        this.errorMessage = 'Unable to process the request';
        this.abandonSuccess = false;
      } else {
        this.abandonSuccess = true;
      }
    });
  }

  start() {
    this.appService.start().subscribe((resp) => {
      this.locationUri = resp.headers.get('location')
    });
  }

}
