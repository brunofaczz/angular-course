import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.css']
})
export class LessonFormComponent implements OnInit {
  lessonForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.lessonForm = new FormGroup({
      projectName: new FormControl(null, Validators.required, this.forbiddenProjectNameAsync),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.lessonForm.value);
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return {'forbiddenProjectName': true};
    }
    return null;
  }

  forbiddenProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'forbiddenProjectName': true});
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}
