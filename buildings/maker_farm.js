function FarmMaker(farmtype,xVil,zVil){
    //x5,z5
if (farmtype=="church"){
    houseMaker("church",xVil,zVil); //center
}
else if (farmtype=="cathedral"){
    houseMaker("cathedral",xVil,zVil); //center
}
else if (farmtype=="abbey"){
    houseMaker("basilica",xVil,zVil); //center
}
else if (farmtype=="commandry"){
    houseMaker("basilica",xVil,zVil); //center
}
else if (farmtype=="ducalpalace"){
    houseMaker("ducalpalace",xVil,zVil); //center
}
else if (farmtype=="royalpalace"){
    houseMaker("royalpalace",xVil,zVil); //center
}
else if (farmtype=="bishoppalace"){
    houseMaker("bishoppalace",xVil,zVil); //center
}
else if (farmtype=="inn"){
    houseMaker("inn",xVil,zVil); //center
}
else if (farmtype=="joust"){
    houseMaker("joust",xVil-30,zVil+45); //center
	var fenceJoust = new Fence(xVil-30,0,zVil,0,0,0); 
    scene.add(fenceJoust);
	var fenceJoust2 = new Fence(xVil-30,0,zVil-30,0,0,0); 
    scene.add(fenceJoust2);
}
else if (farmtype=="castle"){
    houseMaker("keep",xVil,zVil); //center
}
else if (farmtype=="burgh"){
    houseMaker("keep",xVil+60,zVil); //center
}
else if (farmtype=="port"){
	
    fieldMaker("forest",xVil+90,zVil-180);
    fieldMaker("forest",xVil+90,zVil-90);
	
    houseMaker("warehouse",xVil+30,zVil);    
	
    houseMaker("barn",xVil-65,zVil-15); //center
	houseMaker("barn",xVil-65,zVil-75);	
	houseMaker("stall",xVil+90,zVil-90);
	
	fieldMaker("forest",xVil-180,zVil-270);
}
else if (farmtype=="fair"){
	
    houseMaker("warehouse",xVil-45,zVil+15);    
	
    houseMaker("stall",xVil+90,zVil-25); //center
	houseMaker("stall",xVil+90,zVil-60);	
	houseMaker("stall",xVil+90,zVil-95);
	
}
else if (farmtype=="windmill"){
	
	//fallow
    //fieldMaker("grain",xVil+90,zVil-180);
    //fieldMaker("grain",xVil+90,zVil-90);
    //fieldMaker("grain",xVil+90,zVil);    
    //fallow
	
	fieldMaker("grain",xVil,zVil-90);
    houseMaker("windmill",xVil,zVil); //center
	fieldMaker("grain",xVil,zVil+90);  
	
	//fieldMaker("grain",xVil-90,zVil-270);
    fieldMaker("grain",xVil-90,zVil-180);
    //fallow
    fieldMaker("grain",xVil-90,zVil);
    //fallow
}
else if (farmtype=="watermill"){
    houseMaker("watermill",xVil,zVil); //center
	
}
else if (farmtype=="vintner" || farmtype=="vineyard"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("grape",xVil+90,zVil-270);
    fieldMaker("grape",xVil+90,zVil-180);
    fieldMaker("grape",xVil+90,zVil-90);
    fieldMaker("grape",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("grape",xVil,zVil-180);
    fieldMaker("grape",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    houseMaker("winebarrel",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("grape",xVil-180,zVil-180);
    fieldMaker("grape",xVil-180,zVil-90);
    //fallow
    //fallow

}
else if (farmtype=="fuller" || farmtype=="sheep"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("sheep",xVil+90,zVil-180);
    //fallow
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    //fallow
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("sheep",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    fieldMaker("vegetables",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    //fallow
    fieldMaker("forest",xVil-180,zVil);
    //fallow

}
//diary farm
else if (farmtype=="diaryfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("cow",xVil+90,zVil-180);
    //fallow
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    //fallow
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("cow",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    fieldMaker("vegetables",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    //fallow
    fieldMaker("forest",xVil-180,zVil);
    //fallow

}
//pig farm
else if (farmtype=="pigfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("pig",xVil+90,zVil-180);
    //fallow
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    //fallow
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("pig",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    fieldMaker("vegetables",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    //fallow
    fieldMaker("forest",xVil-180,zVil);
    //fallow

}
//goat farm
else if (farmtype=="goatfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("goat",xVil+90,zVil-180);
    //fallow
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    //fallow
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("goat",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    fieldMaker("vegetables",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    //fallow
    fieldMaker("forest",xVil-180,zVil);
    //fallow

}
//grain farm
else if (farmtype=="grainfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    //fallow
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("grain",xVil+90,zVil-180);
    fieldMaker("grain",xVil+90,zVil-90);
    fieldMaker("grain",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("grain",xVil,zVil-180);
    fieldMaker("grain",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("grain",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("grain",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    //fallow
    //fallow

}
//flax farm
else if (farmtype=="flaxfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    //fallow
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("flax",xVil+90,zVil-180);
    fieldMaker("flax",xVil+90,zVil-90);
    fieldMaker("flax",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("flax",xVil,zVil-180);
    fieldMaker("flax",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("flax",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    //fallow
    //fallow

}
//olive grove
else if (farmtype=="olivegrove"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("olive",xVil+90,zVil-270);
    fieldMaker("olive",xVil+90,zVil-180);
    fieldMaker("olive",xVil+90,zVil-90);
    fieldMaker("olive",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("olive",xVil,zVil-180);
    fieldMaker("olive",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("olive",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("olive",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("olive",xVil-180,zVil-180);
    fieldMaker("olive",xVil-180,zVil-90);
    //fallow
    //fallow

}
//orchard
else if (farmtype=="orchard"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("apple",xVil+90,zVil-270);
    fieldMaker("apple",xVil+90,zVil-180);
    fieldMaker("apple",xVil+90,zVil-90);
    fieldMaker("apple",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("apple",xVil,zVil-180);
    fieldMaker("apple",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("apple",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("apple",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("apple",xVil-180,zVil-180);
    fieldMaker("apple",xVil-180,zVil-90);
    //fallow
    //fallow

}
//beekeeper
else if (farmtype=="beekeeper"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("honey",xVil+90,zVil-270);
    fieldMaker("honey",xVil+90,zVil-180);
    fieldMaker("honey",xVil+90,zVil-90);
    fieldMaker("honey",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("honey",xVil,zVil-180);
    fieldMaker("honey",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("honey",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("honey",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("honey",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    //fallow
    //fallow

}
//chicken farm
else if (farmtype=="poultryfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("chicken",xVil+90,zVil-180);
    fieldMaker("chicken",xVil+90,zVil-90);
    //fallow   
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("chicken",xVil,zVil-180);
    fieldMaker("chicken",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("chicken",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    //fallow
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("chicken",xVil-180,zVil-180);
    fieldMaker("chicken",xVil-180,zVil-90);
    //fallow
    //fallow

}
//duck farm
else if (farmtype=="duckfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("duck",xVil+90,zVil-180);
    fieldMaker("duck",xVil+90,zVil-90);
    //fallow  
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("duck",xVil,zVil-180);
    fieldMaker("duck",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("duck",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    //fallow
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    fieldMaker("forest",xVil-180,zVil-90);
    //fallow
    //fallow

}
//stud farm
else if (farmtype=="studfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("horse",xVil+90,zVil-180);
    //fallow
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    //fallow
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("horse",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    //fallow
    fieldMaker("forest",xVil-180,zVil);
    //fallow

}
//camel caravan
else if (farmtype=="camelcaravan"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
	 //fallow
    fieldMaker("camel",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    //fallow
    fieldMaker("camel",xVil,zVil-90);
    //fallow //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
	 //fallow
    fieldMaker("camel",xVil-90,zVil-90);   
    //fallow
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    //fallow
    fieldMaker("forest",xVil-180,zVil);
    //fallow

}
//x5,z5, forest
else if (farmtype=="forest"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
	if (entertainment =="hunt"){
		fieldMaker("forest_deer",xVil+90,zVil-180);
	}
	else if (entertainment =="falconry"){
		fieldMaker("forest_pheasant",xVil+90,zVil-180);
	}
	else {
		fieldMaker("forest",xVil+90,zVil-180);
	}    
    fieldMaker("forest",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);

    fieldMaker("forest",xVil,zVil-270);
    fieldMaker("forest",xVil,zVil-180);	
	if (entertainment =="hunt"){
		fieldMaker("forest_deer",xVil,zVil-90);
	}
	else if (entertainment =="falconry"){
		fieldMaker("forest_pheasant",xVil,zVil-90);
	}
	else {
		fieldMaker("forest",xVil,zVil-90);
	}    
    fieldMaker("forest",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);

    fieldMaker("forest",xVil-90,zVil-270);
	fieldMaker("forest",xVil-90,zVil-180);
    fieldMaker("forest",xVil-90,zVil-90);
    fieldMaker("forest",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);
}
//x5,z5, plantation
else if (farmtype=="dateplantation"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("forest",xVil+90,zVil-180);
    fieldMaker("forest",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);

    fieldMaker("forest",xVil,zVil-270);
    fieldMaker("forest",xVil,zVil-180);
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("forest",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);
}
//x5,z5, sugar plantation
else if (farmtype=="sugarplantation"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("sugar",xVil+90,zVil-180);
    fieldMaker("sugar",xVil+90,zVil-90);
    fieldMaker("sugar",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);

    fieldMaker("sugar",xVil,zVil-270);
    fieldMaker("sugar",xVil,zVil-180);
    //fallow
    houseMaker("farmhouse",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("sugar",xVil-90,zVil-180);
    //fallow
    houseMaker("barn",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);
}
//x5,z5, forester
else if (farmtype=="forester"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("forest",xVil+90,zVil-180);
    fieldMaker("forest",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);

    fieldMaker("forest",xVil,zVil-270);
    fieldMaker("forest",xVil,zVil-180);
    fieldMaker("forest",xVil,zVil-90);
    houseMaker("carpenter",xVil,zVil); //center
    houseMaker("barn",xVil,zVil+90);

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("forest",xVil-90,zVil-180);
    fieldMaker("forest",xVil-90,zVil-90);
    fieldMaker("forest",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);
}
//x5,z5, basket weaver
else if (farmtype=="basketweaver"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("forest",xVil+90,zVil-180);
    fieldMaker("forest",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);
    fieldMaker("forest",xVil+90,zVil+90);

    fieldMaker("forest",xVil,zVil-270);
    fieldMaker("forest",xVil,zVil-180);
    fieldMaker("forest",xVil,zVil-90);
    houseMaker("basketmaker",xVil,zVil); //center
    houseMaker("barn",xVil,zVil+90);

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("forest",xVil-90,zVil-180);
    fieldMaker("forest",xVil-90,zVil-90);
    fieldMaker("forest",xVil-90,zVil);
    fieldMaker("forest",xVil-90,zVil+90);

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("forest",xVil-180,zVil-180);
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);
}
//x5,z5, mine
else if (farmtype=="capitalmine"){
    
    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    //deposits +90,-90
    //lead 
    if (commerceCapital =="lead"){
        var deposit1 = new Metal(xVil+70,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit1 );
        var deposit2 = new Metal(xVil+75,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit2 );
    }
    //tin 
    else if (commerceCapital =="tin"){
        var deposit3 = new Metal(xVil+88,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit3 );
        var deposit4 = new Metal(xVil+90,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit4 );      
    }
    //salt 
    else if (commerceCapital =="salt"){
      
    }
    //iron 
    else if (commerceCapital =="iron"){
        var deposit7 = new Metal(xVil+73,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit7 );
        var deposit8 = new Metal(xVil+75,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit8 );    
    }
    //gold
    else if (commerceCapital =="gold"){
        var deposit9 = new Metal(xVil+88,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit9 );
        var deposit10 = new Metal(xVil+90,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit10 );     
    }
    //silver 
    else if (commerceCapital =="silver"){
        var deposit11 = new Metal(xVil+103,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit11 );
        var deposit12 = new Metal(xVil+105,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit12 );       
    } 
    //sapphire
    else if (commerceCapital =="sapphire"){
      
    } 
    //rubies
    else if (commerceCapital =="rubies"){
      
    }  
    //emeralds
    else if (commerceCapital =="emeralds"){
      
    } 	

    fieldMaker("forest",xVil+90,zVil+90);    
    
    fieldMaker("forest",xVil,zVil-270);
    var boulder = new Mountain(xVil,zVil-180); //boulder mountain
    scene.add( boulder );
    houseMaker("barn2",xVil,zVil-90); //barn
    houseMaker("villagehouse2",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);    
    
    fieldMaker("forest",xVil-90,zVil-270);
    //empty
    //empty
    //empty
    fieldMaker("forest",xVil-90,zVil+90);
    
    
    fieldMaker("forest",xVil-180,zVil-270); 
    fieldMaker("forest",xVil-180,zVil-180);         
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

}
//x5,z5
else if (farmtype=="castlemine"){
    
    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    //deposits +90,-90
    //lead 
    if (commerceCastle =="lead"){
        var deposit1 = new Metal(xVil+70,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit1 );
        var deposit2 = new Metal(xVil+75,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit2 );
    }
    //tin 
    else if (commerceCastle =="tin"){
        var deposit3 = new Metal(xVil+88,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit3 );
        var deposit4 = new Metal(xVil+90,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit4 );      
    }
    //salt 
    else if (commerceCastle =="salt"){
      
    }
    //iron 
    else if (commerceCastle =="iron"){
        var deposit7 = new Metal(xVil+73,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit7 );
        var deposit8 = new Metal(xVil+75,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit8 );    
    }
    //gold
    else if (commerceCastle =="gold"){
        var deposit9 = new Metal(xVil+88,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit9 );
        var deposit10 = new Metal(xVil+90,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit10 );     
    }
    //silver 
    else if (commerceCastle =="silver"){
        var deposit11 = new Metal(xVil+103,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit11 );
        var deposit12 = new Metal(xVil+105,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit12 );       
    }
    //sapphire
    else if (commerceCastle =="sapphire"){
      
    } 
    //rubies
    else if (commerceCastle =="rubies"){
      
    }  
    //emeralds
    else if (commerceCastle =="emeralds"){
      
    }  		

    fieldMaker("forest",xVil+90,zVil+90);    
    
    fieldMaker("forest",xVil,zVil-270);
    var boulder = new Mountain(xVil,zVil-180); //boulder mountain
    scene.add( boulder );
    houseMaker("barn2",xVil,zVil-90); //barn
    houseMaker("villagehouse2",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);    
    
    fieldMaker("forest",xVil-90,zVil-270);
    //empty
    //empty
    //empty
    fieldMaker("forest",xVil-90,zVil+90);
    
    
    fieldMaker("forest",xVil-180,zVil-270); 
    fieldMaker("forest",xVil-180,zVil-180);         
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

}
//x5,z5
else if (farmtype=="townmine"){
    
    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    //deposits +90,-90
    //lead 
    if (commerceTown =="lead"){
        var deposit1 = new Metal(xVil+70,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit1 );
        var deposit2 = new Metal(xVil+75,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit2 );
    }
    //tin 
    else if (commerceTown =="tin"){
        var deposit3 = new Metal(xVil+88,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit3 );
        var deposit4 = new Metal(xVil+90,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit4 );      
    }
    //salt 
    else if (commerceTown =="salt"){
      
    }
    //iron 
    else if (commerceTown =="iron"){
        var deposit7 = new Metal(xVil+73,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit7 );
        var deposit8 = new Metal(xVil+75,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit8 );    
    }
    //gold
    else if (commerceTown =="gold"){
        var deposit9 = new Metal(xVil+88,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit9 );
        var deposit10 = new Metal(xVil+90,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit10 );     
    }
    //silver 
    else if (commerceTown =="silver"){
        var deposit11 = new Metal(xVil+103,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit11 );
        var deposit12 = new Metal(xVil+105,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit12 );       
    } 
    //sapphire
    else if (commerceTown =="sapphire"){
      
    } 
    //rubies
    else if (commerceTown =="rubies"){
      
    }  
    //emeralds
    else if (commerceTown =="emeralds"){
      
    } 	

    fieldMaker("forest",xVil+90,zVil+90);    
    
    fieldMaker("forest",xVil,zVil-270);
    var boulder = new Mountain(xVil,zVil-180); //boulder mountain
    scene.add( boulder );
    houseMaker("barn2",xVil,zVil-90); //barn
    houseMaker("villagehouse2",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);    
    
    fieldMaker("forest",xVil-90,zVil-270);
    //empty
    //empty
    //empty
    fieldMaker("forest",xVil-90,zVil+90);
    
    
    fieldMaker("forest",xVil-180,zVil-270); 
    fieldMaker("forest",xVil-180,zVil-180);         
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

}
//x5,z5
else if (farmtype=="abbeymine"){
    
    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    //deposits +90,-90
    //lead 
    if (commerceAbbey =="lead"){
        var deposit1 = new Metal(xVil+70,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit1 );
        var deposit2 = new Metal(xVil+75,zVil-75,"iron",4.5,1.2,4.5);
        scene.add( deposit2 );
    }
    //tin 
    else if (commerceAbbey =="tin"){
        var deposit3 = new Metal(xVil+88,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit3 );
        var deposit4 = new Metal(xVil+90,zVil-75,"tin",1.5,1.2,4.5);
        scene.add( deposit4 );      
    }
    //salt 
    else if (commerceAbbey =="salt"){
      
    }
    //iron 
    else if (commerceAbbey =="iron"){
        var deposit7 = new Metal(xVil+73,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit7 );
        var deposit8 = new Metal(xVil+75,zVil-105,"iron",1.5,1.2,4.5);
        scene.add( deposit8 );    
    }
    //gold
    else if (commerceAbbey =="gold"){
        var deposit9 = new Metal(xVil+88,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit9 );
        var deposit10 = new Metal(xVil+90,zVil-105,"gold",1.5,1.2,4.5);
        scene.add( deposit10 );     
    }
    //silver 
    else if (commerceAbbey =="silver"){
        var deposit11 = new Metal(xVil+103,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit11 );
        var deposit12 = new Metal(xVil+105,zVil-105,"silver",1.5,1.2,4.5);
        scene.add( deposit12 );       
    } 
    //sapphire
    else if (commerceAbbey =="sapphire"){
      
    } 
    //rubies
    else if (commerceAbbey =="rubies"){
      
    }  
    //emeralds
    else if (commerceAbbey =="emeralds"){
      
    } 	

    fieldMaker("forest",xVil+90,zVil+90);    
    
    fieldMaker("forest",xVil,zVil-270);
    var boulder = new Mountain(xVil,zVil-180); //boulder mountain
    scene.add( boulder );
    houseMaker("barn2",xVil,zVil-90); //barn
    houseMaker("villagehouse2",xVil,zVil); //center
    fieldMaker("forest",xVil,zVil+90);    
    
    fieldMaker("forest",xVil-90,zVil-270);
    //empty
    //empty
    //empty
    fieldMaker("forest",xVil-90,zVil+90);
    
    
    fieldMaker("forest",xVil-180,zVil-270); 
    fieldMaker("forest",xVil-180,zVil-180);         
    fieldMaker("forest",xVil-180,zVil-90);
    fieldMaker("forest",xVil-180,zVil);
    fieldMaker("forest",xVil-180,zVil+90);

}

}