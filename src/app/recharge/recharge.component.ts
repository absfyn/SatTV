import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { ToastyService } from '../services/toasty.service';
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {

  rechargeForm: FormGroup;
  constructor(private userData: UserDataService, private formBuilder: FormBuilder,
    public toastyService: ToastyService) { }

  ngOnInit() {
    this.rechargeForm = this.formBuilder.group({
      amount: [null, Validators.compose([Validators.required, Validators.min(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])]
    })

  }
  rechargeAccount() {
    // if (this.rechargeForm.controls['amount'].value < )
    this.userData.setAccountBalance(+this.rechargeForm.controls['amount'].value + this.userData.accountBalanceSubject.value);
    this.toastyService.showToasty('Recharge Successfull!!', 'alert-success')
  }
}
