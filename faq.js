/*$('.firstH1').on('click', function(event) {
    $(event.currentTarget).next().slideToggle("slow");
    $('.iconPlus', '.iconMinus').toggle();    
});*/


$('.pClass').hide();
$('.firstH1').on('click', function(event) {

    $(event.currentTarget).siblings('.pClass').slideToggle();
    $(event.currentTarget).closest('.faq-item').find('.iconPlus').toggle();
    $(event.currentTarget).closest('.faq-item').find('.iconMinus').toggle();
}); 



/*$('.pClass').hide();
$('.firstH1').on('click', function(event) {
    
     
    $(event.currentTarget).next().slideToggle();
    $(event.currentTarget).find('.iconPlus, .iconMinus').toggle();

       
       
    });*/
 
