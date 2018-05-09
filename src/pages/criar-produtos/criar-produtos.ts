import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the CriarProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-produtos',
  templateUrl: 'criar-produtos.html',
})
export class CriarProdutosPage {

  public formProduto:FormGroup

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb: FormBuilder) {

              this.formProduto = fb.group({
                nome:[null,Validators.required],
                quantidade:[null, Validators.required],
                valor:[null,Validators.required],
                marca:[null,Validators.required]                            
              })  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarProdutosPage');
  }

  criarProduto(){
      console.log(this.formProduto.value)
  }

}
