import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  
  forgotPasswordForm: FormGroup;
  submitting = false;
  showForgotPasswordModal = true;
  message: string = '';
  forgotSubmitting = false; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openForgotPassword() {
    this.showForgotPasswordModal = true;
    this.message = ''; 
  }

  closeForgotPassword() {
    this.showForgotPasswordModal = false;
    this.message = '';
    this.forgotPasswordForm.reset();
  }

  onForgotPassword() {
    if (this.forgotPasswordForm.valid) {
      this.forgotSubmitting = true;
  
      this.http.post('http://localhost/kexphp/forgot_password.php', this.forgotPasswordForm.value)
        .subscribe((response: any) => {
          if (response.success) {
            const resetLink = `${environment.apiBaseUrl}/reset-password?token=${response.resetToken}`;
  
            const emailData = {
              email: this.forgotPasswordForm.value.email,
              resetLink: resetLink
            };
  
            this.http.post('http://localhost/kexphp/sendEmail.php', emailData)
              .subscribe((emailResponse: any) => {
                if (emailResponse.success) {
                  this.message = "Password reset link sent successfully!";
                } else {
                  this.message = emailResponse.message;
                }
                this.forgotSubmitting = false;
              }, () => {
                this.message = "Error sending email.";
                this.forgotSubmitting = false;
              });
  
          } else {
            this.message = response.message;
            this.forgotSubmitting = false;
          }
        }, () => {
          this.message = "Error processing request.";
          this.forgotSubmitting = false;
        });
    }
  }
  
}
