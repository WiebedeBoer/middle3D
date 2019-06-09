function fieldMaker(type,xPos,zPos){

//wheat field
if (type =="grain"){
    
        var field1 = new Wheat(xPos+15,0,zPos-15);
        scene.add( field1 );
        var field2 = new Wheat(xPos+15,0,zPos);
        scene.add( field2 );
        var field3 = new Wheat(xPos+15,0,zPos+15);
        scene.add( field3 );
        var field4 = new Wheat(xPos,0,zPos-15);
        scene.add( field4 );
        var field5 = new Wheat(xPos,0,zPos); 
        scene.add( field5 );
        var field6 = new Wheat(xPos,0,zPos+15);
        scene.add( field6 );
        var field7 = new Wheat(xPos-15,0,zPos-15);
        scene.add( field7 );
        var field8 = new Wheat(xPos-15,0,zPos);
        scene.add( field8 );
        var field9 = new Wheat(xPos-15,0,zPos+15);
        scene.add( field9 );   

}
else if (type =="vegetables"){
    var field1 = new Cabbage(xPos+15,0,zPos-15,0,0,0);
    scene.add( field1 );
    var field2 = new Cabbage(xPos+15,0,zPos,0,0,0);
    scene.add( field2 );
    var field3 = new Cabbage(xPos+15,0,zPos+15,0,0,0);
    scene.add( field3 );
    var field4 = new Cabbage(xPos,0,zPos-15,0,0,0);
    scene.add( field4 );
    var field5 = new Cabbage(xPos,0,zPos,0,0,0); 
    scene.add( field5 );
    var field6 = new Cabbage(xPos,0,zPos+15,0,0,0);
    scene.add( field6 );
    var field7 = new Cabbage(xPos-15,0,zPos-15,0,0,0);
    scene.add( field7 );
    var field8 = new Cabbage(xPos-15,0,zPos,0,0,0);
    scene.add( field8 );
    var field9 = new Cabbage(xPos-15,0,zPos+15,0,0,0);
    scene.add( field9 );

}
//orchard
else if (type=="apple"){
    
        var Fruit1 = new PomegranateTree(xPos-15,5,zPos+15); 
        scene.add(Fruit1);
        var Fruit2 = new PomegranateTree(xPos-15,5,zPos-15); 
        scene.add(Fruit2);
        var Fruit3 = new PomegranateTree(xPos+15,5,zPos+15); 
        scene.add(Fruit3);
        var Fruit4 = new PomegranateTree(xPos+15,5,zPos-15); 
        scene.add(Fruit4);    

}
//olive grove
else if (type=="olive"){
    
        var Olive1 = new OliveTree(xPos-15,5,zPos+15); 
        scene.add(Olive1);
        var Olive2 = new OliveTree(xPos-15,5,zPos-15); 
        scene.add(Olive2);
        var Olive3 = new OliveTree(xPos+15,5,zPos+15); 
        scene.add(Olive3);
        var Olive4 = new OliveTree(xPos+15,5,zPos-15); 
        scene.add(Olive4);    

}
//grapevine
else if (type=="grape"){   
        var grape1 = new GrapeVine(xPos+15,0,zPos-15);
        scene.add( grape1 );
        var grape2 = new GrapeVine(xPos+15,0,zPos);
        scene.add( grape2 );
        var grape3 = new GrapeVine(xPos+15,0,zPos+15);
        scene.add( grape3 );
        var grape4 = new GrapeVine(xPos,0,zPos-15);
        scene.add( grape4 );
        var grape5 = new GrapeVine(xPos,0,zPos); 
        scene.add( grape5 );
        var grape6 = new GrapeVine(xPos,0,zPos+15);
        scene.add( grape6 );
        var grape7 = new GrapeVine(xPos-15,0,zPos-15);
        scene.add( grape7 );
        var grape8 = new GrapeVine(xPos-15,0,zPos);
        scene.add( grape8 );
        var grape9 = new GrapeVine(xPos-15,0,zPos+15);
        scene.add( grape9 );  
}
//beekeeping
else if(type=="honey"){

    if (climate =="desert" || climate =="desert_marshes"){        
        var tree1 = new Forest(xPos,45,zPos+15,"tree_palm"); 
        scene.add(tree1);
    }
    else {
        if (herb =="cedar"){
            var tree1 = new Forest(xPos,45,zPos+15,"cedar"); 
            scene.add(tree1);
        }
        else if (herb =="pine"){
            var tree1 = new Forest(xPos,45,zPos+15,"tree_pine"); 
            scene.add(tree1);
        }
        else {
            var tree1 = new Forest(xPos,45,zPos+15,"tree_transparent"); 
            scene.add(tree1);
        }        
    } 
        var beehive1 = new Beehive(xPos,zPos-15); 
        scene.add(beehive1);   
}
//forest
else if(type=="forest"){

    if (climate =="desert" || climate =="desert_marshes"){        
        var tree1 = new Forest(xPos,45,zPos,"tree_palm"); 
        scene.add(tree1);
    }
    else {
        if (herb =="cedar"){
            var tree1 = new Forest(xPos,45,zPos,"cedar"); 
            scene.add(tree1);
        }
        else if (herb =="pine"){
            var tree1 = new Forest(xPos,45,zPos,"tree_pine"); 
            scene.add(tree1);
        }
        else {
            var tree1 = new Forest(xPos,45,zPos,"tree_transparent"); 
            scene.add(tree1);
        }        
    } 

}
//goat pasture
else if(type =="goat"){
        var Goat1 = new Goat(xPos-15,5,zPos+15); 
        scene.add(Goat1);
        var Goat2 = new Goat(xPos-15,5,zPos+45); 
        scene.add(Goat2);		
		var Goat3 = new Goat(xPos-15,5,zPos+75); 
        scene.add(Goat3);
		
        var Goat4 = new Goat(xPos-45,5,zPos+15); 
        scene.add(Goat4);		
		var Goat5 = new Goat(xPos-45,5,zPos+45); 
        scene.add(Goat5);
        var Goat6 = new Goat(xPos-45,5,zPos+75); 
        scene.add(Goat6);
		
		var Goat7 = new Goat(xPos-75,5,zPos+15); 
        scene.add(Goat7);		
		var Goat8 = new Goat(xPos-75,5,zPos+45); 
        scene.add(Goat8);
        var Goat9 = new Goat(xPos-75,5,zPos+75); 
        scene.add(Goat9);
		
        var fenceL2 = new Fence(xPos-75,0,zPos-15,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos-15,0,zPos-15,0,0,0); 
        scene.add(fenceR2);
		
        var fenceF2 = new Fence(xPos+15,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+15,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB2); 
		
        var fenceL3 = new Fence(xPos-75,0,zPos+105,0,0,0); 
        scene.add(fenceL3);
        var fenceR3 = new Fence(xPos-15,0,zPos+105,0,0,0); 
        scene.add(fenceR3);
		
        var fenceF3 = new Fence(xPos-105,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF3);
        var fenceB3 = new Fence(xPos-105,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB3);  
}
//sheep pasture
else if(type =="sheep"){
    
        var Sheep1 = new Sheep(xPos-15,5,zPos+15); 
        scene.add(Sheep1);
        var Sheep2 = new Sheep(xPos-15,5,zPos+45); 
        scene.add(Sheep2);		
		var Sheep3 = new Sheep(xPos-15,5,zPos+75); 
        scene.add(Sheep3);
		
        var Sheep4 = new Sheep(xPos-45,5,zPos+15); 
        scene.add(Sheep4);		
		var Sheep5 = new Sheep(xPos-45,5,zPos+45); 
        scene.add(Sheep5);
        var Sheep6 = new Sheep(xPos-45,5,zPos+75); 
        scene.add(Sheep6);
		
		var Sheep7 = new Sheep(xPos-75,5,zPos+15); 
        scene.add(Sheep7);		
		var Sheep8 = new Sheep(xPos-75,5,zPos+45); 
        scene.add(Sheep8);
        var Sheep9 = new Sheep(xPos-75,5,zPos+75); 
        scene.add(Sheep9);
		
        var fenceL2 = new Fence(xPos-75,0,zPos-15,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos-15,0,zPos-15,0,0,0); 
        scene.add(fenceR2);
		
        var fenceF2 = new Fence(xPos+15,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+15,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB2); 
		
        var fenceL3 = new Fence(xPos-75,0,zPos+105,0,0,0); 
        scene.add(fenceL3);
        var fenceR3 = new Fence(xPos-15,0,zPos+105,0,0,0); 
        scene.add(fenceR3);
		
        var fenceF3 = new Fence(xPos-105,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF3);
        var fenceB3 = new Fence(xPos-105,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB3);  
    
}
//pig pasture
else if(type =="pig"){
    
        var Pig1 = new Pig(xPos-15,5,zPos+15); 
        scene.add(Pig1);
        var Pig2 = new Pig(xPos-75,5,zPos+75); 
        scene.add(Pig2);
		
		var Pig3 = new Pig(xPos-15,5,zPos+75); 
        scene.add(Pig3);
        var Pig4 = new Pig(xPos-75,5,zPos+15); 
        scene.add(Pig4);
		
		var Pig5 = new Pig(xPos-45,5,zPos+45); 
        scene.add(Pig5);
        var Pig6 = new Pig(xPos-75,5,zPos+45); 
        scene.add(Pig6);
		
        var fenceL2 = new Fence(xPos-75,0,zPos-15,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos-15,0,zPos-15,0,0,0); 
        scene.add(fenceR2);
		
        var fenceF2 = new Fence(xPos+15,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+15,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB2); 
		
        var fenceL3 = new Fence(xPos-75,0,zPos+105,0,0,0); 
        scene.add(fenceL3);
        var fenceR3 = new Fence(xPos-15,0,zPos+105,0,0,0); 
        scene.add(fenceR3);
		
        var fenceF3 = new Fence(xPos-105,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF3);
        var fenceB3 = new Fence(xPos-105,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB3);  
    
}
//chicken pen
else if(type =="chicken"){
        var chicken1 = new Chicken(xPos-15,5,zPos+15); 
        scene.add(chicken1);
        var chicken2 = new Chicken(xPos-15,5,zPos-15); 
        scene.add(chicken2);
        var chicken3 = new Chicken(xPos+15,5,zPos+15); 
        scene.add(chicken3);
        var rooster4 = new Rooster(xPos+15,5,zPos-15); 
        scene.add(rooster4);
        var chicken5 = new Chicken(xPos,5,zPos-15); 
        scene.add(chicken5);
        var chicken6 = new Chicken(xPos,5,zPos+15); 
        scene.add(chicken6);
        var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
        scene.add(fenceR2);
        var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
        scene.add(fenceB2);    
}
//duck
else if(type =="duck"){
    
    var duck1 = new Duck(xPos-15,zPos+15); 
    scene.add(duck1);
    var duck2 = new Duck(xPos-15,zPos-15); 
    scene.add(duck2);
    var duck3 = new Duck(xPos+15,zPos+15); 
    scene.add(duck3);
    var duck4 = new Duck(xPos+15,zPos-15); 
    scene.add(duck4);
    var duck5 = new Duck(xPos,zPos-15); 
    scene.add(duck5);
    var duck6 = new Duck(xPos,zPos+15); 
    scene.add(duck6);
    
    var fenceL2 = new Fence(xPos,0,zPos+30,0,0,0); 
    scene.add(fenceL2);
    var fenceR2 = new Fence(xPos,0,zPos-30,0,0,0); 
    scene.add(fenceR2);
    var fenceF2 = new Fence(xPos-30,0,zPos,0,1.5707963,0); 
    scene.add(fenceF2);
    var fenceB2 = new Fence(xPos+30,0,zPos,0,1.5707963,0); 
    scene.add(fenceB2); 

}
//cow pasture
else if(type =="cow"){
    
        var Cow1 = new Cow(xPos-15,5,zPos+15); 
        scene.add(Cow1);
        var Cow2 = new Cow(xPos-75,5,zPos+75); 
        scene.add(Cow2);
		
		var Cow3 = new Cow(xPos-15,5,zPos+75); 
        scene.add(Cow3);
        var Cow4 = new Cow(xPos-75,5,zPos+15); 
        scene.add(Cow4);
		
		var Cow5 = new Cow(xPos-45,5,zPos+75); 
        scene.add(Cow5);
        var Cow6 = new Cow(xPos-75,5,zPos+45); 
        scene.add(Cow6);
		
        var fenceL2 = new Fence(xPos-75,0,zPos-15,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos-15,0,zPos-15,0,0,0); 
        scene.add(fenceR2);
		
        var fenceF2 = new Fence(xPos+15,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+15,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB2); 
		
        var fenceL3 = new Fence(xPos-75,0,zPos+105,0,0,0); 
        scene.add(fenceL3);
        var fenceR3 = new Fence(xPos-15,0,zPos+105,0,0,0); 
        scene.add(fenceR3);
		
        var fenceF3 = new Fence(xPos-105,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF3);
        var fenceB3 = new Fence(xPos-105,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB3);  
    
}
//horse pasture
else if(type =="horse"){

        var Horse1 = new Horse(xPos-15,5,zPos+15); 
        scene.add(Horse1);
        var Horse2 = new Horse(xPos-75,5,zPos+75); 
        scene.add(Horse2);
		
		var Horse3 = new Horse(xPos-15,5,zPos+75); 
        scene.add(Horse3);
        var Horse4 = new Horse(xPos-75,5,zPos+15); 
        scene.add(Horse4);
		
        var fenceL2 = new Fence(xPos-75,0,zPos-15,0,0,0); 
        scene.add(fenceL2);
        var fenceR2 = new Fence(xPos-15,0,zPos-15,0,0,0); 
        scene.add(fenceR2);
		
        var fenceF2 = new Fence(xPos+15,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF2);
        var fenceB2 = new Fence(xPos+15,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB2); 
		
        var fenceL3 = new Fence(xPos-75,0,zPos+105,0,0,0); 
        scene.add(fenceL3);
        var fenceR3 = new Fence(xPos-15,0,zPos+105,0,0,0); 
        scene.add(fenceR3);
		
        var fenceF3 = new Fence(xPos-105,0,zPos+15,0,1.5707963,0); 
        scene.add(fenceF3);
        var fenceB3 = new Fence(xPos-105,0,zPos+75,0,1.5707963,0); 
        scene.add(fenceB3);   		
  
}
//camel caravan
else if(type =="camel"){

        var Camel1 = new Camel(xPos-15,zPos+15); 
        scene.add(Camel1);
        var Camel2 = new Camel(xPos-15,zPos+45); 
        scene.add(Camel2);		
		var Camel3 = new Camel(xPos-15,zPos+75); 
        scene.add(Camel3);
		
		
}

}