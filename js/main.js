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

/*
var COUNTER = 0;
var ITEM_X  = 0;
var ITEM_Y  = 0;

var Data = {
  columnChooseStatus: 0,
  itemsChooseStatus: '0'
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
};

Data['columnsArrayStyle'] = [
  {
    'display': 'flex',
    'flex-direction': '',
    'flex-wrap': '',
    'justify-content': 'space-between',
    'align-items': '',
    'align-content': ''
  },
  {
    'display': 'flex',
    'flex-direction': '',
    'flex-wrap': '',
    'justify-content': 'space-between',
    'align-items': '',
    'align-content': ''
  },
  {
    'display': 'flex',
    'flex-direction': '',
    'flex-wrap': '',
    'justify-content': 'space-between',
    'align-items': '',
    'align-content': ''
  }  
];

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
      'align-self': 'auto',
      'No.': 'A'
    },
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto',
      'No.': '2'
    }
  ],
  [
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto',
      'No.': 'C'
    }
  ],
  [
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto',
      'No.': '4'
    },
    {
      'order': 0,
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
      'align-self': 'auto',
      'No.': 'E'
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
      COUNTER = 0;
      console.log('Called clearCounter().');
    },
    selectedBoxCSS: function(e) {
      Data['boxSelectStyle'][e.target.name] = e.target.value;
    },
    selectedItemCSS: function(e) {
      var itemsChooseStatus = this.itemsChooseStatus;
      var name = e.target.name;
      var value = e.target.value;
      var m = this.itemsArray.length;

      if ('0' == itemsChooseStatus) {
        for (var i=0; i<m; i++) {
          for(var j=0; j<this.itemsArray[i].length; j++){
            this.itemsArray[i][j][name] = value;
          }
        }
        if (typeof(this.itemCSS[name]) == 'number') {
          this.itemCSS[name] = parseInt(value);
        }
        if (typeof(this.itemCSS[name]) == 'string') {
          this.itemCSS[name] = value;
        }

      } else {
        this.itemsArray[ITEM_X][ITEM_Y][name] = value;

      }

    },
    selectedItemColumn: function(e) {
      var itemsChooseStatus = this.itemsChooseStatus;
      var value = parseInt(e.target.value);
      var m = this.itemsArray.length;

      if ('0' == itemsChooseStatus) {
        // 如果 itemsChooseStatus 全选
        // 先把所有 item 移动到指定的 column

        for (var i=0; i<m; i++) {
          for(var j=0; j<this.itemsArray[i].length; j++){
            var tmp = this.itemsArray[i][j];

            if (i != value-1) {
              this.itemsArray[value-1].push(tmp);
            }
          }
        }

        // 再把所有 item 从 column 删除

        for (var i=0; i<m; i++) {
          for(var j=0; j<this.itemsArray[i].length; j++){
            var tmp = this.itemsArray[i][j];

            if (i != value-1) {
              this.itemsArray[i].splice(j);
            }
          }
        }        

      } else {
        var tmp = this.itemsArray[ITEM_X][ITEM_Y];

        this.itemsArray[value-1].push(tmp);
        this.itemsArray[ITEM_X].splice(ITEM_Y, 1);

      }

    },
    selectedItem: function(e) {
      var i = e.target.selectedIndex;
      console.log('Called selectedItem().');
      this.getItemPos(i);
      this.columnChooseStatus = ITEM_X;
    },
    setItemsNum: function(e) {

       // 修改 .item 数量
       
      var m = e.target.value;
      var n = this.itemsLength;

      for (; m > n; n++) {
        this.itemsArray.push([{
          'order': 0,
          'flex-grow': 0,
          'flex-shrink': 1,
          'flex-basis': 'auto',
          'align-self': 'auto',
          'No.': String(this.itemsLength + 1)
        }]);
      }

      for (; m < n; n--) {
        this.getItemPos(this.itemsLength);
        this.itemsArray[ITEM_X].pop();
        if (!this.itemsArray[ITEM_X].length) {
          this.itemsArray.pop();
          this.columnsArrayStyle.pop();
        }
      }
    },
    getItemPos: function(num) {
      var itemX = 0;
      var itemY = 0;
      var sum = 0;
      var m = this.itemsArray.length;

      for (var i=0; i<m; i++) {
        for(var j=0; j<this.itemsArray[i].length; j++){
          sum++;
          if (sum == num) {
            itemX = i;
            itemY = j;
            break;
          }
        }
      }

      ITEM_X = itemX;
      ITEM_Y = itemY;

    },
    getItemPosFromNo: function(No) {
      var itemX = 0;
      var itemY = 0;
      var sum = 0;
      var m = this.itemsArray.length;

      for (var i=0; i<m; i++) {
        for(var j=0; j<this.itemsArray[i].length; j++){
          sum++;
          if (this.itemsArray[i][j]['No.'] == No) {
            itemX = i;
            itemY = j;
            break;
          }
        }
      }

      ITEM_X = itemX;
      ITEM_Y = itemY;
    },
    getItemNo: function(num) {
      var sum = 0;
      var m = this.itemsArray.length;

      for (var i=0; i<m; i++) {
        for(var j=0; j<this.itemsArray[i].length; j++){
          sum++;
          if (sum == num) {
            return this.itemsArray[i][j]['No.'];
          }
        }
      }

    },
    itemX: function() {
      return ITEM_X;

    },
    itemY: function() {
      return ITEM_Y;

    },
    selectedColumn: function(e){
      this.columnChooseStatus = parseInt(e.target.value);

    },
    selectedColumnCSS: function(e) {

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

*/
