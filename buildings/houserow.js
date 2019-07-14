class Houserow extends THREE.Group {

    init (){
		
		//persian
		if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="east";
			var scale_x = 20.0;
			var scale_y = 20.0;
			var scale_z = 20.0;
			var mintower =58;
			var zrepl =150;
			var xrepl =15;
		}
		//arab
		else if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="east";
			var scale_x = 20.0;
			var scale_y = 20.0;
			var scale_z = 20.0;
			var mintower =58;
			var zrepl =150;
			var xrepl =15;
		}
		//byzantine
		else if(this.bannier =="georgian" || this.bannier =="armenian" || this.bannier =="byzantine"){
			var flag_num ="byzantine";
			var scale_x = 6.2;
			var scale_y = 6.2;
			var scale_z = 6.2;
			var mintower =0;
			var zrepl =0;
			var xrepl =0;
		}
		//scandinanvian
		else if(this.bannier =="norwegian" || this.bannier =="danish" || this.bannier =="swedish"){
			var flag_num ="norse";
			var scale_x = 6.2;
			var scale_y = 6.2;
			var scale_z = 6.2;
			var mintower =0;
			var zrepl =0;
			var xrepl =0;
		}
		//russia
		else if(this.bannier =="russian"){
			var flag_num ="norse";
			var scale_x = 6.2;
			var scale_y = 6.2;
			var scale_z = 6.2;
			var mintower =0;
			var zrepl =0;
			var xrepl =0;
		}
		//DEFAULT
		else {
			var flag_num ="west";
			var scale_x = 6.2;
			var scale_y = 6.2;
			var scale_z = 6.2;
			var mintower =0;
			var zrepl =0;
			var xrepl =0;
		}

        var dChurch = this;
        loadOBJModel("buildings/house/","houserow_"+flag_num+".obj","buildings/house/","houserow_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = scale_x;
            mesh.scale.y = scale_y;
            mesh.scale.z = scale_z;
            dChurch.position.x = this.pX - xrepl;
            dChurch.position.y = this.pY + mintower;
            dChurch.position.z = this.pZ - zrepl;
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