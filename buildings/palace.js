class Palace extends THREE.Group {

    init (){
		
		//arabic
		if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="East";
			var scale_x = 14.0;
			var scale_y = 14.0;
			var scale_z = 14.0;
			var rotate_palace = 3.1415926;
		}
		//turkish
		else if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="Turk";
			var scale_x = 14.0;
			var scale_y = 14.0;
			var scale_z = 14.0;
			var rotate_palace = 3.1415926;
		}
		//greek orthodox
		else if(this.bannier =="georgian" || this.bannier =="armenian" || this.bannier =="byzantine"){
			var flag_num ="Byzantine";
			var scale_x = 4.0;
			var scale_y = 3.5;
			var scale_z = 4.0;
			var rotate_palace = 0;
		}
		//russian
		else if(this.bannier =="russian"){
			var flag_num ="Russian";
			var scale_x = 4.0;
			var scale_y = 3.5;
			var scale_z = 4.0;
			var rotate_palace = 0;
		}
		//european
		else {
			var flag_num ="West";
			var scale_x = 4.0;
			var scale_y = 3.5;
			var scale_z = 4.0;
			var rotate_palace = 0;
		}


        var dChurch = this;
        loadOBJModel("buildings/palace/","Palace_"+flag_num+".obj","buildings/palace/","Palace_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = scale_x;
            mesh.scale.y = scale_y;
            mesh.scale.z = scale_z;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
            dChurch.position.z = this.pZ;
            dChurch.rotation.y = rotate_palace;
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