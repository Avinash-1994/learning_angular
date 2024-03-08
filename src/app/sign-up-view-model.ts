export class SignUpViewModel {
    personName: any  = null;
    email:string | any = null;
    mobile: string | any = null;
    dateOfBirth: string | any = null;
    password : string | any = null;
    gender: string | any = null;
    countryID : number | any = null;
    reciveNewsLetters : boolean = false;
    skills : any = null;

    constructor(personName: any = null,
        email: string | any = null,
        mobile: string | any = null,
        dateOfBirth: string | any = null,
        password: string | any = null,
        gender: string | any = null,
        countryID: number | any = null,
        reciveNewsLetters: boolean = false,
        skills: any = null,)
    {
        this.personName = personName;
        this.email = email;
        this.mobile = mobile;
        this.dateOfBirth = dateOfBirth;
        this.password = password;
        this.gender = gender;
        this.countryID = countryID;
        this.reciveNewsLetters = reciveNewsLetters;
        this.skills = skills;
    }
    
}
