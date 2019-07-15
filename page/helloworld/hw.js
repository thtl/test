// Page(
//   {
//     // data : {
//     //   // items: [
//     //   //     {name: "商品A"},
//     //   //     {name: "商品B"},
//     //   //     {name: "商品C"},
//     //   //     {name: "商品D"},
//     //   //     {name: "商品A"}
//     //   // ]
//     //   // flag: Math.floor(Math.random()*3+1)
//     //   item: {
//     //     name:"张三",
//     //     phone:"156xxxxxxxx",
//     //     address:"广州xxxxx"
//     //   }
//     // }
    
//     clickA() {
//       console.log('A')
//     },
//     clickB() {
//       console.log('B')
//     },
//     clickC() {
//       console.log('C')
//     },
//     catchA() {
//       console.log("catchA")
//     },
//     catchB() {
//       console.log("catchB")
//     },
//     catchC() {
//       console.log("catchC")
//     }
//   }
// )
// const order = ['red', 'yellow', 'blue', 'green', 'red']
// Page({
//   data: {
//     toView: "red",
//     scrollTop: 100
//   },
//   upper(e) {
//     console.log(e)
//   },
//   lower(e) {
//     console.log(e)
//   },
//   scroll(e) {
//     console.log(e)
//   },
//   tap(e) {
//     for (let i = 0; i < order.length; ++i) {
//       if (order[i] === this.data.toView) {
//         this.setData({
//           toView: order[i + 1]
//         })
//         break
//       }
//     }
//   },
//   tapMove(e) {
//     this.setData({
//       scrollTop: this.data.scrollTop + 10
//     })
//   }
// })

Page({
  data: {
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      "../../img/1.jpg",
      "../../img/2.jpg",
      "../../img/3.jpg",
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})