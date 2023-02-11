import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { pacientes } from './pacientes';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  // Add pacientes - Create
  addpacientes(pacientes: pacientes){
    return this.http.post<pacientes>(`${this.url}add`, pacientes)
  }

  // Get pacientess - Read
  getpacientess(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'pacientess')
  }

  // Get pacientes by cpf - Read
  getpacientesBycpf(cpf: number): Observable<pacientes>{
    return this.http.get<pacientes>(`${this.url}pacientes/${cpf}`)
  }

  // Update pacientes - Update
  updatepacientes(cpf?: number ,pacientes?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${cpf}`, pacientes)
  }

  // Delete pacientes - Delete
  deletepacientes(cpf: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${cpf}`)
  }

}
