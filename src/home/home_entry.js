/**
* content
* @param
* @return
*
*/

(function(){

  function homePage(data){
    let output;

    if((data % 2) == 0){
       output =  'even';
    }else{
       output =  'odd';
    }

    return output;
  }

  module.exports = { homePage : homePage }

}())
