  var work=document.getElementById("work");
 
  var workFour=document.getElementById("work-four");

  var workFive=document.getElementById("work-five");
  var workSix=document.getElementById("work-six");

  
  window.onscroll=inView;
  
  
  function inView(){
    
    if(isInViewport(work)){
 
      work.style.visibility="visible";
      work.setAttribute("class","animated zoomIn");

  } else {
    work.setAttribute("class","animated fadeOut");
  
  
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
  
  
