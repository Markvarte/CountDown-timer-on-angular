import { Component } from '@angular/core';


@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  // Set the date we're counting down to
  countDownDate = new Date('Nov 29, 2020 12:50:25').getTime();
  minutesLeft = 0;
  secondLeft = 0;
  tooLate = false;
  mgs: string;
  interval: any;

  public startCounter() {
    this.tooLate = false;
    this.interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = this.countDownDate - now;

      // calculating
      this.minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.secondLeft = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.tooLate = true;
        this.mgs = 'too late';
      }
    }, 1000);
  }

  public pauseCounter() {
    clearInterval(this.interval);
  }
}
