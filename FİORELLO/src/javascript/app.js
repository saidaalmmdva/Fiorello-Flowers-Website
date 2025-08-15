const backToTopBtn = document.getElementById("backToTop");
const flwBtn = document.getElementById("flwBtn");
// const loader = document.querySelector('.loader-container');

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > document.documentElement.scrollHeight / 2) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});


function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


document.body.addEventListener('mousemove', (e) => {

flwBtn.style.left = e.clientX + 'px';
flwBtn.style.top = e.clientY + 'px';

})


flwBtn.addEventListener('click', () => {

  flwBtn.style.display = "none";

})


// window.onload = function() {

//   setTimeout(() => loader.style.display = 'none', 5000);
  
//   }