<template>
    <div>
        Detail Page
        {{IP}}
    </div>
</template>

<script>
    export default {
        data(){
            return{
                IP:'234'
            }
        },
        metaInfo () {
            return {
                title:'detail',
                meta: [

                    {property:'og:image',content:'https://blog.twitter.com/content/dam/blog-twitter/official/universal-assets/Generic_BlogShare.jpg'}

                ]
            }
        },
        created(){
            console.log(this.IP)
        }
    }
</script>

<style scoped>

</style>