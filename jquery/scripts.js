 
    $(document).click(function(){
      $(".description-wrap .description.active").hide()}
    );
      $(".description-wrap img").click(function(e){
          e.stopPropagation();
         $(".description-wrap .description.active").hide()
         $(this).siblings().show()
         $(this).siblings().addClass("active")
            });
        $("#header-img").click(function(){
        $(this).toggleClass("spin")
        }
       );
  