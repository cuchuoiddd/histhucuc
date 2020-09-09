<template>
    <!-- <div> -->
        <div class="row">
            <div class="col-9 mt-3">
                <appCLS/>
            </div>
            <div class="col-3 mt-3 dhst">
                <appDauHieuST/>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import appCLS from '../../components/PhongKham/CLS.vue'
import appDauHieuST from '../../components/PhongKham/DauHieuST.vue'
export default {
    components:{
        appCLS,
        appDauHieuST,
    }
}
</script>



<style scoped>
    /* .dhst{
        max-width: 350px;
    } */
</style>