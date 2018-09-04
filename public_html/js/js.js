$(document).ready(function(e){
	//formatWidth();
	var screenWidth = 0;
	$(window).resize(function(e){            
	    formatWidth();		
	});
	function formatWidth(){
		screenWidth=$(window).width() + 17;
                if(screenWidth>767){                    
                    $('#asideLeft').slideDown();
                }
		$('#screenWidth').html(screenWidth);
		screenWidth1=screenWidth/3;
		screenWidth2=screenWidth/4;
		$('.imagesSmall').css('width', screenWidth1);
	}      
	
        $('#toggleKanzlei').click(function(e){
            console.log('Aua!');
            //showSubmenuKanzlei();
        });          
        
        function showSubmenuKanzlei(){
            console.log("hi");
            $('#submenuKanzlei').css({
                display:'block'
            });
        }
	/**Navi-Einstellungen*/
	$('#sandwich').css({
            display:'none'
        });
	$('#sandwich').mouseover(function(){
		$(this).css({
			display:'none'
		});		
	});       
});