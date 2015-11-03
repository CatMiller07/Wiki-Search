$(document).ready(function(){
 var inputReady=false;
	 searchArg ="";
    function searchWiki(inString){
	  var mySearch="";	
	  var requestURL="/w/api.php?action=query&prop=extracts&format=json&exchars=175&exlimit=10&exintro=&exsectionformat=plain&titles=Main%20Page&generator=search&gsrsearch="
	   mySearch = requestURL.trim() + mySearch;  
	   $.getJSON({mySearch,
				  function(resp){
		               console.log(resp);
	               } 
		   
	               }
	   );
		
	   	
  }	

   // Toggle Search Input
	$(".input-group").toggle();
	
   $("#main-btn").on("click", function(){
	   if (!inputReady) {
			$(".input-group").toggle();
			inputReady=true;
	   }
	   else{
		    $(".input-group").toggle();
			inputReady=false; 
	   }
   } );
	
   if ( inputReady ) {
	   
	   $("#srch-btn").on("click",function(){
		    searchArg= $("input").val();
	        searchWiki(searchArg);
	   })
	  
	   
   }	
});