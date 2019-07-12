class Haystack extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("buildings/haystack/","HayStack.obj","buildings/haystack/","HayStack.mtl", (mesh) => {
            mesh.scale.x = 1.4;
            mesh.scale.y = 1.4;
            mesh.scale.z = 1.4;
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