<template>
  <div class="">
    <form @submit.prevent="submit" class="vld-parent" ref="formContainer">
      <!-- your form inputs goes here-->
      <label><input type="checkbox" v-model="fullPage" />Full page?</label>
      <label><input type="checkbox" v-model="canCancel" />Can cancel?</label>
      <button type="submit">Login</button>
    </form>

    <span>{{ "30-10-2018" | moment("DD/mm/YYYY") }}</span>
    <div>
      <h2>Basic Tree</h2>
      <TreeGrid
        style="height:250px"
        :data="data"
        idField="id"
        treeField="name"
        :cascadeCheck="true"
        :checkbox="checkbox"
        @checkChange="checkedNodes = $event"
        selectionMode="multiple"
        @rowCheck="rowCheck = $event"
      >
        <GridColumn field="name" title="Name"></GridColumn>
        <GridColumn field="size" title="Size"></GridColumn>
        <GridColumn field="date" title="Date"></GridColumn>
      </TreeGrid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullPage: false,
      canCancel: true,
      date: "Wed Jan 08 2020 13:02:33 GMT+0700 (Indochina Time)",
      selection: null,
      data: this.getData(),
      checkbox: true,
      checkedNodes: null,
      rowCheck: null
    };
  },
  methods: {
    submit() {
      let loader = this.$loading.show({
        // Optional parameters
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: this.canCancel,
        onCancel: this.onCancel
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 3000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    getData() {
      return [
        {
          id: 1,
          name: "C",
          size: "",
          date: "02/19/2010",
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
        },
        {
          id: 2,
          name: "D",
          size: "",
          date: "02/19/2010",
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
    },
  },
  created() {
    console.log(123, this.checkedNodes);
    console.log(123, typeof new Date());
  },
  watch: {
    rowCheck(newVal) {
      console.log(newVal);
    }
  }
};
</script>
<style lang="scss">
    .tree-icon.tree-folder{display: none}
</style>
