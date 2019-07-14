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
var gateNorth = new CastleGate(xCapital+442,-245,yCapital-310,0,culture); 
scene.add( gateNorth );
var gateSouth = new CastleGate(xCapital-442,-245,yCapital+190,3.1415926,culture); 
scene.add( gateSouth );
var gateWest = new CastleGate(xCapital-255,-245,yCapital-502,1.5707963,culture); 
scene.add( gateWest );
var gateEast = new CastleGate(xCapital+245,-245,yCapital+382,4.7123889,culture); 
scene.add( gateEast );

}

//OUTER WALL
//x-1,y+2 450450, capital mine
if (commerceCapital =="sapphire" || commerceCapital =="rubies" || commerceCapital =="emeralds" || commerceCapital =="salt" || commerceCapital =="tin" || commerceCapital =="lead" || commerceCapital =="iron" || commerceCapital =="gold" || commerceCapital =="silver"){
    FarmMaker("capitalmine",xCapital-450,yCapital+900);	
}
else {
	FarmMaker("forest",xCapital-450,yCapital+900);
}

//x,y+2 450x450, capital farm
if (commerceCapital =="grain"){
	FarmMaker("grainfarm",xCapital,yCapital+900);	
} 
else if(commerceCapital =="flax"){
	FarmMaker("flaxfarm",xCapital,yCapital+900);
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
else if(commerceCapital =="duck"){
	FarmMaker("duckfarm",xCapital,yCapital+900);
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
else {
	FarmMaker("forest",xCapital,yCapital+900);
}
	
//x+1,y+2 450x450, capital plantation
if (commerceCapital =="dates"){
	FarmMaker("dateplantation",xCapital+450,yCapital+900);
}
else if (commerceCapital =="sugar"){
	FarmMaker("sugarplantation",xCapital+450,yCapital+900);
}
else {
	FarmMaker("forest",xCapital+450,yCapital+900);
}
	
//x-2,y-1 450x450, capital mill
if (factoryCapital =="fuller"){
	FarmMaker("fuller",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="leather"){
	FarmMaker("tanner",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="vintner"){
	FarmMaker("vintner",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="windmill"){
	FarmMaker("windmill",xCapital-900,yCapital-450);
} 
//river
else if(factoryCapital =="watermill"){
	FarmMaker("watermill",xCapital-1200,yCapital-450);
	fieldMaker("grain",xCapital-1060,yCapital-310);
}

//x-2,y 450x450, capital port
if (factoryCapital =="fishery" || armorerCapital =="shipyard"){
	FarmMaker("port",xCapital-900,yCapital);
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
	FarmMaker("burgh",xCapital-450,yCapital);
}
else {	
if (popCapital !="village" && factoryCapital =="none"){
	houseMaker("housing",xCapital,yCapital); //default
}
}

//x,y 450x450, capital centre
//castle centre
if (fortCapital =="mountain_castle" || fortCapital =="water_castle"){
	FarmMaker("castle",xCapital,yCapital);
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
	FarmMaker("fair",xCapital,yCapital);
}
	
//x+1,y 450x450, capital priory
if (fortCapital !="fortified_abbey" && fortCapital !="abbey_grange" && fortCapital !="abbey_scriptorium"){
	//priory
	if(monasticCapital =="lord_abbot" || monasticCapital =="prince-abbot"){
		FarmMaker("abbey",xCapital+450,yCapital);
	}
	//commandry
	else if(monasticCapital =="teutonic"){	
		FarmMaker("commandry",xCapital+450,yCapital);
	}
	//commandry
	else if(monasticCapital =="templar"){
		FarmMaker("commandry",xCapital+450,yCapital);
	}
	//commandry
	else if(monasticCapital =="hospitaller"){
		FarmMaker("commandry",xCapital+450,yCapital);
	}
	else {
		if (popCapital !="village"){
			houseMaker("housing",xCapital+450,yCapital); //default
		}
	}
}

//entertainment
if (entertainment =="minstrel" || entertainment =="tavern" || entertainment =="caravan" || entertainment =="coaching"){
	FarmMaker("inn",xCapital+225,yCapital+15);
}	
else if (entertainment =="joust"){
	FarmMaker("joust",xCapital+225,yCapital+15);
}
else if (entertainment =="hunt" || entertainment =="falconry"){
	houseMaker("hunting",xCapital+225,yCapital+150); //hunt	
}
else if (entertainment =="reliquary" || entertainment =="pilgrimage"){
	houseMaker("chapel",xCapital+225,yCapital+150); //chapel
}
else if (entertainment =="fair"){
	FarmMaker("fair",xCapital+225,yCapital+15);
}
else {
	if (popCapital !="village"){
		houseMaker("housing",xCapital+225,yCapital+15); //default
	}
}

//x,y+1 450x450, capital palace
if (fortCapital =="royal_court" || fortCapital =="chancery"){
	FarmMaker("royalpalace",xCapital-200,yCapital+450);
}
else if (fortCapital =="bishop_palace"){
	FarmMaker("bishoppalace",xCapital-200,yCapital+450);
}
else if (fortCapital =="ducal_residence"){
	FarmMaker("ducalpalace",xCapital-200,yCapital+450);
}
else {
if (churchCapital !="priest"){
	houseMaker("housing",xCapital-200,yCapital+500); //default
}
else {
	if (popCapital !="village"){
		houseMaker("housing",xCapital-200,yCapital+500); //default
	}
}	
}

//HOUSES
if (popCapital =="village"){
	if(culture =="turkish" || culture =="persian" || culture =="maghreb" || culture =="ifriqiya" || culture =="misr" || culture =="mashriq" || culture =="hejaz" || culture =="najd"){
		houseMaker("urban",xCapital-75,yCapital-320); //church ward
	}
	else {
		houseMaker("urban",xCapital-15,yCapital-350); //church ward
	}
	
}
else if (popCapital =="town"){
	houseMaker("urban",xCapital-150,yCapital-275); //church ward
	houseMaker("urban",xCapital+275,yCapital-150); //abbey ward
	houseMaker("urban",xCapital+150,yCapital+275); //palace ward
	houseMaker("urban",xCapital-275,yCapital+275); //castle ward
	houseMaker("street",xCapital+225,yCapital+425); 
	houseMaker("street",xCapital-350,yCapital-575);
	houseMaker("street",xCapital+200,yCapital-575);
}
else if (popCapital =="city"){
	houseMaker("urban",xCapital-150,yCapital-275); //church ward
	houseMaker("urban",xCapital+275,yCapital-150); //abbey ward
	houseMaker("urban",xCapital+150,yCapital+275); //palace ward
	houseMaker("urban",xCapital-275,yCapital+275); //castle ward
	houseMaker("street",xCapital+225,yCapital+425); 
	houseMaker("street",xCapital-350,yCapital-575);
	houseMaker("street",xCapital+200,yCapital-575);
}
else if (popCapital =="metropolis"){
	houseMaker("urban",xCapital-150,yCapital-275); //church ward
	houseMaker("urban",xCapital+275,yCapital-150); //abbey ward
	houseMaker("urban",xCapital+150,yCapital+275); //palace ward
	houseMaker("urban",xCapital-275,yCapital+275); //castle ward
	houseMaker("street",xCapital+225,yCapital+425); 
	houseMaker("street",xCapital-350,yCapital-575);
	houseMaker("street",xCapital+200,yCapital-575);
}

//COMMERCIAL INNER WALL
// 450x450, capital factories
//tailor
if (factoryCapital =="tailor"){
	houseMaker("tailor",xCapital-30,yCapital-30); //business ward
}
//glasswork
else if (factoryCapital =="glasswork"){
	houseMaker("glassworks",xCapital-30,yCapital-30); //business ward, glasswork
}
//potterer
else if (factoryCapital =="potterer"){
	houseMaker("potter",xCapital-30,yCapital-30); //business ward, potterer
}
//granary
else if (factoryCapital =="granary"){
	houseMaker("granary",xCapital-30,yCapital-30); //business ward, granary
}
//furrier
else if (factoryCapital =="fur"){
	houseMaker("furrier",xCapital-30,yCapital-30); //business ward
}
//mint
else if (factoryCapital =="mint"){
	houseMaker("mint",xCapital-30,yCapital-30); //business ward, mint
}
//soap maker
else if (factoryCapital =="soapmaker"){
	houseMaker("soapmaker",xCapital-30,yCapital-30); //business ward
}
//cooper
else if (factoryCapital =="cooper"){
	houseMaker("cooper",xCapital-30,yCapital-30); //business ward, cooper
}
//dyeswork
else if (factoryCapital =="madder" || factoryCapital =="woad" || factoryCapital =="saffron"){
	houseMaker("dyesworks",xCapital-30,yCapital-30); //business ward
}
else {	
	if (popCapital !="village"){
		houseMaker("housing",xCapital-30,yCapital-30); //default
	}
}

}