class Granary extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/granary/","PUSHILIN_barn.obj","buildings/granary/","PUSHILIN_barn.mtl", (mesh) => {
            mesh.scale.x = 30.0;
            mesh.scale.y = 30.0;
            mesh.scale.z = 30.0;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY + 18;
            dChurch.position.z = this.pZ;
            dChurch.add(mesh);
            collidableMeshList.push(mesh);

        });
    }    
            
    constructor(pX,pY,pZ){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.init();
    }
}