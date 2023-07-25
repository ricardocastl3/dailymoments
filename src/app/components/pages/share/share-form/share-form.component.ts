import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMoment } from 'src/app/interfaces/IMoment';

@Component({
  selector: 'app-share-form',
  templateUrl: './share-form.component.html',
  styleUrls: ['./share-form.component.scss'],
})
export class ShareFormComponent {
  @Input() btnSubText: string = '';
  @Output() onSubmit = new EventEmitter<IMoment>(); 

  shareForm!: FormGroup;

  ngOnInit(): void {
    this.shareForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title() {
    return this.shareForm.get('title')!;
  }

  get description() {
    return this.shareForm.get('description')!;
  }

  get image() {
    return this.shareForm.get('image');
  }

  submit() {
    if (this.shareForm.invalid) {
      return;
    }
    this.onSubmit.emit(this.shareForm.value);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.shareForm.patchValue({ image: file });
  }
  
}
