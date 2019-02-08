<!--src/App.vue-->
<template>
    <div id="app">
        <routes-menu :routes="routes"></routes-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import CreateProduct from './components/create-product/CreateProduct.vue'
import ListProducts from './components/list-products/ListProducts.vue'
import RoutesMenu from './components/routes-menu/RoutesMenu.vue'
import {routes} from './routes';

export default {
  name: 'app',
  components:{
    'create-product':CreateProduct,
    'list-products':ListProducts,
    'routes-menu':RoutesMenu
  },
  data() {
    return {
      routes: routes
    }
  },
}
</script>

<style>
</style>

