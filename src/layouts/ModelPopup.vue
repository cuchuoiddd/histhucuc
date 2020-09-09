<template>
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"/>
                    
                </div>
                <div class="modal-body">
                    <slot name="body"/>
                </div>
                <div class="modal-footer">
                    <slot name="footer"/>
                    
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    // data(){
    //     return{
    //         id: ''
    //     }
    // },
    props:['id']
}
</script>

