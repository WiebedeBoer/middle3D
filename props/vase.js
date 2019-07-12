class Vase extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("props/glass_vase/","Vase_504.obj","props/glass_vase/","Vase_504.mtl", (mesh) => {
            mesh.scale.x = 0.05;
            mesh.scale.y = 0.05;
            mesh.scale.z = 0.05;
            dGun.position.x = this.pX;
            dGun.position.y = this.pY;
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