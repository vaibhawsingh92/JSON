var fs = require('fs');
var content;


fs.readFile('Production-Department_of_Agriculture_and_Cooperation.csv',

 function read(err, data) 
{
    if (err) 
    {
        throw err;
    }
    content = data.toString();
    csvJSON(content);
    
}
);


function csvJSON(){
	

  	var lines=content.split("\n");

	var headers=lines[0].split(",");

	var result = [];

 	for(var i=0; i < lines.length; i++)

 	{

	var column = lines[i].split(',');

  		if(column[0].substr(24,8)=="Oilseeds") 

  			{
          var item = column[0].substr(32);
          var value = column[24];

          
        result.push({item:item,value:value});

        result.sort(function(a, b){return a.value - b.value});
        }
}

result.map(function(item)
{
  console.log(item);
});

fs.writeFileSync("JsonFiles/Oilseeds.json",JSON.stringify(result),encoding="utf8");
}