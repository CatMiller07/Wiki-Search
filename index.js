$(document).ready(function(){
 var inputReady=false;
 var searchArg ="";
    
    function searchWiki(inString){
	  var mySearch="";	
	  var requestURL="http://en.wikipedia.org/w/api.php?action=query&meta=filerepoinfo&prop=extracts|info&format=json&exsentences=5&exlimit=10&exintro=&inprop=url&friprop=url&titles=Main%20Page&generator=search&gsrsearch="
       var jsonCallBk="&callback=?";
           
	   mySearch = requestURL.trim() + inString.trim() +jsonCallBk;  
      console.log(mySearch);    
	   $.getJSON(mySearch,
				function(resp){
                 var pagez = resp.query.pages;
                     for (var i in pagez){
                         console.log(pagez[i].title);
                         console.log(pagez[i].extract);
                         console.log(pagez[i].fullurl);
                         $("ul").append("<li" + " data-url=" + pagez[i].fullurl + ">" +
                            "<blockquote>"+pagez[i].title +"<br>" +pagez[i].extract + "</blockquote>                        </li>" );
                       
                       }        
	               
		   
	   
                 });
			   	
  };
    function clearOut() {
	   alert("here i am");
		
       $("input").val("");
       $("#query-response").empty();
    
};

   // Begin main logic

   $("#iconClear").on("click",clearOut);        
  	   
   $("#srch-btn").on( "click",function() {
	        //alert("Begin Search");
	   
	        searchArg = $("input").val();
            console.log(searchArg);
	        searchWiki(searchArg);	
   });
   
      	
    
   $("input").keypress(function(e){
        //alert("the key pressed is "+e.which);
       if (e.which ===13){
          $("#srch-btn").click();    
       }
   });
    
   $("ul").on("click","li",function(){
      var gotoSite= $(this).data("url");
       console.log(gotoSite);
       window.open(gotoSite);
       
   }); 
	   
});