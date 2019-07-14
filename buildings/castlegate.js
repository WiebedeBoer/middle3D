class CastleGate extends THREE.Group {

    init (){
		
		//persian
		if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="east";
		}
		//arab
		else if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="east";
		}
		//DEFAULT
		else {
			var flag_num ="west";
		}

        var dChurch = this;
        loadOBJModel("buildings/castlegate/","castlegate_"+flag_num+".obj","buildings/castlegate/","castlegate_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = 33.5;
            mesh.scale.y = 23.2;
            mesh.scale.z = 62.0;
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