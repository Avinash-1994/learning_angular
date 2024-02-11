import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { ProjectsService } from './projects.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Projects } from './projects';

@Directive({
  selector: '[appProjectIDUniqueValidator]',
  providers:[{provide:NG_ASYNC_VALIDATORS, useExisting:ProjectIDUniqueValidatorDirective, multi:true}]
})
export class ProjectIDUniqueValidatorDirective implements AsyncValidator {

  constructor(private projectService:ProjectsService) { }

  validate(control:AbstractControl):Observable<ValidationErrors | null>{
      return this.projectService.getProjectByProjectID(control.value).pipe(map((existingProject:Projects)=>{
      if(existingProject != null){
        return {uniqueProjectID:{valid:false}}
      }
      else{
        return null;
      }
    }))
  }

}
