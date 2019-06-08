class Mountain extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/boulder/","boulder_03.obj","buildings/boulder/","boulder_03.mtl", (mesh) => {
            mesh.scale.x = 0.35;
            mesh.scale.y = 0.45;
            mesh.scale.z = 0.35;
            dChurch.position.x = this.pX;
            dChurch.position.y = -16;
            dChurch.position.z = this.pZ;
            dChurch.add(mesh);

        });
    }    
            
    constructor(pX,pZ){
        super();
        this.pX = pX;        
        this.pZ = pZ;
        this.init();
       
    }
}