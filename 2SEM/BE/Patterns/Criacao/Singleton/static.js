class Tv{
    constructor(Status){
        this._volume = 0;
        this.on = Status == undefined ? false : true;
    }
    get volume(){
        return this._volume;
    }
    set volume(volume){
        this._volume = volume;
    }
    static ligada(){
        return new Tv(true);
    }
    static desligada(){
        return new Tv();
    }
}


const tv1 = Tv.ligada();
const tv2 = Tv.desligada();
tv2.volume = 10;
console.log(tv1);
console.log(tv2);