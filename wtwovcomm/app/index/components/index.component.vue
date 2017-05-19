<template>
    <div id="box">
        <header-main></header-main>
        <div id="main">
            <!-- <div @click="bb" v-text="app"></div>
            <transition name="fade">
                <div v-if="shows">appChild</div>
            </transition> -->
            <ul>
                <li v-for="(item,index) in list">
                    <!-- <p @click="item.show=!item.show">{{item.select}}</p> -->
                    <p @click="showChild(index)">{{item.select}}</p>
                    <transition>
                        <ol v-show="item.show">
                            <li v-for="itemChild in (item.options)"><router-link :to="{name:'select',params:{userid:itemChild.selChild,content:item.options},query:{user:1}}">{{itemChild.selChild}}</router-link></li>
                        </ol>
                    </transition>
                </li>
                <li>
                    <p><a href="./about.html">to about</a></p>
                </li>
            </ul>
            <router-view></router-view>
        </div>
        <footer-main></footer-main>
    </div>
</template>
<script>
    import $ from 'jquery'
    import Header from '../../components/header.component'
    import Footer from '../../components/footer.component'
    // import infotions from '../../components/infotion.components.vue'
    export default {
        data() {
            return {
                app: "App",
                shows: false,
                list: [{
                        "show": true,
                        "select": "select1",
                        "options": [{
                                "selChild": "selChild1.1"
                            },
                            {
                                "selChild": "selChild1.2"
                            },
                            {
                                "selChild": "selChild1.3"
                            }
                        ]
                    },
                    {
                        "show": false,
                        "select": "select2",
                        "options": [{
                                "selChild": "selChild2.1"
                            },
                            {
                                "selChild": "selChild2.2"
                            },
                            {
                                "selChild": "selChild2.3"
                            },
                            {
                                "selChild": "selChild2.4"
                            }
                        ]
                    },
                    {
                        "show": false,
                        "select": "select3",
                        "options": [{
                                "selChild": "selChild3.1"
                            },
                            {
                                "selChild": "selChild3.3"
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            'headerMain': Header,
            'footerMain': Footer
        },
        methods: {
            showChild: function(a) {
                //this.list[a].show=!this.list[a].show;
                if (this.list[a].show) {
                    $("ul p").eq(a).next().stop().slideUp();
                    this.list[a].show = !this.list[a].show;
                } else {
                    $("ul p").eq(a).next().stop().slideDown();
                    this.list[a].show = !this.list[a].show;
                }
            }
        }
    }
</script>
<style>
    @import '../../../node_modules/animate.css/animate.css';
    * {
        margin: 0;
        padding: 0;
    }

    html,
    body,
    #box {
        width: 100%;
        height: 100%;
    }

    ul,
    li,
    ol {
        list-style: none;
    }

    #box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }

    #main {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
    }

    ul {
        width: 25%;
        background: #999;
        height: 100%;
    }

    ul p {
        line-height: 50px;
        border-bottom: 1px dashed red
    }

    ol>li {
        line-height: 30px;
        border-bottom: 1px solid green
    }

    ol {
        text-indent: 40px;
    }
</style>
