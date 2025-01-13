import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InputFieldsComponent } from '../../../../shared/components/input-fields/input-fields.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/user/auth.service';
import Swal from 'sweetalert2';
import { markFormGroupTouchedAndDirty, noWhitespaceValidator, strongPasswordValidator } from '../../../../shared/components/validators/validators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputFieldsComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  private fb = inject(FormBuilder)
  private authService = inject(AuthService);
  private router = inject(Router);
  constructor() {} 

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, noWhitespaceValidator()]],
      password: ['', [Validators.required, strongPasswordValidator()]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.loginUser(credentials).subscribe({
        next:(response) => {
          Swal.fire({
            title: 'Success!',
            text: response.message || 'Login successful! Redirecting...',
            icon: 'success',
            confirmButtonText: 'Okay',
          }).then(() => {
            // this.router.navigate(['/home']);
          }); 
        },
        error:(error)=>{
          console.log('Login failed:', error);

          const errorMessage = error?.error?.message || 'Invalid credentials. Please try again.';

          Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'Retry',
          });
        },
      })
    } else {
      console.log('Form is invalid');
      markFormGroupTouchedAndDirty(this.loginForm)
      Swal.fire({
        title: 'Error!',
        text: 'Form is invalid',
        icon: 'error',
        confirmButtonText: 'Retry',
      });
    }
  }
}
