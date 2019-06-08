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
	FarmMaker("studfarm",xCentre,yCentre);
}
else if(horse =="camel"){
	//FarmMaker("camelcaravan",xCentre,yCentre);
}
	
}