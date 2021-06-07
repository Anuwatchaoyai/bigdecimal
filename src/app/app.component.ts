import { Component, OnInit } from '@angular/core';
import { BigDecimal } from './bigdecimal/big-decimal'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // displayValue: BigDecimal = new BigDecimal('1234567890123.45');
  // displayValue5: string = this.displayValue.getValue();
  // displayValue2: BigDecimal = this.displayValue.multiply('23.4567');
  // displayValue3: string = this.displayValue2.getValue();
  // displayValue4: string = this.displayValue2.toFixed(1);
  // displayValue7: BigDecimal = this.displayValue2.multiply('10');
  // displayValue8: string = this.displayValue7.toFixed(1);
  // displayValue10: BigDecimal = new BigDecimal('10');
  // displayValue11: string = this.displayValue10.getValue();
  // displayValue12: BigDecimal = this.displayValue10.multiply('10');
  // displayValue13: string = this.displayValue12.getValue();

  formGroup: FormGroup;
  value1: FormControl;
  value2: FormControl;
  value3: FormControl;
  value4: FormControl;
  value5: FormControl;
  value6: FormControl;
  result1: string;
  result1Fixed: string;
  result2: string;
  result2Fixed: string;
  result3: string;
  result3Fixed: string;

  fixed1: number = 2
  fixed2: number = 2
  fixed3: number = 2

  constructor(
    private fb: FormBuilder
  ) {
    this.value1 = this.fb.control(0);
    this.value2 = this.fb.control(0);
    this.value3 = this.fb.control(0);
    this.value4 = this.fb.control(0);
    this.value5 = this.fb.control(0);
    this.value6 = this.fb.control(0);
    this.formGroup = this.fb.group({
      value1: this.value1,
      value2: this.value2,
      value3: this.value3,
      value4: this.value4,
      value5: this.value5,
      value6: this.value6,
    });
  }
  ngOnInit() { }

  multiply() {
    let input1 = new BigDecimal(this.value1.value)
    // let test1 = new BigDecimal(input1)
    // console.log("input1 -->> ", input1)
    // console.log("test1 -->> ", test1)
    let result1 = input1.multiply(this.value2.value)
    // let result2 = input1.multiply(12)
    this.result1 = result1.getValue()
    this.result1Fixed = result1.toFixed(this.fixed1)
    // console.log("result2 multiply ->> ", result2.toFixed(2))
    // console.log("result1.multiply 12 ->> ", result1.multiply(12).getValue())

  }
  add() {
    let input1 = new BigDecimal(this.value3.value)
    let result1 = input1.add(this.value4.value)
    // let result2 = input1.add(12)
    this.result2 = result1.getValue()
    this.result2Fixed = result1.toFixed(this.fixed2)
    // console.log("result2 add ->> ", result2.toFixed(2))
  }
  subtract() {
    let input1 = new BigDecimal(this.value5.value)
    let result1 = input1.subtract(this.value6.value)
    // let result2 = input1.subtract(12)
    this.result3 = result1.getValue()
    this.result3Fixed = result1.toFixed(this.fixed2)
    // console.log("result2 subtract ->> ", result2.toFixed(2))

  }
}

