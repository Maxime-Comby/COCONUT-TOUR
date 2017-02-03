var a = 900 /* Interval before begining */
var t = 20 /* Interval between chars */

/* */
/* */
/* */
/* */

var element = document.querySelector(".type");
var content = element.innerHTML;
var lenght = content.length;
element.innerHTML="";
var i = 0;

setTimeout("write()",a);

function write() {
  element.innerHTML+=content[i];
  i++;
  if (i < lenght) {
    setTimeout("write()",t);
  }
}