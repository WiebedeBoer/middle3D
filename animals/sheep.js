class Sheep extends THREE.Group {

    init (){
		
		if(this.bannier !="none"){
			var flag_num = this.bannier;
		}
		else {
			var flag_num ="East_Friesian";
		}

        var dChurch = this;
        loadOBJModel("animals/sheep/","Sheep_"+flag_num+".obj","animals/sheep/","Sheep_"+flag_num+".mtl", (mesh) => {
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