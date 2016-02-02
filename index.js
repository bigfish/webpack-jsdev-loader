
var jsdev = require('./jsdev.js');

var tags = [];
var comments = "JSDev pre-processed";

module.exports = function (content) {
  this.cacheable();

  var result;
  var config = {tags: []};

  if (this.query) {
     try {
       //should be of the form {tags:['tag1', 'tag2']}
       eval("config = " + this.query.substr(1));

     } catch (e) {
       console.error('JSDev loader error: parsing query', e);
     }
  } else {
    console.log('no query given, no tags will be parsed')
    
  }
  
  try {

    //NB: don't give comments argument as it will throw off sourcemap line numbers by 1
    result = jsdev(content, config.tags);
  
    return result;

  } catch(e) {

    console.error('JSDev error:', e);
    
    return content;
  }
};
