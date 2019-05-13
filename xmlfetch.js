//open xml
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","world/provinces.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var xprov = xmlDoc.getElementsByTagName("grid");

var province,climate,horse,cattle,sheep,pig,fish,poultry;
var grain,vine,oil,pottery,timber,honey,fruit;
var tin,copper,iron,gold,silver;
var paper,seasoning,scent,carving,fabrics,glass;

        var uprovince = xprov[urlid].getElementsByTagName("province")[0].childNodes[0].nodeValue;
        province = uprovince.replace("_", " ");
        climate = xprov[urlid].getElementsByTagName("climate")[0].childNodes[0].nodeValue;
        //resources
        horse = xprov[urlid].getElementsByTagName("horse")[0].childNodes[0].nodeValue;
        cattle = xprov[urlid].getElementsByTagName("cattle")[0].childNodes[0].nodeValue;
        sheep = xprov[urlid].getElementsByTagName("sheep")[0].childNodes[0].nodeValue;
        pig = xprov[urlid].getElementsByTagName("pig")[0].childNodes[0].nodeValue;
        fish = xprov[urlid].getElementsByTagName("fish")[0].childNodes[0].nodeValue;
        poultry = xprov[urlid].getElementsByTagName("poultry")[0].childNodes[0].nodeValue;
        grain = xprov[urlid].getElementsByTagName("grain")[0].childNodes[0].nodeValue;
        vine = xprov[urlid].getElementsByTagName("vine")[0].childNodes[0].nodeValue;
        pottery = xprov[urlid].getElementsByTagName("pottery")[0].childNodes[0].nodeValue;
        timber = xprov[urlid].getElementsByTagName("timber")[0].childNodes[0].nodeValue;
        honey = xprov[urlid].getElementsByTagName("honey")[0].childNodes[0].nodeValue; 
        fruit = xprov[urlid].getElementsByTagName("fruit")[0].childNodes[0].nodeValue;       
        tin = xprov[urlid].getElementsByTagName("tin")[0].childNodes[0].nodeValue;
        copper = xprov[urlid].getElementsByTagName("copper")[0].childNodes[0].nodeValue;
        iron = xprov[urlid].getElementsByTagName("iron")[0].childNodes[0].nodeValue;
        gold = xprov[urlid].getElementsByTagName("gold")[0].childNodes[0].nodeValue;
        silver = xprov[urlid].getElementsByTagName("silver")[0].childNodes[0].nodeValue;
        paper = xprov[urlid].getElementsByTagName("paper")[0].childNodes[0].nodeValue;
        seasoning = xprov[urlid].getElementsByTagName("seasoning")[0].childNodes[0].nodeValue;
        scent = xprov[urlid].getElementsByTagName("scent")[0].childNodes[0].nodeValue;
        carving = xprov[urlid].getElementsByTagName("sculpt")[0].childNodes[0].nodeValue;
        fabrics = xprov[urlid].getElementsByTagName("fabric")[0].childNodes[0].nodeValue;
        glass = xprov[urlid].getElementsByTagName("glass")[0].childNodes[0].nodeValue; 
        dye = xprov[urlid].getElementsByTagName("dye")[0].childNodes[0].nodeValue;  