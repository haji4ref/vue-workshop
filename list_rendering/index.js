var app = new Vue({
  el: '#app',
  data: {
    message:'Salam donya',
    items: [{
        id: 1,
        title: 'Car'
      },
      {
        id: 2,
        title: 'Book'
      },
      {
        id: 3,
        title: 'Shoe'
      },
      {
        id: 4,
        title: 'PC'
      },
    ],
    restaurants: [{
        id: 1,
        name: 'رستوران حاج محسن',
        type: 'irani',
        opens: 12,
      },
      {
        id: 2,
        name: 'رستوران مسلم',
        type: 'irani',
        opens: 11,
      },
      {
        id: 3,
        name: 'شیلا',
        type: 'fast-food',
        opens: 13
      },
      {
        id: 4,
        name: 'کافه آندورا',
        type: 'cafe',
        opens: 10,
      },
    ],
    search:'',
  },
  created() {

  },
  methods: {
    myfilter() {
      this.items = this.items.filter(function (item) {
        return item.id % 3 === 2;
      })
    },
    map() {
      this.items.forEach((item) => {
        console.log(item.title)
      })
    },
    concat() {
      let itemsFake = [{
          id: 7,
          title: 'FakePC'
        },
        {
          id: 8,
          title: 'FakeMobile'
        }
      ];

      this.items = this.items.concat(itemsFake);
    }
  }
})