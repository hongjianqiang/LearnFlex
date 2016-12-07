/*
 * main.js
 * author: 洪建强
 */

'use strict';

var Data = {
  itemsNum: 5,
  chooseColumn: -1,
  chooseItem: -1
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
  'flex-direction': 'row',
  'flex-wrap': 'nowrap',
  'flex-flow': '',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'align-content': 'stretch',
  'width': '204px',
  'height': '204px'
};

Data['columnStyle']= {
  'display': 'flex',
  'flex-direction': 'row',
  'flex-wrap': 'nowrap',
  'flex-flow': '',
  'justify-content': 'flex-start',
  'align-items': 'flex-start',
  'align-content': 'stretch'
};

Data['itemStyle'] = {
  'order': 0,
  'flex-grow': 0,
  'flex-shrink': 1,
  'flex-basis': 'auto',
  'flex': '',
  'align-self': 'auto'
};


Data['itemsObj'] = [
  {
    'columnStyle': {
          'display': 'flex',
          'flex-direction': 'row',
          'flex-wrap': 'nowrap',
          'flex-flow': '',
          'justify-content': 'flex-start',
          'align-items': 'flex-start',
          'align-content': 'stretch'
    },
    'items': [
      {
        'tag': 'A1',
        'style': {'order': 0, 'flex-grow': 0, 'flex-shrink': 1, 'flex-basis': 'auto', 'flex': '', 'align-self': 'auto'}
      },
      {
        'tag': 'A2',
        'style': {'order': 0, 'flex-grow': 0, 'flex-shrink': 1, 'flex-basis': 'auto', 'flex': '', 'align-self': 'auto'}
      }
    ]
  },
  {
    'columnStyle': {
          'display': 'flex',
          'flex-direction': 'row',
          'flex-wrap': 'nowrap',
          'flex-flow': '',
          'justify-content': 'flex-start',
          'align-items': 'flex-start',
          'align-content': 'stretch'
    },
    'items': [
      {
        'tag': 'A3',
        'style': {'order': 0, 'flex-grow': 0, 'flex-shrink': 1, 'flex-basis': 'auto', 'flex': '', 'align-self': 'auto'}
      }
    ]
  },
  {
    'columnStyle': {
          'display': 'flex',
          'flex-direction': 'row',
          'flex-wrap': 'nowrap',
          'flex-flow': '',
          'justify-content': 'flex-start',
          'align-items': 'flex-start',
          'align-content': 'stretch'
    },
    'items': [
      {
        'tag': 'A4',
        'style': {'order': 0, 'flex-grow': 0, 'flex-shrink': 1, 'flex-basis': 'auto', 'flex': '', 'align-self': 'auto'}
      },
      {
        'tag': 'A5',
        'style': {'order': 0, 'flex-grow': 0, 'flex-shrink': 1, 'flex-basis': 'auto', 'flex': '', 'align-self': 'auto'}
      }
    ]
  },
];

var LearnFlex = new Vue({
  el: '#LearnFlex',
  data: Data,
  mounted: function() {
    //this.itemsNum = this.itemsObjLen;
  },
  watch: {
    chooseColumn: function(val, oldVal) {
      if ('-1' != val) {
        this.columnStyle = this.itemsObj[val]['columnStyle'];
      }
    },
    chooseItem: function(val, oldVal) {
      if ('-1' != val) {
        var pos = this.getItemXYFromTag(val);
        this.itemStyle = this.itemsObj[pos.X]['items'][pos.Y]['style'];
        //this.itemStyle = this.itemsObj[val]['style'];
      }
    },
    itemsNum: function(val, oldVal) {
      if(val > oldVal) {
        console.log('Add.');
      }
      if(val < oldVal) {
        console.log('Sub.');
      }
    }
  },
  methods: {
    getItemTag: function(n) {
      /*
       * @param {Number} n 给出.item的序号
       * @return {String} 返回.item的tag
       */
      var sum = 0;
      var L = this.itemsObj.length;

      for(var i=0; i<L; i++) {
        for(var j=0; j<this.itemsObj[i]['items'].length; j++){
          if(n == sum){
            return this.itemsObj[i]['items'][j]['tag'];
            break;
          }
          if(sum>n) { break; }
          sum++;
        }
      }

      return null;
    },
    getItemXYFromTag: function(tag) {
      /*
       * @param {Number} tag 给出.item的tag
       * @return {Object} 返回.item的位置
       */
      var L = this.itemsObj.length;
      var pos = {};

      for(var i=0; i<L; i++) {
        for(var j=0; j<this.itemsObj[i]['items'].length; j++) {
          if(this.itemsObj[i]['items'][j]['tag'] == tag){
            pos.X = i;
            pos.Y = j;
            return pos;
          }
        }
      }

      return null;
    },
    changeAllColumnStyle: function(e) {
      if('-1' == this.chooseColumn) {
        var L = this.itemsObj.length;

        for (var i=0; i<L; i++) {
          this.itemsObj[i]['columnStyle'] = this.columnStyle;
        }
      }
    }
  },
  computed:{
    itemsObjLen: function() {
      /*
       * @return {Number} 返回 itemsObj 里所有 items 数组长度
       */
      var sum = 0;
      var L = this.itemsObj.length;

      for(var i=0; i<L; i++) {
        sum += this.itemsObj[i]['items'].length;
      }
      return sum;
    },
    mergeBoxStyle: function() {
      var flexFlow = this.boxStyle['flex-direction'] + ' ' + this.boxStyle['flex-wrap'];

      if(' ' == flexFlow) {
        return '合并 flex-direction, flex-wrap';
      } else {
        return flexFlow;
      }
    },
    mergeColumnStyle: function() {
      var flexFlow = this.columnStyle['flex-direction'] + ' ' + this.columnStyle['flex-wrap'];

      if(' ' == flexFlow) {
        return '合并 flex-direction, flex-wrap';
      } else {
        return flexFlow;
      }
    },
    mergeItemStyle: function() {
      var flex = this.itemStyle['flex-grow'] + ' ' + this.itemStyle['flex-shrink'] + ' ' + this.itemStyle['flex-basis'];

      if ('  ' == flex) {
        return '合并 flex-direction, flex-wrap';
      } else {
        return flex;
      }
    }
  }
});
