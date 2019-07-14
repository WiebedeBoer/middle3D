class Cloister extends THREE.Group {

    init (){
		
		//arabic
		if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="east";
			var scale_x = 14.0;
			var scale_y = 14.0;
			var scale_z = 14.0;
			var rotate_palace = 3.1415926;
		}
		//turkish
		else if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="east";
			var scale_x = 14.0;
			var scale_y = 14.0;
			var scale_z = 14.0;
			var rotate_palace = 3.1415926;
		}
		//andalucian
		else if(this.bannier =="andalucian"){
			var flag_num ="andalucian";
			var scale_x = 14.0;
			var scale_y = 14.0;
			var scale_z = 14.0;
			var rotate_palace = 3.1415926;
		}
		//greek orthodox
		else if(this.bannier =="georgian" || this.bannier =="armenian" || this.bannier =="byzantine"){
			var flag_num ="byzantine";
			var scale_x = 100.0;
			var scale_y = 150.0;
			var scale_z = 100.0;
			var rotate_palace = 0;
		}
		//european
		else {
			var flag_num ="west";
			var scale_x = 100.0;
			var scale_y = 150.0;
			var scale_z = 100.0;
			var rotate_palace = 0;
		}

        var dChurch = this;
        loadOBJModel("buildings/cloister/","villa_"+flag_num+".obj","buildings/cloister/","villa_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = scale_x;
            mesh.scale.y = scale_y;
            mesh.scale.z = scale_z;
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