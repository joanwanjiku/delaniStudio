$(document).ready(function(){
    $('.scroll').click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    });

    // form validation    
})