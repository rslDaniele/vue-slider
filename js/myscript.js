var app = new Vue({
  el: "#app",
  data:{
    photoIndex: 0,
    image:["img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg"]
  },

  methods:{
    nextPic:function(){this.photoIndex++;

      if (this.photoIndex>(this.image.length-1)) {
          this.photoIndex=0
      }
      console.log(this.photoIndex);
    },

    previousPic:function () {

      this.photoIndex--;

      if (this.photoIndex<0) {
          this.photoIndex=(this.image.length-1);
      }
      console.log(this.photoIndex);
    }
  }
})
