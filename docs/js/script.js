// EmbeddedRTOS progress circular bar 
let EmbeddedRTOSProgress = document.querySelector(".EmbeddedRTOS"),
  EmbeddedRTOSValue = document.querySelector(".EmbeddedRTOS-progress");

let EmbeddedRTOSStartValue = 0,
  EmbeddedRTOSEndValue = 90,
  EmbeddedRTOSspeed = 30;

let progressEmbeddedRTOS = setInterval(() => {
  EmbeddedRTOSStartValue++;

  EmbeddedRTOSValue.textContent = `${EmbeddedRTOSStartValue}%`;
  EmbeddedRTOSProgress.style.background = `conic-gradient(#fca61f ${
    EmbeddedRTOSStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (EmbeddedRTOSStartValue == EmbeddedRTOSEndValue) {
    clearInterval(progressEmbeddedRTOS);
  }
}, EmbeddedRTOSspeed);

// EmbeddedMCU progress circular bar 
let EmbeddedMCUProgress = document.querySelector(".EmbeddedMCU"),
  EmbeddedMCUValue = document.querySelector(".EmbeddedMCU-progress");

let EmbeddedMCUStartValue = 0,
  EmbeddedMCUEndValue = 90,
  EmbeddedMCUspeed = 30;

let progressEmbeddedMCU = setInterval(() => {
  EmbeddedMCUStartValue++;

  EmbeddedMCUValue.textContent = `${EmbeddedMCUStartValue}%`;
  EmbeddedMCUProgress.style.background = `conic-gradient(#7d2ae8 ${
    EmbeddedMCUStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (EmbeddedMCUStartValue == EmbeddedMCUEndValue) {
    clearInterval(progressEmbeddedMCU);
  }
}, EmbeddedMCUspeed);

// EmbeddedLinux progress circular bar 
let EmbeddedLinuxProgress = document.querySelector(".EmbeddedLinux"),
  EmbeddedLinuxValue = document.querySelector(".EmbeddedLinux-progress");

let EmbeddedLinuxStartValue = 0,
  EmbeddedLinuxEndValue = 80,
  EmbeddedLinuxspeed = 30;

let progressEmbeddedLinux = setInterval(() => {
  EmbeddedLinuxStartValue++;

  EmbeddedLinuxValue.textContent = `${EmbeddedLinuxStartValue}%`;
  EmbeddedLinuxProgress.style.background = `conic-gradient(#20c997 ${
    EmbeddedLinuxStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (EmbeddedLinuxStartValue == EmbeddedLinuxEndValue) {
    clearInterval(progressEmbeddedLinux);
  }
}, EmbeddedLinuxspeed);

// EmbeddedBareMetal progress circular bar 
let EmbeddedBareMetalProgress = document.querySelector(".EmbeddedBareMetal"),
  EmbeddedBareMetalValue = document.querySelector(".EmbeddedBareMetal-progress");

let EmbeddedBareMetalStartValue = 0,
  EmbeddedBareMetalEndValue = 90,
  EmbeddedBareMetalspeed = 30;

let progressEmbeddedBareMetal = setInterval(() => {
  EmbeddedBareMetalStartValue++;

  EmbeddedBareMetalValue.textContent = `${EmbeddedBareMetalStartValue}%`;
  EmbeddedBareMetalProgress.style.background = `conic-gradient(#3f396d ${
    EmbeddedBareMetalStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (EmbeddedBareMetalStartValue == EmbeddedBareMetalEndValue) {
    clearInterval(progressEmbeddedBareMetal);
  }
}, EmbeddedBareMetalspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
