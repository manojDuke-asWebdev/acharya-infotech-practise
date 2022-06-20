var day=document.getElementById("day"),month=document.getElementById("month"),year=document.getElementById("year")
var months=[
 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]


function findMon(n){
return months[n];
}

function range(n,m,callback){
 
 while(true){
 if(n>=m){
  callback(n)
  n--;
  if(n<m) break;
 }else{
 
 callback(n);
 n++;
  if(m<n) break;
 }
 }
}


(function(){
//day
 range(1,31,function(n,m){
 let option = document.createElement("option");
  option.value=n;
  option.innerText = n;
  day.appendChild(option);
  //console.log("day",option.value,"\n",n,"\n",option); //deb
 })
 
 range(0,11,function(n){
  let option = document.createElement("option");
  option.value=findMon(n);
  option.innerText = findMon(n);
  month.appendChild(option);
  //console.log("month",option.value,"\n",n,"\n",option); //deb
 })
 let d = new Date();
 range(d.getFullYear(),1941,function(n){
  let option = document.createElement("option");
  option.value=n;
  option.innerText = n;
  year.appendChild(option);
  //console.log(option.value,n,option); //deb
 })
})();

function findAge(d,m,y){
 let date=new Date()
 age=date.getFullYear()-y;
 if(date.getMonth()>=m && date.getDay()>=d){
  age++
 }
 //console.log(age)
 return age;
}

function getRes(){
 document.getElementById("result").innerHTML= findAge(
  day.value,
  month.value,
  year.value 
 )
}

(function(){
 let result = document.getElementsByClassName("bgset")[0];
 result.backgroundImage = result.getAttribute('data-background');
})();























