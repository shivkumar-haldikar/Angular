import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls:["./product-list.component.css"],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    private _listFilter: string = "";

    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    filteredProducts: Product[] = [];
    products: Product[] = [];

    constructor(private productService: ProductService){
    }
    
    //#region Interface Methods
    ngOnInit(): void {
        this.products = this.productService.getProducts(); 
        this.filteredProducts = this.products;
    }
    //#endregion

    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): Product[] {
        filterBy = filterBy.toLocaleLowerCase();
        console.log(filterBy);
        return this.products.filter(
            (p) => p.productName.toLocaleLowerCase().includes(filterBy)
        );
    }

    onRatingClicked(message: string): void{
        this.pageTitle = "Product List:" + message;
    }
}