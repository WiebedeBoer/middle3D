class Villa extends THREE.Group {

    init (){
		
		//persian
		if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="east";

		}
		//arab
		else if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="east";

		}
		//greek orthodox
		else if(this.bannier =="georgian" || this.bannier =="armenian" || this.bannier =="byzantine"){
			var flag_num ="byzantine";

		}
		//DEFAULT
		else {
			var flag_num ="west";

		}

        var dChurch = this;
        loadOBJModel("buildings/house/","house_"+flag_num+".obj","buildings/house/","house_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = 55.0;
            mesh.scale.y = 60.0;
            mesh.scale.z = 55.0;
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