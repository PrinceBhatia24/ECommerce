
      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
      function Expend(id){  
        $("#"+id).toggle(500);
      }   
    

      // Slider Start

      
      // vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
      items: 2,
      itemsDesktop: [5000, 5],
      itemsDesktopSmall: [990, 2],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      slideSpeed: 1000,
      autoPlay: true
  });
});
$(document).ready(function () {
  $(".Navbartoggle").click(function () {
      $(".navbar_header").animate({ width: "90%", right: "0%" }),
          $(".closebtn").animate({ width: "10%", left: "0%" })
         }),
      $(".closebtn").click(function () { $(".navbar_header").animate({ width: "0%", right: "-70%" }), $(".closebtn").animate({ width: "0%", left: "0%" }) }),
      $(".rig_div_icn > img").click(function () {
          $(".nav_div_2").addClass("vis"), $(".navbar_header > #MenuItems1").removeClass("d-none"),
              $(".nav_div_2").animate({ width: "100%", right: "0%" })
      }),
      $(".lef_div_icn > img").click(function () {
          $(".navbar_header > #MenuItems1").addClass("d-none"),
              $(".nav_div_2").animate({ width: "0%", right: "auto" })
      }),
      $("#buttonC").click(function () { $("#myModal_1").modal("hide") }),
      $(".Count").each(function () { $(this).prop("Counter", 0).animate({ Counter: $(this).text() }, { duration: 4e3, easing: "swing", step: function (t) { $(this).text(Math.ceil(t)) } }) }),
      $(document).scroll(function () { $(this).scrollTop() > 700 ? $(".float-sm").fadeIn() : $(".float-sm").fadeOut() }),
      $(document).scroll(function () { $(this).scrollTop() > 700 ? $(".float-sm").fadeIn() : $(".float-sm").fadeOut() }), $(window).scroll(function () {
          $(this).scrollTop() > 110 ? ($(".nav-stacked").fadeIn(),
              $(".nav-stacked ").addClass("affix")) : $(".nav-stacked").removeClass("affix")
      }),
      $("#back-top").hide(),
      $(window).scroll(function () { $(this).scrollTop() > 100 ? $("#back-top").fadeIn() : $("#back-top").fadeOut() }),
      $("#back-top").click(function () { return $("body,html").animate({ scrollTop: 0 }, 500), !1 })
});


