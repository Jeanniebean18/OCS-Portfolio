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
  


(function() {

  'use strict';

  // Feature Test
  if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

    // Function to animate the scroll
    var smoothScroll = function (anchor, duration) {

      // Calculate how far and how fast to scroll
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop;
      var distance = endLocation - startLocation;
      var increments = distance/(duration/16);
      var stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function () {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      // If scrolling down
      if ( increments >= 0 ) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function () {
          var travelled = window.pageYOffset;
          if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
            clearInterval(runAnimation);
          }
        };
      }
      // If scrolling up
      else {
        // Stop animation when you reach the anchor OR the top of the page
        stopAnimation = function () {
          var travelled = window.pageYOffset;
          if ( travelled <= (endLocation || 0) ) {
            clearInterval(runAnimation);
          }
        };
      }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 5);
       
    };

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll('.scroll');

    // For each smooth scroll link
    [].forEach.call(scrollToggle, function (toggle) {

      // When the smooth scroll link is clicked
      toggle.addEventListener('click', function(e) {

        // Prevent the default link behavior
        e.preventDefault();

        // Get anchor link and calculate distance from the top
        var dataID = toggle.getAttribute('href');
        var dataTarget = document.querySelector(dataID);
        var dataSpeed = toggle.getAttribute('data-speed');

        // If the anchor exists
        if (dataTarget) {
          // Scroll to the anchor
          smoothScroll(dataTarget, dataSpeed || 500);
        }

      }, false);

    });

  }

})();
