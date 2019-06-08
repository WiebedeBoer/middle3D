class Windmill extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/windmill/","SM_WindMill_02.obj","buildings/windmill/","SM_WindMill_02.mtl", (mesh) => {
            mesh.scale.x = 4.0;
            mesh.scale.y = 4.0;
            mesh.scale.z = 4.0;
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