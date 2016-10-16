 $(document).ready(function() {
     
     var docCatalogCl = 0;
         scrClick = 170;
     
     
 
     
     
      $("#regular1").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }); 

     
     
    $("a.scrl").click(function() {
    var elementClick = $(this).attr("href")
    
    var destination = $(elementClick).offset().top - scrClick;
        
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
    });
     
   
     
    
     
$(window).scroll(function() {


       
if (($(this).scrollTop() <= 0)) {
         
     $('a.scrl').removeClass('active');
     $('a#scr').addClass('active'); 

         
} 
       
      
if (($(this).scrollTop() >= 48)) {
         
$('header').addClass('fixed');
scrClick = 85; 

         
} 
    
    else {
    
$('header').removeClass('fixed');  
scrClick = 170;         
         
}
      
       
      
if (($(this).scrollTop() >= 798 - 220)) {
         
     $('a.scrl').removeClass('active');
     $('#a-scr-1').addClass('active');
         
}   
         

    
    
    
if (($(this).scrollTop() >= 1633 - 320)) {
    
     $('a.scrl').removeClass('active');
     $('#a-scr-2').addClass('active');         
         
} 
    
if (($(this).scrollTop() >= 2423 - 220)) {
    
     $('a.scrl').removeClass('active');
     $('#a-scr-3').addClass('active');         
         
}
      
if (($(this).scrollTop() >= 3241 - 320)) {
    
     $('a.scrl').removeClass('active');
     $('#a-scr-4').addClass('active');         
         
}
            
if (($(this).scrollTop() >= 3541 - 220)) {
    
     $('a.scrl').removeClass('active');
     $('#a-scr-5').addClass('active');         
         
}
      
      
   
      
      

});   
 
     
     
     
     
     
     $('#katalog-one').click(function() {
         
         
      $('#slide2').fadeOut(1000);    
      $('#slide1').fadeIn(1000);    
      $('#katalog-one').addClass('active');    
      $('#katalog-two').removeClass('active');    
         
         
    });
          
     $('#katalog-two').click(function() {
         
         
      $('#slide1').fadeOut(1000);    
      $('#slide2').fadeIn(1000);    
      $('#katalog-two').addClass('active');
      $('#katalog-one').removeClass('active');
         
         
    });
     
     
     
     
    $('#sl-prev').click(function() {
        
        if (docCatalogCl == 0) {
        
      $('#doc1').fadeOut(1000);    
      $('#doc2').fadeIn(1000);          
      $('#d-doc2').addClass('active');          
      $('#d-doc1').removeClass('active');
            docCatalogCl = 1
    
     } else {
         
      $('#doc2').fadeOut(1000);    
      $('#doc1').fadeIn(1000);          
      $('#d-doc1').addClass('active');          
      $('#d-doc2').removeClass('active');
         docCatalogCl = 0
     }
  
    }); 
     
         
    $('#sl-next').click(function() {
        
        if (docCatalogCl == 1) {
            
      $('#doc2').fadeOut(1000);    
      $('#doc1').fadeIn(1000);          
      $('#d-doc1').addClass('active');          
      $('#d-doc2').removeClass('active');
            docCatalogCl = 0
        
    
     } else {
         
        
      $('#doc1').fadeOut(1000);    
      $('#doc2').fadeIn(1000);          
      $('#d-doc2').addClass('active');          
      $('#d-doc1').removeClass('active');
         docCatalogCl = 1
     }
  
    }); 
     
     
     $('#d-doc1').click(function() {
         
      $('#doc2').fadeOut(1000);   
      $('#doc1').fadeIn(1000);  
      $('#d-doc1').addClass('active');          
      $('#d-doc2').removeClass('active');
         docCatalogCl = 0
     });
          
     $('#d-doc2').click(function() {
         
      $('#doc1').fadeOut(1000);   
      $('#doc2').fadeIn(1000);  
      $('#d-doc2').addClass('active');          
      $('#d-doc1').removeClass('active');
         docCatalogCl = 1
     });
     
     
          
     
     $("a#scr1").click(function() { 
           
     $('a.scrl').removeClass('active');
     $('a#scr1').addClass('active')
     
     });
        

     
     
     
});  











