<template>
    <div >  
        <div class="row header-panel sticky-top">
            <div class="col-5">
                <h3>Danh sách khách hàng</h3>
                <h5>Tổng số KH: 100</h5>
                <select v-model="selected" @change="onChange($event)" class="form-control form-control-sm">
                    <option value="0">Màn hình khám</option>
                    <option value="1">Hẹn khám</option>
                    <option value="2">Chờ đọc kết quả</option>
                    <option value="3">Kết thúc khám</option>
                    <option value="4">Khám hội chẩn</option>
                </select>
            </div>
            <div class="row col-6">
                <div class="col-6">
                    <label>Hội chẩn: 20</label>
                    <label>Chuyển khám: 30</label>
                </div>
                <div class="col-6">
                    <label>Hẹn khám: 30</label>
                    <label>Chờ đọc KQ: 20</label>
                </div>
            </div>
        </div>
        
        <div class="row body-panel">
            <table class="table table-hover table-striped table-sm col-12 tableFixHead">
                <thead >
                    <tr >
                        <th style="background-color: white"  v-for="(obj,key) in titleArray" :key="key"> {{obj}}</th>
                    </tr>
                </thead>
                <tbody v-if="selected == 0">
                    <tr v-for="(patient, key) in this.$store.state.patientArray" :key="key">
                        <td >{{patient.id}}</td>
                        <td>{{patient.name}}</td>
                        <td>{{patient.date}}</td>
                        <td>{{patient.gender}}</td>
                        <td>{{patient.timeWaited}}</td>
                        <td>{{patient.status}}</td>
                        <td>{{patient.timer}}</td>
                    </tr>
                </tbody>
                <tbody v-if="selected == 1">
                    <tr v-for="(patient, key) in this.$store.state.henKhamArray" :key="key">
                        <td >{{patient.id}}</td>
                        <td>{{patient.name}}</td>
                        <td>{{patient.date}}</td>
                        <td>{{patient.gender}}</td>
                        <td>{{patient.timeWaited}}</td>
                        <td>{{patient.timer}}</td>
                    </tr>
                </tbody>
                <tbody v-if="selected == 2">
                    <tr v-for="(patient, key) in this.$store.state.chodocKQArray" :key="key">
                        <td >{{patient.id}}</td>
                        <td>{{patient.name}}</td>
                        <td>{{patient.date}}</td>
                        <td>{{patient.gender}}</td>
                        <td>{{patient.timeWaited}}</td>
                        <td>{{patient.status}}</td>
                    </tr>
                </tbody>
                <tbody v-if="selected == 3 || selected == 4">
                    <tr v-for="(patient, key) in this.$store.state.ketthuckhamArray" :key="key">
                        <td >{{patient.id}}</td>
                        <td>{{patient.name}}</td>
                        <td>{{patient.date}}</td>
                        <td>{{patient.gender}}</td>
                        <td>{{patient.solution}}</td>
                        <td>{{patient.doctor}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="footer-panel" >
            <vue-ads-pagination
                :total-items="this.patientArray.length"
                :max-visible-pages="5"
                :page="page"
                :loading="loading"
                @page-change="pageChange"
                @range-change="rangeChange">
                <template slot-scope="props">
                    <div class="vue-ads-pr-2 vue-ads-leading-loose">
                        Khách hàng: {{ props.start }} - {{ props.end }} của {{ props.total }}
                    </div>
                </template>
                <template
                    slot="buttons"
                    slot-scope="props">
                    <vue-ads-page-button
                        v-for="(button, key) in props.buttons"
                        :key="key"
                        v-bind="button"
                        @page-change="page = button.page"
                    />
                </template>
            </vue-ads-pagination>
            <div class="btn-action mb-2">
                <button type="button" class="btn btn-success btn-action-item">Gọi tiếp</button>
                <button type="button" class="btn btn-success btn-action-item ">Bỏ khám</button>
                <button type="button" class="btn btn-success btn-action-item ">Chuyển khám</button>
            </div>
        </div>
    </div>
</template>

<script>
import {DefineData} from  '../../assets/public/defineData.js'
import '../../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css';
import VueAdsPagination,{VueAdsPageButton} from 'vue-ads-pagination';

export default {
    
    data(){
        return{
            selected: "0",
            titleArray: DefineData.manHinhKhamTitleArray,
            patientArray: this.$store.state.patientArray,
            page: 0,
            start: 0,
            end: 0,   
            loading: false,
        }
    },
    components: {
        VueAdsPagination,
        VueAdsPageButton,
    },
    methods:{
        onChange(event){
            if(event.target.value == 0){
                this.titleArray = DefineData.manHinhKhamTitleArray
                this.patientArray = this.$store.state.patientArray
            }else if(event.target.value == 1){
                this.titleArray = DefineData.henKhamTitleArray
                this.patientArray = this.$store.state.henKhamArray
            }else if(event.target.value == 2){
                this.titleArray = DefineData.choDocKQTitleArray
                this.patientArray = this.$store.state.chodocKQArray
            }else{
                this.titleArray = DefineData.ketThucKhamTitleArray
                this.patientArray = this.$store.state.ketthuckhamArray
            }
        },
        pageChange (page) {
              this.page = page;
              console.log('pagechange adkjaksdjaslkd' + page)
        },
        
        rangeChange (start, end, page) {
        	this.start = start;
            this.end = end;
            console.log('rangeChange' + start)
            console.log('rangeChange' + end)
            console.log('page' + this.page)
            this.patientArray = this.$store.state.henKhamArray
        }
    }
}
</script>

