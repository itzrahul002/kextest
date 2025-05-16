import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DeliverynotesComponent } from './deliverynotes/deliverynotes.component';
import { DeliverynotedetailsComponent } from './deliverynotedetails/deliverynotedetails.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoicesDetailsComponent } from './invoices-details/invoices-details.component';
import { MatlocationsComponent } from './matlocations/matlocations.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'client',
        component: HomeComponent
    },
    {
        path: 'delivery',
        component: DeliverynotesComponent
    },
    {
        path: 'delivery-notes/:id',
        component: DeliverynotedetailsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'invoices',
        component: InvoicesComponent
    },
    {
        path: 'invoices-details/:id',
        component: InvoicesDetailsComponent
    },
    {
        path: 'mat-locations',
        component: MatlocationsComponent
    },
    {
        path: '', 
        redirectTo: '/login', 
        pathMatch: 'full' 
    },
    {
        path: '**',  
        redirectTo: '/login'
    }
];
