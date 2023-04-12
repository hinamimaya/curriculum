class Taiyaki{

    constructor(nakami){
        this.nakami = nakami;
    }

    menu(){
        console.log('中身は' + this.nakami + 'です');
    }
}

let anko = new Taiyaki('あんこ');
anko.menu();

let cream = new Taiyaki('クリーム');
cream.menu();

let cheese = new Taiyaki('チーズ');
cheese.menu();