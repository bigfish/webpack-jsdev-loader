
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
  }
  
  try {

    result = jsdev(content, config.tags, comments);
  
    return result;

  } catch(e) {
    console.error('JSDev error:', e);
    
    return content;
  }
};
