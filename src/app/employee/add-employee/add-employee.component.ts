import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { AlertService } from '../../core/alert-box/alert.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  public isLoading = false;
  form = this.fb.group({
    firstName: this.fb.control('', Validators.required),
    lastName: this.fb.control('', Validators.required),
    position: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
    file: this.fb.control(null, Validators.required)
  });

  get position() {
    return this.form.get('position');
  }

  get description() {
    return this.form.get('description');
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private eS: EmployeeService,
    private alertService: AlertService
  ) {}

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  onSubmit() {
    this.isLoading = true;
    this.eS.add(this.form.value).subscribe(
      res => {
        this.alertService.addSuccessAlert('Dodano nowego pracownika!');
        this.isLoading = false;
        this.form.reset();
      },
      err => {
        console.log(err);
        Observable.throw(err);
        this.alertService.addWarningAlert(
          'Wystąpił błąd, zmień dane i spróbuj ponownie.'
        );
        this.isLoading = false;
      }
    );
  }
}
