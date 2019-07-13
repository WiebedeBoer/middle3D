class Flag extends THREE.Group {

    init (){
			
		//HRE, black yellow
		if(this.bannier =="saxon" || this.bannier =="bavarian" || this.bannier =="swabian" || this.bannier =="franconian" || this.bannier =="frisian" || this.bannier =="flemish" || this.bannier =="carinthian"){
			var flag_num ="black_yellow";
		}
		else if(this.bannier =="bohemian"){
			var flag_num ="black_yellow";
		}
		else if(this.bannier =="tuscan" || this.bannier =="lombard"){
			var flag_num ="black_yellow";
		}
		//france, blue yellow
		else if(this.bannier =="frankish" || this.bannier =="occitan" || this.bannier =="arpitan"){
			var flag_num ="blue_yellow";
		}
		//britanny, black white
		else if(this.bannier =="breton"){
			var flag_num ="black_white";
		}
		//scotland, blue white
		else if(this.bannier =="scottish" || this.bannier =="pictish"){
			var flag_num ="blue_white";
		}
		//england, red white
		else if(this.bannier =="english" || this.bannier =="welsh"){
			var flag_num ="red_white";
		}
		//ireland, green
		else if(this.bannier =="irish"){
			var flag_num ="green_yellow";
		}
		//norwegian, blue red
		else if(this.bannier =="norwegian"){
			var flag_num ="blue_red";
		}		
		//danish, red white
		else if(this.bannier =="danish" || this.bannier =="baltic"){
			var flag_num ="red_white";
		}		
		//swedish, blue yellow
		else if(this.bannier =="swedish"){
			var flag_num ="blue_yellow";
		}	
		//poland lithuania, red white
		else if(this.bannier =="polish" || this.bannier =="lithuanian"){
			var flag_num ="red_white";
		}	
		//hungary croatia, red white
		else if(this.bannier =="croatian" || this.bannier =="hungarian"){
			var flag_num ="green_red";
		}		
		//spain red yellow
		else if(this.bannier =="navarrese" || this.bannier =="aragonese" || this.bannier =="catalan" || this.bannier =="leonese" || this.bannier =="castillian" || this.bannier =="galician" || this.bannier =="galician"){
			var flag_num ="red_yellow";
		}
		//portugal, green red
		else if(this.bannier =="portuguese"){
			var flag_num ="green_red";
		}
		//andalucia, green white
		else if(this.bannier =="andalucian"){
			var flag_num ="green_white";
		}
		//napels, red yellow
		else if(this.bannier =="neapolitan" || this.bannier =="sardinian" || this.bannier =="sicilian"){
			var flag_num ="red_yellow";
		}
		//byzantine, red yellow
		else if(this.bannier =="wallachian" || this.bannier =="bulgarian" || this.bannier =="serbian" || this.bannier =="byzantine"){
			var flag_num ="red_yellow";
		}
		//russia, blue yellow
		else if(this.bannier =="russian"){
			var flag_num ="blue_yellow";
		}
		//georgia armenia, red white
		else if(this.bannier =="georgian" || this.bannier =="armenian"){
			var flag_num ="red_white";
		}
		//persian
		else if(this.bannier =="turkish" || this.bannier =="persian"){
			var flag_num ="blue_white";
		}
		//arab
		else if(this.bannier =="maghreb" || this.bannier =="ifriqiya" || this.bannier =="misr" || this.bannier =="mashriq" || this.bannier =="hejaz" || this.bannier =="najd"){
			var flag_num ="green_black";
		}
		//DEFAULT
		else {
			var flag_num ="red_white";
		}

        var dGun = this;
        loadOBJModel("props/banner/","Flag_"+flag_num+".obj","props/banner/","Flag_"+flag_num+".mtl", (mesh) => {
            mesh.scale.x = 1.2;
            mesh.scale.y = 1.2;
            mesh.scale.z = 1.2;
            dGun.position.x = this.pX;
            dGun.position.y = this.pY;
            dGun.position.z = this.pZ;
            dGun.rotation.y = this.pYr;
            dGun.add(mesh);

        });
    }    
            
    constructor(pX,pY,pZ,pYr,bannier){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.pYr = pYr;
		this.bannier = bannier;
        this.init();
    }
}