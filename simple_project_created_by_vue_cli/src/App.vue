<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import Restaurants from './components/Restaurants';

    export default {
        name: 'app',
        components: {
            NavBar,Restaurants
        },
        data: function () {
            return {
                items: ['تماس با ما ', 'خانه', 'سفارش آنلاین']
            }
        },

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
