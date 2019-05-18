class Candle extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("props/candle/","model.obj","props/candle/","materials.mtl", (mesh) => {
            mesh.scale.set (3, 4, 3);
            dGun.position.x = this.pX;
            dGun.position.y = this.pY;
            dGun.position.z = this.pZ;
            dGun.rotation.x = this.pXr;
            dGun.rotation.y = this.pYr;
            dGun.rotation.z = this.pZr;
            dGun.add(mesh);
            //candle light
            addPointLight(dGun,0xfff2ba, 0,2,0, 0.7, 55); 
            var g = new THREE.BoxGeometry(1,1,1);
            var m = new THREE.MeshBasicMaterial({color: 0xfff2ba});
            dGun._meshLight = new THREE.Mesh(g, m);
            dGun._meshLight.position.set(0,2,0);
            dGun._meshLight.visible = false;
            dGun.add(dGun._meshLight); 

        });
    }    
            
    constructor(pX,pY,pZ,pXr,pYr,pZr){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.pXr = pXr;
        this.pYr = pYr;
        this.pZr = pZr;
        this.init();
    }
}