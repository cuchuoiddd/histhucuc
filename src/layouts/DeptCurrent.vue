<template>
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
        data-target="#changeRoom">
        <i class="fas fa-home"></i>
        <label for class="pointer font-14">Phòng khám TMH</label>
      </div>
      <div class="col-2 mt-2 text-label">
        <i class="fas fa-user"></i>
        <a class="text-name dropdown-custom dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            BS.Nguyễn Văn Hoàng
        </a>
        <div class="dropdown-menu hide" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Đổi mật khẩu</a>
            <a class="dropdown-item" href="#">Đăng xuất</a>
        </div>
      </div>
      <!-- Model popup -->
      <ModelPopup id="changeRoom">
        <div slot="header">
          <h5 class="modal-title" id="exampleModalLabel">Chọn ban làm việc</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div slot="body">
          <div class="row">
            <div class="col-4">Phòng làm việc</div>
            <div class="col-8">
                <select name="" id="" class="form-control">
                    <option value="">Phòng khám 1</option>
                    <option value="">Phòng khám 2</option>
                    <option value="">Phòng khám 3</option>
                </select>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-4">Bác sĩ</div>
            <div class="col-8">
                <select name="" id="" class="form-control">
                    <option value="">Bác sĩ 1</option>
                    <option value="">Bác sĩ 2</option>
                    <option value="">Bác sĩ 3</option>
                </select>
            </div>
        </div>
        </div>
        <div slot="footer">
          <button type="button" class="btn btn-primary">Đồng ý</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
        </div>
      </ModelPopup>
    </div>
</template>

<script>
import ModelPopup from './ModelPopup.vue'
export default {
  components:{
    ModelPopup,
  }

};
</script>

<style scoped>
  .text-name, .text-name:hover{
    text-decoration: none;
    background-color: unset
  }
</style>
