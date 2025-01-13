import { Routes } from '@angular/router';
import { AuthenticationWindowComponent } from './shared/components/authentication-window/authentication-window.component';
import { LoginComponent } from './pages/components/users/login/login.component';
import { RegisterComponent } from './pages/components/users/register/register.component';
import { OtpComponent } from './pages/components/users/otp/otp.component';

export const routes: Routes = [

    {
        path:'auth-dashBoard',
        component:AuthenticationWindowComponent
    },

    //users Login
    {
        path:'login',
        component:LoginComponent
    },
    //user Register
    {
        path:'register',
        component:RegisterComponent
    },
    //user Otp
    {
        path:'otp',
        component:OtpComponent
    }
    
];
