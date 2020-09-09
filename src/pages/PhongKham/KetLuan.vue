<template>
    <div class="card card-custom min-height-85-vh">
        <div class="card-body min-height-73" style="padding-bottom: 0;">
            <div class="row mt-3">
                <div class="col-2 font-700 max-width-11">
                    <span class="color-red">Bệnh chính (*)</span>
                </div>
                <div class="col-2">
                    <input type="text" style="text-transform: uppercase;" placeholder="Mã ICD"
                        id="benh_chinh_icd10" class="form-control form-control-custom">
                </div>
                <div class="col-8">
                    <input type="text" id="benh_chinh_text"
                        class="form-control form-control-custom">
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-2 font-700 max-width-11">
                    Bệnh kèm theo:
                </div>
                <div class="col-2 ">
                    <input type="text" id="benh_kem_theo_icd10"
                        class="form-control form-control-custom">
                </div>
                <div class="col-8">
                    <input type="text" id="benh_kem_theo_text"
                        class="form-control form-control-custom">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-2 font-700 max-width-11">
                    Hướng điều trị:
                </div>
                <div class="col-2">
                    <select name="" id="huongDieuTri"
                        class="mySelect form-control form-control-custom" v-model="huongDieuTri">
                        <option value=""></option>
                        <option value="ke_toa_cho_ve">Kê toa cho về</option>
                        <option value="cho_ve_khong_toa">Cho về không toa</option>
                        <option value="nhap_vien">Nhập viện</option>
                        <option value="chuyen_vien">Chuyển viện</option>
                        <option value="chuyen_phong_kham">Chuyển phòng khám</option>
                        <option value="chuyen_kham_chinh">Chuyển khám chính</option>
                        <option value="dieu_tri_ngoai_tru">Điều trị ngoại trú</option>
                        <option value="bo_ve">Bỏ về</option>
                        <option value="tu_vong">Tử vong</option>
                    </select>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-2 font-700 max-width-11">Hẹn khám lại:</div>
                <div class="col-2 max-width-11">Sau <input type="text" style="width:35px;" class="form-control-custom border"> ngày
                </div>
                <div class="col-2 max-width-11 padding-right-0 align-center"><span>Ngày khám
                        lại:</span>
                </div>
                <div class="col-2 mw15 padding-left-0"><input type="date"
                        class="form-control form-control-custom"></div>
                <div class="col-2 max-width-14">Giờ hẹn &nbsp; <input
                        class="form-control-custom border" type="text" id="time" placeholder="Time"
                        style="width:81px;"></div>
                <div class="col-1 max-width-11 text-right align-center"><span>Ghi chú:</span>
                </div>
                <div class="col-3 padding-right-0"><input type="text"
                        class="form-control form-control-custom"></div>
            </div>
            <div id="keToaChoVe" class="row" v-if="huongDieuTri=='ke_toa_cho_ve'">
                <div class="mt-3 card card-custom min-height-65-vh">
                    <div class="card-body" style="padding-top: 0;">
                        <table class="table table-hover font-14 tree-basic">
                            <thead>
                                <tr>
                                    <th class="text-center">STT</th>
                                    <th class="text-center align-middle"><input type="checkbox">
                                    </th>
                                    <th class="text-center">Kho thuốc</th>
                                    <th class="">Tên thuốc</th>
                                    <th class="text-center">Hàm lượng</th>
                                    <th class="text-center">Hoạt chất</th>
                                    <th class="text-center">Số lượng</th>
                                    <th class="text-center">Đơn giá</th>
                                    <th class="text-center">Đơn vị</th>
                                    <th class="">Cách dùng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="treegrid-2 expanded">
                                    <td colspan="8" class="font-700">Phòng khám TMH</td>
                                </tr>
                                <tr class="treegrid-3 treegrid-parent-2">
                                    <td class="text-center">1</td>
                                    <td class="text-center align-middle"> <input
                                            type="checkbox">
                                    </td>
                                    <td class="text-center">tủ trực TMH</td>
                                    <td>amocilin</td>
                                    <td class="text-center">500mg</td>
                                    <td class="text-center">amoxilin</td>
                                    <td class="text-center">5</td>
                                    <td class="text-center">25.000</td>
                                    <td class="text-center">viên</td>
                                    <td>uống sau ăn</td>
                                    <td><i class="fa fa-trash pointer" aria-hidden="true"></i>
                                    </td>
                                </tr>
                                <tr class="treegrid-4 treegrid-parent-2">
                                    <td class="text-center">2</td>
                                    <td class="text-center align-middle"> <input
                                            type="checkbox">
                                    </td>
                                    <td class="text-center">nhà thuốc</td>
                                    <td>panadol</td>
                                    <td class="text-center">500mg</td>
                                    <td class="text-center">paracetamol</td>
                                    <td class="text-center">5</td>
                                    <td class="text-center">25.000</td>
                                    <td class="text-center">viên</td>
                                    <td>uống sau ăn</td>
                                    <td><i class="fa fa-trash pointer" aria-hidden="true"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-footer">
                        <div class="ke-thuoc">
                            <div class="row">
                                <div class="col-2 color-red">
                                    Tạm ứng: 1.000.000
                                </div>
                                <div class="col-2 color-red">
                                    Tổng tiền: 50.000
                                </div>
                                <div class="col-2 color-red">
                                    BHYT trả: 10.000
                                </div>
                                <div class="col-2 color-red">
                                    BN thanh toán: 40.000
                                </div>
                                <div class="col-2"></div>
                                <div class="col-2">
                                    <div class="dropdown">
                                        <button
                                            class="btn dropdown-toggle font-13 btn-sm btn-don-thuoc"
                                            type="button" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <i class="fa fa-address-book"
                                                aria-hidden="true"></i> Đơn thuốc
                                        </button>
                                        <div class="dropdown-menu font-13"
                                            aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#" aria-hidden="true"
                                                data-toggle="modal"
                                                data-target=".modal-ke-toa-nhanh">Đơn thuốc
                                                mẫu</a>
                                            <a class="dropdown-item" href="#">Đơn thuốc cũ</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2 font-13">
                                <div class="col-2">
                                    <div class="form-group margin-bottom-0">
                                        <label for="">Kho thuốc:</label>
                                        <select name="" id=""
                                            class="form-control form-control-custom">
                                            <option value="">Kho A</option>
                                            <option value="">Kho B</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="form-group margin-bottom-0">
                                        <label for="">Tên thuốc</label>
                                        <input type="text"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="form-group margin-bottom-0">
                                        <label for="">Đơn vị</label>
                                        <input id="ke_thuocDonVi" type="text"
                                            class="form-control form-control-custom" readonly
                                            value="Viên">
                                    </div>
                                </div>
                                <div class="col-2 max-width-11">
                                    <div class="form-group margin-bottom-0">
                                        <label for=""> Số Lượng</label>
                                        <input id="ke_thuocSoLuong" type="number"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                                <div class="col-2 max-width-11">
                                    <div class="form-group margin-bottom-0">
                                        <label for="">Lượng dùng</label>
                                        <input id="ke_thuocLuongDung" type="number"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                                <div class="col-2 max-width-11">
                                    <div class="form-group margin-bottom-0">
                                        <label for="">Số lần</label>
                                        <input id="ke_thuocSoLan" type="number"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group margin-bottom-0">
                                        <label for="">sử dụng</label>
                                        <input id="ke_thuocSuDung" type="text"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                            </div>
                            <div class="row height-35 mt-1">
                                <div class="col-2 text-right font-13"><label for="">Cách dùng:
                                    </label>
                                </div>
                                <div class="col-10">
                                    <div class="form-group margin-bottom-0">
                                        <input id="ke_thuocCachDung" type="text"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                            </div>
                            <div class="row height-35">
                                <div class="col-2 text-right font-13"><label for="">Lời dặn bác
                                        sĩ: </label>
                                </div>
                                <div class="col-10">
                                    <div class="form-group margin-bottom-0">
                                        <input type="text"
                                            class="form-control form-control-custom">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="nhapVien" v-if="huongDieuTri=='nhap_vien'">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2 max-width-11 font-700">Khoa nhập</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value="">Khoa Nội</option>
                                    <option value="">Khoa Thận</option>
                                    <option value="">Khoa Ung Bướu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
            <div id="chuyenPhongKham" v-if="huongDieuTri=='chuyen_phong_kham'">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2 max-width-11 font-700">Chuyển đến</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value="">Phòng khám Nội</option>
                                    <option value="">Phòng khám Thận</option>
                                    <option value="">Phòng khám Ung Bướu</option>
                                </select>
                            </div>
                            <div class="col-2 max-width-11 font-700">Hình thức</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value=""></option>
                                    <option value="">Khám giáo sư</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
            <div id="chuyenKhamChinh" v-if="huongDieuTri=='chuyen_kham_chinh'">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-2 max-width-11 font-700">Chuyển đến</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value="">Phòng khám Nội</option>
                                    <option value="">Phòng khám Thận</option>
                                    <option value="">Phòng khám Ung Bướu</option>
                                </select>
                            </div>
                            <div class="col-2 max-width-11 font-700">Hình thức</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value=""></option>
                                    <option value="">Khám Nội 0đ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
            <div id="tuVong" v-if="huongDieuTri=='tu_vong'">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="row">
                            <h6 style="color: #007944;">THÔNG TIN TỬ VONG</h6>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2">Ngày tử vong</div>
                            <div class="col-3">
                                <input type="date" class="form-control form-control-custom" />
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2">Nguyên nhân tử vong</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value="">Tai nạn</option>
                                    <option value="">Sốc thuốc</option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2 ">Tình trạng tử vong</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value="">Tại chỗ</option>
                                    <option value="">Trước lúc đến</option>
                                    <option value="">Trong 24h</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
            <div id="chuyenVien" v-if="huongDieuTri=='chuyen_vien'">
                <div class="card card-custom">
                    <div class="card-body">
                        <div class="row">
                            <h6 style="color: #007944;">THÔNG TIN CHUYỂN VIỆN</h6>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2">Tuyến chuyển</div>
                            <div class="col-3">
                                <select class="form-control form-control-custom">
                                    <option value="">Tuyến trên</option>
                                    <option value="">Tuyến dưới</option>
                                </select>
                            </div>
                            <div class="col-1">Lý do</div>
                            <div class="col-6">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Dấu hiệu lâm sàng</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Các xét nghiệm</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Thuốc đã dùng</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Tình trạng người bệnh</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Hướng điều trị</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Phương tiện vận chuyển</label>
                            </div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Người đưa đi</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                        <div class="row mt-1">
                            <div class="col-2"><label for="">Chuyển tuyến lúc</label></div>
                            <div class="col-10">
                                <input type="text" class="form-control form-control-custom">
                            </div>
                        </div>
                    </div>
                    <div class="card-footer"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            huongDieuTri:''
        }
    }
}
</script>

<style scoped>
    .form-control-custom{height: 30px !important;padding:0 7px}
    .max-width-11{max-width: 11%;}
    .max-width-12{max-width: 12%;}
    .min-height-73{min-height: 73vh;}
    .table td{padding: 0}
</style>