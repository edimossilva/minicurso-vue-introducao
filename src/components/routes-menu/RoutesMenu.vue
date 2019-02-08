<!--src/components/routes-menu/RoutesMenu.vue-->
<template>
    <nav>
        <ul>
            <li v-for="route in routes" :key="route.path" v-if="route.menu">
                <router-link :to="route.path">{{route.title}}</router-link> 
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  props:{
      routes: {
        type: Array,
        required: true
      }
    }
}
</script>

<style>

</style>

