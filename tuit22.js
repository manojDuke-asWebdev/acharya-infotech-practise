
function run(){

let x1 = document.forms[0].name.value
let x1 = document.forms[0].email.value

alert(x1)

if(x1.length>0){
if(x1.length<4){
 alert("name atleast 6 charecter")
 return false
}
}
else{
alert("please enter your name")
return false
}

//exa@ind.com
if(x2.length>0){
let [indofAT,indofDOT] = [x2.indexOf("@")+1,x2.indexOf('.')+1]
if(indofAT<=3||indofDOT<=6||x2.length-indofDOT<2){
alert("enter the valid email address")
return false
}
}

//exit
}