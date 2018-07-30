// Toggle Sidebar
$('.toggle').click(function() {
  $('.menus').slideToggle('fast')
  var icon = $(this).find('.material-icons')
  icon.text() === 'menu' ? icon.text('close') : icon.text('menu')
})

/*slider*/
  $(document).ready (function(){
     $(".slider-home").slick({
      centerMode: true,
      centerPadding: '60px',
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 3,
      infinite: true,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
     });

     $('.slide-top').slick({
       dots: true,
       infinite: true,
       //              centerMode: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 1000,
       //              centerPadding: '220px',
       arrows: true,
       prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">Previous</button>',
       nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">Next</button>'
     });

     $('.slider-2').slick({
       slidesToShow: 4,
       slidesToScroll: 1,
       dots: true,
       infinite: true,
       autoplay: true,
       autoplaySpeed: 1000,
       cssEase: 'linear'
     });

     $('#product-img').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      // autoplay: true,
      // autoplaySpeed: 1000
     });
  });



  // filterSelection("all")
  /* function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }*/