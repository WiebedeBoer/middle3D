function FarmMaker(farmtype,xVil,zVil){
    //x5,z5
if (farmtype=="church"){
    houseMaker("church",xVil,zVil); //center
}
else if (farmtype=="cathedral"){
    houseMaker("cathedral",xVil,zVil); //center
}
else if (farmtype=="windmill"){
    houseMaker("windmill",xVil,zVil); //center
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
    fieldMaker("grape",xVil-90,zVil-180);
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

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("sheep",xVil+90,zVil-180);
    fieldMaker("sheep",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("sheep",xVil,zVil-180);
    fieldMaker("sheep",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    //fallow
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("sheep",xVil-180,zVil-180);
    fieldMaker("sheep",xVil-180,zVil-90);
    //fallow
    //fallow

}
else if (farmtype=="diaryfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("forest",xVil+90,zVil-270);
    fieldMaker("cow",xVil+90,zVil-180);
    fieldMaker("cow",xVil+90,zVil-90);
    fieldMaker("forest",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("cow",xVil,zVil-180);
    fieldMaker("cow",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("cow",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("cow",xVil-180,zVil-180);
    fieldMaker("cow",xVil-180,zVil-90);
    //fallow
    //fallow

}
else if (farmtype=="pigfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("pig",xVil+90,zVil-270);
    fieldMaker("pig",xVil+90,zVil-180);
    fieldMaker("pig",xVil+90,zVil-90);
    fieldMaker("pig",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("pig",xVil,zVil-180);
    fieldMaker("pig",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("pig",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("pig",xVil-180,zVil-180);
    fieldMaker("pig",xVil-180,zVil-90);
    //fallow
    //fallow

}
else if (farmtype=="goatfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("goat",xVil+90,zVil-270);
    fieldMaker("goat",xVil+90,zVil-180);
    fieldMaker("goat",xVil+90,zVil-90);
    fieldMaker("goat",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("goat",xVil,zVil-180);
    fieldMaker("goat",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("goat",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("vegetables",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("goat",xVil-180,zVil-180);
    fieldMaker("goat",xVil-180,zVil-90);
    //fallow
    //fallow

}
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
else if (farmtype=="poultryfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("chicken",xVil+90,zVil-180);
    fieldMaker("chicken",xVil+90,zVil-90);
    fieldMaker("chicken",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("chicken",xVil,zVil-180);
    fieldMaker("chicken",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("chicken",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("barn",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("chicken",xVil-180,zVil-180);
    fieldMaker("chicken",xVil-180,zVil-90);
    //fallow
    //fallow

}
else if (farmtype=="studfarm"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    //fallow
    fieldMaker("horse",xVil+90,zVil-180);
    fieldMaker("horse",xVil+90,zVil-90);
    fieldMaker("horse",xVil+90,zVil);    
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("horse",xVil,zVil-180);
    fieldMaker("horse",xVil,zVil-90);
    houseMaker("farmhouse",xVil,zVil); //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("horse",xVil-90,zVil-180);
    houseMaker("barn",xVil-90,zVil-90);
    fieldMaker("barn",xVil-90,zVil);
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    fieldMaker("horse",xVil-180,zVil-180);
    fieldMaker("horse",xVil-180,zVil-90);
    //fallow
    //fallow

}
else if (farmtype=="camelcaravan"){

    fieldMaker("forest",xVil+180,zVil-270);
    fieldMaker("forest",xVil+180,zVil-180);
    fieldMaker("forest",xVil+180,zVil-90);
    fieldMaker("forest",xVil+180,zVil);
    fieldMaker("forest",xVil+180,zVil+90);

    fieldMaker("horse",xVil+90,zVil-270);
    //fallow
    fieldMaker("horse",xVil+90,zVil-90);
    //fallow  
    //fallow

    fieldMaker("forest",xVil,zVil-270);   
    fieldMaker("horse",xVil,zVil-180);
    fieldMaker("horse",xVil,zVil-90);
    //fallow //center
    //fallow

    fieldMaker("forest",xVil-90,zVil-270);
    fieldMaker("horse",xVil-90,zVil-180);
    //fallow
    //fallow
    //fallow

    fieldMaker("forest",xVil-180,zVil-270);
    //fallow
    fieldMaker("horse",xVil-180,zVil-90);
    //fallow
    //fallow

}
//x5,z5
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
//x5,z5
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
//x5,z5
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