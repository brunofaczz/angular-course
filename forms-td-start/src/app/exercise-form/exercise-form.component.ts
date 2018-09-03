import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {
  @ViewChild('exerciseForm') exerciseForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.exerciseForm.value);
  }
}
