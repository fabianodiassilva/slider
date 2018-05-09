import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlterarProdutosComponent } from '../../components/alterar-produtos/alterar-produtos';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modal:ModalController) {
  }

  irPageUpdProdutos(){

      const modalUpdProds = this.modal.create(AlterarProdutosComponent)
      modalUpdProds.present()

  }

  irPageAddProdutos(){
    this.navCtrl.push('CriarProdutosPage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

}
