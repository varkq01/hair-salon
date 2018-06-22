import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  form: FormGroup;
  categoryName: FormControl;
  services: FormArray;
  @Input() title: string;
  @Input() label: string;
  @Input()
  set service(serv) {
    if (serv) {
      this.form.patchValue({
        name: serv.name,
        type: serv.type,
      });

      serv.services.forEach(s => {
        const fG = this.createServiceFG();
        fG.patchValue({
          name: s.name,
          description: s.description,
          time: s.time,
          price: s.price
        });

        this.services.push(fG);
      });
    }
  }

  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) {
    this.categoryName = this.fb.control('', Validators.required);
    this.services = this.fb.array([]);
    this.form = this.fb.group({
      name: this.categoryName,
      type: this.fb.control('female', Validators.required),
      services: this.services
    });
  }

  ngOnInit() {}

  onAdd() {
    this.services.push(this.createServiceFG());
  }

  createServiceFG() {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      description: this.fb.control(''),
      price: this.fb.control(null, [Validators.required, Validators.min(0)]),
      time: this.fb.control(null, [Validators.required, Validators.min(0)])
    });
  }

  onRemove(idx) {
    this.services.controls.splice(idx, 1);
  }


  onClose() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    this.activeModal.close({status: 'ok', service: this.form.value});
  }
}
