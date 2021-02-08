 if ($(".text-slider").length == 1) { 
              
            var typed_strings =  
                $(".text_slider_items").text(); 
  
            var typed = new Typed(".text_slider", { 
                strings: typed_strings.split(", "), 
                typeSpeed: 50, 
                loop: true, 
                backDelay: 900, 
                backSpeed: 30, 
            }); 
        } 