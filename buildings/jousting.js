class Jousting extends THREE.Group {

    init (){
		
		//HRE, black yellow
		if(this.bannier =="saxon" || this.bannier =="bavarian" || this.bannier =="flemish" || this.bannier =="tuscan"){
			var flag_num ="black_yellow";
		}
		//france, blue yellow
		else if(this.bannier =="frankish" || this.bannier =="occitan" || this.bannier =="arpitan"){
			var flag_num ="blue_yellow";
		}
		//scotland blue white
		else if(this.bannier =="scottish"){
			var flag_num ="blue_white";
		}
		//england, red white
		else if(this.bannier =="english"){
			var flag_num ="red_white";
		}
		//spain red yellow
		else if(this.bannier =="castillian" || this.bannier =="leonese"){
			var flag_num ="red_yellow";
		}
		else {
			var flag_num ="red_white";
		}


        var dChurch = this;
        loadOBJModel("buildings/tiltyard/","Platform_"+flag_num+".obj","buildings/tiltyard/","Platform_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = 6.0;
            mesh.scale.y = 6.0;
            mesh.scale.z = 6.0;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = this.yR;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ,yR,bannier){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.yR = yR;
		this.bannier = bannier;
        this.init();
       
    }
}