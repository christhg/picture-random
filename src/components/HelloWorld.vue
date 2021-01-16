<template>
<b-container @click="refreshImages">
  <!-- <button type="button" class="btn btn-primary mb-1" @click="refreshImages">Refresh</button> -->
  <b-row v-for="item1 in items" :key="item1" class="mb-1">
    <b-col v-for="item2 in items" :key="item2" class="mt-0">
      <!-- <b-img thumbnail fluid :src="getImageUrl(50+item1*6+item2)" alt="Image 1"></b-img> -->
      <b-img fluid-grow :src="getImageUrl(imagePool[item1*6+item2])" alt="Image 1"></b-img>
      <!-- <span>{{imagePool[item1*6+item2]}}</span> -->
    </b-col>
  </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return {
      items: [0,1,2,3,4,5],
      imagePool:[],
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
        width: 800,
        height: 600,
        class: 'my-5'
      }
    }
  },
  created(){
      this.createRandomImages()
  },
  computed: {
    imageNums(){
      return this.items.length*this.items.length
    }
  },
  methods:{
      getImageUrl(imageId) {
        //-----url路徑
        //const { width, height } = this.mainProps
        //return `https://picsum.photos/${width}/${height}/?image=${imageId}`

        //-----本地/assets目錄
        var images = require.context('../assets/', false, /\.jpg$/); 
        return images('./' + imageId + ".jpg")
      },
      randomImage() {
        const idx = Math.floor(Math.random()* this.imageNum); //Math.floor(Math.random() * this.images.length);
        return idx; 
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
          return nums
      },
      createRandomImages(){
        this.imagePool = this.createRandomNums()
        //console.log(this.imagePool)
      },
      refreshImages(){
        //this.$router.go(0)
        this.createRandomImages()
      }
  }
}
</script>

<style scoped lang="css">
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 5px;
  padding-left: 5px;
  width: 100%;
  max-width: 1140px;  /* 隨螢幕尺寸而變，當螢幕尺寸 ≥ 1200px 時是 1140px。 */
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -30px;
  margin-left: -30px;
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
