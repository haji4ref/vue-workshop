<template>
    <div>
        <ul class="list">
            <li v-for="(item,index) in items" style="margin:0 5px">
                {{item}}
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name:'NavBar',
    props:['items'],
    data(){
        return{
            
        }
    }
}
</script>


<style>
.list{
    display:flex;
}
.list li{
    list-style:none;
}
</style>