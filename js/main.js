 
  
var student=document.getElementById("student_quote");
var studentTwo=document.getElementById("student_quote_two");
var workOne=document.getElementById("work-one");
var workTwo=document.getElementById("work-two");
var workThree=document.getElementById("work-three");
var workFour=document.getElementById("work-four");
var workFive=document.getElementById("work-five");
var workSix=document.getElementById("work-six");
var hover_one=document.getElementById("over-work-one");

  
  
  
window.onscroll=inView;
  
  
function inView(){

  
  if(isInViewport(workOne)){

    workOne.style.visibility="visible";
    workOne.setAttribute("class","animated zoomIn");
    workTwo.style.visibility="visible";
    workTwo.setAttribute("class","animated delay1 zoomIn");
    workThree.style.visibility="visible";
    workThree.setAttribute("class","animated delay2 zoomIn");

  } else {
    workOne.setAttribute("class","animated fadeOut");
    workTwo.setAttribute("class","animated fadeOut");
    workThree.setAttribute("class","animated fadeOut");
  }

    if(isInViewport(student)){

      student.style.visibility="visible";
      student.setAttribute("class","animated zoomIn");

    } else {
      student.setAttribute("class","animated fadeOut");


    }
    
    
    
    
    if(isInViewport(workFour)){

      workFour.style.visibility="visible";
      workFour.setAttribute("class","animated zoomIn");
      workFive.style.visibility="visible";
      workFive.setAttribute("class","animated delay1 zoomIn");
      workSix.style.visibility="visible";
      workSix.setAttribute("class","animated delay2 zoomIn");
  

    } else {
      workFour.setAttribute("class","animated fadeOut");
      workFive.setAttribute("class","animated fadeOut");
      workSix.setAttribute("class","animated fadeOut");
     
    }

      if(isInViewport(studentTwo)){

        studentTwo.style.visibility="visible";
        studentTwo.setAttribute("class","animated zoomIn");

      } else {
        studentTwo.setAttribute("class","animated fadeOut");


      }


};
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  

