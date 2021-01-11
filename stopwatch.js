var sec =0;
var tens =0;
var interval ;

$("h1").css({
	color:"white",
	fontSize:"40px",
	textAlign:"center",
	paddingTop:"20px"
})

//to start the timer	
$("#start").click(function(){
 interval = setInterval(second, 100);
$("#start").attr("disabled",true);		
//to pause the timer	
	$("#stop").click(function(){
		clearInterval(interval);
		$("#start").attr("disabled",false);
		});
// to stop the timer
	$("#reset").click(function(){
		clearInterval(interval);
		$("#start").attr("disabled",false);
		sec=0;
		$("#tens").html(sec);
		$("#sec").html("00");
	});
});

function second(){
 tens++;
$("#tens").html(tens);
if(tens % 9 == 0){
	sec++
	tens=0;	
	$("#sec").html(sec);
	}
}


