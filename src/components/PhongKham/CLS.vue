<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <label class="text-label col-2 pl-4 text-bold">Ngày khám:</label>
                <input type="date"  placeholder="dd/mm/yyyy" class="form-control form-control-sm col-3" :disabled="isRead" >
                <div class="col-1"></div>
                <label class="text-label col-2 pl-4 text-bold">Bác sĩ khám:</label>
                <select name="" id="" class="form-control form-control-sm col-3" :disabled="isRead">
                    <option value="">Bác sĩ 1</option>
                    <option value="">Bác sĩ 2</option>
                    <option value="">Bác sĩ 3</option>
                </select>
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold" >Lý do khám:</label>
                <input type="text"  class="form-control form-control-sm col-9" :disabled="isRead">
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold">Bệnh sử:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold">Tiền sử bệnh:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold">Toàn thân:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
                <button class="btn btn-book ml-3 mt-2 mb-2 pl-2" v-if="!isRead" data-toggle="modal"
                    data-target=".modal-mau-toan-than"><i class="fa fa-address-book"
                        aria-hidden="true" data-toggle="tooltip" data-placement="right"
                        title="Mẫu toàn thân"></i></button>
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold">Bộ phận:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
                <button class="btn btn-book ml-3 mt-2 mb-2 pl-2" v-if="!isRead"  data-toggle="modal"
                    data-target=".modal-mau-toan-than"><i class="fa fa-address-book"
                        aria-hidden="true" data-toggle="tooltip" data-placement="right"
                        title="Mẫu toàn thân"></i></button>
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold">Chuẩn đoán BĐ:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
                <button class="btn btn-book ml-3 mt-2 mb-2 pl-2" v-if="!isRead" data-toggle="modal"
                    data-target=".modal-mau-toan-than"><i class="fa fa-address-book"
                        aria-hidden="true" data-toggle="tooltip" data-placement="right"
                        title="Mẫu toàn thân"></i></button>
            </div>
            <div class="row mt-2">
                <label class="text-label col-2 pl-4 text-bold">Kết quả CLS:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
                <button class="btn btn-book ml-3 mt-2 mb-2 pl-2" v-if="!isRead" data-toggle="modal"
                    data-target=".modal-mau-toan-than"><i class="fa fa-address-book"
                        aria-hidden="true" data-toggle="tooltip" data-placement="right"
                        title="Mẫu toàn thân"></i></button>
            </div>
            <div class="row mt-2 mb-3">
                <label class="text-label col-2 pl-4 text-bold">Kết luận:</label>
                <textarea class="form-control form-control-sm col-9" :disabled="isRead"/>
                <button class="btn btn-book ml-3 mt-2 mb-2 pl-2" v-if="!isRead" data-toggle="modal"
                    data-target=".modal-mau-toan-than" ><i class="fa fa-address-book"
                        aria-hidden="true" data-toggle="tooltip" data-placement="right"
                        title="Mẫu toàn thân"></i></button>
            </div>
        </div>
        <!-- <div class="col-1 d-flex justify-content-center" v-if="isRead">
            <div class="line">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    props:['ngaykham',
        'doctor', 
        'lydokham', 
        'benhsu', 
        'tiensubenh', 
        'toanthan', 
        'bophan', 
        'ketquacls',
        'chandoan', 
        'huongdieutri',
        'ketluan',
        'isRead']
}
</script>

<style scoped>
    .line{
        width: 1px;
        height: 350px;
        background-color: #ccc;
    }
</style>