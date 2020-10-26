<template>
  <div class="home">
    {{id}}
    <img alt="Vue logo" src="../assets/logo.png" id="img">

    <div id='test' v-for="(item,index) in test" :key="item.key">
      <div ref="texts"  @click="onClick(item,index)">{{item.testInput}}</div>
      <input :id="`inputs${item.key}`" ref="inputs" @blur="onBlur(item,index)" v-model="item.testInput" type="text"  style="display: none"/>
    </div>


    <HelloWorld msg="Welcome to Your Vue.js App"/>


    <div>
      <h2>Cell Editing</h2>
      <DataGrid :data="data1" :clickToEdit="true" selectionMode="cell" editMode="cell" style="height:250px">
        <GridColumn field="itemid" title="Item ID" :editable="true"></GridColumn>
        <GridColumn field="name" title="Name" :editable="true"></GridColumn>
        <GridColumn field="listprice" title="List Price" align="right" :editable="true">
          <template slot="edit" slot-scope="scope">
            <NumberBox v-model="scope.row.listprice" :precision="1"></NumberBox>
          </template>
        </GridColumn>
        <GridColumn field="unitcost" title="Unit Cost" align="right" :editable="true">
          <template slot="edit" slot-scope="scope">
            <NumberBox v-model="scope.row.unitcost"></NumberBox>
          </template>
        </GridColumn>
        <GridColumn field="attr" title="Attribute" width="30%" :editable="true"></GridColumn>
        <GridColumn field="status" title="Status" align="center" :editable="true">
          <template slot="body" slot-scope="scope">
            {{scope.row.status ? 'true' : 'false'}}
          </template>
          <template slot="edit" slot-scope="scope">
            <SwitchButton v-model="scope.row.status" style="max-width:80px" onText="true" offText="false"></SwitchButton>
          </template>
        </GridColumn>
      </DataGrid>
    </div>

  </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {

        name: 'home',

        components: {
            HelloWorld
        },
        data(){
            return{
                  title:'asdfsdf',
                  id:1,
                  isClick:false,
                  testInput:'sdfsdf',

                  test:[
                      {
                          key:1,
                          testInput:"sdfsdf",


                      },{
                          key:2,
                          testInput:"sdfsdf",

                      }
                  ],
                  data1:[]
                }
              },
        metaInfo () {
            return {
                title:this.title,
                meta: [
                    {name:'twitter:title',content:'Eigaland Cinema tool'},
                    {name:'twitter:description',content:'Eigaland Cinema tool Description'},
                    {name:'twitter:image',content:''},
                    {name:'twitter:card',content:''},
                    {name:'twitter:url',content:''},
                    {property:'og:image',content:''},
                    {property:'og:locale',content:''},
                    {property:'og:type',content:''},
                    {property:'og:url',content:''},

                ]
            }
        },
        created(){
            console.log(this.$VueMeta)
            fetch('https://api.github.com/repos/facebook/react').then(function(res){//https://api.github.com/repos/facebook/react
                // 请求成功，得到 response 对象，调用 response 对象的 json 方法并返回
                // console.log(res)
                return res.json();
            }).then((data)=>{
                console.log(data)
                this.id=data.id;
            })

            this.data1=[
                {
                    "code": "FI-SW-01",
                    "name": "Koi",
                    "unitcost": 10.00,
                    "status": "P",
                    "listprice": 36.50,
                    "attr": "Large",
                    "itemid": "EST-1"
                },
                {
                    "code": "K9-DL-01",
                    "name": "Dalmation",
                    "unitcost": 12.00,
                    "status": "P",
                    "listprice": 18.50,
                    "attr": "Spotted Adult Female",
                    "itemid": "EST-10"
                }
                ]

            console.log(this.id)
        },
        methods:{
             onClick(item,index){

//                setTimeout(()=>{
//                    console.log([`inputs${item.key}`])
//                   this.$refs[`inputs${item.key}`].focus()
//                },0)

                 this.$nextTick(function () {
                     console.log(this.$refs.inputs)
                     this.$refs.texts[index].style.display="none"
                     this.$refs.inputs[index].style.display="inline-block"
                     this.$refs.inputs[index].focus()
                     //document.getElementById(`inputs${item.key}`).focus()
                 })


            },
            onBlur(item,index){
                this.$refs.texts[index].style.display=" inline-block"
                this.$refs.inputs[index].style.display="none"
            }
        }

    }
</script>
<style>
</style>
