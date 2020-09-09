<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isShow"></div>
        <transition name="slide">
            <div v-if="isShow"
                 class="sidebar-panel">
                <button type="button" class="btn dismissPanel" @click="closeSidebarPanel">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
import EventBus from '../store/EventBus.js'
    export default {
        data(){
            return{
                isShow: false
            } 
        },
        created(){
            EventBus.$on('isPanel',this.openSidebarPanel)
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            closeSidebarPanel(){
                this.isShow = false
            },
            openSidebarPanel(status){
                this.isShow = status
            },
            handleScroll (event) {
                console.log('asdjhasjdh')
            }
        },
        
    }
</script>

<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }
    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(19, 15, 64, .4);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 998;
    }

    .sidebar-panel {
        /* overflow-y: auto; */
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        width: 55%;
    }
    .dismissPanel{
        position: fixed;
        right: 46%;
        top:15px;
        width: 40px;
        height: 40px;
        background-color: white;
        color:green;
        border: none;
        z-index: 9999;
    }
    .tableFixHead{
    width: 100%;
    display:inline-block;

    }

    .tableFixHead tbody{
        width: 100%;
    display:inline-block;
    overflow:auto;
    height: 66vh;
    }
    .tableFixHead thead{
        width: 100%;
    display:inline-block;
    }

</style>