import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

Vue.use(Vuex)
 
export const store = new Vuex.Store({
    state: {
      value: '',
      isNavMenuBar: false,
      patientSttArray: [
        {name:'BHYT', color:"#2a39ff"},
        {name:'Cấp cứu', color:"#f92c2c"},
        // {name:'TNGT', color:"#f92c2c"},
        // {name:'BHTM', color:"#2a39ff"},
        // {name:'Có thai', color:"#ff7b2b"},
      ],
      patientArray:[
        {id: 1, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Đang khám", timer: ""},
        {id: 2, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Ưu tiên", timer: ""},
        {id: 3, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Hẹn khám", timer: "9:00"},
        {id: 4, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ", timer: ""},
        {id: 5, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ khám", timer: ""},
        {id: 6, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Đang khám", timer: ""},
        {id: 7, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Ưu tiên", timer: ""},
        {id: 8, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Hẹn khám", timer: "9:00"},
        {id: 9, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ", timer: ""},
        {id: 10, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ khám", timer: ""},
        {id: 1, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Đang khám", timer: ""},
        {id: 2, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Ưu tiên", timer: ""},
        {id: 3, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Hẹn khám", timer: "9:00"},
        {id: 4, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ", timer: ""},
        {id: 5, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ khám", timer: ""},
        {id: 6, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Đang khám", timer: ""},
        {id: 7, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Ưu tiên", timer: ""},
        {id: 8, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Hẹn khám", timer: "9:00"},
        {id: 9, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ", timer: ""},
        {id: 10, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ khám", timer: ""},
        {id: 1, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Đang khám", timer: ""},
        {id: 2, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Ưu tiên", timer: ""},
        {id: 3, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Hẹn khám", timer: "9:00"},
        {id: 4, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ", timer: ""},
        {id: 5, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ khám", timer: ""},
        {id: 6, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Đang khám", timer: ""},
        {id: 7, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Ưu tiên", timer: ""},
        {id: 8, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00", status: "Hẹn khám", timer: "9:00"},
        {id: 9, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ", timer: ""},
        {id: 10, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ khám", timer: ""},
      ],
      henKhamArray:[
        {id: 1, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00",  timer: "8:00"},
        {id: 2, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00", timer: "8:20"},
        {id: 3, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00",  timer: "9:00"},
        {id: 4, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00",  timer: "9:05"},
        {id: 5, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00",  timer: "9:35"},
        {id: 6, name: "Khach hang 1", date: 1992, gender: "Nam", timeWaited: "1:00",  timer: "9:50"},
        {id: 7, name: "Khach hang 2", date: 1992, gender: "Nam", timeWaited: "1:00",  timer: "10:00"},
        {id: 8, name: "Khach hang 3", date: 1992, gender: "Nam", timeWaited: "1:00",  timer: "10:30"},
        {id: 9, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00",  timer: "11:00"},
        {id: 10, name: "Khach hang 5", date: 1992, gender: "Nữ", timeWaited: "1:00",  timer: "12:00"},
      ],
      chodocKQArray:[
        {id: 1, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ",},
        {id: 2, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ",},
        {id: 3, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ",},
        {id: 4, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ",},
        {id: 5, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ",},
        {id: 6, name: "Khach hang 4", date: 1992, gender: "Nữ", timeWaited: "1:00", status: "Chờ đọc KQ",},
      ],
      ketthuckhamArray:[
        {id: 1, name: "Khach hang 4", date: 1992, gender: "Nữ", solution: "Kê toa cho về", doctor:"Nguyen van A"},
        {id: 2, name: "Khach hang 4", date: 1992, gender: "Nữ", solution: "Kê toa cho về", doctor:"Nguyen van A"},
        {id: 3, name: "Khach hang 4", date: 1992, gender: "Nữ", solution: "Kê toa cho về", doctor:"Nguyen van A"},
        {id: 4, name: "Khach hang 4", date: 1992, gender: "Nữ", solution: "Kê toa cho về", doctor:"Nguyen van A"},
        {id: 5, name: "Khach hang 4", date: 1992, gender: "Nữ", solution: "Kê toa cho về", doctor:"Nguyen van A"},
        {id: 6, name: "Khach hang 4", date: 1992, gender: "Nữ", solution: "Kê toa cho về", doctor:"Nguyen van A"},

      ],
      lichsukhamArray:[
        {mapk: "TC123124431", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},
        {mapk: "TC12678678", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},
        {mapk: "TC12763453", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},
        {mapk: "TC16834455", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},
        {mapk: "TC13456363", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},
        {mapk: "TC12312341", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},
        {mapk: "TC23423099", phongkham: 'Nội 2', ngaykham:"10/10/2010", ngayketthuc: "20/10/2012"},

      ]
    },
    getters,
    mutations,
    actions,
    modules:{
    }
  })