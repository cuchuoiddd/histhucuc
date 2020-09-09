<template>
<div class="">
    <flash-message class="flashpool"></flash-message>
  <div class="header color-white">
    <div class="row">
      <div class="col-8 mt-2">
        <marquee class="color-yellow">
          * Thông báo từ phòng IT* Sẽ tạm ngưng sever để nâng cấp PM thời gian
          từ 12h00-12h15 ngày 20/11/2019
        </marquee>
      </div>
      <div
        class="col-2 mt-2 text-label text-right"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i class="fas fa-home"></i>
        <label for class="pointer font-14">Phòng khám TMH</label>
      </div>
      <div class="col-2 mt-2 text-label">
        <label for class="pointer font-14">BS.Nguyễn Văn Hoàng</label>
      </div>
    </div>
    <div class="container mw85">
      <div class="row mt-2">
        <div class="col-1"></div>
        <div class="col-9 fontsize-18">
          TC 12345678/ NGUYỄN VĂN QUYẾT/ 29 tuổi/ Nam/ Địa chỉ Quận Hoàng Mai,
          Hà Nội
          <label
            class="pointer"
            style="text-decoration: underline;"
            data-toggle="modal"
            data-target="#exampleModal1"
            >&nbsp; >>chi tiết</label
          >
        </div>
      </div>
      <div class="row">
        <div class="col-12 tab-menu tab-menu-custom">
          <ul class="nav nav-tabs nav-pills nav-tabs-custom" role="tablist">
            <li class="nav-item ">
              <a class="nav-link active text-label" data-toggle="tab" href="#home">
                <i class="fa fa-user-md font-15" aria-hidden="true"></i>
                <span class="font-14">Khám bệnh</span>
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-link text-label"
                data-toggle="tab"
                href="#chi_dinh_dv"
              >
                <i
                  class="fa fa-universal-access font-15"
                  aria-hidden="true"
                ></i>
                <span class="font-14">Chỉ định</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" data-toggle="tab" href="#ket_luan">
                <i class="fa fa-heartbeat font-15" aria-hidden="true"></i>
                <span class="font-14">Kết luận</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" data-toggle="tab" href="#ket_qua">
                <i class="fa fa-eye font-15" aria-hidden="true"></i>
                <span class="font-14">Xem kết quả</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-label"
                data-toggle="tab"
                href="#phong_thu_thuat"
              >
                <i class="fa fa-bed font-15" aria-hidden="true"></i>
                <span class="font-14">Phòng thủ thuật</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-label"
                data-toggle="tab"
                href="#benh_an_ngoai_tru"
              >
                <i class="fa fa-medkit font-15" aria-hidden="true"></i>
                <span class="font-14">Bệnh án ngoại trú</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" data-toggle="tab" href="#history">
                <i class="fa fa-th font-15" aria-hidden="true"></i>
                <span class="font-14">Lịch sử khám</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-label" data-toggle="tab" href="#bao-cao">
                <i class="fa fa-map font-15" aria-hidden="true"></i>
                <span class="font-14">Báo cáo</span>
              </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Tiện ích 123</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Sửa thông tin HC</a>
                    <a class="dropdown-item" href="#">Tạo nhóm chỉ định nhanh</a>
                    <a class="dropdown-item" href="#">Tạo mẫu cách dùng thuốc</a>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="content container mw85">
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <button class="btn btn-primary" @click="clickAlert">click me!</button>
        </div>
        <div class="tab-pane fade" id="chi_dinh_dv" role="tabpanel" aria-labelledby="profile-tab">Chỉ định</div>
        <div class="tab-pane fade" id="ket_luan" role="tabpanel" aria-labelledby="contact-tab">Kết luận</div>
        <div class="tab-pane fade" id="ket_qua" role="tabpanel" aria-labelledby="contact-tab">Kết quả</div>
        <div class="tab-pane fade" id="phong_thu_thuat" role="tabpanel" aria-labelledby="contact-tab">Phòng thủ thuật</div>
        <div class="tab-pane fade" id="benh_an_ngoai_tru" role="tabpanel" aria-labelledby="contact-tab">Bệnh án ngoại trú</div>
        <div class="tab-pane fade" id="history" role="tabpanel" aria-labelledby="contact-tab">Lịch sử</div>
        <div class="tab-pane fade" id="bao-cao" role="tabpanel" aria-labelledby="contact-tab">Báo cáo</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    
    data(){
        return {

        }
    },
    created(){
        // this.clickAlert();
    },
    methods:{
        clickAlert(){
            this.flash('Data loaded', 'success');
            this.flash('Validation failed', 'error');
            this.flash('Spawning too much alerts is a bad UX', 'warning');
            this.flash('Live long and prosper', 'info');
        }
    }
};
</script>

<style>
</style>
