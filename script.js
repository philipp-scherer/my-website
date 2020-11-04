/*
var trigger = document.getElementsByClassName('accordion-trigger');

for (i = 0; i < trigger.length; i++){
    trigger[i].onclick(function(e){
        this.firstElementChild
    });
}
*/

var rmclass = function(){

}

//jQuery 
jQuery(document).ready(function(){
    jQuery(".accordion-trigger-container .accordion-trigger").click(function(e){
        //$(this).find("code").css("display", "inline-block");
        if (!jQuery(this).hasClass('active')){
            jQuery(this).html('{');
        }
        
        jQuery(this).parent('.accordion-trigger-container').append("<code class='accordion-trigger' onclick='rmclass();'>}</code>");
        jQuery(this).parent('.accordion-trigger-container').children('.sub-accordion-container').toggleClass('active');
    });
    jQuery(".sub-accordion-trigger-container").click(function(e){
        //$(this).find("code").css("display", "inline-block");
        jQuery(this).children('.text-container').toggleClass('active');
    });
});