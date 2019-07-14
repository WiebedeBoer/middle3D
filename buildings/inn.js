class Inn extends THREE.Group {

    init (){
		
		//persian
		if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="Caravanserai";

		}
		//arab
		else if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="Caravanserai";

		}
		//greek orthodox
		else if(this.bannier =="georgian" || this.bannier =="armenian" || this.bannier =="byzantine"){
			var flag_num ="Byzantine";

		}
		//russian
		else if(this.bannier =="russian"){
			var flag_num ="Russian";

		}
		//DEFAULT
		else {
			var flag_num ="Inn";

		}

        var dChurch = this;
        loadOBJModel("buildings/inn/","SM_"+flag_num+".obj","buildings/inn/","SM_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = 5.0;
            mesh.scale.y = 5.0;
            mesh.scale.z = 5.0;
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