<template>
    <div>
        <div>
            <p>query：{{$route.query}}</p>
            <h1>my name is '{{parentName}}'</h1>
            <ul>
                <li>
                    <h3>my&nbsp;children&nbsp;:</h3>
                </li>
                <li v-for="child in childName" v-text="child.selChild"></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default ({
        data () {
            return {
                parentName:'',
                childName:''
            }
        },
        created () {
            this.getname();
        },
        methods:{
            getname:function(){
                console.log(this.$route.params.content);
                console.log(this.$route.params.userid);
                this.childName=this.$route.params.content;
                this.parentName=this.$route.params.userid;
            }
        },
        watch: {
          '$route' : "getname"
        }
    })
</script>
<style scoped>
    li{
        background:#fff;
        line-height: 50px;
    }
</style>
