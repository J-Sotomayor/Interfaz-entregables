import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component { 

  images: string[] = [
    'https://i.gifer.com/80Gs.gif',
    'https://i.gifer.com/8Vvs.gif',
    'https://i.gifer.com/zIz.gif',
    'https://i.gifer.com/84OP.gif',
    'https://i.gifer.com/C0Nw.gif',
    'https://i.gifer.com/ZAAd.gif'
  ];
  // Lista de productos
  products = [
    { 
      name: ' sushi', 
      price: 3.68, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.gifer.com/9wz.gif'
    },
    { 
      name: 'Onigiri', 
      price: 587, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://i.gifer.com/8SaV.gif'
    },
    { 
      name: 'Ramen', 
      price: 45, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.gifer.com/QiOf.gif'
    },
    { 
      name: 'Tempura', 
      price: 68, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.gifer.com/7hpi.gif'
    },
    { 
      name: 'Soba', 
      price: 985, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.gifer.com/63TM.gif'
    },
    { 
      name: 'Takoyaki', 
      price: 59, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://i.gifer.com/CwAQ.gif'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
