<template>
<b-container >
  <b-row v-for="item1 in items" :key="item1" class="mb-1">
    <b-col v-for="item2 in items" :key="item2" class="mt-0">
      <!-- <b-img thumbnail fluid :src="getImageUrl(50+item1*6+item2)" alt="Image 1"></b-img> -->
      <b-img fluid-grow :src="getImageUrl(10+imagePool[item1*6+item2])" alt="Image 1"></b-img>
      <!-- <span>{{imagePool[item1*6+item2]}}</span> -->
    </b-col>
  </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src
//import { getTableList } from '@/api/serviceDomi'
//import axios from 'axios'
//import FileUpLoad from '@/components/FileUpload.vue'

export default {
  // components: {
  //   FileUpLoad
  // },
  data(){
    return {
      items: [0,1,2,3,4,5],
      imagePool:[],
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 600,
        height: 600,
        class: 'my-5'
      }
    }
  },
  created(){
      this.imagePool = this.createRandomNums()
      console.log(this.imagePool)
  },
  computed: {
  },
  methods:{
      getImageUrl(imageId) {
        const { width, height } = this.mainProps
        return `https://picsum.photos/${width}/${height}/?image=${imageId}`
      },
      randomImage() {
        const idx = Math.floor(Math.random()*36); //Math.floor(Math.random() * this.images.length);
        return idx; //this.selectedImage = this.images[idx];
      },
      createRandomNums(){
          function randomNumber(max) {
            return Math.floor(Math.random() * max + 1);
          }
          
          const nums = []
          while(nums.length < 36 ){
              let nbr = randomNumber(36)
              if(!nums.find(el => el === nbr)) nums.push(nbr) 
          }
          //console.log("list",list)
          return nums
      }
      // aRandom(f,c){
      //   var r = Math.floor(Math.random()*c);
      //   this.aRandom._a[r] ? this.aRandom(f,c) : f(r,this.aRandom._a[r] = 1);
      // },
      // doRandom(){
      //   var len = 10;
      //   var resultset = [];
      //   for(var i =0; i< len; i++){
      //     this.aRandom(function(r){ resultset.push(r); }, len);
      //   }
      //   console.log(resultset);
      // }
  }
}
</script>

<style scoped lang="css">
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 1140px;  /* 隨螢幕尺寸而變，當螢幕尺寸 ≥ 1200px 時是 1140px。 */
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col {
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  min-height: 1px;
  padding-right: 2px;
  padding-left: 2px;
}
</style>
