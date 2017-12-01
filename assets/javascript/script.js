var APIKey ="6e11828b26e04901b0de8aa96645d712";



//-------------------------------------
var createQueryURL = function(search,startdate,endate){

	var end="startdate="+startdate+"&end_date="+endate;


return "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key="+APIKey+"&"+end;

}


var userSearch=$("#userInput").value().trim();
var userbegindate=$("#userbegin").value().trim();
var userenddate=$("#userend").value().trim();


 $.ajax({
        // TODO: Fill missing code
        url:createQueryURL(userSearch,userenddate,userenddate),
        method:"GET"
    }).done(function(response){
       
    });

    console.log(createQueryURL("willsmith"));

