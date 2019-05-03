<template>
  <div class="home">
<!--    <nav-bar :items="items"></nav-bar>-->

    <restaurants></restaurants>
  </div>
</template>

<script>
    // import NavBar from './components/NavBar.vue'
    import Restaurants from '../components/Restaurants';

    export default {
        name: 'app',
        components: {
            Restaurants
        },
        data: function () {
            return {
                items: ['تماس با ما ', 'خانه', 'سفارش آنلاین']
            }
        },

    }
</script>
