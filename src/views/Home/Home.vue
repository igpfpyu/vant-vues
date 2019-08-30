<template>
    <base-page>
        <base-header slot="header" title="首页" isRight
            @onClickLeft="onClickLeft"
            @onClickRight="onClickRight"
         />
        <div slot="content">
            <home-list @itemClick="itemClick" v-for="(list, index) in lists" :list="list" :key="index"></home-list>
            <div class="footer">没有更多</div>
        </div>

    </base-page>
</template>

<script>
    import BaseHeader from "@/components/BaseHeader/BaseHeader";
    import BasePage from "@/components/BasePage/BasePage";
    import HomeList from "@/views/Home/HomeList/HomeList";
    export default {
        name: "Home",
        components: {HomeList, BasePage, BaseHeader},
        methods:{
            onClickLeft(params){
                console.log(params)
            },
            onClickRight(params){
                console.log(params);
            },
            itemClick(list){
                console.log(JSON.stringify(list));
            }
        },
        data(){
            return {
                lists:[
                    {
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:"http://cms-bucket.ws.126.net/2019/07/31/ac80bd24bc0f4c15a1831d76c5c4c9ac.png?imageView&thumbnail=140y88&quality=85"
                    },{
                        title:"美联储利率决议前夜：华尔街双面下注掘金＂降息＂",
                        name:"央视新闻",
                        now:2222,
                        img:""
                    },
                ]
            }
        }
    }
</script>
<style scoped lang="less">
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size:12px;
        padding:10px 0;
        color:#999;
    }
</style>
