$(document).ready(function(){
    $('.scroll').click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000)
    });

    // form validation
    $('form').submit(function(e) {
        e.preventDefault();
        if($('#name').val() === "" || $('#email').val() === "" || $('#message').val() === ""){
            alert('Some fields are missing')
        }else{
            alert($('#name').val() + ' We have received your message')
        }
    });

     // What we do session
     $('.product').click(function(){
        console.log('clicked')
        $(this).find("p").slideToggle('main');
    });
});
