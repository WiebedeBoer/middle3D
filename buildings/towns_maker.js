//CENTER
function centerMaker(xTown,yTown){
	
//x6 y5 450x450, woodland and forester hut
if (climate =="temperate_woodlands" || climate =="mediterranean_woodlands" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands_marshes"){
FarmMaker("forester",60,-30);
}

//x6 y6 450x450, start position
	
//x7 y6 450x450, shrubland and basket weaver
if (climate =="temperate_grasslands_marshes" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands_marshes" || climate =="mediterranean_shrublands_marshes" || climate =="desert_marshes"){
FarmMaker("basketweaver",60,-30);
}

//x6 y7 450x450, stud farm or camel caravan
if (horse =="stud"){
}
else if(horse =="camel"){
}
	
}


//CAPITAL TOWN
function capitalMaker(xTown,yTown){
	
//x4 y1 450x450, capital mill
if (factoryCapital =="fuller" || factoryCapital =="vintner" || factoryCapital =="windmill" || factoryCapital =="watermill"){
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
    FarmMaker("capitalmine",-840,-30);	
}

//x6 y4 450x450, capital farm
if (commerceCapital =="grain" || commerceCapital =="flax" || commerceCapital =="pigs" || commerceCapital =="cheese" || commerceCapital =="wool" || commerceCapital =="poultry" || commerceCapital =="fruit" || commerceCapital =="honey" || commerceCapital =="olive_oil" || commerceCapital =="wine"){
}
	
//x7 y4 450x450, capital plantation
if (commerceCapital =="dates" || commerceCapital =="sugar"){
}
	
}

//CASTLE TOWN
function castleMaker(xTown,yTown){

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
if (factoryCastle =="fuller" || factoryCastle =="vintner" || factoryCastle =="windmill" || factoryCastle =="watermill"){
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
if (commerceCastle =="grain" || commerceCastle =="flax" || commerceCastle =="pigs" || commerceCastle =="cheese" || commerceCastle =="wool" || commerceCastle =="poultry" || commerceCastle =="fruit" || commerceCastle =="honey" || commerceCastle =="olive_oil" || commerceCastle =="wine"){
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
FarmMaker("townmine",60,-930);	
}


}

//TOWN TOWN
function townMaker(xTown,yTown){
	
//x8 y5 450x450, town mine
if (commerceTown =="sapphire" || commerceTown =="rubies" || commerceTown =="emeralds" || commerceTown =="salt" || commerceTown =="tin" || commerceTown =="lead" || commerceTown =="iron" || commerceTown =="gold" || commerceTown =="silver"){
FarmMaker("townmine",60,870);	
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
if (commerceTown =="grain" || commerceTown =="flax" || commerceTown =="pigs" || commerceTown =="cheese" || commerceTown =="wool" || commerceTown =="poultry" || commerceTown =="fruit" || commerceTown =="honey" || commerceTown =="olive_oil" || commerceTown =="wine"){
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
if (factoryTown =="fuller" || factoryTown =="vintner" || factoryTown =="windmill" || factoryTown =="watermill"){
}	

	
}

//ABBEY TOWN
function abbeyMaker(xTown,yTown){
	
//x5 y8 450x450, abbey mine
if (commerceAbbey =="sapphire" || commerceAbbey =="rubies" || commerceAbbey =="emeralds" || commerceAbbey =="salt" || commerceAbbey =="tin" || commerceAbbey =="lead" || commerceAbbey =="iron" || commerceAbbey =="gold" || commerceAbbey =="silver"){
    FarmMaker("townmine",960,-30);	
}

//x6 y8 450x450, abbey farm
if (commerceAbbey =="grain" || commerceAbbey =="flax" || commerceAbbey =="pigs" || commerceAbbey =="cheese" || commerceAbbey =="wool" || commerceAbbey =="poultry" || commerceAbbey =="fruit" || commerceAbbey =="honey" || commerceAbbey =="olive_oil" || commerceAbbey =="wine"){
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
if (factoryAbbey =="fuller" || factoryAbbey =="vintner" || factoryAbbey =="windmill" || factoryAbbey =="watermill"){
}
	
}