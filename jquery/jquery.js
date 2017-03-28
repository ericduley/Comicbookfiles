// $('#zoom').elevateZoom({
//     zoomEnabled: true
// });

        // $(function () {
        //   $('#zoom').hover(function () {
        //   $(this).toggle(function () {
        //   $(this).width('70%');
        //            });
        //       });
        //  });

//         $(document).ready(function() {
//     $("[#zoom]").hover(function() {
//         $(this).addClass('transition');
//     }, function() {
//         $(this).removeClass('transition');
//     });
// });

<script>
  $(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
 
    }, function() {
        $(this).removeClass('transition');
    });
  });
</script>