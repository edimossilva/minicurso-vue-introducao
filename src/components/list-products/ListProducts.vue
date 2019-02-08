<!--src/components/list-products/ListProducts.vue-->
<template>
    <div>
        <h1>List Products</h1>
         <table >
            <tr>
                <td>Name</td>
                <td>Description</td>     
            </tr>
            <tr v-for="product in products" v-bind:key="product.id">
                <td>{{product.nome}}</td>
                <td>{{product.descricao}}</td>
            </tr>
        </table>
    </div>     
</template>

<script>
import Product from './../../domain/product/Product.js';

export default {
    data () {
        return {
            products: []
        }
    },
    created(){
        this.$http.get('https://railsloja.herokuapp.com/products')
        .then(res => res.json())
        .then(
                products => this.products = products,
                err => console.log(err)
            )
  }
}
</script>

<style>

</style>