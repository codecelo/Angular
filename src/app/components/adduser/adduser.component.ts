import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Valcpfators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addpacientes',
  templateUrl: './addpacientes.component.html',
  styleUrls: ['./addpacientes.component.css']
})
export class AddpacientesComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any

  form = new FormGroup({
    name: new FormControl('', [Valcpfators.required]),
    email: new FormControl('', [Valcpfators.required]),
    cpf: new FormControl('', [Valcpfators.required]),
    procedimento: new FormControl('', [Valcpfators.required])
  })
  ngOnInit(): vocpf {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addpacientes(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }
}
