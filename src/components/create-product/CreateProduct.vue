<!--src/components/create-product/CreateProduct.vue-->
<template>
    <div>
        <h1>Create Product</h1>
        <form>
            <div>
                <label for="name">Name</label>
                <input @input = "product.name = $event.target.value" id="name" autocomplete="off">
            </div>

            <div>
                <label for="description">Description</label>
                <input @input = "product.description = $event.target.value" id="description" autocomplete="off">
            </div>

            <div>    
                <button type="button" @click="saveProduct(product)">Create</button>
            </div>
        </form>
        {{product}}
    </div>     
</template>

<script>
import Product from './../../domain/product/Product.js';

export default {
    data () {
        return {
            product: new Product("","")
        }
    },
    methods: {
        saveProduct(product) {   
            var myProduct = {
                "nome":product.name,
                "descricao":product.description
            }
            this.$http.post('https://railsloja.herokuapp.com/products',myProduct)
            .then(res => res.json().then(
                json => console.log(json)
            )
            , err => console.log(err));
        }
   }
}
</script>

<style>

</style>

