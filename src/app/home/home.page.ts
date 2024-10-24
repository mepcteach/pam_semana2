import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string = '';

     // Array de productos (drones)
     productos = [
      { nombre: 'Drone DJI Mavic Air 2', precio: 999, enStock: true },
      { nombre: 'Drone DJI Phantom 4 Pro', precio: 1499, enStock: false },
      { nombre: 'Drone Parrot Anafi', precio: 699, enStock: true },
      { nombre: 'Drone DJI Inspire 2', precio: 2999, enStock: false },
      { nombre: 'Drone Autel Robotics Evo II', precio: 1799, enStock: true }
    ];

  constructor(private route: ActivatedRoute, private alertController: AlertController) {}

  ngOnInit() {
    // Obtener los parámetros de la URL
     this.route.queryParams.subscribe(params => {
      this.email = params['email']; 
    });
  }


  
  // Método para mostrar alerta sobre el stock del producto
  async mostrarAlerta(producto:any) {
    const alert = await this.alertController.create({
      header: 'Estado del Producto',
      message: producto.enStock ? 'El producto está en stock' : 'El producto no está en stock',
      buttons: ['OK']
    });

    await alert.present();
  }


}
