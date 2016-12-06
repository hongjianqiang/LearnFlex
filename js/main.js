/*
 * main.js
 * author: 洪建强
 */

'use strict';

var Data = {
};

Data['boxAttrs'] = {
  'display': ['none', 'flex'],
  'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
  'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
  'flex-flow': '',
  'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
};

Data['itemAttrs']= {
  'order': 0,
  'flex-grow': 0,
  'flex-shrink': 1,
  'flex-basis': 'auto',
  'flex': '',
  'align-self': ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
};

Data['boxStyle']   = {
  'display': 'flex',
  'flex-flow': 'row nowrap',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'align-content': 'stretch',
  'width': '204px',
  'height': '204px'
};

Data['columnStyle']= {
  'display': 'none',
  'flex-flow': 'row nowrap',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'align-content': 'stretch'  
};

Data['itemStyle'] = {
  'order': 0,
  'flex': '0 1 auto',
  'align-self': 'auto'
};


Data['itemsArr'] = [
  [
    {
      'tag': 'A1',
      'style': {'order': 0, 'flex': '0 1 auto', 'align-self': 'auto'}
    },
    {
      'tag': 'A2',
      'style': {'order': 0, 'flex': '0 1 auto', 'align-self': 'auto'}      
    }
  ],
  [
    {
      'tag': 'A3',
      'style': {'order': 0, 'flex': '0 1 auto', 'align-self': 'auto'}            
    }
  ],
  [
    {
      'tag': 'A4',
      'style': {'order': 0, 'flex': '0 1 auto', 'align-self': 'auto'}   
    },
    {
      'tag': 'A5',
      'style': {'order': 0, 'flex': '0 1 auto', 'align-self': 'auto'}         
    }
  ],
];

var LearnFlex = new Vue({
  el: '#LearnFlex',
  data: Data,
  methods: {
    getItemTag: function(n) {
      /*
       * @param {Number} n 给出.item的序号
       * @return {String} 返回.item的tag
       */
      var sum = 0;
      var L = this.itemsArr.length;

      for (var i=0; i<L; i++) {
        for(var j=0; j<this.itemsArr[i].length; j++){
          if(n == sum){
            return this.itemsArr[i][j]['tag'];
            break;
          }
          if(sum>n) { break; }
          sum++;
        }
      }

      return null;
    }
  },
  computed:{
    itemsArrLen: function() {
      /*
       * @return {Number} 返回 itemsArr 数组长度
       */
      var sum = 0;
      var L = this.itemsArr.length;

      for(var i=0; i<L; i++) {
        sum += this.itemsArr[i].length;
      }
      return sum;
    }
  }
});
