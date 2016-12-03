/*
 * main.js
 * author: 洪建强
 */

'use strict';

var Data = {
};

Data['boxCSS'] = {
  'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
  'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
  'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
  'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
};

Data['boxSelectStyle'] = {
  'display': 'flex',
  'flex-direction': '',
  'flex-wrap': '',
  'justify-content': '',
  'align-items': '',
  'align-content': ''
}

Data['itemCSS']= {

};

var LearnFlex = new Vue({
  el: '#LearnFlex',
  data: Data,
  methods: {
    selected: function(e) {
      Data['boxSelectStyle'][e.target.name] = e.target.value;
      console.log(e.target.value);
      console.log(e.target.name);
    }
  }
});