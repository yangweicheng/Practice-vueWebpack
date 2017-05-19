<template>
    <div>
        <header-main></header-main>
        <div>
            <h1>{{list.name}}</h1>
            <h3>{{list.remarks}}</h3>
        </div>
        <div>
            <h4>
                <a href="./index.html">返回list页面</a>
            </h4>
        </div>
        <footer-main></footer-main>
    </div>
</template>
<script>
    import Header from '../../components/header.component.vue'
    import Footer from '../../components/footer.component.vue'
    import Ajson from '../../json/about.json'
    export default ({
        data () {
            return {
                list:Ajson
            }
        },
        created () {
            this.getData();
        },
        methods:{
            getData:function(){
                this.$http.post('http://my.bjtcxt.com/mynf/user/login',{"userId": 13812345678,"passwd": 5678,"loginType": 1})
                    .then((response)=>{
                        console.log(response.data)
                    })
            }
        },
        components:{
            headerMain:Header,
            footerMain:Footer
        }
    })
</script>
