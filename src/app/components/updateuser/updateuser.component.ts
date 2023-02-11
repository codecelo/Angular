import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Valcpfators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { pacientes } from 'src/app/pacientes';

@Component({
  selector: 'app-updatepacientes',
  templateUrl: './updatepacientes.component.html',
  styleUrls: ['./updatepacientes.component.css']
})
export class UpdatepacientesComponent implements OnInit {

  pacientes?: pacientes
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): vocpf {
    let cpf = this.route.snapshot.params['cpf'];
    this.service.getpacientesBycpf(cpf).subscribe(data => {
      this.pacientes = data
      console.log(this.pacientes)
    })
  }

  form = new FormGroup({
    email: new FormControl('', [Valcpfators.required]),
    cpf: new FormControl('', [Valcpfators.required]),
    procedimento: new FormControl('', [Valcpfators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updatepacientes(this.pacientes?.cpf, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
