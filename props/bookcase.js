class Bookcase extends THREE.Group {

    init (){

        var dBar = this;
        loadOBJModel("models/bookcase/","model.obj","models/bookcase/","materials.mtl", (mesh) => {
            mesh.scale.set (10, 10, 10);
            dBar.position.x = this.pX;
            dBar.position.y = this.pY;
            dBar.position.z = this.pZ;
            dBar.rotation.x = this.pXr;
            dBar.rotation.y = this.pYr;
            dBar.rotation.z = this.pZr;
            dBar.add(mesh);            
        });
    }    
            
    constructor(pX,pY,pZ,pXr,pYr,pZr){
        super();
        this.pX = pX;
        this.pY = pY;
        this.pZ = pZ;
        this.pXr = pXr;
        this.pYr = pYr;
        this.pZr = pZr;
        this.init();
    }
}