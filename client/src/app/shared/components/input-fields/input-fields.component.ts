import { CommonModule } from '@angular/common';
import { Component, Input, Self } from '@angular/core';
import { FormControl, FormsModule, NgControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-fields',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './input-fields.component.html',
  styleUrl: './input-fields.component.css'
})
export class InputFieldsComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() options: string[] | null = null;


  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  validate(): ValidationErrors | null {
    if (this.control && this.control.errors) {
      if (this.control.errors['whitespace']) {
        return { whitespace: true };
      }
    }
    return null;
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}