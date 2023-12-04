import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private user_service: UserService, private snack: MatSnackBar) {}
  emailForm = new FormGroup({
   
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
   
  });
  get getControl() {
    return this.emailForm.controls;
  }
 async submit() {
    console.log('form data', this.emailForm.value);
    await this.user_service
      .subscribe(this.emailForm.value)
      .then((res) => {
        this.snack.open('Thanks for subcription', 'ok', {
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
    this.emailForm.reset();
  }
}
