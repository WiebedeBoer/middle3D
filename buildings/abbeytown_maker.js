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
var gateNortha = new GateTower("gate","city_gate","city_gate","city_port","city_port","roof3",80,60,60,xAbbey,yAbbey-600-wallOffset); 
scene.add( gateNortha );
var gateSoutha = new GateTower("gate","city_gate","city_gate","city_port","city_port","roof3",80,60,60,xAbbey,yAbbey+600-wallOffset); 
scene.add( gateSoutha );
var gateWesta = new GateTower("gate","city_port","city_port","city_gate","city_gate","roof3",80,60,60,xAbbey-600,yAbbey-wallOffset); 
scene.add( gateWesta );
//var gateEasta = new GateTower("gate","city_port","city_port","city_gate","city_gate","roof3",80,60,60,xAbbey+600,yAbbey-wallOffset); 
//scene.add( gateEasta );
}	

//OUTER WALL
//x+1,y-2 450x450, abbey plantation
if (commerceAbbey =="dates"){
	//FarmMaker("dateplantation",xAbbey+450,yAbbey-900);	
}
else if(commerceAbbey =="sugar"){
	//FarmMaker("sugarplantation",xAbbey+450,yAbbey-900);	
}

//x,y-2 450x450, abbey farm
if (commerceAbbey =="grain"){
	FarmMaker("grainfarm",xAbbey,yAbbey-900);	
} 
else if(commerceAbbey =="flax"){
	
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
	
//x-1,y-2 450x450, abbey mine
if (commerceAbbey =="sapphire" || commerceAbbey =="rubies" || commerceAbbey =="emeralds" || commerceAbbey =="salt" || commerceAbbey =="tin" || commerceAbbey =="lead" || commerceAbbey =="iron" || commerceAbbey =="gold" || commerceAbbey =="silver"){
    FarmMaker("abbeymine",xAbbey-450,yAbbey-900);	
}

//x+2,y+1 450x450, abbey mill
if (factoryAbbey =="fuller"){
	FarmMaker("fuller",xAbbey+900,yAbbey+450);
} 
else if(factoryAbbey =="vintner"){
	FarmMaker("vintner",xAbbey+900,yAbbey+450);
} 
else if(factoryAbbey =="windmill"){
	
}
else if(factoryAbbey =="watermill"){
}

//COMMERCIAL OUTER WALL
//x+2,y 450x450, abbey port
if (factoryAbbey =="fishery" || armorerAbbey =="shipyard"){
	//FarmMaker("port",xAbbey+900,yAbbey);
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
	//FarmMaker("burgh",xAbbey-450,yAbbey);
}
else {	
if (popAbbey !="village"){
}
else {
}
}

//x,y 450x450, abbey centre
//castle centre
if (fortAbbey =="mountain_castle" || fortAbbey =="water_castle"){
	//FarmMaker("castle",xAbbey,yAbbey);
}
//abbey centre
else if (fortAbbey =="fortified_abbey" || fortAbbey =="abbey_grange" || fortAbbey =="abbey_scriptorium"){
	//FarmMaker("abbey",xAbbey,yAbbey);
}
//inn centre
else if (fortAbbey =="roadside_inn"){
	//FarmMaker("inn",xAbbey,yAbbey);
}
//market plaza
else {	
	//FarmMaker("fair",xAbbey,yAbbey);
}

//x+1,y 450x450, abbey priory
if (fortAbbey !="fortified_abbey" && fortAbbey !="abbey_grange" && fortAbbey !="abbey_scriptorium"){
	//priory
	if(monasticAbbey =="lord_abbot" || monasticAbbey =="prince-abbot"){	
		//FarmMaker("abbey",xAbbey+450,yAbbey);
	}
	//commandry
	else if(monasticAbbey =="teutonic"){
		//FarmMaker("commandry",xAbbey+450,yAbbey);
	}
	//commandry
	else if(monasticAbbey =="templar"){	
		//FarmMaker("commandry",xAbbey+450,yAbbey);
	}
	//commandry
	else if(monasticAbbey =="hospitaller"){	
		//FarmMaker("commandry",xAbbey+450,yAbbey);
	}
	else {
	}
}	


//x,y+1 450x450, abbey palace
if (fortAbbey =="royal_court" || fortAbbey =="chancery"){
	//FarmMaker("royalpalace",xAbbey,yAbbey+450);
}
else if (fortAbbey =="bishop_palace"){
	//FarmMaker("bishoppalace",xAbbey,yAbbey+450);
}
else if (fortAbbey =="ducal_residence"){
	//FarmMaker("ducalpalace",xAbbey,yAbbey+450);
}
else {
if (churchAbbey !="priest"){
}
else {
}	
}

//COMMERCIAL INNER WALL
// 450x450, abbey factories
//tailor
if (factoryAbbey =="tailor"){
}
//glasswork
else if (factoryAbbey =="glasswork"){
}
//potterer
else if (factoryAbbey =="potterer"){
}
//granary
else if (factoryAbbey =="granary"){
}
//furrier
else if (factoryAbbey =="fur"){
}
//mint
else if (factoryAbbey =="mint"){
}
//soap maker
else if (factoryAbbey =="soapmaker"){
}
//cooper
else if (factoryAbbey =="cooper"){
}
//dyeswork
else if (factoryAbbey =="madder" || factoryAbbey =="woad" || factoryAbbey =="saffron"){
}
else {	
}

	
}