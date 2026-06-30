import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArrayLengthValidator } from './validators/minArrayLength';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dynamic_skills_builder_Form_1';
  skillsForm !: FormGroup;

  ngOnInit(): void {
    this.createForm();
    this.addSkills();
  }

  createForm() {
    this.skillsForm = new FormGroup({
      skills: new FormArray([], ArrayLengthValidator.minArrayLength(1))
    })
  }

  get f(){
    return this.skillsForm.controls;
  }

  get skillsArr() {
    return this.f['skills'] as FormArray
  }

  addSkills() {
    if (this.skillsForm.invalid) {
      return this.skillsForm.markAllAsTouched()
    }
    let skillsFormGroup = new FormGroup({
      skillName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]),
      proficiency: new FormControl(null, Validators.required),
      yearsExp: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(50)]),
    })
    this.skillsArr.push(skillsFormGroup);
  }

  removeSkill(i: number) {
    this.skillsArr.removeAt(i);
  }
}
