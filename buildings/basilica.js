class Basilica extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/basilica/","s14.obj","buildings/basilica/","s14.mtl", (mesh) => {
            mesh.scale.x = 0.08;
            mesh.scale.y = 0.08;
            mesh.scale.z = 0.08;
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