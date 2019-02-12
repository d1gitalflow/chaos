const products = [];

module.exports = class Product {

    //chamado pelo new.. neste caso class Product.
    constructor(title){
        this.title = title;
    }

    save(){
        //refere ao objecto criado baseado na class
        products.push(this);
    }

    //certifica-se que se pode chamar o method fetchAll directamente na class Product
    static fetchAll(){
        return products;
    }

};