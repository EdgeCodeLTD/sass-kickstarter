$(document).ready(function() {
    $('a').on('click', function() {
        var hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top - 100
        }, 800, function() {
            window.location.hash = hash;
        });
    });
});