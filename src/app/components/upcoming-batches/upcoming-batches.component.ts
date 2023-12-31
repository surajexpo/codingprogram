import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-upcoming-batches',
  templateUrl: './upcoming-batches.component.html',
  styleUrls: ['./upcoming-batches.component.scss']
})
export class UpcomingBatchesComponent {
  constructor(private user_service: UserService, private snack: MatSnackBar) {}
  contactForm = new FormGroup({
    mobileNo: new FormControl('', [
      Validators.minLength(10),
      Validators.pattern('^[0-9]*$'),
      Validators.required,
    ]),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  get getControl() {
    return this.contactForm.controls;
  }
  submit() {
    console.log('form data', this.contactForm.value);
    this.user_service
      .contact(this.contactForm.value)
      .then((res) => {
        this.snack.open('Thank you for your message. We will respond as soon as possible', 'ok', {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 3000,
        });
        console.log('data has been save', res);
      })
      .catch((error: any) => {
        console.log('enroll user catch', error);
      });

    console.log('chal gya re');
    this.contactForm.reset();
  }
}
