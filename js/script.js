

var txt = '<lorem ispun/>'.split(''),
			display = document.getElementById('display');

			for (var i = 0; i < txt.length; i++) {

				setTimeout(function(i) {

					display.innerHTML += txt[i];	
				},i * 100,i);
				
			}
                
    
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('#toTop').fadeIn(200);
    } else {
        $('#toTop').fadeOut(200);
    }
});
$('#toTop').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
})