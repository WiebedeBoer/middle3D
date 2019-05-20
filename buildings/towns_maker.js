//CENTER
function centerMaker(xCentre,yCentre){
	
//x6 y5 450x450, woodland and forester hut
if (climate =="temperate_woodlands" || climate =="mediterranean_woodlands" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands_marshes"){
	FarmMaker("forester",xCentre,yCentre-450);
}

//x6 y6 450x450, start position
	
//x7 y6 450x450, shrubland and basket weaver
if (climate =="temperate_grasslands_marshes" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands_marshes" || climate =="mediterranean_shrublands_marshes" || climate =="desert_marshes"){
	FarmMaker("basketweaver",xCentre,yCentre+450);
}

//x6 y7 450x450, stud farm or camel caravan
if (horse =="stud"){
	FarmMaker("studfarm",xCentre,yCentre+900);
}
else if(horse =="camel"){
}
	
}


//CAPITAL TOWN
function capitalMaker(xCapital,yCapital){
	
//x4 y1 450x450, capital mill
if (factoryCapital =="fuller"){
	FarmMaker("fuller",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="vintner"){
	FarmMaker("vintner",xCapital-900,yCapital-450);
} 
else if(factoryCapital =="windmill"){
	
} 
else if(factoryCapital =="watermill"){
	
}

//x5 y1 450x450, capital factories
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

//x6 y1 450x450, capital church
//church
if (churchCapital =="priest"){
}
//cathedral
else {	
}

//x4 y2 450x450, capital port
if (factoryCapital =="fishery" || armorerCapital =="shipyard"){
}

//x5 y2 450x450, capital hall
if (fortCapital =="town_hall"){
}
else if (fortCapital =="burgh"){
}
else {	
if (popCapital !="village"){
}
else {
}
}

//x6 y2 450x450, capital centre
//castle centre
if (fortCapital =="mountain_castle" || fortCapital =="water_castle"){
	//FarmMaker("castle",xCapital,yCapital);
}
//abbey centre
else if (fortCapital =="fortified_abbey" || fortCapital =="abbey_grange" || fortCapital =="abbey_scriptorium"){
}
//inn centre
else if (fortCapital =="roadside_inn"){
}
//market plaza
else {	
}
	
//x7 y2 450x450, capital priory
if (fortCapital !="fortified_abbey" && fortCapital !="abbey_grange" && fortCapital !="abbey_scriptorium"){
	//priory
	if(monasticCapital =="lord_abbot" || monasticCapital =="prince-abbot"){		
	}
	//commandry
	else if(monasticCapital =="teutonic"){		
	}
	//commandry
	else if(monasticCapital =="templar"){		
	}
	//commandry
	else if(monasticCapital =="hospitaller"){		
	}
	else {
	}
}

//x6 y3 450x450, capital palace
if (fortCapital =="royal_court" || fortCapital =="chancery"){
}
else if (fortCapital =="bishop_palace"){
}
else if (fortCapital =="ducal_residence"){
}
else {
if (churchCapital !="priest"){
}
else {
}	
}

//x5 y4 450x450, capital mine
if (commerceCapital =="sapphire" || commerceCapital =="rubies" || commerceCapital =="emeralds" || commerceCapital =="salt" || commerceCapital =="tin" || commerceCapital =="lead" || commerceCapital =="iron" || commerceCapital =="gold" || commerceCapital =="silver"){
    FarmMaker("capitalmine",xCapital-450,yCapital+900);	
}

//x6 y4 450x450, capital farm
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
	
} 
else if(commerceCapital =="fruit"){
	
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
	
//x7 y4 450x450, capital plantation
if (commerceCapital =="dates" || commerceCapital =="sugar"){
}
	
}

//CASTLE TOWN
function castleMaker(xCastle,yCastle){

//x1 y5 450x450, castle factories
//tailor
if (factoryCastle =="tailor"){
}
//glasswork
else if (factoryCastle =="glasswork"){
}
//potterer
else if (factoryCastle =="potterer"){
}
//granary
else if (factoryCastle =="granary"){
}
//furrier
else if (factoryCastle =="fur"){
}
//mint
else if (factoryCastle =="mint"){
}
//soap maker
else if (factoryCastle =="soapmaker"){
}
//cooper
else if (factoryCastle =="cooper"){
}
//dyeswork
else if (factoryCastle =="madder" || factoryCastle =="woad" || factoryCastle =="saffron"){
}
else {	
}

//x2 y5 450x450, castle church
//church
if (churchCastle =="priest"){
}
//cathedral
else {	
}

//x3 y5 450x450

//x4 y5 450x450, castle plantation
if (commerceCastle =="dates" || commerceCastle =="sugar"){
}

//x1 y4 450x450, castle mill
if (factoryCastle =="fuller"){
	FarmMaker("fuller",xCastle-900,yCastle-450);
} 
else if(factoryCastle =="vintner"){
	FarmMaker("vintner",xCastle-900,yCastle-450);
} 
else if (factoryCastle =="windmill"){
	
} 
else if(factoryCastle =="watermill"){
	
}

//x2 y4 450x450, castle port
if (factoryCastle =="fishery" || armorerCastle =="shipyard"){
}

//x1 y6 450x450, castle hall
if (fortCastle =="town_hall"){
}
else if (fortCastle =="burgh"){
}
else {	
if (popCastle !="village"){
}
else {
}
}

//x2 y6 450x450, castle centre
//castle centre
if (fortCastle =="mountain_castle" || fortCastle =="water_castle"){
}
//abbey centre
else if (fortCastle =="fortified_abbey" || fortCastle =="abbey_grange" || fortCastle =="abbey_scriptorium"){
}
//inn centre
else if (fortCastle =="roadside_inn"){
}
//market plaza
else {	
}

//x3 y6 450x450, castle priory
if (fortCastle !="fortified_abbey" && fortCastle !="abbey_grange" && fortCastle !="abbey_scriptorium"){
	//priory
	if(monasticCastle =="lord_abbot" || monasticCastle =="prince-abbot"){		
	}
	//commandry
	else if(monasticCastle =="teutonic"){		
	}
	//commandry
	else if(monasticCastle =="templar"){		
	}
	//commandry
	else if(monasticCastle =="hospitaller"){		
	}
	else {
	}
}	

//x4 y6 450x450, castle farm
if (commerceCastle =="grain"){
	FarmMaker("grainfarm",xCastle,yCastle+900);	
} 
else if(commerceCastle =="flax"){
	
} 
else if(commerceCastle =="pigs"){
	FarmMaker("pigfarm",xCastle,yCastle+900);
} 
else if(commerceCastle =="cheese"){
	FarmMaker("diaryfarm",xCastle,yCastle+900);
} 
else if(commerceCastle =="wool"){
	FarmMaker("sheep",xCastle,yCastle+900);
} 
else if(commerceCastle =="poultry"){
	
} 
else if(commerceCastle =="fruit"){
	
} 
else if(commerceCastle =="honey"){
	FarmMaker("beekeeper",xCastle,yCastle+900);
} 
else if(commerceCastle =="olive_oil"){
	FarmMaker("olivegrove",xCastle,yCastle+900);
} 
else if(commerceCastle =="wine"){
	FarmMaker("vineyard",xCastle,yCastle+900);
}

//x2 y7 450x450, castle palace
if (fortCastle =="royal_court" || fortCastle =="chancery"){
}
else if (fortCastle =="bishop_palace"){
}
else if (fortCastle =="ducal_residence"){
}
else {	
if (churchCastle !="priest"){
}
else {
}
}

//x4 y7 450x450, castle mine
if (commerceCastle =="sapphire" || commerceCastle =="rubies" || commerceCastle =="emeralds" || commerceCastle =="salt" || commerceCastle =="tin" || commerceCastle =="lead" || commerceCastle =="iron" || commerceCastle =="gold" || commerceCastle =="silver"){
	FarmMaker("castlemine",xCastle-450,yCastle+900);	
}


}

//TOWN TOWN
function townMaker(xTown,yTown){
	
//x8 y5 450x450, town mine
if (commerceTown =="sapphire" || commerceTown =="rubies" || commerceTown =="emeralds" || commerceTown =="salt" || commerceTown =="tin" || commerceTown =="lead" || commerceTown =="iron" || commerceTown =="gold" || commerceTown =="silver"){
	FarmMaker("townmine",xTown-450,yTown+900);		
}

//x9 y5 450x450, town factories
//tailor
if (factoryTown =="tailor"){
}
//glasswork
else if (factoryTown =="glasswork"){
}
//potterer
else if (factoryTown =="potterer"){
}
//granary
else if (factoryTown =="granary"){
}
//furrier
else if (factoryTown =="fur"){
}
//mint
else if (factoryTown =="mint"){
}
//soap maker
else if (factoryTown =="soapmaker"){
}
//cooper
else if (factoryTown =="cooper"){
}
//dyeswork
else if (factoryTown =="madder" || factoryTown =="woad" || factoryTown =="saffron"){
}
else {	
}

//x10 y5 450x450, town church
//church
if (churchTown =="priest"){
}
//cathedral
else {	
}

//x8 y6 450x450, town farm
if (commerceTown =="grain"){
	FarmMaker("grainfarm",xTown,yTown+900);	
} 
else if(commerceTown =="flax"){
	
} 
else if(commerceTown =="pigs"){
	FarmMaker("pigfarm",xTown,yTown+900);
} 
else if(commerceTown =="cheese"){
	FarmMaker("diaryfarm",xTown,yTown+900);
} 
else if(commerceTown =="wool"){
	FarmMaker("sheep",xTown,yTown+900);
} 
else if(commerceTown =="poultry"){
	
} 
else if(commerceTown =="fruit"){
	
} 
else if(commerceTown =="honey"){
	FarmMaker("beekeeper",xTown,yTown+900);
} 
else if(commerceTown =="olive_oil"){
	FarmMaker("olivegrove",xTown,yTown+900);
} 
else if(commerceTown =="wine"){
	FarmMaker("vineyard",xTown,yTown+900);
}

//x9 y6 450x450, town hall
if (fortTown =="town_hall"){
}
else if (fortTown =="burgh"){
}
else {	
if (popTown !="village"){
}
else {
}
}

//x10 y6 450x450, town centre
//castle centre
if (fortTown =="mountain_castle" || fortTown =="water_castle"){
}
//abbey centre
else if (fortTown =="fortified_abbey" || fortTown =="abbey_grange" || fortTown =="abbey_scriptorium"){
}
//inn centre
else if (fortTown =="roadside_inn"){
}
//market plaza
else {	
}

//x11 y6 450x450, town priory
if (fortTown !="fortified_abbey" && fortTown !="abbey_grange" && fortTown !="abbey_scriptorium"){
	//priory
	if(monasticTown =="lord_abbot" || monasticTown =="prince-abbot"){		
	}
	//commandry
	else if(monasticTown =="teutonic"){		
	}
	//commandry
	else if(monasticTown =="templar"){		
	}
	//commandry
	else if(monasticTown =="hospitaller"){		
	}
	else {
	}
}

//x8 y7 450x450, town plantation
if (commerceTown =="dates" || commerceTown =="sugar"){
}

//x9 y7 450x450

//x10 y7 450x450, town palace
if (fortTown =="royal_court" || fortTown =="chancery"){
}
else if (fortTown =="bishop_palace"){
}
else if (fortTown =="ducal_residence"){
}
else {
if (churchTown !="priest"){
}
else {
}	
}

//x10 y8 450x450, town port
if (factoryTown =="fishery" || armorerTown =="shipyard"){
}

//x11 y8 450x450, town mill
if (factoryTown =="fuller"){
	FarmMaker("fuller",xTown-900,yTown-450);	
} 
else if(factoryTown =="vintner"){
	FarmMaker("vintner",xTown-900,yTown-450);	
} 
else if (factoryTown =="windmill"){
	
} 
else if (factoryTown =="watermill"){
}	

	
}

//ABBEY TOWN
function abbeyMaker(xAbbey,yAbbey){
	
//x5 y8 450x450, abbey mine
if (commerceAbbey =="sapphire" || commerceAbbey =="rubies" || commerceAbbey =="emeralds" || commerceAbbey =="salt" || commerceAbbey =="tin" || commerceAbbey =="lead" || commerceAbbey =="iron" || commerceAbbey =="gold" || commerceAbbey =="silver"){
    FarmMaker("townmine",xAbbey-450,yAbbey+900);	
}

//x6 y8 450x450, abbey farm
if (commerceAbbey =="grain"){
	FarmMaker("grainfarm",xAbbey,yAbbey+900);	
} 
else if(commerceAbbey =="flax"){
	
} 
else if(commerceAbbey =="pigs"){
	FarmMaker("pigfarm",xAbbey,yAbbey+900);
} 
else if(commerceAbbey =="cheese"){
	FarmMaker("diaryfarm",xAbbey,yAbbey+900);
} 
else if(commerceAbbey =="wool"){
	FarmMaker("sheep",xAbbey,yAbbey+900);
} 
else if(commerceAbbey =="poultry"){
	
} 
else if(commerceAbbey =="fruit"){
	
} 
else if(commerceAbbey =="honey"){
	FarmMaker("beekeeper",xAbbey,yAbbey+900);
} 
else if(commerceAbbey =="olive_oil"){
	FarmMaker("olivegrove",xAbbey,yAbbey+900);
} 
else if(commerceAbbey =="wine"){
	FarmMaker("vineyard",xAbbey,yAbbey+900);
}
	
//x7 y8 450x450, abbey plantation
if (commerceAbbey =="dates"){	
}
else if(commerceAbbey =="sugar"){
}

//x5 y9 450x450, abbey factories
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

//x6 y9 450x450, abbey church
//church
if (churchAbbey =="priest"){
}
//cathedral
else {	
}

//x5 y10 450x450, abbey hall
if (fortAbbey =="town_hall"){
}
else if (fortAbbey =="burgh"){
}
else {	
if (popAbbey !="village"){
}
else {
}
}

//x6 y10 450x450, abbey centre
//castle centre
if (fortAbbey =="mountain_castle" || fortAbbey =="water_castle"){
}
//abbey centre
else if (fortAbbey =="fortified_abbey" || fortAbbey =="abbey_grange" || fortAbbey =="abbey_scriptorium"){
}
//inn centre
else if (fortAbbey =="roadside_inn"){
}
//market plaza
else {	
}

//x8 y10 450x450, abbey port
if (factoryAbbey =="fishery" || armorerAbbey =="shipyard"){
}

//x6 y11 450x450, abbey palace
if (fortAbbey =="royal_court" || fortAbbey =="chancery"){
}
else if (fortAbbey =="bishop_palace"){
}
else if (fortAbbey =="ducal_residence"){
}
else {
if (churchAbbey !="priest"){
}
else {
}	
}

//x8 y11 450x450, abbey mill
if (factoryAbbey =="fuller"){
	FarmMaker("fuller",xAbbey-900,yAbbey-450);
} 
else if(factoryAbbey =="vintner"){
	FarmMaker("vintner",xAbbey-900,yAbbey-450);
} 
else if(factoryAbbey =="windmill"){
	
}
else if(factoryAbbey =="watermill"){
}
	
}