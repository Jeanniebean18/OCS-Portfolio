
  var workOne=document.getElementById("work-one");
  var workTwo=document.getElementById("work-two");
  var workFour=document.getElementById("work-four");
  var workThree=document.getElementById("work-three");
  var workFive=document.getElementById("work-five");
  var workSix=document.getElementById("work-six");

  
  window.onscroll=inView;
  
  
  function inView(){
    
    if(isInViewport(workOne)){
    workOne.style.visibility="visible";
    workOne.setAttribute("class","animated zoomIn");
    workTwo.style.visibility="visible";
    workTwo.setAttribute("class","animated zoomIn");
    workThree.style.visibility="visible";
    workThree.setAttribute("class","animated zoomIn");
    
    
    
    } else {
      
      workOne.setAttribute("class","animated fadeOut");
     
      workTwo.setAttribute("class","animated fadeOut");
      
      workThree.setAttribute("class","animated fadeOut");
      // workThree.style.visibility="hidden";
//        workTwo.style.visibility="hidden";
//       workOne.style.visibility="hidden";
      
    }
  

  if(isInViewport(workFour)){
 
    workFour.style.visibility="visible";
    workFour.setAttribute("class","animated zoomIn");

} else {
  workFour.setAttribute("class","animated fadeOut");
  
  
}

  if(isInViewport(workFive)){
 
    workFive.style.visibility="visible";
    workFive.setAttribute("class","animated zoomIn");
    workSix.style.visibility="visible";
    workSix.setAttribute("class","animated zoomIn");

} else {
  workFive.setAttribute("class","animated fadeOut");
  workSix.setAttribute("class","animated fadeOut");
  
  
}
  
  

};
  
  
  
  var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  
