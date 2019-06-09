class CastleKeep extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/castlekeep/","keep.obj","buildings/castlekeep/","keep.mtl", (mesh) => {
            mesh.scale.x = 3.2;
            mesh.scale.y = 3.8;
            mesh.scale.z = 3.2;
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