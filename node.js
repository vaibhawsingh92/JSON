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
				for(var j=0;j<headers.length;j++)

				{	
  					if(headers[j].trim()=="3-2013")

  					{
  						var obj = {};

  						obj[column[0].substr(32)] = column[j+1];

  						result.push({item:value:});

  						console.log(result);
  					}
  				}
  			}
	
}

fs.writeFileSync("JsonFiles/Oilseeds.json",JSON.stringify(result),encoding="utf8");
}