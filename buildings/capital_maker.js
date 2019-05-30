//CAPITAL TOWN
function capitalMaker(xCapital,yCapital){
	
//WALL
//city walls	
if (popCapital!="village"){
	
//northern walls
var wallNorth1 = new CityWall("wallNS",30,540,60,xCapital+300,yCapital-600-wallOffset); 
scene.add( wallNorth1 );
var wallNorth2 = new CityWall("wallNS",30,540,60,xCapital-300,yCapital-600-wallOffset); 
scene.add( wallNorth2 );
//eastern walls
var wallEast1 = new CityWall("wallEW",30,60,540,xCapital-600,yCapital+300-wallOffset);
scene.add( wallEast1 );
var wallEast2 = new CityWall("wallEW",30,60,540,xCapital-600,yCapital-300-wallOffset);
scene.add( wallEast2 );
//southern walls
var wallSouth1 = new CityWall("wallNS",30,540,60,xCapital+300,yCapital+600-wallOffset); 
scene.add( wallSouth1 );
var wallSouth2 = new CityWall("wallNS",30,540,60,xCapital-300,yCapital+600-wallOffset); 
scene.add( wallSouth2 );
//western walls
var wallWest1 = new CityWall("wallEW",30,60,540,xCapital+600,yCapital+300-wallOffset);  
scene.add( wallWest1 );
var wallWest2 = new CityWall("wallEW",30,60,540,xCapital+600,yCapital-300-wallOffset);  
scene.add( wallWest2 );	

//towers
var tower1 = new GateTower("tower","city_tower","city_port","city_port","city_tower","roof3",80,60,60,xCapital-600,yCapital-600-wallOffset); 
scene.add( tower1 );
var tower2 = new GateTower("tower","city_port","city_tower","city_port","city_tower","roof3",80,60,60,xCapital-600,yCapital+600-wallOffset); 
scene.add( tower2 );
var tower3 = new GateTower("tower","city_tower","city_port","city_tower","city_port","roof3",80,60,60,xCapital+600,yCapital-600-wallOffset); 
scene.add( tower3);
var tower4 = new GateTower("tower","city_port","city_tower","city_tower","city_port","roof3",80,60,60,xCapital+600,yCapital+600-wallOffset); 
scene.add( tower4 );

//gates
var gateNorth = new GateTower("gate","city_gate","city_gate","city_port","city_port","roof3",80,60,60,xCapital,yCapital-600-wallOffset); 
scene.add( gateNorth );
//var gateSouth = new GateTower("gate","city_gate","city_gate","city_port","city_port","roof3",80,60,60,xCapital,yCapital+600-wallOffset); 
//scene.add( gateSouth );
var gateWest = new GateTower("gate","city_port","city_port","city_gate","city_gate","roof3",80,60,60,xCapital-600,yCapital-wallOffset); 
scene.add( gateWest );
var gateEast = new GateTower("gate","city_port","city_port","city_gate","city_gate","roof3",80,60,60,xCapital+600,yCapital-wallOffset); 
scene.add( gateEast );
}

//OUTER WALL
//x-1,y+2 450450, capital mine
if (commerceCapital =="sapphire" || commerceCapital =="rubies" || commerceCapital =="emeralds" || commerceCapital =="salt" || commerceCapital =="tin" || commerceCapital =="lead" || commerceCapital =="iron" || commerceCapital =="gold" || commerceCapital =="silver"){
    FarmMaker("capitalmine",xCapital-450,yCapital+900);	
}

//x,y+2 450x450, capital farm
if (commerceCapital =="grain"){
	FarmMaker("grainfarm",xCapital,yCapital+900);	
} 
else if(commerceCapital =="flax"){
	
} 
else if(commerceCapital =="pigs"){
	FarmMaker("pigfarm",xCapital,yCapital+900);
} 
else if(commerceCapital =="cheese"){
	FarmMaker("diaryfarm",xCapital,yCapital+900);
} 
else if(commerceCapital =="wool"){
	FarmMaker("sheep",xCapital,yCapital+900);
} 
else if(commerceCapital =="poultry"){
	FarmMaker("poultryfarm",xCapital,yCapital+900);
} 
else if(commerceCapital =="fruit"){
	FarmMaker("orchard",xCapital,yCapital+900);
} 
else if(commerceCapital =="honey"){
	FarmMaker("beekeeper",xCapital,yCapital+900);
} 
else if(commerceCapital =="olive_oil"){
	FarmMaker("olivegrove",xCapital,yCapital+900);
} 
else if(commerceCapital =="wine"){
	FarmMaker("vineyard",xCapital,yCapital+900);
}
	
//x+1,y+2 450x450, capital plantation
if (commerceCapital =="dates"){
	//FarmMaker("dateplantation",xCapital+450,yCapital+900);
}
else if (commerceCapital =="sugar"){
	//FarmMaker("sugarplantation",xCapital+450,yCapital+900);
}
	
//x-2,y-1 450x450, capital mill
if (factoryCapital =="fuller"){
	FarmMaker("fuller",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="vintner"){
	FarmMaker("vintner",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="windmill"){
	FarmMaker("windmill",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="watermill"){
	FarmMaker("watermill",xCapital-900,yCapital-450);
}

//x-2,y 450x450, capital port
if (factoryCapital =="fishery" || armorerCapital =="shipyard"){
	//FarmMaker("port",xCapital-900,yCapital);
}

//INNER WALL

//x,y-1 450x450, capital church
//church
if (churchCapital =="priest"){
	FarmMaker("church",xCapital,yCapital-450);
}
//cathedral
else {	
	FarmMaker("cathedral",xCapital,yCapital-450);
}

//x-1,y 450x450, capital hall
if (fortCapital =="town_hall"){
	//FarmMaker("townhall",xCapital-450,yCapital);
}
else if (fortCapital =="burgh"){
	//FarmMaker("burgh",xCapital-450,yCapital);
}
else {	
if (popCapital !="village"){
}
else {
}
}

//x,y 450x450, capital centre
//castle centre
if (fortCapital =="mountain_castle" || fortCapital =="water_castle"){
	//FarmMaker("castle",xCapital,yCapital);
}
//abbey centre
else if (fortCapital =="fortified_abbey" || fortCapital =="abbey_grange" || fortCapital =="abbey_scriptorium"){
	FarmMaker("abbey",xCapital,yCapital);
}
//inn centre
else if (fortCapital =="roadside_inn"){
	FarmMaker("inn",xCapital,yCapital);
}
//market plaza
else {
	//FarmMaker("fair",xCapital,yCapital);
}
	
//x+1,y 450x450, capital priory
if (fortCapital !="fortified_abbey" && fortCapital !="abbey_grange" && fortCapital !="abbey_scriptorium"){
	//priory
	if(monasticCapital =="lord_abbot" || monasticCapital =="prince-abbot"){
		FarmMaker("abbey",xCapital+450,yCapital);
	}
	//commandry
	else if(monasticCapital =="teutonic"){	
		//FarmMaker("commandry",xCapital+450,yCapital);
	}
	//commandry
	else if(monasticCapital =="templar"){
		//FarmMaker("commandry",xCapital+450,yCapital);
	}
	//commandry
	else if(monasticCapital =="hospitaller"){
		//FarmMaker("commandry",xCapital+450,yCapital);
	}
	else {
	}
}

//x,y+1 450x450, capital palace
if (fortCapital =="royal_court" || fortCapital =="chancery"){
	//FarmMaker("royalpalace",xCapital,yCapital+450);
}
else if (fortCapital =="bishop_palace"){
	//FarmMaker("bishoppalace",xCapital,yCapital+450);
}
else if (fortCapital =="ducal_residence"){
	//FarmMaker("ducalpalace",xCapital,yCapital+450);
}
else {
if (churchCapital !="priest"){
}
else {
}	
}


//COMMERCIAL INNER WALL
// 450x450, capital factories
//tailor
if (factoryCapital =="tailor"){
}
//glasswork
else if (factoryCapital =="glasswork"){
}
//potterer
else if (factoryCapital =="potterer"){
}
//granary
else if (factoryCapital =="granary"){
}
//furrier
else if (factoryCapital =="fur"){
}
//mint
else if (factoryCapital =="mint"){
}
//soap maker
else if (factoryCapital =="soapmaker"){
}
//cooper
else if (factoryCapital =="cooper"){
}
//dyeswork
else if (factoryCapital =="madder" || factoryCapital =="woad" || factoryCapital =="saffron"){
}
else {	
}



}