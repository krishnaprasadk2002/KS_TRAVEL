import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputFieldsComponent } from '../../../../shared/components/input-fields/input-fields.component';
import { AuthService } from '../../../../core/services/user/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [ReactiveFormsModule,InputFieldsComponent,CommonModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OtpComponent implements OnInit{
  otpForm!: FormGroup;
  private fb = inject(FormBuilder)
  private authServices = inject(AuthService)
  timer: number = 60
  timerInterval!: number;
  isLinkDisabled: boolean = false;

  constructor() {
   this.initializeForm()
  }

  ngOnInit(): void {
  this.startTimer()
  }

  startTimer(){
    this.timer = 60
    this.isLinkDisabled = true
    const intervel = setInterval(()=>{
      this.timer--

      if(this.timer <= 0){
        clearInterval(intervel)
        this.isLinkDisabled = false
      }
    },1000)
  }

  initializeForm(){
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }

  onSubmit(): void {
    if (this.otpForm.valid) {
      const otpValue = this.otpForm.value.otp;
      console.log('OTP submitted:', otpValue);
    }
  }
  
  resendOtp(){

  }
}
