<template>
  <div class="home">
    {{id}}
    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld msg="Welcome to Your Vue.js App"/>

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
            console.log(this.id)
        }

    }
</script>
