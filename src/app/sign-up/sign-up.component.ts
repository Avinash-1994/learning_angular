import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Country } from '../country';
import { CustomValidatorsService } from '../custom-validators.service';
import { SignUpViewModel } from '../sign-up-view-model';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup | any | null;
  genders=['Male', 'Female', 'other'];
  countries:Country[] = [];
  registerError:string | null = null

  constructor(private countriesService:CountriesService, private formBulider:FormBuilder, private customevValidatorsService:CustomValidatorsService, private loginService: LoginService, private router : Router){}


  ngOnInit(): void {
    this.countriesService.getCountries().subscribe({
      next: (response)=>{
        this.countries = response
      }
    })
    

    this.signUpForm = this.formBulider.group({
      personName: this.formBulider.group({
        firstName :[null, [Validators.required, Validators.minLength(2)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
      }),
     
      email:[null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      dateOfBirth: [null, [Validators.required, this.customevValidatorsService.minimumAgeValidator(18)]],
      password:[null, Validators.required],
      confirmPassword:[null, Validators.required],
      gender: [null, [Validators.required]],
      countryID:  [null, [Validators.required]],
      receiveNewsLetters:[null, [Validators.required]],
      skills: this.formBulider.array([])
    },
    {
      validators:[
        this.customevValidatorsService.compareValidator("confirmPassword", "password")
      ]
    })

    this.signUpForm.valueChanges.subscribe({
      next:(value:any)=>{
        console.log(value)
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

  onSubmitClick(){
    this.signUpForm['submitted'] = true;
    // console.log(this.signUpForm)

   if(this.signUpForm.valid){
    var signUpViewModel = this.signUpForm.value as SignUpViewModel;
    this.loginService.Register(signUpViewModel).subscribe({
      next: (response)=>{
        this.router.navigate(["tasks"])
      },
      error:(error)=>{
        console.log(error)
        this.registerError = "Unable to Submit"
      }
    })
   }
  }
  onAddskill(){
    const formGroup = this.formBulider.group({
      skillName: [null, [Validators.required]],
      level: [null, [Validators.required]],
    });
    (<FormArray>this.signUpForm.get('skills')).push(formGroup)
  }
  onRemoveClick(index:number){
    (<FormArray>this.signUpForm.get('skills')).removeAt(index);
  }

}
