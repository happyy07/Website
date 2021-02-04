//card validation
//var card=document.querySelector('#cardno').addEventListener('click', () => {
 //   url='product.html?type='+type+'&id='+i
//    var win = window.open(url, '_blank');
//    win.focus();
//})

function isNumberKey(evt,length,that)
{
   var charCode = (evt.which) ? evt.which : event.keyCode;
   if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)){
    that.style.borderColor ="red";
      return false;
   }
   if (that.value.length<length){
    that.style.borderColor ="red";
    return true;
   }
   that.style.borderColor ="green";

  return true;
}

function alphaOnly(event,that) {
    var key = event.keyCode;
    if ((key >= 65 && key <= 90) || key == 8|| (key > 96 && key < 123)){
        if(that.value.length>3){
            that.style.borderColor ="green";
        }else{
            that.style.borderColor ="red";
        }
        return true;
    }
    return false
  };