var Item = function(place) {
    this.price = 0;
    this.element = null;
    this.element1 = null;
    this.element2 = null;
    this.element3 = null;
    this.place = place+1;
    this.weight = 0;
    this.bill = 0;
    this.init();
};

Item.prototype.init = function() {
    this.element = document.createElement('span');
    this.element1 = document.createElement('span');
    this.element2 = document.createElement('span');
    this.element3 = document.createElement('span');
    this.setParams();
}
Item.prototype.getElement = function() {
    return this.element;
}
Item.prototype.getElement1 = function() {
    return this.element1;
}
Item.prototype.getElement2 = function() {
    return this.element2;
}
Item.prototype.getElement3 = function() {
    return this.element3;
}
Item.prototype.destroy = function() {
    this.element.remove();
    this.element = null;
}
Item.prototype.setParams = function (){
    this.price = getParams(2,20);
    this.weight = getParams(1,5);
    this.bill = this.price * this.weight; 
    if(this.element) {
        this.element.innerText = this.place + ' ';
    }
    if(this.element1) {
        this.element1.innerText = this.price + ' ' + '$';
    }
    if(this.element2) {
        this.element2.innerText = this.weight + ' ' + 'кг';
    }
    if(this.element3) {
        this.element3.innerText = this.bill + ' ' + '$';
    }
    function getParams(min,max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};

Item.prototype.setItems = function(price, place, weight) {
    if(cost && place && weight) {
        this.price = price;
        this.place = place;
        this.weight = weight;
        
    }
};

Item.prototype.getItems = function() {
    return {price: this.price,place: this.place,weight: this.weight};
};
