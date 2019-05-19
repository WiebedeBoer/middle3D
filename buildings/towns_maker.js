function townsMaker(){
	
//x1 y1 450x450

//x2 y1 450x450

//x3 y1 450x450

//x4 y1 450x450, capital mill
if (factoryCapital =="fuller" || factoryCapital =="vintner" || factoryCapital =="windmill" || factoryCapital =="watermill"){
}

//x5 y1 450x450

//x6 y1 450x450, capital church
//church
if (churchCapital =="priest"){
}
//cathedral
else {	
}
	
//x7 y1 450x450

//x8 y1 450x450

//x9 y1 450x450

//x10 y1 450x450

//x11 y1 450x450	
	
	
	
//x1 y2 450x450

//x2 y2 450x450

//x3 y2 450x450

//x4 y2 450x450, capital port
if (factoryCapital =="fishery" || armorerCapital =="shipyard"){
}

//x5 y2 450x450

//x6 y2 450x450, capital centre
//castle centre
if (fortCapital =="mountain_castle" || fortCapital =="water_castle"){
}
//abbey centre
else if (fortCapital =="fortified_abbey" || fortCapital =="abbey_grange" || fortCapital =="abbey_scriptorium"){
}
//market plaza
else {	
}
	
//x7 y2 450x450

//x8 y2 450x450

//x9 y2 450x450

//x10 y2 450x450

//x11 y2 450x450		
	
	
	
//x1 y3 450x450

//x2 y3 450x450

//x3 y3 450x450

//x4 y3 450x450

//x5 y3 450x450

//x6 y3 450x450, capital palace
if (fortCapital =="royal_court" || fortCapital =="chancery" || fortCapital =="bishop_palace" || fortCapital =="ducal_residence"){
}
else {
	
}
	
//x7 y3 450x450

//x8 y3 450x450

//x9 y3 450x450

//x10 y3 450x450

//x11 y3 450x450	


//x1 y4 450x450, castle mill
if (factoryCastle =="fuller" || factoryCastle =="vintner" || factoryCastle =="windmill" || factoryCastle =="watermill"){
}

//x2 y4 450x450, castle port
if (factoryCastle =="fishery" || armorerCastle =="shipyard"){
}

//x3 y4 450x450

//x4 y4 450x450

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

//x8 y4 450x450

//x9 y4 450x450

//x10 y4 450x450

//x11 y4 450x450	



//x1 y5 450x450

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

//x5 y5 450x450

//x6 y5 450x450, woodland and forester hut
if (climate =="temperate_woodlands" || climate =="mediterranean_woodlands" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands_marshes"){
FarmMaker("forest",60,-30);
}
	
//x7 y5 450x450

//x8 y5 450x450, town mine
if (commerceTown =="sapphire" || commerceTown =="rubies" || commerceTown =="emeralds" || commerceTown =="salt" || commerceTown =="tin" || commerceTown =="lead" || commerceTown =="iron" || commerceTown =="gold" || commerceTown =="silver"){
FarmMaker("townmine",60,870);	
}

//x9 y5 450x450

//x10 y5 450x450, town church
//church
if (churchTown =="priest"){
}
//cathedral
else {	
}

//x11 y5 450x450	




//x1 y6 450x450

//x2 y6 450x450, castle centre
//castle centre
if (fortCastle =="mountain_castle" || fortCastle =="water_castle"){
}
//abbey centre
else if (fortCastle =="fortified_abbey" || fortCastle =="abbey_grange" || fortCastle =="abbey_scriptorium"){
}
//market plaza
else {	
}

//x3 y6 450x450

//x4 y6 450x450, castle farm
if (commerceCastle =="grain" || commerceCastle =="flax" || commerceCastle =="pigs" || commerceCastle =="cheese" || commerceCastle =="wool" || commerceCastle =="poultry" || commerceCastle =="fruit" || commerceCastle =="honey" || commerceCastle =="olive_oil" || commerceCastle =="wine"){
}

//x5 y6 450x450

//x6 y6 450x450, start position
	
//x7 y6 450x450, shrubland and basket weaver
if (climate =="temperate_grasslands_marshes" || climate =="temperate_woodlands_marshes" || climate =="mediterranean_woodlands_marshes" || climate =="mediterranean_shrublands_marshes" || climate =="desert_marshes"){

}

//x8 y6 450x450, town farm
if (commerceTown =="grain" || commerceTown =="flax" || commerceTown =="pigs" || commerceTown =="cheese" || commerceTown =="wool" || commerceTown =="poultry" || commerceTown =="fruit" || commerceTown =="honey" || commerceTown =="olive_oil" || commerceTown =="wine"){
}

//x9 y6 450x450

//x10 y6 450x450, town centre
//castle centre
if (fortTown =="mountain_castle" || fortTown =="water_castle"){
}
//abbey centre
else if (fortTown =="fortified_abbey" || fortTown =="abbey_grange" || fortTown =="abbey_scriptorium"){
}
//market plaza
else {	
}

//x11 y6 450x450	




//x1 y7 450x450

//x2 y7 450x450

//x3 y7 450x450

//x4 y7 450x450, castle mine
if (commerceCastle =="sapphire" || commerceCastle =="rubies" || commerceCastle =="emeralds" || commerceCastle =="salt" || commerceCastle =="tin" || commerceCastle =="lead" || commerceCastle =="iron" || commerceCastle =="gold" || commerceCastle =="silver"){
FarmMaker("townmine",60,-930);	
}

//x5 y7 450x450

//x6 y7 450x450, stud farm or camel caravan
if (horse =="stud"){
}
else if(horse =="camel"){
}
	
//x7 y7 450x450

//x8 y7 450x450, town plantation
if (commerceTown =="dates" || commerceTown =="sugar"){
}

//x9 y7 450x450

//x10 y7 450x450

//x11 y7 450x450	
	
	
	
//x1 y8 450x450

//x2 y8 450x450

//x3 y8 450x450

//x4 y8 450x450

//x5 y8 450x450, abbey mine
if (commerceAbbey =="sapphire" || commerceAbbey =="rubies" || commerceAbbey =="emeralds" || commerceAbbey =="salt" || commerceAbbey =="tin" || commerceAbbey =="lead" || commerceAbbey =="iron" || commerceAbbey =="gold" || commerceAbbey =="silver"){
    FarmMaker("townmine",960,-30);	
}

//x6 y8 450x450, abbey farm
if (commerceAbbey =="grain" || commerceAbbey =="flax" || commerceAbbey =="pigs" || commerceAbbey =="cheese" || commerceAbbey =="wool" || commerceAbbey =="poultry" || commerceAbbey =="fruit" || commerceAbbey =="honey" || commerceAbbey =="olive_oil" || commerceAbbey =="wine"){
}
	
//x7 y8 450x450, abbey plantation
if (commerceAbbey =="dates" || commerceAbbey =="sugar"){
}

//x8 y8 450x450

//x9 y8 450x450

//x10 y8 450x450, town port
if (factoryTown =="fishery" || armorerTown =="shipyard"){
}

//x11 y8 450x450, town mill
if (factoryTown =="fuller" || factoryTown =="vintner" || factoryTown =="windmill" || factoryTown =="watermill"){
}	




//x1 y9 450x450

//x2 y9 450x450

//x3 y9 450x450

//x4 y9 450x450

//x5 y9 450x450

//x6 y9 450x450
	
//x7 y9 450x450

//x8 y9 450x450

//x9 y9 450x450

//x10 y9 450x450

//x11 y9 450x450	




//x1 y10 450x450

//x2 y10 450x450

//x3 y10 450x450

//x4 y10 450x450

//x5 y10 450x450

//x6 y10 450x450, abbey church
//church
if (churchAbbey =="priest"){
}
//cathedral
else {	
}
	
//x7 y10 450x450

//x8 y10 450x450, abbey port
if (factoryAbbey =="fishery" || armorerAbbey =="shipyard"){
}

//x9 y10 450x450

//x10 y10 450x450

//x11 y10 450x450	




//x1 y11 450x450

//x2 y11 450x450

//x3 y11 450x450

//x4 y11 450x450

//x5 y11 450x450

//x6 y11 450x450, abbey centre
//castle centre
if (fortAbbey =="mountain_castle" || fortAbbey =="water_castle"){
}
//abbey centre
else if (fortAbbey =="fortified_abbey" || fortAbbey =="abbey_grange" || fortAbbey =="abbey_scriptorium"){
}
//market plaza
else {	
}
	
//x7 y11 450x450

//x8 y11 450x450, abbey mill
if (factoryAbbey =="fuller" || factoryAbbey =="vintner" || factoryAbbey =="windmill" || factoryAbbey =="watermill"){
}	

//x9 y11 450x450

//x10 y11 450x450

//x11 y11 450x450	
	
	
	
}