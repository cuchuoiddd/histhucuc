<template>
<div>
  <div class="header color-white">
    <app-dept-current/>
    <div class="container mw85">
      <appPatientDetail/>
      <div class="row  ">
        <div class="col-12 tab-menu tab-menu-custom ">
          <ul class="nav nav-tabs nav-pills nav-tabs-custom" role="tablist">
            <li class="nav-item ">
              <a class="nav-link active text-label" @click="isBtnBottom=true" data-toggle="tab" href="#home">
                <i class="fa fa-user-md font-15" aria-hidden="true"></i>
                <span class="font-14">Khám bệnh</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-label" @click="isBtnBottom=true" data-toggle="tab" href="#chi_dinh_dv">
                <i class="fa fa-universal-access font-15" aria-hidden="true"></i>
                <span class="font-14">Chỉ định</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" @click="isBtnBottom=true" data-toggle="tab" href="#ket_luan">
                <i class="fa fa-heartbeat font-15" aria-hidden="true"></i>
                <span class="font-14">Kết luận</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" @click="isBtnBottom=false" data-toggle="tab" href="#ket_qua">
                <i class="fa fa-eye font-15" aria-hidden="true"></i>
                <span class="font-14">Xem kết quả</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label"
                data-toggle="tab"
                href="#phong_thu_thuat">
                <i class="fa fa-bed font-15" aria-hidden="true"></i>
                <span class="font-14">Phòng thủ thuật</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" @click="isBtnBottom=true"
                data-toggle="tab"
                href="#benh_an_ngoai_tru">
                <i class="fa fa-medkit font-15" aria-hidden="true"></i>
                <span class="font-14">Bệnh án ngoại trú</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" @click="isBtnBottom=false" data-toggle="tab" href="#history">
                <i class="fa fa-th font-15" aria-hidden="true"></i>
                <span class="font-14">Lịch sử khám</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" @click="isBtnBottom=false" data-toggle="tab" href="#bao-cao">
                <i class="fa fa-map font-15" aria-hidden="true"></i>
                <span class="font-14">Báo cáo</span>
              </a>
            </li>
            <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tiện ích</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Sửa thông tin HC</a>
                    <a class="dropdown-item" href="#">Tạo nhóm chỉ định nhanh</a>
                    <a class="dropdown-item" href="#">Tạo mẫu cách dùng thuốc</a>
                </div>
            </!--> 
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="content container mw85 bg-gray">
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><app-kham-benh/></div>
        <div class="tab-pane fade" id="chi_dinh_dv" role="tabpanel" aria-labelledby="profile-tab"><app-chi-dinh/></div>
        <div class="tab-pane fade" id="ket_luan" role="tabpanel" aria-labelledby="contact-tab"><app-ket-luan/></div>
        <div class="tab-pane fade" id="ket_qua" role="tabpanel" aria-labelledby="contact-tab"><app-xem-ket-qua/></div>
        <div class="tab-pane fade" id="phong_thu_thuat" role="tabpanel" aria-labelledby="contact-tab"><app-phong-thu-thuat/></div>
        <div class="tab-pane fade" id="benh_an_ngoai_tru" role="tabpanel" aria-labelledby="contact-tab"><app-benh-an-ngoai-tru/></div>
        <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="contact-tab"><app-lich-su-kham/></div>
        <div class="tab-pane fade" id="bao-cao" role="tabpanel" aria-labelledby="contact-tab"><app-bao-cao/></div>
    </div>
    <hr>
    <!-- button action-->
   <div class="btn-action" v-show="isBtnBottom">
      <button type="button" class="btn btn-success btn-action-item">Lưu</button>
      <button type="button" class="btn btn-success btn-action-item ">Sửa</button>
      <button type="button" class="btn btn-success btn-action-item ">In</button>
      <button type="button" class="btn btn-success btn-action-item">Kết thúc khám</button>
   </div>

    
  </div>

   

   <!-- flag status -->
    <div class="flag-stt">
      <ul>
        <li class="flag-item" v-for="(status,key) in this.$store.state.patientSttArray" :key="key">{{status.name}}</li>
      </ul>
   </div>

   <div class="modal" tabindex="-1" role="dialog" id="changeRoom">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>

   <!-- action Quá trình khám, danh sách khách hàng, thông báo  -->
   <div class="btn-action-left ">
     <button type="button"  @click="patientListShow()" class="btn btn-success btn-left " data-toggle="tooltip" data-placement="right" data-original-title="Danh sách khách hàng">
        <i class="fas fa-align-left"></i>
    </button>
    <button type="button" @click="quaTrinhKhamShow()" class="btn btn-success btn-left" data-toggle="tooltip" data-placement="right" data-original-title="Quá trình khám">
        <i class="fa fa-stethoscope" aria-hidden="true"></i>
    </button>
    <button type="button" @click="notificationListShow()" class="btn btn-success thong-bao" data-toggle="tooltip" data-placement="right" data-original-title="Quá trình khám">
        <i class="fa fa-bell pointer" aria-hidden="true" data-toggle="modal" data-target="#thongBao"></i>
        <span class="badge badge-light">4</span>
    </button>
   </div>
   

   <!-- patient list, qua trinh kham -->
   
   <appPanelLeft>
    <div v-if="typePanel === 0"><appPatientList/></div>
    <div v-else-if="typePanel === 1"><appQuaTrinhKham/></div>
    <div v-else><appNotification/></div>
   </appPanelLeft>


   
</div>
</template>

<script>
import appDeptCurrent from "../../layouts/DeptCurrent.vue";
import appPatientDetail from "../../components/PhongKham/PatientDetail.vue" 
import appChiDinh from "./ChiDinh.vue";
import appBaoCao from "./BaoCao.vue";
import appBenhAnNgoaiTru from "./BenhAnNgoaiTru.vue";
import appKetLuan from "./KetLuan.vue";
import appKhamBenh from "./KhamBenh.vue";
import appLichSuKham from "./LichSuKham.vue";
import appPhongThuThuat from "./PhongThuThuat.vue";
import appXemKetQua from "./XemKetQua.vue";
import appPanelLeft from '../../layouts/PanelLeft.vue'
import EventBus from '../../store/EventBus.js'
import appPatientList from '../../components/PhongKham/PatientList.vue'
import appQuaTrinhKham from '../../components/PhongKham/QuaTrinhKham.vue'
import appNotification from '../../components/PhongKham/Notification.vue'

export default {
  data(){
    return{
      isPanel: false,
      typePanel: 0,
      isBtnBottom: true
    }
  },
  components: {
    appDeptCurrent,
    appPatientDetail,
    appChiDinh,
    appBaoCao,
    appBenhAnNgoaiTru,
    appKetLuan,
    appKhamBenh,
    appLichSuKham,
    appPhongThuThuat,
    appXemKetQua,
    appPanelLeft,
    appPatientList,
    appQuaTrinhKham,
    appNotification
  },
  methods:{
    patientListShow(){
      this.typePanel = 0;
      EventBus.$emit('isPanel', true);
    },
    quaTrinhKhamShow(){
      this.typePanel = 1;
      EventBus.$emit('isPanel', true);
    },
    notificationListShow(){
      this.typePanel = 2;
      EventBus.$emit('isPanel', true);
    }
  },
  
};
</script>

<style scoped>
  .btn-left{
    margin-bottom: 20px;
  }
  
  .btn-action-left{
    position: fixed;
    left:0;
    top: 140px;
    margin-left: 15px;
    width: 60px;
  }
  
</style>
