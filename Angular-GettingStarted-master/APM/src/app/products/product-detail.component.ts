import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "Product Details";
  product: Product | undefined;
  errorMessage: string = "";
  sub!: Subscription;
  
  constructor(private route: ActivatedRoute, 
    private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
          const id = Number(this.route.snapshot.paramMap.get("id"));
          this.product = products.find((p) => p.productId === id);
          this.pageTitle += `: ${id}`;
      },
      error: err => this.errorMessage = err
    });

   
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
}

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
