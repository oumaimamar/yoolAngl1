import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ExperienceService} from '../services/experience.service';
import {TypeEmploi, Ville} from '../models/experience.model';


@Component({
  selector: 'app-experience-form',
  standalone: false,
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.css'
})
export class ExperienceFormComponent implements OnInit {
  experienceFormGroup!: FormGroup;
  userId! : string;
  emploiTypes : string[]=[];
  ville : string[]=[];
  showProgress : boolean = false;

  constructor(private fb:FormBuilder,
              private activatedRoute : ActivatedRoute,
              private experienceService : ExperienceService,
              private router: Router ) {}

  ngOnInit() {
    for (let elt in TypeEmploi) {
      let value = TypeEmploi[elt];
      if (typeof value === 'string') {
        this.emploiTypes.push(value);
      }
    }

    for (let elt in Ville){
      let value = Ville[elt];
      if (typeof value === 'string'){
        this.ville.push(value);
      }
    }


    // this.experienceFormGroup=this.fb.group({
    //   userId : this.fb.control(''),
    //   name : this.fb.control(''),
    //   type : this.fb.control(''),
    //   status : this.fb.control(''),
    //   nbPersons : this.fb.control(''),
    //
    // });
  }







}
