/*
var trigger = document.getElementsByClassName('accordion-trigger');

for (i = 0; i < trigger.length; i++){
    trigger[i].onclick(function(e){
        this.firstElementChild
    });
}
*/

document.addEventListener("DOMContentLoaded", function(event){
    var trigger = document.getElementById('')
});

var rm = function(){
    jQuery('.accordion-trigger-container .accordion-trigger').html('{...}');
    jQuery('#added').remove();
    jQuery('.accordion-trigger-container').children('.sub-accordion-container').toggleClass('active');
}

//jQuery 
jQuery(document).ready(function(){
    jQuery(".accordion-trigger-container .accordion-trigger").click(function(e){
        //$(this).find("code").css("display", "inline-block");
        if (!jQuery(this).parent('.accordion-trigger-container').children('.sub-accordion-container').hasClass('active')){
            jQuery('#added').remove();
            jQuery(this).html('{');
            jQuery(this).parent('.accordion-trigger-container').append("<code class='accordion-trigger' id='added' onclick='rm();'>}</code>");
        }
        else {
            jQuery(this).html('{...}');
            jQuery('#added').remove();
        }
        
        
        jQuery(this).parent('.accordion-trigger-container').children('.sub-accordion-container').toggleClass('active');
    });

    

    if (!jQuery(this).parent('.accordion-trigger-container').children('.sub-accordion-container').hasClass('active')){
        jQuery('#added').click(function(e){
            
        });
    }

    jQuery(".sub-accordion-trigger-container").click(function(e){
        //$(this).find("code").css("display", "inline-block");
        jQuery(this).children('.text-container').toggleClass('active');
    });
});