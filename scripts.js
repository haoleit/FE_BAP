document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target"); // Get the target number
    const increment = target / 50; // Adjust for a smooth animation

    function updateCount() {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20); // Adjust speed by changing the delay
      } else {
        counter.innerText = target; // Ensure it ends on the target value
      }
    }

    updateCount();
  });

  
});

$(document).ready(function(){
  
  $('.owl-carousel').owlCarousel({
    items: 1, // Number of items to show
    loop: true, // Enable infinite loop
    margin: 10, // Margin between items
    nav: false, // Show navigation buttons
    autoplay: true, // Auto-play
    autoplayTimeout: 3000, // Time in ms
   
 });

 $(window).scroll(function(){
  if ($(this).scrollTop() > 200) {
     $('#toTop').fadeIn();
  } else {
     $('#toTop').fadeOut();
  }
});

// Scroll to the top when the button is clicked
$('#toTop').click(function(e){
  e.preventDefault(); // Prevent the default anchor click behavior
  $('html, body').animate({ scrollTop: 0 }, 'slow'); // Smooth scroll to top
  return false;
});


});