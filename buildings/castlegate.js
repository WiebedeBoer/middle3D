class CastleGate extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/castlegate/","castlegate.obj","buildings/castlegate/","castlegate.mtl", (mesh) => {
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
            
    constructor(pX,pY,pZ,yR){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.yR = yR;
        this.init();
       
    }
}