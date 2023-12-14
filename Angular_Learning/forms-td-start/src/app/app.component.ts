import {Component, ViewChild} from '@angular/core';
import {FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') public signUpForm : NgForm;
  defaultQuestion = "pet";
  answer = '';
  genders = ['male', 'female']
  form : FormGroup

  user = {
    username : '',
    email : '',
    secretQuestion : '',
    gender : '',
    answer : ''
  }

  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData : {
    //     username : suggestedName,
    //     email : ''
    //   },
    //   secret : 'pet',
    //   questionAnswer : '',
    //   gender : 'male'
    // })

    this.signUpForm.form.patchValue({
      userData : {
        username : suggestedName
      }
    })
  }

  // onSubmit(form : NgForm){
  //   //console.log("Submitted!");
  //   console.log(form)
  // }

  // onSubmit(){
  //   console.log(this.signUpForm);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
}
