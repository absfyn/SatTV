import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  accountBalance: number;
  showWarningMessage: boolean = false;

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.userData.accountBalanceSubject.subscribe(
      (balance: number) => {
        this.accountBalance = balance;
      }
    )
    this.userData.accountBalanceSubject.subscribe(
      (balance: number) => {
        if (balance <= 0) {
          this.showWarningMessage = true;
        }
      }
    )
  }

}
