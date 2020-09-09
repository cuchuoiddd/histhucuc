<template>
  <div class="card">
    <div class="card-header">
      <div class="row mt-3">
        <div class="col-2 color-red">
          Tạm ứng: 1.000.000
        </div>
        <div class="col-2 color-red">
          Chi phí: 180.000
        </div>
        <div class="col-2 color-red">
          BHYT trả: 0
        </div>
        <div class="col-4 color-red">
          BN thanh toán: 180.000
        </div>
      </div>
    </div>
    <div class="card-body card-body-custom">
      <TreeGrid
        style="height:50vh"
        :data="data"
        idField="id"
        treeField="name"
        :cascadeCheck="true"
        :checkbox="checkbox"
        @checkChange="checkedNodes = $event"
        selectionMode="multiple"
        @rowCheck="rowCheck = $event"
      >
        <GridColumnGroup>
          <GridHeaderRow>
            <GridColumn field="id" title="ID"></GridColumn>
            <GridColumn
              field="name"
              title="Tên dịch vụ"
              width="10%"
            ></GridColumn>
            <GridColumn field="size" title="Nhóm dịch vụ"></GridColumn>
            <GridColumn field="" title="Khoa/phòng"></GridColumn>
            <GridColumn field="" title="BS chỉ định"></GridColumn>
            <GridColumn field="" title="Giá DV"></GridColumn>
            <GridColumn field="" title="Giá BH"></GridColumn>
            <GridColumn field="" title="Tự chi trả"></GridColumn>
            <GridColumn field="" title="Mã phiếu"></GridColumn>
            <GridColumn field="" title="Nơi thực hiện"></GridColumn>
            <GridColumn field="" title="Cơ sở thự hiện"></GridColumn>
            <GridColumn field="date" title="Ngày chỉ định"></GridColumn>
            <GridColumn field="date" title="Ngày thực hiện"></GridColumn>
          </GridHeaderRow>
        </GridColumnGroup>
      </TreeGrid>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-6">
          <v-select
            v-model="selected"
            :options="['Vue.js', 'React']"
          ></v-select>
        </div>
        <div class="col-6 text-right">
          <a data-toggle="tooltip" data-placement="top" title="Chỉ định nhanh">
            <button class="btn mr-1 btn-success btn-sm" style="width:40px">
              <i class="fa fa-info" aria-hidden="true"></i>
            </button>
          </a>
          <button class="btn btn-sm btn-success">Xóa</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.getData(),
      checkbox: true,
      checkedNodes: null,
      rowCheck: null,
      selected: null
    };
  },
  methods: {
    getData() {
      return [
        {
          id: 1,
          name: "C",
          children: [
            {
              id: 2,
              name: "Program Files",
              size: "120 MB",
              date: "03/20/2010",
              children: [
                {
                  id: 21,
                  name: "Java",
                  size: "",
                  date: "01/13/2010",
                  state: "closed",
                  children: [
                    {
                      id: 211,
                      name: "java.exe",
                      size: "142 KB",
                      date: "01/13/2010"
                    },
                    {
                      id: 212,
                      name: "jawt.dll",
                      size: "5 KB",
                      date: "01/13/2010"
                    }
                  ]
                },
                {
                  id: 22,
                  name: "MySQL",
                  size: "",
                  date: "01/13/2010",
                  state: "closed",
                  children: [
                    {
                      id: 221,
                      name: "my.ini",
                      size: "10 KB",
                      date: "02/26/2009"
                    },
                    {
                      id: 222,
                      name: "my-huge.ini",
                      size: "5 KB",
                      date: "02/26/2009"
                    },
                    {
                      id: 223,
                      name: "my-large.ini",
                      size: "5 KB",
                      date: "02/26/2009"
                    }
                  ]
                }
              ]
            },
            {
              id: 3,
              name: "eclipse",
              size: "",
              date: "01/20/2010",
              children: [
                {
                  id: 31,
                  name: "eclipse.exe",
                  size: "56 KB",
                  date: "05/19/2009"
                },
                {
                  id: 32,
                  name: "eclipse.ini",
                  size: "1 KB",
                  date: "04/20/2010"
                },
                {
                  id: 33,
                  name: "notice.html",
                  size: "7 KB",
                  date: "03/17/2005"
                }
              ]
            }
          ]
        }
      ];
    }
  }
};
</script>
<style lang="scss" scope>
.datagrid-header-inner.f-full {
  height: 31px !important;
}
.tree-icon.tree-folder {
  display: none;
}
.card-body-custom {
  padding: 0;
}
.panel-body.panel-body-noheader {
  border-color: aliceblue;
}
</style>
