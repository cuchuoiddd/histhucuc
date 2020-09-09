<template>
    <div class="row pt-4">
        <div class="col-4">
            <table class="table font-13">
                <thead>
                    <tr>
                        <th scope="col" class="font-13 min-width-100">Mã phiếu khám</th>
                        <th scope="col" class="font-13 min-width-100">Phòng khám</th>
                        <th scope="col" class="font-13 min-width-100">Ngày khám</th>
                        <th scope="col" class="font-13 min-width-100">Ngày kết thúc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4">
                            <input class="form-control" type="text" placeholder="Tìm kiếm theo Mã phiếu khám" v-model="mapkInput">
                        </td>
                    </tr>
                    <tr class="pointer" v-for="(lichsukham, key) in filteredMaPk" :key="key">
                        <td class="">{{lichsukham.mapk}}</td>
                        <td class="">{{lichsukham.phongkham}}</td>
                        <td class="">{{lichsukham.ngaykham}}</td>
                        <td class="">{{lichsukham.ngayketthuc}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-8 pl-4">
            <ul class="nav nav-tabs nav-pills pl-3" role="tablist">
                <li class="nav-item ">
                    <a class="nav-link active text-label" aria-selected="true" data-toggle="tab"
                        href="#tong_quan">
                        <span>Tổng quan</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#thuoc">
                        <span>Thuốc</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#xet_nghiem">
                        <span>Xét nghiệm</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#cdha_tdcn">
                        <span>CDHA & TDCN</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab"
                        href="#phau_thuat_thu_thuat">
                        <span>PTTT</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#giai_phau_benh">
                        <span>Giải phẫu bệnh</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#khang_sinh_do">
                        <span>Kháng sinh đồ</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab"
                        href="#qua_trinh_dieu_tri">
                        <span>Quá trình điều trị</span>
                    </a>
                </li>
            </ul>
            <div class="tab-content col-12">
            <div id="tong_quan" class="tab-pane fade show active pt-3"><appCLS :isRead="true"/></div>
            <div id="thuoc" class="tab-pane fade">
                <div class="col-12">
                    <div class="panel panel-default ">
                        <div class="panel-heading accordion-toggle question-toggle collapsed"
                            style="margin-bottom: -20px;">
                            <table class="table table-hover table-sm font-13">
                                <thead>
                                    <tr>
                                        <th class="text-center">STT</th>
                                        <th class="">Đơn thuốc</th>
                                        <th class="">Tên thuốc</th>
                                        <th class="text-center">Hàm lượng</th>
                                        <th class="text-center">Hoạt chất</th>
                                        <th class="text-center">Số lượng</th>
                                        <th class="text-center">Đơn vị</th>
                                        <th class="">Cách dùng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-center"></td>
                                        <td colspan="7" class="font-600"><input
                                                type="checkbox"> Phòng khám TMH</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center"></td>
                                        <td colspan="7" class="font-600">&emsp;<input
                                                type="checkbox"> Đơn thuốc ngày:
                                            20/11/2019
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">1</td>
                                        <td></td>
                                        <td>&emsp;amocilin</td>
                                        <td class="text-center">500mg</td>
                                        <td class="text-center">amoxilin</td>
                                        <td class="text-center">5</td>
                                        <td class="text-center">viên</td>
                                        <td>uống sau ăn</td>
                                    </tr>
                                    <tr>
                                        <td class="text-center">2</td>
                                        <td class="text-center"></td>
                                        <td>&emsp;panadol</td>
                                        <td class="text-center">500mg</td>
                                        <td class="text-center">paracetamol</td>
                                        <td class="text-center">5</td>
                                        <td class="text-center">viên</td>
                                        <td>uống sau ăn</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div></div>
            <div id="xet_nghiem" class="tab-pane fade">
                xn
            </div>
            <div id="cdha_tdcn" class="tab-pane fade">
                Tổng quan3
            </div>
            <div id="phau_thuat_thu_thuat" class="tab-pane fade">
                Tổng quan4
            </div>
            <div id="giai_phau_benh" class="tab-pane fade">
                Tổng quan5
            </div>
            <div id="khang_sinh_do" class="tab-pane fade">
                Tổng quan6
            </div>
            <div id="qua_trinh_dieu_tri" class="tab-pane fade">
                Tổng quan7asdalsd
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import appCLS  from '../../components/PhongKham/CLS.vue'
export default {
    data(){
        return{
            lichsukhamArray: this.$store.state.lichsukhamArray,
            mapkInput:''
        }
    },
    components:{
        appCLS
    },
    computed:{
        filteredMaPk(){
          return this.lichsukhamArray.filter((item) => {
            return item.mapk.toLowerCase().match(this.mapkInput.toLowerCase());
          })
        }
    }
}
</script>

<style scoped>
    .nav-link.active{background-color: unset !important;}
    .nav-tabs .nav-link.active{color: #000;}
    .nav-link{padding: 7px 8px; color: #000}
</style>