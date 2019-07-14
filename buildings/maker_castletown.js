//CASTLE TOWN
function castleMaker(xCastle,yCastle){

//WALL	
//city walls	
if (popCastle!="village"){
	
//northern walls
var wallNorth1c = new CityWall("wallNS",30,540,60,xCastle+300,yCastle-600-wallOffset); 
scene.add( wallNorth1c );
var wallNorth2c = new CityWall("wallNS",30,540,60,xCastle-300,yCastle-600-wallOffset); 
scene.add( wallNorth2c );
//eastern walls
var wallEast1c = new CityWall("wallEW",30,60,540,xCastle-600,yCastle+300-wallOffset);
scene.add( wallEast1c );
var wallEast2c = new CityWall("wallEW",30,60,540,xCastle-600,yCastle-300-wallOffset);
scene.add( wallEast2c );
//southern walls
var wallSouth1c = new CityWall("wallNS",30,540,60,xCastle+300,yCastle+600-wallOffset); 
scene.add( wallSouth1c );
var wallSouth2c = new CityWall("wallNS",30,540,60,xCastle-300,yCastle+600-wallOffset); 
scene.add( wallSouth2c );
//western walls
var wallWest1c = new CityWall("wallEW",30,60,540,xCastle+600,yCastle+300-wallOffset);  
scene.add( wallWest1c );
var wallWest2c = new CityWall("wallEW",30,60,540,xCastle+600,yCastle-300-wallOffset);  
scene.add( wallWest2c );	

//towers
var tower1c = new GateTower("tower","city_tower","city_port","city_port","city_tower","roof3",80,60,60,xCastle-600,yCastle-600-wallOffset); 
scene.add( tower1c );
var tower2c = new GateTower("tower","city_port","city_tower","city_port","city_tower","roof3",80,60,60,xCastle-600,yCastle+600-wallOffset); 
scene.add( tower2c );
var tower3c = new GateTower("tower","city_tower","city_port","city_tower","city_port","roof3",80,60,60,xCastle+600,yCastle-600-wallOffset); 
scene.add( tower3c);
var tower4c = new GateTower("tower","city_port","city_tower","city_tower","city_port","roof3",80,60,60,xCastle+600,yCastle+600-wallOffset); 
scene.add( tower4c );

//gates
var gateNorthc = new CastleGate(xCastle+442,-245,yCastle-310,0,culture); 
scene.add( gateNorthc );
var gateSouthc = new CastleGate(xCastle-442,-245,yCastle+190,3.1415926,culture); 
scene.add( gateSouthc );
var gateWestc = new CastleGate(xCastle-255,-245,yCastle-502,1.5707963,culture); 
scene.add( gateWestc );
var gateEastc = new CastleGate(xCastle+245,-245,yCastle+382,4.7123889,culture); 
scene.add( gateEastc );
}

//OUTER WALL
//x+2,y-1 450x450, castle plantation
if (commerceCastle =="dates"){
	FarmMaker("dateplantation",xCastle+900,yCastle-450);
}
else if(commerceCastle =="sugar"){
	FarmMaker("sugarplantation",xCastle+900,yCastle-450);
}
else {
	FarmMaker("forest",xCastle+900,yCastle-450);
}

//x4 y6 450x450, castle farm
if (commerceCastle =="grain"){
	FarmMaker("grainfarm",xCastle+900,yCastle);	
} 
else if(commerceCastle =="flax"){
	FarmMaker("flaxfarm",xCastle+900,yCastle);	
} 
else if(commerceCastle =="pigs"){
	FarmMaker("pigfarm",xCastle+900,yCastle);
} 
else if(commerceCastle =="cheese"){
	FarmMaker("diaryfarm",xCastle+900,yCastle);
} 
else if(commerceCastle =="wool"){
	FarmMaker("sheep",xCastle+900,yCastle);
} 
else if(commerceCastle =="poultry"){
	FarmMaker("poultryfarm",xCastle+900,yCastle);
} 
else if(commerceCastle =="duck"){
	FarmMaker("duckfarm",xCastle+900,yCastle);
} 
else if(commerceCastle =="fruit"){
	FarmMaker("orchard",xCastle+900,yCastle);
} 
else if(commerceCastle =="honey"){
	FarmMaker("beekeeper",xCastle+900,yCastle);
} 
else if(commerceCastle =="olive_oil"){
	FarmMaker("olivegrove",xCastle+900,yCastle);
} 
else if(commerceCastle =="wine"){
	FarmMaker("vineyard",xCastle+900,yCastle);
}
else {
	FarmMaker("forest",xCastle+900,yCastle);
}

//x4 y7 450x450, castle mine
if (commerceCastle =="sapphire" || commerceCastle =="rubies" || commerceCastle =="emeralds" || commerceCastle =="salt" || commerceCastle =="tin" || commerceCastle =="lead" || commerceCastle =="iron" || commerceCastle =="gold" || commerceCastle =="silver"){
	FarmMaker("castlemine",xCastle+900,yCastle+450);	
}
else {
	FarmMaker("forest",xCastle+900,yCastle+450);
}

//x1 y4 450x450, castle mill
if (factoryCastle =="fuller"){
	FarmMaker("fuller",xCastle-450,yCastle-900);
} 
else if(factoryCastle =="leather"){
	FarmMaker("tanner",xCastle-450,yCastle-900);
} 
else if(factoryCastle =="vintner"){
	FarmMaker("vintner",xCastle-450,yCastle-900);
} 
else if (factoryCastle =="windmill"){
	FarmMaker("windmill",xCastle-450,yCastle-900);
} 
//river
else if(factoryCastle =="watermill"){
	FarmMaker("watermill",xCastle-450,yCastle-1350);
	fieldMaker("grain",xCastle-310,yCastle-1210);
}

//COMMERCIAL OUTER WALL
//x,y-2 450x450, castle port
if (factoryCastle =="fishery" || armorerCastle =="shipyard"){
	FarmMaker("port",xCastle,yCastle-900);
}

//INNER WALL
//x,y-1 450x450, castle church
//church
if (churchCastle =="priest"){
	FarmMaker("church",xCastle,yCastle-450);
}
//cathedral
else {	
	FarmMaker("cathedral",xCastle,yCastle-450);
}

//x-1,y 450x450, castle hall
if (fortCastle =="town_hall"){
	//FarmMaker("townhall",xCastle-450,yCastle);
}
else if (fortCastle =="burgh"){
	FarmMaker("burgh",xCastle-450,yCastle);
}
else {	
if (popCastle !="village" && factoryCastle =="none"){
	houseMaker("housing",xCastle-450,yCastle); //default
}
}

//x,y 450x450, castle centre
//castle centre
if (fortCastle =="mountain_castle" || fortCastle =="water_castle"){
	FarmMaker("castle",xCastle,yCastle);
}
//abbey centre
else if (fortCastle =="fortified_abbey" || fortCastle =="abbey_grange" || fortCastle =="abbey_scriptorium"){
	FarmMaker("abbey",xCastle,yCastle);
}
//inn centre
else if (fortCastle =="roadside_inn"){
	FarmMaker("inn",xCastle,yCastle);
}
//market plaza
else {	
	FarmMaker("fair",xCastle,yCastle);
}

//x+1,y 450x450, castle priory
if (fortCastle !="fortified_abbey" && fortCastle !="abbey_grange" && fortCastle !="abbey_scriptorium"){
	//priory
	if(monasticCastle =="lord_abbot" || monasticCastle =="prince-abbot"){
		FarmMaker("abbey",xCastle+450,yCastle);
	}
	//commandry
	else if(monasticCastle =="teutonic"){	
		FarmMaker("commandry",xCastle+450,yCastle);
	}
	//commandry
	else if(monasticCastle =="templar"){		
		FarmMaker("commandry",xCastle+450,yCastle);
	}
	//commandry
	else if(monasticCastle =="hospitaller"){
		FarmMaker("commandry",xCastle+450,yCastle);
	}
	else {
		if (popCastle !="village"){
			houseMaker("housing",xCastle+450,yCastle); //default
		}
	}
}

//entertainment
if (entertainment =="minstrel" || entertainment =="tavern" || entertainment =="caravan" || entertainment =="coaching"){
	FarmMaker("inn",xCastle+225,yCastle+15);
}	
else if (entertainment =="joust"){
	FarmMaker("joust",xCastle+225,yCastle+15);
}
else if (entertainment =="hunt" || entertainment =="falconry"){
	houseMaker("hunting",xCastle+225,yCastle+150); //hunt
}
else if (entertainment =="reliquary" || entertainment =="pilgrimage"){
	houseMaker("chapel",xCastle+225,yCastle+150); //chapel
}
else if (entertainment =="fair"){
	FarmMaker("fair",xCastle+225,yCastle+15);
}
else {
	if (popCastle !="village"){
		houseMaker("housing",xCastle+225,yCastle+15); //default
	}
}

//x,y+1 450x450, castle palace
if (fortCastle =="royal_court" || fortCastle =="chancery"){
	FarmMaker("royalpalace",xCastle-200,yCastle+450);
}
else if (fortCastle =="bishop_palace"){
	FarmMaker("bishoppalace",xCastle-200,yCastle+450);
}
else if (fortCastle =="ducal_residence"){
	FarmMaker("ducalpalace",xCastle-200,yCastle+450);
}
else {	
if (churchCastle !="priest"){
	houseMaker("housing",xCastle-200,yCastle+500); //default
}
else {
	if (popCastle !="village"){
		houseMaker("housing",xCastle-200,yCastle+500); //default
	}
}
}

//HOUSES
if (popCastle =="village"){
	if(culture =="turkish" || culture =="persian" || culture =="maghreb" || culture =="ifriqiya" || culture =="misr" || culture =="mashriq" || culture =="hejaz" || culture =="najd"){
		houseMaker("urban",xCastle-75,yCastle-320); //church ward
	}
	else {
		houseMaker("urban",xCastle-15,yCastle-350); //church ward
	}
	
}
else if (popCastle =="town"){
	houseMaker("urban",xCastle-150,yCastle-275); //church ward
	houseMaker("urban",xCastle+275,yCastle-150); //abbey ward
	houseMaker("urban",xCastle+150,yCastle+275); //palace ward
	houseMaker("urban",xCastle-275,yCastle+275); //castle ward
	houseMaker("street",xCastle+225,yCastle+425);
	houseMaker("street",xCastle-350,yCastle-575);
	houseMaker("street",xCastle+200,yCastle-575);
}
else if (popCastle =="city"){
	houseMaker("urban",xCastle-150,yCastle-275); //church ward
	houseMaker("urban",xCastle+275,yCastle-150); //abbey ward
	houseMaker("urban",xCastle+150,yCastle+275); //palace ward
	houseMaker("urban",xCastle-275,yCastle+275); //castle ward
	houseMaker("street",xCastle+225,yCastle+425);
	houseMaker("street",xCastle-350,yCastle-575);
	houseMaker("street",xCastle+200,yCastle-575);
}
else if (popCastle =="metropolis"){
	houseMaker("urban",xCastle-150,yCastle-275); //church ward
	houseMaker("urban",xCastle+275,yCastle-150); //abbey ward
	houseMaker("urban",xCastle+150,yCastle+275); //palace ward
	houseMaker("urban",xCastle-275,yCastle+275); //castle ward
	houseMaker("street",xCastle+225,yCastle+425);
	houseMaker("street",xCastle-350,yCastle-575);
	houseMaker("street",xCastle+200,yCastle-575);
}


//COMMERCIAL INNER WALL
// 450x450, castle factories
//tailor
if (factoryCastle =="tailor"){
	houseMaker("tailor",xCastle-30,yCastle-30); //business ward
}
//glasswork
else if (factoryCastle =="glasswork"){
	houseMaker("glassworks",xCastle-30,yCastle-30); //business ward
}
//potterer
else if (factoryCastle =="potterer"){
	houseMaker("potter",xCastle-30,yCastle-30); //business ward
}
//granary
else if (factoryCastle =="granary"){
	houseMaker("granary",xCastle-30,yCastle-30); //business ward
}
//furrier
else if (factoryCastle =="fur"){
	houseMaker("furrier",xCastle-30,yCastle-30); //business ward
}
//mint
else if (factoryCastle =="mint"){
	houseMaker("mint",xCastle-30,yCastle-30); //business ward
}
//soap maker
else if (factoryCastle =="soapmaker"){
	houseMaker("soapmaker",xCastle-30,yCastle-30); //business ward
}
//cooper
else if (factoryCastle =="cooper"){
	houseMaker("cooper",xCastle-30,yCastle-30); //business ward
}
//dyeswork
else if (factoryCastle =="madder" || factoryCastle =="woad" || factoryCastle =="saffron"){
	houseMaker("dyesworks",xCastle-30,yCastle-30); //business ward
}
else {	
	if (popCastle !="village"){
		houseMaker("housing",xCastle-30,yCastle-30); //default
	}
}

}