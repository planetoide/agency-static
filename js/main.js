$(document).ready(function(){
	var contador = 1;
    $("#btn").click(function(){
    	if(contador==1) {
        	$("#nav").animate({left: '-5px'}, "slow");
    		contador = 0;
    	} else {
    		contador = 1;
    		$("#nav").animate({left: '-200px'}, "slow");
    	}
    });
});

