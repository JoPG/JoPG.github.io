$(document).ready(function() {

// Gets the video src from the data-src on each button
var $videoSrc = "null";  
$('.v-gallery img').click(function() {
    console.log("Hello World")
    $videoSrc = $(this).data('bigimage');
    console.log($videoSrc);
});

  
  
  
// when the modal is opened autoplay it  
$('#vidModel').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
console.log("Video Modal loaded")
$("#video").attr('src', $videoSrc  ); 
})
  
  
// reset the modal image
$('#vidModel').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',''); 
}) 
    
    


  
  
// document ready  
});


