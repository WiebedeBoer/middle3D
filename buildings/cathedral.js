class Cathedral extends THREE.Group {

    init (){
		
		//CHRISTIAN
		//holy roman empire
		if(this.bannier =="saxon" || this.bannier =="bavarian" || this.bannier =="swabian" || this.bannier =="franconian" || this.bannier =="frisian" || this.bannier =="flemish" || this.bannier =="carinthian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//bohemia
		else if(this.bannier =="bohemian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//northern italy
		else if(this.bannier =="tuscan" || this.bannier =="lombard"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//france
		else if(this.bannier =="frankish" || this.bannier =="occitan" || this.bannier =="arpitan" || this.bannier =="breton"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//british isles
		else if(this.bannier =="scottish" || this.bannier =="pictish" || this.bannier =="english" || this.bannier =="welsh" || this.bannier =="irish"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//scandinanvian
		else if(this.bannier =="norwegian" || this.bannier =="danish" || this.bannier =="swedish"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;	
			var xrepl =0;
		}
		//baltic
		else if(this.bannier =="prussian" || this.bannier =="livonian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;	
			var xrepl =0;
		}
		//poland lithuania
		else if(this.bannier =="polish" || this.bannier =="lithuanian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}	
		//hungary croatia
		else if(this.bannier =="croatian" || this.bannier =="hungarian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}		
		//spanish
		else if(this.bannier =="navarrese" || this.bannier =="aragonese" || this.bannier =="catalan" || this.bannier =="leonese" || this.bannier =="castillian" || this.bannier =="galician" || this.bannier =="galician"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//portugal
		else if(this.bannier =="portuguese"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//napels
		else if(this.bannier =="neapolitan" || this.bannier =="sardinian" || this.bannier =="sicilian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//eastern europe
		else if(this.bannier =="wallachian" || this.bannier =="bulgarian" || this.bannier =="serbian"){
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//byzantine
		else if(this.bannier =="byzantine"){
			var flag_num ="byzantine";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//russia
		else if(this.bannier =="russian"){
			var flag_num ="russian";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//georgia armenia
		else if(this.bannier =="georgian" || this.bannier =="armenian"){
			var flag_num ="byzantine";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}
		//ISLAMIC
		//andalucia
		else if(this.bannier =="andalucian" || this.bannier =="algarve"){
			var flag_num ="andalucian";
			var scale_x = 22.2;
			var scale_y = 18.2;
			var scale_z = 22.2;
			var rotate_palace = 0;
			var mintower =45;
			var xrepl =220;
		}
		//persian
		else if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="sufi";
			var scale_x = 22.2;
			var scale_y = 18.2;
			var scale_z = 22.2;
			var rotate_palace = 0;
			var mintower =45;
			var xrepl =220;
		}
		//arab
		else if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="mosque";
			var scale_x = 22.2;
			var scale_y = 18.2;
			var scale_z = 22.2;
			var rotate_palace = 0;
			var mintower =45;
			var xrepl =220;
		}
		//DEFAULT
		else {
			var flag_num ="west";
			var scale_x = 10.0;
			var scale_y = 11.0;
			var scale_z = 10.0;
			var rotate_palace = 0;
			var mintower =0;
			var xrepl =0;
		}

        var dChurch = this;
        loadOBJModel("buildings/cathedral/","cathedral_"+flag_num+".obj","buildings/cathedral/","cathedral_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = scale_x;
            mesh.scale.y = scale_y;
            mesh.scale.z = scale_z;
            dChurch.position.x = this.pX + xrepl;
            dChurch.position.y = this.pY + mintower;
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