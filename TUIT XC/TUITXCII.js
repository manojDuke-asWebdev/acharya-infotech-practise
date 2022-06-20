  var img=[
   "https://cdn.pixabay.com/photo/2022/06/04/14/52/flower-7242158_960_720.jpg",
   "https://cdn.pixabay.com/photo/2022/06/08/17/45/bird-7250976_960_720.jpg",
   "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg",
   "https://cdn.pixabay.com/photo/2013/08/28/12/03/plumage-176723_960_720.jpg",
   "https://cdn.pixabay.com/photo/2022/06/03/23/33/cat-7240997_960_720.jpg"
  ]
  
  $(document).ready(function(){
 //PUSH IMAGE
 $("#enter").click(function(){
  img.push($("#newval").val())
  build();
   $("#newval").text().empty()
 })
 
 //CREATE PICTURE
 function build(move){
  if(move==undefined) move=0;
  $("#target").empty();	
  if(move>=0){
  for(let i=move; i<5+move; i++){
   $("#target").append("<img src="+img[i]+" height='200' class='img-slide img' />")
  }
  }
  if(move<0){
  for(let i=move; i<5-move; i++){
    $("#target").append("<img src="+img[i]+" height='200' class='img-slide img' />")
  }
  }
 }
 
 
 //SLIDE SHOW
 function slideShow(setImg){
 if(setImg==undefined) setImg = img[0];
 $(".slide-main").append("<img class='view-slide img' id='view-slide'>")
  $("#view-slide").attr("src",setImg)
 }
 build();
 slideShow();
 $("#slide-prev").click(function(){
  build(-1)
 })
  $("#slide-next").click(function(){
  alert("hello")
  build(1)
 })
 
 $(".img-slide").click(function(){ 
  $("#view-slide").attr("src",$(this).attr("src"))
 })
 function bingo(){
  let res =img.indexOf($("#view-slide").attr("src"))-1
  if (res<0) res=img.length -1
  return res
 }
  function kurkure(){
  let res =img.indexOf($("#view-slide").attr("src"))+1
  if (res>img.length-1) res=0
  return res
 }
 $(".prev").click(function(){
  $("#view-slide").attr("src",img[bingo()])   
 })
 $(".next").click(function(){
  $("#view-slide").attr("src",img[kurkure()])
 })
 
})