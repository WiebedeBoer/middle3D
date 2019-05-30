class Cloister extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/cloister/","villa.obj","buildings/cloister/","villa.mtl", (mesh) => {
            mesh.scale.x = 100.0;
            mesh.scale.y = 150.0;
            mesh.scale.z = 100.0;
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