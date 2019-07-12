function houseMaker(type,xPos,zPos){
var househigh = 21.0;

//RELIGIOUS PLOT
//cathedral
if (type =="cathedral"){
var cathedral = new Cathedral(xPos,househigh-26.5,zPos,0);
scene.add( cathedral );  
}
//church
else if (type =="church"){
var church = new Church(xPos,househigh-22,zPos,0);
scene.add( church );  
}
//abbey
else if (type =="basilica"){
var basilica = new Cloister(xPos,househigh+6,zPos,0);
scene.add( basilica );  
}
//CASTLE PLOT
//keep
else if (type =="keep"){
var keep = new CastleKeep(xPos,househigh-22,zPos,0);
scene.add( keep );  
}
//palace
else if (type =="royalpalace"){
var palast = new Palace(xPos,househigh-20,zPos,1.5707963,culture);
scene.add( palast );  
}
else if (type =="ducalpalace"){
var palast = new Palace(xPos,househigh-20,zPos,1.5707963,culture);
scene.add( palast );  
}
else if (type =="bishoppalace"){
var palast = new Palace(xPos,househigh-20,zPos,1.5707963,culture);
scene.add( palast );  
}
//MARKET PLOT
//marketstall
else if (type =="stall"){
var marketstall = new MarketStall(xPos+178,househigh-360,zPos+458,0);
scene.add( marketstall );  
}
//warehouse
else if (type =="warehouse"){
var barrel = new Barrel(xPos, 1,zPos, 0,0,0);
scene.add( barrel ); 
var barrel2 = new Barrel(xPos+15, 1,zPos, 0,0,0);
scene.add( barrel2 );   
}
//inn
else if (type =="inn"){
var inn = new Inn(xPos,househigh-21,zPos,1.5707963);
scene.add( inn );  
}
//tiltyard
else if (type =="joust"){
var tiltyard = new Jousting(xPos,househigh-7,zPos,1.5707963,culture);
scene.add( tiltyard );  
}
//MILLS
//windmill
else if (type =="windmill"){
var windmill = new Windmill(xPos+28,househigh-21,zPos+30,0);
scene.add( windmill );  
}
//watermill
else if (type =="watermill"){
	
var wallw1 = new CityWall("wallNS",15,30,30,xPos+22,zPos+120); 
scene.add( wallw1 );
var wallw2 = new CityWall("wallNS",15,30,30,xPos+82,zPos+120); 
scene.add( wallw2 );

var watermill = new Watermill(xPos+30,househigh-8,zPos+30,0);
scene.add( watermill );  
}
//tavern
else if (type =="tavern"){
var tavern = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( tavern );
}
//urban
else if (type =="urban"){
    var hood = new Urban(xPos,0,zPos-50,Math.PI/2);
    scene.add( hood );  
}
//house
else if (type =="villagehouse"){
var farmhouse = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( farmhouse );  
}
else if (type =="villagehouse2"){
var farmhouse = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
scene.add( farmhouse );
}
//INDUSTRY
//town industries
else if (type =="cooper"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood ); 
	var barrel = new Barrel(xPos-10, 1,zPos-50, 0,0,0);
	scene.add( barrel ); 
	var barrel2 = new Barrel(xPos-25, 1,zPos-50, 0,0,0);
	scene.add( barrel2 );   	
}
else if (type =="potter"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood ); 
	var jug1 = new Jug(xPos-10, 1,zPos-50, 0,0,0);
	scene.add( jug1 ); 	
	var jug2 = new Jug(xPos-25, 1,zPos-50, 0,0,0);
	scene.add( jug2 ); 
}
else if (type =="tailor"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
else if (type =="furrier"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
else if (type =="glassworks"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
else if (type =="dyesworks"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
else if (type =="soapmaker"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
else if (type =="granary"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
else if (type =="mint"){
    var hood = new Industries(xPos,0,zPos-90,Math.PI/2);
    scene.add( hood );  	
}
//potterer
else if (type =="potterer"){
    var potterer = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
    scene.add( potterer );  
}
//smithy
else if(type =="smithy"){
var smith = new Smithy(xPos-30,househigh,zPos+25,-Math.PI/2);
scene.add( smith ); 
var quiverbow = new Quiver(xPos+10, 2.5,zPos+33, 0,0,0);
scene.add( quiverbow ); 
var arrowbow = new Arrow(xPos+11.5, 7.5,zPos+32.9, -3.14159 / 2,0,0);
scene.add( arrowbow );
var arrowLoafCol = new propCollect(xPos+10, 6, zPos+33, "bow"); 
scene.add(arrowLoafCol);
}
//FARM PLOT
//winebarrel
else if (type =="winebarrel"){
var vintner = new WineBarrel(xPos+8,0,zPos+58,0);
scene.add( vintner );  
}
//farm
else if (type =="farmhouse"){
var farmhouse = new Villa(xPos+28,househigh,zPos+30,0);
scene.add( farmhouse );    
}
//barn
else if(type =="barn"){
    var stables = new Barn(xPos+13,0,zPos);
    scene.add( stables ); 
}
else if(type =="barn2"){
    var stables = new Barn(xPos+13,0,zPos);
    scene.add( stables ); 
}
//OUTER PLOT
//forester
else if (type =="carpenter"){
    if(climate =="temperate_woodlands" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands" || climate =="mediterranean_woodlands_marshes"){
        var carpenter = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
        scene.add( carpenter );
        var stool = new Stool(xPos-5,3,zPos-33,0,0,0);
        scene.add( stool ); 
    }
}
//basketmaker
else if (type =="basketmaker"){
    if(climate =="temperate_woodlands_marshes" || climate =="desert_marshes" || climate =="mediterranean_woodlands_marshes"){
        var carpenter = new Villa(xPos+20,househigh,zPos-28,Math.PI/2);
        scene.add( carpenter );
        var stool = new Stool(xPos-5,3,zPos-33,0,0,0);
        scene.add( stool ); 
    }
}

}