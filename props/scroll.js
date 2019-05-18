class Scroll extends THREE.Group {

    init (){

        var dGun = this;
        loadOBJModel("props/closed_scroll/","model.obj","props/closed_scroll/","materials.mtl", (mesh) => {
            mesh.scale.set (13, 14, 13);
            dGun.position.x = this.pX;
            dGun.position.y = this.pY;
            dGun.position.z = this.pZ;
            dGun.rotation.x = this.pXr;
            dGun.rotation.y = this.pYr;
            dGun.rotation.z = this.pZr;
            dGun.add(mesh);
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