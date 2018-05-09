import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AlterarProdutosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alterar-produtos',
  templateUrl: 'alterar-produtos.html'
})
export class AlterarProdutosComponent {

  public formProduto:FormGroup

  constructor(public navCtrl: NavController,
              public fb: FormBuilder,
              public view:ViewController) {

              this.formProduto = fb.group({
                nome:[null,Validators.required],
                quantidade:[null, Validators.required],
                valor:[null,Validators.required],
                marca:[null,Validators.required]                            
              })  
  }

  fecharModal(){
      this.view.dismiss()
  }

  alterarProduto(){
      console.log(this.formProduto.value)
  }

}
