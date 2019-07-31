<template>
    <base-page>
        <base-header slot="header" title="首页1" isRight
            @onClickLeft="onClickLeft"
            @onClickRight="onClickRight"
         />
        <div slot="content">
            <home-list v-for="(list, index) in lists" :list="list" :key="index"></home-list>
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
</style>
