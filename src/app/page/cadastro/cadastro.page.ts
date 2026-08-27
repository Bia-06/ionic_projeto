import { Component, OnInit } from '@angular/core';
import {commonModule} from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonSpinner
} from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
  FormsModule,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonSpinner
  ]
})
export class CadastroPage  implements OnInit {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  mensagemErro = '';
  mensagemSucesso = '';
  mensagemCarregando = '';
  carregando = false;

  constructor() { }

  ngOnInit() {}

  cadastrar() {
  this.mensagemErro = '';
  this.mensagemSucesso = '';

  if (!this.usuario.nome || !this.usuario.email || !this.usuario.senha) {
    this.mensagemErro = 'Por favor, preencha todos os campos obrigatórios.';
    return;
  }

  if (this.usuario.senha.length < 6) {
    this.mensagemErro = 'A senha deve ter no mínimo 6 caracteres.';
    return;
  }

  this.carregando = true;

  setTimeout(() => {
    this.carregando = false;
    this.mensagemSucesso = 'Cadastro realizado com sucesso!';
    console.log('Dados foram salvos no formulario:', this.usuario);
  }, 1500);
 }
 
}
