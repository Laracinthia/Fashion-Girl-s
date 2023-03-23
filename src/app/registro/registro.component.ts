import { Component } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form={
    nombre :"",
    correo :"",
    contrasena : ""
  }
ccontrasena : any
constructor(private auth : AngularFireAuth) {}
ngOnInit() :void {

}
registrarme(){
  if( this.form.nombre !='' && this.form.correo != '' && this.form.contrasena != '' && this.ccontrasena != '')(
    if(this.form.contrasena!=this.ccontrasena){
      alert ("Las contraseñas no coinciden")
    }
    else{
      this.adduser(this.form).then ((result)=>{
        if (result){
          alert
        }
      })
    }
  )
}
}
