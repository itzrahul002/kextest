import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitting = false;
  showForgotPasswordModal = true;
  message: string = '';
  forgotSubmitting = false; 
  private router = inject(Router); 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onLogin() {
    if (this.loginForm.valid) {
      this.submitting = true;

      this.http.post('http://localhost/kexphp/login.php', this.loginForm.value).subscribe(
        (response: any) => {
          if (response.success) {
            alert('Login successful!');
            localStorage.setItem('userid', response.user.id);
            console.log(response.user.id);
          } else {
            alert(response.message || 'Invalid credentials.');
          }
          this.submitting = false;
        },
        () => {
          alert('Error occurred during login.');
          this.submitting = false;
        }
      );
    }
  }

  openForgotPassword() {
    // this.showForgotPasswordModal = true;
    // this.message = ''; 
    this.router.navigate(['/forgot-password']); 

  }

}