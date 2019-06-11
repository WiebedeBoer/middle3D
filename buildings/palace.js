class Palace extends THREE.Group {

    init (){
		
		//eastern
		if(this.bannier =="saxon" || this.bannier =="bavarian" || this.bannier =="flemish" || this.bannier =="tuscan"){
			var flag_num ="black_yellow";
		}
		//european
		else if(this.bannier =="frankish" || this.bannier =="occitan" || this.bannier =="arpitan"){
			var flag_num ="blue_yellow";
		}
		//default
		else {
			var flag_num ="red_white";
		}


        var dChurch = this;
        loadOBJModel("buildings/palace/","Palace.obj","buildings/palace/","Palace.mtl", (mesh) => {
            mesh.scale.x = 4.0;
            mesh.scale.y = 7.5;
            mesh.scale.z = 4.0;
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