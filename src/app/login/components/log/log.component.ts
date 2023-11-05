import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  formLogin: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      id: ['', Validators.required],
      password: ['']
    });
  }

  comparedAns(){
    if(this.formLogin.get('id')?.value === 'admin'){
      this.router.navigate(['/admin'])
    }else if (this.formLogin.get('id')?.value === 'user')
      this.router.navigate(['/user'])

  }
}
