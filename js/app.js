$(document).foundation();
$( document ).ready(function() {
    
    $('input.checkbox_tender').change(function() {
    	
        if ($('input.checkbox_tender').is(':checked')) {
        	$(this).parent().parent().parent().parent().parent().addClass('checked');
        	$('#action_bar').addClass ('active');
        	
        } else {
        	$(this).parent().parent().parent().parent().parent().removeClass('checked');
        	$('#action_bar').removeClass ('active');
        }
    });


     $('input[type=checkbox]').click(function (e) {
         e.stopPropagation();
     });
});
