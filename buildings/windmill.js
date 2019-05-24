class Windmill extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/windmill/","PUSHILIN_windmill.obj","buildings/windmill/","PUSHILIN_windmill.mtl", (mesh) => {
            mesh.scale.x = 38.0;
            mesh.scale.y = 40.0;
            mesh.scale.z = 38.0;
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