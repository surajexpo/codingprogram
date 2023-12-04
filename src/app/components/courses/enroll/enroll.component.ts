import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { EnrollService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
})
export class EnrollComponent {
  constructor(
    private user_service: UserService,
    private snack: MatSnackBar,
    private enrollService: EnrollService
  ) {}
  enrollForm = new FormGroup({
    mobileNo: new FormControl('', [
      Validators.minLength(10),
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
  });
  get getControl() {
    return this.enrollForm.controls;
  }
 async submit() {
    const courseName = this.enrollService.getCourse();
    this.enrollForm.controls['course'].setValue(courseName);
    console.log('form data', this.enrollForm.value);
    await this.user_service
      .enroll(this.enrollForm.value)
      .then((res) => {
        this.snack.open(
          'Thank you for your message. We will respond as soon as possible',
          'ok',
          {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 3000,
          }
        );
        console.log('data has been save', res);
      })
      .catch((error: any) => {
        console.log('enroll user catch', error);
      });

    console.log('chal gya re');
    this.enrollForm.reset();
  }
}
