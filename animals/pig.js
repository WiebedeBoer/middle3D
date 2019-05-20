class Pig extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("animals/pig/","Mesh_Pig.obj","animals/pig/","Mesh_Pig.mtl", (mesh) => {
            mesh.scale.x = 0.08;
            mesh.scale.y = 0.08;
            mesh.scale.z = 0.08;
            dChurch.position.x = this.pX;
            dChurch.position.y = this.pY;
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