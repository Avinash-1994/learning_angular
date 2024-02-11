import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup | any | null;
  genders=['Male', 'Female', 'other']
  countries:Country[] = []


  constructor(private countriesService:CountriesService, private formBulider:FormBuilder){}


  ngOnInit(): void {
    this.countries = this.countriesService.getCountries()

    this.signUpForm = this.formBulider.group({
      personName: this.formBulider.group({
        firstName :[null, [Validators.required, Validators.minLength(2)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]],
      }),
     
      email:[null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.pattern(/^[789]\d{9}$/)]],
      dateOfBirth: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      countryID:  [null, [Validators.required]],
      receiveNewsLetters:[null, [Validators.required]],
      skills: this.formBulider.array([])
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
    // console.log(this.signUpForm.value)

    // this.signUpForm.setValue({

    // })
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
