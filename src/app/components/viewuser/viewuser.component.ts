import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewpacientess',
  templateUrl: './viewpacientes.component.html',
  styleUrls: ['./viewpacientes.component.css']
})
export class ViewpacientessComponent implements OnInit {

pacientess: any[] | undefined
  url: string = "http://localhost:8080/";

  constructor(private service: AppService, private router: Router) {

  }

  ngOnInit(): vocpf {
    this.service.getpacientess().subscribe(data => {
      this.pacientess = data;
    })
  }

  deletepacientes(cpf: number){
    this.service.deletepacientes(cpf).subscribe(data => {
      this.pacientess = this.pacientess?.filter(pacientes => pacientes.cpf !== cpf);
    })

      setTimeout(()=>{
        window.location.reload();
      }, 100);

  }

  updatepacientes(cpf: number){
    this.router.navigate(['update', cpf]);
  }

}
