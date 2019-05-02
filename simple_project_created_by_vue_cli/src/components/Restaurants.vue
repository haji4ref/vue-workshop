<template>
    <div>
        <restaurant v-for="(restaurant,index) in restaurants"
                    :name="restaurant.name"
                    :rate="restaurant.rate"
                    :foods="restaurant.foods"
                    :address="restaurant.address"
                    :imgUrl="restaurant.imgUrl"></restaurant>
    </div>
</template>

<script>
    import Restaurant from "./Restaurant";

    export default {
        name: "Restaurants",
        components: {Restaurant},
        data() {
            return {
                restaurants: []
            }
        },
        created() {
            window.axios
                .get('http://demo2469824.mockable.io/best-restaurants')
                .then((response) => {
                    this.restaurants = response.data.restaurants;
                })

        }
    }
</script>

<style scoped>

</style>