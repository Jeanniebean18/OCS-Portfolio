<script type="text/javascript">
  heart=document.getElementById("heart");
  thumb=document.getElementById("thumbsup");
  web=document.getElementById("screen");
  what=document.getElementById("what");
  form=document.getElementById("form");
  
  
  window.onscroll=inView;
  
  
  function inView(){if(isInViewport(heart)){
  heart.setAttribute("class","animated heart bounce");
  web.setAttribute("class","animated heart bounce");
  thumb.setAttribute("class","animated heart bounce");
};
  
  
  if(isInViewport(what)){
  what.style.visibility="visible"
  what.setAttribute("class","animated flipInX bottom");
};
};
  
  
  
  var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  
  </script>