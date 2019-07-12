//ABBEY TOWN
function abbeyMaker(xAbbey,yAbbey){
	
//WALL
//city walls	
if (popAbbey!="village"){
	
//northern walls
var wallNorth1 = new CityWall("wallNS",30,540,60,xAbbey+300,yAbbey-600-wallOffset); 
scene.add( wallNorth1 );
var wallNorth2 = new CityWall("wallNS",30,540,60,xAbbey-300,yAbbey-600-wallOffset); 
scene.add( wallNorth2 );
//eastern walls
var wallEast1 = new CityWall("wallEW",30,60,540,xAbbey-600,yAbbey+300-wallOffset);
scene.add( wallEast1 );
var wallEast2 = new CityWall("wallEW",30,60,540,xAbbey-600,yAbbey-300-wallOffset);
scene.add( wallEast2 );
//southern walls
var wallSouth1 = new CityWall("wallNS",30,540,60,xAbbey+300,yAbbey+600-wallOffset); 
scene.add( wallSouth1 );
var wallSouth2 = new CityWall("wallNS",30,540,60,xAbbey-300,yAbbey+600-wallOffset); 
scene.add( wallSouth2 );
//western walls
var wallWest1 = new CityWall("wallEW",30,60,540,xAbbey+600,yAbbey+300-wallOffset);  
scene.add( wallWest1 );
var wallWest2 = new CityWall("wallEW",30,60,540,xAbbey+600,yAbbey-300-wallOffset);  
scene.add( wallWest2 );	

//towers
var tower1a = new GateTower("tower","city_tower","city_port","city_port","city_tower","roof3",80,60,60,xAbbey-600,yAbbey-600-wallOffset); 
scene.add( tower1a );
var tower2a = new GateTower("tower","city_port","city_tower","city_port","city_tower","roof3",80,60,60,xAbbey-600,yAbbey+600-wallOffset); 
scene.add( tower2a );
var tower3a = new GateTower("tower","city_tower","city_port","city_tower","city_port","roof3",80,60,60,xAbbey+600,yAbbey-600-wallOffset); 
scene.add( tower3a);
var tower4a = new GateTower("tower","city_port","city_tower","city_tower","city_port","roof3",80,60,60,xAbbey+600,yAbbey+600-wallOffset); 
scene.add( tower4a );

//gates
var gateNortha = new CastleGate(xAbbey+442,-245,yAbbey-310,0); 
scene.add( gateNortha );
var gateSoutha = new CastleGate(xAbbey-442,-245,yAbbey+190,3.1415926); 
scene.add( gateSoutha );
var gateWesta = new CastleGate(xAbbey-255,-245,yAbbey-502,1.5707963); 
scene.add( gateWesta );
var gateEasta = new CastleGate(xAbbey+245,-245,yAbbey+382,4.7123889); 
scene.add( gateEasta );
}	

//OUTER WALL
//x+1,y-2 450x450, abbey plantation
if (commerceAbbey =="dates"){
	FarmMaker("dateplantation",xAbbey+450,yAbbey-900);	
}
else if(commerceAbbey =="sugar"){
	FarmMaker("sugarplantation",xAbbey+450,yAbbey-900);	
}
else {
	FarmMaker("forest",xAbbey+450,yAbbey-900);	
}

//x,y-2 450x450, abbey farm
if (commerceAbbey =="grain"){
	FarmMaker("grainfarm",xAbbey,yAbbey-900);	
} 
else if(commerceAbbey =="flax"){
	FarmMaker("flaxfarm",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="pigs"){
	FarmMaker("pigfarm",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="cheese"){
	FarmMaker("diaryfarm",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="wool"){
	FarmMaker("sheep",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="poultry"){
	FarmMaker("poultryfarm",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="duck"){
	FarmMaker("duckfarm",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="fruit"){
	FarmMaker("orchard",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="honey"){
	FarmMaker("beekeeper",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="olive_oil"){
	FarmMaker("olivegrove",xAbbey,yAbbey-900);
} 
else if(commerceAbbey =="wine"){
	FarmMaker("vineyard",xAbbey,yAbbey-900);
}
else {
	FarmMaker("forest",xAbbey,yAbbey-900);
}
	
//x-1,y-2 450x450, abbey mine
if (commerceAbbey =="sapphire" || commerceAbbey =="rubies" || commerceAbbey =="emeralds" || commerceAbbey =="salt" || commerceAbbey =="tin" || commerceAbbey =="lead" || commerceAbbey =="iron" || commerceAbbey =="gold" || commerceAbbey =="silver"){
    FarmMaker("abbeymine",xAbbey-450,yAbbey-900);	
}
else {
	FarmMaker("forest",xAbbey-450,yAbbey-900);
}

//x+2,y+1 450x450, abbey mill
if (factoryAbbey =="fuller"){
	FarmMaker("fuller",xAbbey+900,yAbbey+450);
} 
else if(factoryAbbey =="leather"){
	FarmMaker("tanner",xAbbey+900,yAbbey+450);
} 
else if(factoryAbbey =="vintner"){
	FarmMaker("vintner",xAbbey+900,yAbbey+450);
} 
else if(factoryAbbey =="windmill"){
	FarmMaker("windmill",xAbbey+900,yAbbey+450);
}
//river
else if(factoryAbbey =="watermill"){
	FarmMaker("watermill",xAbbey+975,yAbbey+225);
	fieldMaker("grain",xAbbey+905,yAbbey+155);
}

//COMMERCIAL OUTER WALL
//x+2,y 450x450, abbey port
if (factoryAbbey =="fishery" || armorerAbbey =="shipyard"){
	FarmMaker("port",xAbbey+875,yAbbey+30);
}

//INNER WALL
//x,y-1 450x450, abbey church
//church
if (churchAbbey =="priest"){
	FarmMaker("church",xAbbey,yAbbey-450);
}
//cathedral
else {	
	FarmMaker("cathedral",xAbbey,yAbbey-450);
}

//x-1,y  450x450, abbey hall
if (fortAbbey =="town_hall"){
	//FarmMaker("townhall",xAbbey-450,yAbbey);
}
else if (fortAbbey =="burgh"){
	FarmMaker("burgh",xAbbey-450,yAbbey);
}
else {	
	if (popAbbey !="village" && factoryAbbey =="none"){
		houseMaker("housing",xAbbey-450,yAbbey); //default
	}
}

//x,y 450x450, abbey centre
//castle centre
if (fortAbbey =="mountain_castle" || fortAbbey =="water_castle"){
	FarmMaker("castle",xAbbey,yAbbey);
}
//abbey centre
else if (fortAbbey =="fortified_abbey" || fortAbbey =="abbey_grange" || fortAbbey =="abbey_scriptorium"){
	FarmMaker("abbey",xAbbey,yAbbey);
}
//inn centre
else if (fortAbbey =="roadside_inn"){
	FarmMaker("inn",xAbbey,yAbbey);
}
//market plaza
else {	
	FarmMaker("fair",xAbbey,yAbbey);
}

//x+1,y 450x450, abbey priory
if (fortAbbey !="fortified_abbey" && fortAbbey !="abbey_grange" && fortAbbey !="abbey_scriptorium"){
	//priory
	if(monasticAbbey =="lord_abbot" || monasticAbbey =="prince-abbot"){	
		FarmMaker("abbey",xAbbey+450,yAbbey);
	}
	//commandry
	else if(monasticAbbey =="teutonic"){
		FarmMaker("commandry",xAbbey+450,yAbbey);
	}
	//commandry
	else if(monasticAbbey =="templar"){	
		FarmMaker("commandry",xAbbey+450,yAbbey);
	}
	//commandry
	else if(monasticAbbey =="hospitaller"){	
		FarmMaker("commandry",xAbbey+450,yAbbey);
	}
	else {
		if (popAbbey !="village"){
			houseMaker("housing",xAbbey+450,yAbbey); //default
		}
	}
}	

//entertainment
if (entertainment =="minstrel" || entertainment =="tavern" || entertainment =="caravan" || entertainment =="coaching"){
	FarmMaker("inn",xAbbey+225,yAbbey+15);
}
else if (entertainment =="joust"){
	FarmMaker("joust",xAbbey+225,yAbbey+15);
}
else if (entertainment =="hunt" || entertainment =="falconry"){
	houseMaker("hunting",xAbbey+225,yAbbey+150); //hunt
}
else if (entertainment =="reliquary"){
	houseMaker("chapel",xAbbey+225,yAbbey+150); //chapel
}
else if (entertainment =="fair"){
	FarmMaker("fair",xAbbey+225,yAbbey+15);
}
else {
	if (popAbbey !="village"){
		houseMaker("housing",xAbbey+225,yAbbey+15); //default
	}
}

//x,y+1 450x450, abbey palace
if (fortAbbey =="royal_court" || fortAbbey =="chancery"){
	FarmMaker("royalpalace",xAbbey-200,yAbbey+450);
}
else if (fortAbbey =="bishop_palace"){
	FarmMaker("bishoppalace",xAbbey-200,yAbbey+450);
}
else if (fortAbbey =="ducal_residence"){
	FarmMaker("ducalpalace",xAbbey-200,yAbbey+450);
}
else {
if (churchAbbey !="priest"){
	houseMaker("housing",xAbbey-200,yAbbey+500); //default
}
else {
	if (popAbbey !="village"){
		houseMaker("housing",xAbbey-200,yAbbey+500); //default
	}
}	
}

//HOUSES
if (popAbbey =="village"){
	houseMaker("urban",xAbbey-15,yAbbey-350); //church ward
}
else if (popAbbey =="town"){
	houseMaker("urban",xAbbey-150,yAbbey-275); //church ward
	houseMaker("urban",xAbbey+275,yAbbey-150); //abbey ward
	houseMaker("urban",xAbbey+150,yAbbey+275); //palace ward
	houseMaker("urban",xAbbey-275,yAbbey+275); //castle ward
}
else if (popAbbey =="city"){
	houseMaker("urban",xAbbey-150,yAbbey-275); //church ward
	houseMaker("urban",xAbbey+275,yAbbey-150); //abbey ward
	houseMaker("urban",xAbbey+150,yAbbey+275); //palace ward
	houseMaker("urban",xAbbey-275,yAbbey+275); //castle ward
}
else if (popAbbey =="metropolis"){
	houseMaker("urban",xAbbey-150,yAbbey-275); //church ward
	houseMaker("urban",xAbbey+275,yAbbey-150); //abbey ward
	houseMaker("urban",xAbbey+150,yAbbey+275); //palace ward
	houseMaker("urban",xAbbey-275,yAbbey+275); //castle ward
}


//COMMERCIAL INNER WALL
// 450x450, abbey factories
//tailor
if (factoryAbbey =="tailor"){
	houseMaker("tailor",xAbbey-30,yAbbey-30); //business ward
}
//glasswork
else if (factoryAbbey =="glasswork"){
	houseMaker("glassworks",xAbbey-30,yAbbey-30); //business ward
}
//potterer
else if (factoryAbbey =="potterer"){
	houseMaker("potter",xAbbey-30,yAbbey-30); //business ward
}
//granary
else if (factoryAbbey =="granary"){
	houseMaker("granary",xAbbey-30,yAbbey-30); //business ward
}
//furrier
else if (factoryAbbey =="fur"){
	houseMaker("furrier",xAbbey-30,yAbbey-30); //business ward
}
//mint
else if (factoryAbbey =="mint"){
	houseMaker("mint",xAbbey-30,yAbbey-30); //business ward
}
//soap maker
else if (factoryAbbey =="soapmaker"){
	houseMaker("soapmaker",xAbbey-30,yAbbey-30); //business ward
}
//cooper
else if (factoryAbbey =="cooper"){
	houseMaker("cooper",xAbbey-30,yAbbey-30); //business ward
}
//dyeswork
else if (factoryAbbey =="madder" || factoryAbbey =="woad" || factoryAbbey =="saffron"){
	houseMaker("dyesworks",xAbbey-30,yAbbey-30); //business ward
}
else {	
	if (popAbbey !="village"){
		houseMaker("housing",xAbbey-30,yAbbey-30); //default
	}
}

	
}