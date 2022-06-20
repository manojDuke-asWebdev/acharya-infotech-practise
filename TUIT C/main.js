var email, name;
function name_(str){
 return (str.length>3||str.length<32)?true:false
}
function email_(str){
let reg = /^([a-z0-90-9\.]{3,32})@+([a-z]{3,8})+(.[a-z]{2,6})+(.[a-z]{2,3})?$/g
 console.log(str.match(reg)==true)
 return true
}
function subhere(){
 email=document.forms[0].name.value;
 name=document.forms[0].pass.value;

 //return name(name)&&email_(email);
 //console.log(email_(email))
  return false;
}
(function(){
let s1=name_("hellokumar@123"),s2=name_("hello")
if(s1===true||s2===false){
 console.log("PASSWORD FUNCTION TESTED: SUCCRESSFULLY")
}
 else{
  console.error("PASSWORD FUNCTION IS NOT CORRECT")
 }
 s1= email_("mail@gmail.com")
 if(s1===true){
 console.log("EMAIL FUNCTION TESTED: SUCCRESSFULLY")
}
 else{
  console.error("EMAIL FUNCTION IS NOT CORRECT")
 }
})()