class Coin extends THREE.Group {

    init (){

        var dGun = this;
        var geometry = new THREE.CylinderGeometry( 0.55, 0.55, 0.22, 16 );
        var material = new THREE.MeshPhongMaterial( {color: 0xffd700} );
        var cylinder = new THREE.Mesh( geometry, material );        
        dGun.position.x = this.pX;
        dGun.position.y = this.pY;
        dGun.position.z = this.pZ;
        dGun.rotation.x = this.pXr;
        dGun.rotation.y = this.pYr;
        dGun.rotation.z = this.pZr;
        dGun.add(cylinder);

        
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