var student=document.getElementById("student_quote");
var studentTwo=document.getElementById("student_quote_two");






  window.onscroll=inView;
  
  
    function inView(){
  // roll out of top star
      if (window.pageYOffset>75) {
        star.setAttribute("class","animated rollOut star2");
      } 
      
      if (window.pageYOffset<75) {
        star.setAttribute("class","animated rollIn star2");
      } 
      
    
// student work and quotes in viewport in viewport
      if (document.documentElement.clientWidth  >= 600) {
      
     
        
        if(isInViewport(student)){

          student.style.visibility="visible";
          student.setAttribute("class","animated zoomIn");

        } 
    
        if(isInViewport(studentTwo)){

          studentTwo.style.visibility="visible";
          studentTwo.setAttribute("class","animated zoomIn");
        } 
      }


    };
  
  
  
    var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  

