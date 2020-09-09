<template>
    <div class="mt-3" >
        <ul class="nav nav-tabs nav-tabs-custom1 mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active bgunset" id="pills-home-tab" data-toggle="pill"
                    href="#pills-home" role="tab" aria-controls="pills-home"
                    aria-selected="true">Xét nghiệm</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-profile-tab" data-toggle="pill"
                    href="#pills-profile" role="tab" aria-controls="pills-profile"
                    aria-selected="false">CDHA</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill"
                    href="#pills-contact" role="tab" aria-controls="pills-contact"
                    aria-selected="false">PTTT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill"
                    href="#pills-contact" role="tab" aria-controls="pills-contact"
                    aria-selected="false">Kháng sinh đồ</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="pills-contact-tab" data-toggle="pill"
                    href="#pills-contact" role="tab" aria-controls="pills-contact"
                    aria-selected="false">Giải phẫu bệnh</a>
            </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <table class="table table-bordered table-sm tree-basic">
                    <thead>
                        <tr>
                            <th>Ngày có kết quả</th>
                            <th>Chỉ số</th>
                            <th>Kết quả xét nghiệm</th>
                            <th>Chỉ số bình thường</th>
                            <th>Đơn vị tính</th>
                            <th>Ngày chỉ định</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="treegrid-1 expanded">
                            <td class="font-700" colspan="6"><div class="treegrid-container" style="margin-left: 24px;"><span class="treegrid-expander treegrid-expander-expanded"></span>Phòng khám ung bướu</div></td>
                        </tr>
                        <tr class="treegrid-2 treegrid-parent-1 expanded">
                            <td class="font-700" colspan="6"><div class="treegrid-container" style="margin-left: 48px;"><span class="treegrid-expander treegrid-expander-expanded"></span><input type="checkbox">
                                28/10/2019</div></td>
                        </tr>
                        <tr class="treegrid-3 treegrid-parent-2 expanded" style="">
                            <td class="font-700" colspan="6"><div class="treegrid-container" style="margin-left: 72px;"><span class="treegrid-expander treegrid-expander-expanded"></span><input type="checkbox"> Sinh
                                hóa máu</div></td>
                        </tr>
                        <tr class="treegrid-4 treegrid-parent-3" style="">
                            <td><div class="treegrid-container" style="margin-left: 96px;"><span class="treegrid-expander"></span><input type="checkbox"> Định lượng Glucose (Máu)</div></td>
                            <td></td>
                            <td class="color-red">4.0</td>
                            <td>(4.10 - 5.90)</td>
                            <td>mmol/l</td>
                            <td>20/10/2019</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .nav-link.active{background-color: unset !important;}
    .nav-tabs .nav-link.active{color: #000;border-color: rgb(200, 200, 200)}
    .nav-link{padding: 7px 8px;color: #000}
</style>