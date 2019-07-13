class TreasureChest extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("props/chest/","chest.obj","props/chest/","chest.mtl", (mesh) => {
            mesh.scale.x = 4.0;
            mesh.scale.y = 4.0;
            mesh.scale.z = 4.0;
            dGun.position.x = this.pX;
            dGun.position.y = this.pY + 3.5;
            dGun.position.z = this.pZ;
            dGun.rotation.y = this.pYr;
            dGun.add(mesh);

        });
    }    
            
    constructor(pX,pY,pZ,pYr){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.pYr = pYr;
        this.init();
    }
}