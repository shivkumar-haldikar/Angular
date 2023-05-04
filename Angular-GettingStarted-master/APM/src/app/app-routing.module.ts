import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { ProductDetailGuard } from "./products/product-detail.guard";
import { ProductListComponent } from "./products/product-list.component";

const routes: Routes = [
    { path: "welcome", component: WelcomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/:id", component: ProductDetailComponent, canActivate:[ProductDetailGuard] },
    { path: "", component: WelcomeComponent, pathMatch: "full" },
    { path: "**", component: WelcomeComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}
