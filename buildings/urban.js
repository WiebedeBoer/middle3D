class Urban extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/house/","houses.obj","buildings/house/","houses.mtl", (mesh) => {
            mesh.scale.x = 6.2;
            mesh.scale.y = 6.2;
            mesh.scale.z = 6.2;
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