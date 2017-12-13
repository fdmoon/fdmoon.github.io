$(document).ready(function() {

    // Add smooth scrolling to all links with hash (bookmark)
    function smoothScrollingTo(target) {
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = target;
        });
    }

    $("a[href^='#']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior (double check)
        if((this.hash !== "") && ($(this).attr("data-toggle") !== "modal")) {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Collapse after clicking link
            $("#navlist").collapse('hide');
            // Go to bookmark
            smoothScrollingTo(this.hash);
        }
    });
    
});

