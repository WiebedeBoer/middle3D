class Cow extends THREE.Group {

    init (){
		
		//HRE, black yellow
		if(this.bannier =="frisian"){
			var flag_num ="Friesian";
		}
		//scotland blue white
		else if(this.bannier =="scottish"){
			var flag_num ="Highland";
		}
		//england, red white
		else if(this.bannier =="danish" || this.bannier =="swedish" || this.bannier =="norwegian"){
			var flag_num ="Fjall";
		}
		//spain red yellow
		else if(this.bannier =="castillian" || this.bannier =="leonese"){
			var flag_num ="Anatolian";
		}
		else {
			var flag_num ="Friesian";
		}
		


        var dChurch = this;
        loadOBJModel("animals/cow/","Cow_"+flag_num+".obj","animals/cow/","Cow_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = 1.3;
            mesh.scale.y = 1.3;
            mesh.scale.z = 1.3;
            dChurch.position.x = this.pX;
            dChurch.position.y = 0;
            dChurch.position.z = this.pZ;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ,bannier){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
		this.bannier = bannier;
        this.init();
    }
}