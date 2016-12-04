/*
 * main.js
 * author: 洪建强
 */

'use strict';

var COUNTER = 0;

var Data = {
  columnChooseStatus: 0,
  itemsChooseStatus: 0
};

Data['boxCSS'] = {
  'display': ['none', 'flex', 'inline-flex', '-webkit-flex'],
  'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
  'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
  'flex-flow': '',
  'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
};

Data['boxSelectStyle'] = {
  'width': '204px',
  'height': '204px',
  'display': 'flex',
  'flex-direction': '',
  'flex-wrap': '',
  'justify-content': 'space-between',
  'align-items': '',
  'align-content': ''
}

Data['itemCSS']= {
  'order': 0,
  'flex-grow': 0,
  'flex-shrink': 1,
  'flex-basis': 'auto',
  'align-self': ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
};

Data['itemsArray'] = [
  [
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto'
    },
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto'
    }
  ],
  [
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto'
    }
  ],
  [
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto'
    },
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto'
    }
  ]
];

var LearnFlex = new Vue({
  el: '#LearnFlex',
  data: Data,
  methods: {
    counter: function() {
      return ++COUNTER;
    },
    clearCounter: function() {
      console.log('Called clearCounter()');
      COUNTER = 0;
    },
    selectedBoxCSS: function(e) {
      Data['boxSelectStyle'][e.target.name] = e.target.value;
    },
    selectedItemCSS: function(e) {
      var itemsChooseStatus = this.itemsChooseStatus;
      var name = e.target.name;
      var value = e.target.value;
      var i = 0;
      var j = this.itemsArray.length;

      if(0 == itemsChooseStatus) {
        for(; i < j; i++) {
          this.itemsArray[i][name] = value;
        }
        if (typeof(this.itemCSS[name]) == 'number') {
          this.itemCSS[name] = parseInt(value);
        }
        if (typeof(this.itemCSS[name]) == 'string') {
          this.itemCSS[name] = value;
        }

      } else {
        this.itemsArray[parseInt(itemsChooseStatus)-1][name] = value;
      }
    },
    setItemsNum: function(e) {
      var m = e.target.value;
      var n = this.itemsArray.length;

      for (; m > n; n++) {
        this.itemsArray.push([{
          'order': 0,
          'flex-grow': 0,
          'flex-shrink': 1,
          'flex-basis': 'auto',
          'align-self': 'auto'
        }]);
      }

      for (; m < n; n--) {
        this.itemsArray.pop();
      }
    },
    getItemPos: function(num) {
      var itemX = 0;
      var itemY = 0;
      var sum = 0;
      var m = this.itemsArray.length;

      for(var n = 0; n < m; n++) {
        sum += this.itemsArray[n].length;
        if (sum >= num) {
          itemX = n;
          break;
        }
      }

      var i = this.itemsArray[itemX].length;

      for(var n = 0; n < i; n++) {

      }

      return (itemX, itemY);
    }
  },
  computed: {
    flexFlow: function() {
      var fF = this.boxSelectStyle['flex-direction'] + ' ' + this.boxSelectStyle['flex-wrap'];
      if (fF == ' ') {
        return 'flex-direction 和 flex-wrap 简写'
      } else {
        return fF;
      }
    },
    itemsLength: function() {
      var sum = 0;
      var m = this.itemsArray.length;

      for(var n = 0; n < m; n++) {
        sum += this.itemsArray[n].length;
      }
      return sum;
    }
  }
});

