var student=document.getElementById("student_quote");
var studentTwo=document.getElementById("student_quote_two");
var workFour=document.getElementById("work-four");
var workFive=document.getElementById("work-five");
var workSix=document.getElementById("work-six");


window.onscroll=inView;
  
  
function inView(){

  if (document.documentElement.clientWidth  >= 600) {
      

      
    if(isInViewport(student)){

      student.style.visibility="visible";
      student.setAttribute("class","animated zoomIn");

    } 
    
    if(isInViewport(workFour)){

      workFour.style.visibility="visible";
      workFour.setAttribute("class","animated zoomIn");
      workFive.style.visibility="visible";
      workFive.setAttribute("class","animated delay1 zoomIn");
      workSix.style.visibility="visible";
      workSix.setAttribute("class","animated delay2 zoomIn");
  

    } 

    if(isInViewport(studentTwo)){

      studentTwo.style.visibility="visible";
      studentTwo.setAttribute("class","animated zoomIn");
    } 
  }


};
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  

