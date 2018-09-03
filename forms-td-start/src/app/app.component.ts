import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') singUpForm: NgForm;
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
    answer: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singUpForm.setValue({  This method overrides the whole form data value
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.singUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.singUpForm.value.userData.username;
    this.user.email = this.singUpForm.value.userData.email;
    this.user.secret = this.singUpForm.value.secret;
    this.user.answer = this.singUpForm.value.questionAnswer;
    this.user.gender = this.singUpForm.value.gender;

    this.singUpForm.reset();
  }
}
