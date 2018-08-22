const Tool = {
    isPoneAvailable: function (pone) {  
        var myreg = /^[1][3,4,5,6,7,8][0-9]{9}$/;  
        if (!myreg.test(pone)) {  
          return false;  
        } else {  
          return true;  
        }  
      }, 
    GetQueryString: function(name){
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null)return  unescape(r[2]); return null;
    }
}
export default Tool;