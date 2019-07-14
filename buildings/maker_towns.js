//TOWN TOWN
function townMaker(xTown,yTown){

//WALL	
//city walls	
if (popTown !="village"){
	
//northern walls
var wallNorth1t = new CityWall("wallNS",30,540,60,xTown+300,yTown-600-wallOffset); 
scene.add( wallNorth1t );
var wallNorth2t = new CityWall("wallNS",30,540,60,xTown-300,yTown-600-wallOffset); 
scene.add( wallNorth2t );
//eastern walls
var wallEast1t = new CityWall("wallEW",30,60,540,xTown-600,yTown+300-wallOffset);
scene.add( wallEast1t );
var wallEast2t = new CityWall("wallEW",30,60,540,xTown-600,yTown-300-wallOffset);
scene.add( wallEast2t );
//southern walls
var wallSouth1t = new CityWall("wallNS",30,540,60,xTown+300,yTown+600-wallOffset); 
scene.add( wallSouth1t );
var wallSouth2t = new CityWall("wallNS",30,540,60,xTown-300,yTown+600-wallOffset); 
scene.add( wallSouth2t );
//western walls
var wallWest1t = new CityWall("wallEW",30,60,540,xTown+600,yTown+300-wallOffset);  
scene.add( wallWest1t );
var wallWest2t = new CityWall("wallEW",30,60,540,xTown+600,yTown-300-wallOffset);  
scene.add( wallWest2t );

//towers
var tower1t = new GateTower("tower","city_tower","city_port","city_port","city_tower","roof3",80,60,60,xTown-600,yTown-600-wallOffset); 
scene.add( tower1t );
var tower2t = new GateTower("tower","city_port","city_tower","city_port","city_tower","roof3",80,60,60,xTown-600,yTown+600-wallOffset); 
scene.add( tower2t );
var tower3t = new GateTower("tower","city_tower","city_port","city_tower","city_port","roof3",80,60,60,xTown+600,yTown-600-wallOffset); 
scene.add( tower3t );
var tower4t = new GateTower("tower","city_port","city_tower","city_tower","city_port","roof3",80,60,60,xTown+600,yTown+600-wallOffset); 
scene.add( tower4t );

//gates
var gateNortht = new CastleGate(xTown+442,-245,yTown-310,0,culture); 
scene.add( gateNortht );
var gateSoutht = new CastleGate(xTown-442,-245,yTown+190,3.1415926,culture); 
scene.add( gateSoutht );
var gateWestt = new CastleGate(xTown-255,-245,yTown-502,1.5707963,culture); 
scene.add( gateWestt );
var gateEastt = new CastleGate(xTown+245,-245,yTown+382,4.7123889,culture); 
scene.add( gateEastt );
	
}	

//OUTER WALL
//x-2,y+1 450x450, town plantation
if (commerceTown =="dates"){
	FarmMaker("dateplantation",xTown-900,yTown+450);
}
else if(commerceTown =="sugar"){
	FarmMaker("sugarplantation",xTown-900,yTown+450);
}
else {
	FarmMaker("forest",xTown-900,yTown+450);
}

//x-2,y 450x450, town farm
if (commerceTown =="grain"){
	FarmMaker("grainfarm",xTown-900,yTown);	
} 
else if(commerceTown =="flax"){
	FarmMaker("flaxfarm",xTown-900,yTown);	
} 
else if(commerceTown =="pigs"){
	FarmMaker("pigfarm",xTown-900,yTown);
} 
else if(commerceTown =="cheese"){
	FarmMaker("diaryfarm",xTown-900,yTown);
} 
else if(commerceTown =="wool"){
	FarmMaker("sheep",xTown-900,yTown);
} 
else if(commerceTown =="poultry"){
	FarmMaker("poultryfarm",xTown-900,yTown);
}
else if(commerceTown =="duck"){
	FarmMaker("duckfarm",xTown-900,yTown);
}  
else if(commerceTown =="fruit"){
	FarmMaker("orchard",xTown-900,yTown);
} 
else if(commerceTown =="honey"){
	FarmMaker("beekeeper",xTown-900,yTown);
} 
else if(commerceTown =="olive_oil"){
	FarmMaker("olivegrove",xTown-900,yTown);
} 
else if(commerceTown =="wine"){
	FarmMaker("vineyard",xTown-900,yTown);
}
else {
	FarmMaker("forest",xTown-900,yTown);
}
	
//x-1,y-2 450x450, town mine
if (commerceTown =="sapphire" || commerceTown =="rubies" || commerceTown =="emeralds" || commerceTown =="salt" || commerceTown =="tin" || commerceTown =="lead" || commerceTown =="iron" || commerceTown =="gold" || commerceTown =="silver"){
	FarmMaker("townmine",xTown-900,yTown-450);		
}
else {
	FarmMaker("forest",xTown-900,yTown-450);
}

//x+1,y+2 450x450, town mill
if (factoryTown =="fuller"){
	FarmMaker("fuller",xTown+450,yTown+900);	
} 
else if(factoryTown =="leather"){
	FarmMaker("tanner",xTown+450,yTown+900);	
} 
else if(factoryTown =="vintner"){
	FarmMaker("vintner",xTown+450,yTown+900);	
} 
else if (factoryTown =="windmill"){
	FarmMaker("windmill",xTown+450,yTown+900);
} 
//river
else if (factoryTown =="watermill"){
	FarmMaker("watermill",xTown+450,yTown+1200);
	fieldMaker("grain",xTown+380,yTown+1130);
}

//x,y+2 450x450, town port
if (factoryTown =="fishery" || armorerTown =="shipyard"){
	FarmMaker("port",xTown,yTown+900);	
}

//INNER WALL
//x,y-1 450x450, town church
//church
if (churchTown =="priest"){
	FarmMaker("church",xTown,yTown-450);
}
//cathedral
else {
	FarmMaker("cathedral",xTown,yTown-450);
}

//x-1,y 450x450, town hall
if (fortTown =="town_hall"){
	//FarmMaker("townhall",xTown-450,yTown);
}
else if (fortTown =="burgh"){
	FarmMaker("burgh",xTown-450,yTown);
}
else {	
if (popTown !="village" && factoryTown =="none"){
	houseMaker("housing",xTown-450,yTown); //default
}
}

//x,y 450x450, town centre
//castle centre
if (fortTown =="mountain_castle" || fortTown =="water_castle"){
	FarmMaker("castle",xTown,yTown);
}
//abbey centre
else if (fortTown =="fortified_abbey" || fortTown =="abbey_grange" || fortTown =="abbey_scriptorium"){
	FarmMaker("abbey",xTown,yTown);
}
//inn centre
else if (fortTown =="roadside_inn"){
	FarmMaker("inn",xTown,yTown);
}
//market plaza
else {	
	FarmMaker("fair",xTown,yTown);
}

//x+1,y 450x450, town priory
if (fortTown !="fortified_abbey" && fortTown !="abbey_grange" && fortTown !="abbey_scriptorium"){
	//priory
	if(monasticTown =="lord_abbot" || monasticTown =="prince-abbot"){
		FarmMaker("abbey",xTown+450,yTown);
	}
	//commandry
	else if(monasticTown =="teutonic"){	
		FarmMaker("commandry",xTown+450,yTown);
	}
	//commandry
	else if(monasticTown =="templar"){	
		FarmMaker("commandry",xTown+450,yTown);
	}
	//commandry
	else if(monasticTown =="hospitaller"){	
		FarmMaker("commandry",xTown+450,yTown);
	}
	else {
		if (popTown !="village"){
			houseMaker("housing",xTown+450,yTown); //default
		}
	}
}

//entertainment
if (entertainment =="minstrel" || entertainment =="tavern" || entertainment =="caravan" || entertainment =="coaching"){
	FarmMaker("inn",xTown+225,yTown+15);
}
else if (entertainment =="joust"){
	FarmMaker("joust",xTown+225,yTown+15);
}
else if (entertainment =="hunt" || entertainment =="falconry"){
	houseMaker("hunting",xTown+225,yTown+150); //hunt
}
else if (entertainment =="reliquary" || entertainment =="pilgrimage"){
	houseMaker("chapel",xTown+225,yTown+150); //chapel
}
else if (entertainment =="fair"){
	FarmMaker("fair",xTown+225,yTown+15);
}
else {
	if (popTown !="village"){
		houseMaker("housing",xTown+225,yTown+15); //default
	}
}

//x,y+1 450x450, town palace
if (fortTown =="royal_court" || fortTown =="chancery"){
	FarmMaker("royalpalace",xTown-200,yTown+450);
}
else if (fortTown =="bishop_palace"){
	FarmMaker("bishoppalace",xTown-200,yTown+450);
}
else if (fortTown =="ducal_residence"){
	FarmMaker("ducalpalace",xTown-200,yTown+450);
}
else {
if (churchTown !="priest"){
	houseMaker("housing",xTown-200,yTown+500); //default
}
else {
	if (popTown !="village"){
		houseMaker("housing",xTown-200,yTown+500); //default
	}
}	
}

//HOUSES
if (popTown =="village"){
	if(culture =="turkish" || culture =="persian" || culture =="maghreb" || culture =="ifriqiya" || culture =="misr" || culture =="mashriq" || culture =="hejaz" || culture =="najd"){
		houseMaker("urban",xTown-75,yTown-320); //church ward
	}
	else {
		houseMaker("urban",xTown-15,yTown-350); //church ward
	}
	
}
else if (popTown =="town"){
	houseMaker("urban",xTown-150,yTown-275); //church ward
	houseMaker("urban",xTown+275,yTown-150); //abbey ward
	houseMaker("urban",xTown+150,yTown+275); //palace ward
	houseMaker("urban",xTown-275,yTown+275); //castle ward
	houseMaker("street",xTown+225,yTown+425); 	
	houseMaker("street",xTown-350,yTown-575); 
	houseMaker("street",xTown+200,yTown-575); 
}
else if (popTown =="city"){
	houseMaker("urban",xTown-150,yTown-275); //church ward
	houseMaker("urban",xTown+275,yTown-150); //abbey ward
	houseMaker("urban",xTown+150,yTown+275); //palace ward
	houseMaker("urban",xTown-275,yTown+275); //castle ward
	houseMaker("street",xTown+225,yTown+425);
	houseMaker("street",xTown-350,yTown-575);
	houseMaker("street",xTown+200,yTown-575); 	
}
else if (popTown =="metropolis"){
	houseMaker("urban",xTown-150,yTown-275); //church ward
	houseMaker("urban",xTown+275,yTown-150); //abbey ward
	houseMaker("urban",xTown+150,yTown+275); //palace ward
	houseMaker("urban",xTown-275,yTown+275); //castle ward
	houseMaker("street",xTown+225,yTown+425);
	houseMaker("street",xTown-350,yTown-575); 
	houseMaker("street",xTown+200,yTown-575); 
}

//COMMERCIAL INNER WALL
// 450x450, town factories
//tailor
if (factoryTown =="tailor"){
	houseMaker("tailor",xTown-30,yTown-30); //business ward
}
//glasswork
else if (factoryTown =="glasswork"){
	houseMaker("glassworks",xTown-30,yTown-30); //business ward
}
//potterer
else if (factoryTown =="potterer"){
	houseMaker("potter",xTown-30,yTown-30); //business ward
}
//granary
else if (factoryTown =="granary"){
	houseMaker("granary",xTown-30,yTown-30); //business ward
}
//furrier
else if (factoryTown =="fur"){
	houseMaker("furrier",xTown-30,yTown-30); //business ward
}
//mint
else if (factoryTown =="mint"){
	houseMaker("mint",xTown-30,yTown-30); //business ward
}
//soap maker
else if (factoryTown =="soapmaker"){
	houseMaker("soapmaker",xTown-30,yTown-30); //business ward
}
//cooper
else if (factoryTown =="cooper"){
	houseMaker("cooper",xTown-30,yTown-30); //business ward
}
//dyeswork
else if (factoryTown =="madder" || factoryTown =="woad" || factoryTown =="saffron"){
	houseMaker("dyesworks",xTown-30,yTown-30); //business ward
}
else {	
	if (popTown !="village"){
		houseMaker("housing",xTown-30,yTown-30); //default
	}
}
	
}