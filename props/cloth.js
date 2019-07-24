class Cloth extends THREE.Group {

    init (){

        var dChurch = this;
        loadOBJModel("props/cloth/","Towel_513.obj","props/cloth/","Towel_513.mtl", (mesh) => {
            mesh.scale.x = 0.4;
            mesh.scale.y = 0.4;
            mesh.scale.z = 0.4;
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