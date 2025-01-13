import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

// Alphabet validation: Only letters allowed
export function alphabetsOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isValid = /^[A-Za-z]+$/.test(value);
    return isValid ? null : { alphabetsOnly: true };
  };
}

// No whitespace allowed: Control cannot be empty or only whitespace
export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  };
}

// Mobile number validation: Should be exactly 10 digits
export function mobileNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = /^[0-9]{10}$/.test(control.value);
    return isValid ? null : { invalidMobile: true };
  };
}

// Password match validation for password and confirmPassword
export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { passwordMismatch: true }
    : null;
}

// Strong password validation
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null; 

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && isValidLength;
    return !passwordValid ? { strongPassword: true } : null;
  };
}

// Mark all controls as touched and dirty for validation
export function markFormGroupTouchedAndDirty(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsTouched();
    control.markAsDirty();
    if (control instanceof FormGroup) {
      markFormGroupTouchedAndDirty(control);
    }
  });
}