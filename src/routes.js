
import ListProducts from './components/list-products/ListProducts.vue'
import CreateProduct from './components/create-product/CreateProduct.vue'

export const routes = [
    {name:"list-products", path: '/list', component: ListProducts, title: "List",  menu: true},
    {name:"create-product", path: '/create', component: CreateProduct, title: "Create",  menu: true},
    {path: '*', component: ListProducts }
];
