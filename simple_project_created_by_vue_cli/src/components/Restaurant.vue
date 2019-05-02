<template>
    <div class="restaurant">
        <div class="d-flex">
            <div>
                <img :src="imgUrl" alt="">
            </div>
            <div>
                <div>{{name}}</div>

                <div> {{rate}}</div>

                <div class="d-flex">
                    <div v-for="(food,index) in foods"
                         style="display: inline;margin: 0 5px;">
                        {{dictionary[food]}}
                    </div>
                </div>

                <div>
                    {{address}}
                </div>
            </div>
        </div>
        <div>
            <button>سفارش</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name', 'rate', 'foods', 'address', 'imgUrl'],
        name: "Restaurant",
        data() {
            return {
                dictionary: {
                    pizza: 'پیتزا',
                    fastfood: 'فست فود',
                    sandwich: 'ساندویچ',
                    burger: 'برگر',
                },
                active: true
            }
        }
    }
</script>

<style scoped>
    .d-flex {
        display: flex;
    }

    .restaurant {
        direction: rtl !important;
    }

    .restaurant img {
        width: 50px;
    }

    .fav-restaurant {
        background-color: green;
    }
</style>