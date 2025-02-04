document.addEventListener('DOMContentLoaded', function(){
  
  const humburger = document.querySelector(".hamburger");
  const navlink = document.querySelector(".nav-link");
  humburger.addEventListener("click", () =>{
    
    humburger.classList.toggle("active");
    navlink.classList.toggle("active");
  })
  
  
  });