<script setup>
import dark from "@/assets/dark.webp"
import clk from "@/assets/clk.svg";
</script>


<template>
  <div class="main">
    <img class="main_pic" :src="dark" alt="">
    <div class="main_box">
      <div class="main_box_title">
        <h1>The Dark Knight</h1>
        <span>Action, Crime, Drama</span>
      </div>
      <div class="main_box_desc">
        <p>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
      </div>
      <div class="main_box_info">
        <ul class="main_box_info_list">
          <li class="main_box_info_item">PG-13</li>
          <li class="main_box_info_item">2008</li>
          <li class="main_box_info_item">
            <img :src="clk" alt="">
            <span>152 min</span>
          </li>
        </ul>
      </div>
      <div class="main_box_detail">
        <div class="main_box_detail_rate">
          <div class="main_box_detail_rate_circle">
            <span>9.1</span>
          </div>
          <div class="main_box_detail_rate-result"> 
            <span>2,528,462</span>
            <p>ratings on IMDB</p>
          </div>
        </div>
        <div class="main_box_detail_percent">
          <p>94% on Rotten Tomatoes
            84/100 on Metacritic</p>
         
          

        </div>

      </div>

    </div>
  </div>
</template>
<style>
.main{
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: linear-gradient(#070D2300 , #070D2300 70%, #070D2300 90%, #070D2300);
}
.main_pic{
  width: 437px;
  height: 379px;
  
}
.main_box{
  width: 406px;
  height: 1362px;
  border: solid 1px red;
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  position: relative;
  z-index: 1;
  font-family: "Inter";

}
.main_box_title{
  width: 406px;
  height: 73px;
  border: solid 1px yellow;
 
}
.main_box_title h1{
  font-weight: 700;
  font-size: 48x;
  line-height: 58.09px;
  color: white;
  margin: 0;
  margin-top: -10px;
  
}
.main_box_title span{
  font-weight: 300;
  font-size: 12px;
  line-height: 14.52px;
  opacity: 40%;
  position: relative;
  top: -10px;

}
.main_box_desc{
  width: 406px;
  height: 96px;
  border: solid 1px blue;
}
.main_box_desc p{
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  text-align: justify;
  line-height: 24px;
  color: #ffffff;
  opacity: 60%;
  word-spacing: 2px;

}
.main_box_info{
  /* display: flex;
  justify-content: space-between; */
  width: 224px;
  height: 27px;
  /* border: solid 1px palevioletred; */
  margin-top: 20px;

}
.main_box_info_list{
  list-style-type: none;
  display: flex;
  /* gap: 10px; */
  margin: 0;
  padding: 0;
  justify-content: space-between;

}
.main_box_info_item{
 background-color: #222C4F;
 padding: 6px 12px;
 border-radius: 8px;
 font-size: 12px;
 font-weight: 400;
 /* letter-spacing: 2px; */

}
.main_box_detail{
  width: 406px;
  height: 80px;
  border: solid 1px pink;
  margin-top: 20px;
  display: flex;
}
  .main_box_detail_rate{
    /* width: 198px; */
    /* height: 80px; */
    /* border: solid 1px red; */
    display: flex;
    justify-content: space-between;
  }
  .main_box_detail_percent{
    /* width: 198px; */
    /* height: 80px;
    border: solid 1px red; */
  }
  .main_box_detail_rate_circle{
     width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 6px #724CF9 ;
  
  }
  .main_box_detail_rate_circle span{
    text-align:  center;
    font-weight: 700;
    font-size: 24px;
    line-height: 29.05px;
   
   position: relative;
   top: 17px;
   left: 20px;
 
    
  }
  .main_box_detail_rate-result{
    /* width: 100px;
    height: 53px; */
    /* border: solid 1px white; */
    margin-top: 14px;
    text-align: left;
    padding-left: 20px;
    font-size: 16px;
    font-weight: 700;
  }
  .main_box_detail_percent p {
    /* padding-left: 20px; */
    font-size: 13px;
    opacity: 50%;
    margin-left: 60px;
    margin-top: 20px;

  }

</style>
