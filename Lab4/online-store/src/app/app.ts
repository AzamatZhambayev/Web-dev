import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');
}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 chip and titanium корпус.',
      price: 599990,
      rating: 4.8,
      image: 'https://example.com/iphone.jpg',
      images: [
        'https://example.com/iphone1.jpg',
        'https://example.com/iphone2.jpg',
        'https://example.com/iphone3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Android smartphone with AMOLED display.',
      price: 499990,
      rating: 4.7,
      image: 'https://example.com/s24.jpg',
      images: [
        'https://example.com/s241.jpg',
        'https://example.com/s242.jpg',
        'https://example.com/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24'
    },

    // 👉 Add 8+ more real products from kaspi.kz
  ];
}
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check this product: ' + this.product.link
    )}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

selectedImage!: string;

ngOnInit() {
  this.selectedImage = this.product.image;
}

selectImage(img: string) {
  this.selectedImage = img;
}
