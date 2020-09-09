<template>
    <div class="col-12 mt-4">
        <h6>THÔNG TIN BỆNH ÁN</h6>
        <div class="row mt-3 pr-3 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Bệnh án:</label>
            <select name="" id="" class="form-control form-control-sm col-3" >
                <option value="">Viên Gan A</option>
                <option value="">Viên Gan B</option>
                <option value="">Viên Gan C</option>
            </select>
            <label class="text-label col-2 text-bold pl-5 ml-3">Số lưu trữ:</label>
            <input type="text"  class="form-control form-control-sm col-3">
        </div>
        <div class="row mt-2 pr-3 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Bệnh chính:</label>
            <textarea class="form-control form-control-sm col-3"/>
            <textarea class="form-control form-control-sm col-5 ml-3"/>
        </div>
        <div class="row mt-2 pr-3 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Bệnh kèm theo:</label>
            <textarea class="form-control form-control-sm col-3"/>
            <textarea class="form-control form-control-sm col-5 ml-3"/>
        </div>
        <div class="row mt-2 pr-3 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Ngày mở BA:</label>
            <input type="date"  placeholder="dd/mm/yyyy" class="form-control form-control-sm col-3" >
            <label class="text-label col-2 text-bold pl-5 ml-3">Ngày Đóng BA:</label>
            <input type="date"  placeholder="dd/mm/yyyy" class="form-control form-control-sm col-3" >
        </div>
        <div class="row mt-2 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Bệnh kèm theo:</label>
            <textarea class="form-control form-control-sm col-8"/>
        </div>
        <div class="row mt-2 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Bác sĩ:</label>
            <select name="" id="" class="form-control form-control-sm col-3" >
                <option value="">BS. nguyễn văn A</option>
                <option value="">BS. nguyễn văn B</option>
                <option value="">BS. nguyễn văn C</option>
            </select>
        </div>
        <h6 class="mt-4">THÔNG TIN BỆNH MÃN TÍNH</h6>
        <div class="row mt-3 pr-3 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Tên bệnh:</label>
            <textarea class="form-control form-control-sm col-3"/>
            <textarea class="form-control form-control-sm col-5 ml-3"/>
        </div>
        <div class="row mt-2 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Ghi chú:</label>
            <textarea class="form-control form-control-sm col-8"/>
        </div>
        <div class="row mt-2 ml-5">
            <label class="text-label col-2 pl-4 text-bold">Khoa phòng:</label>
            <select name="" id="" class="form-control form-control-sm col-3" >
                <option value="">Khoa Ngoại </option>
                <option value="">Khoa Nội</option>
                <option value="">Khoa RHM</option>
            </select>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
    h6{color:green}
</style>