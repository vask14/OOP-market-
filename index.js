App = {};
App.init = function () {
    var items = [];
    for (var i = 0;i < 15 ;i++){
        var li = document.createElement('li');
        var ul = document.getElementById("bill");
        var ul1 = document.getElementById('price');
        var item = new Item(i);
        items.push(item);
        li.appendChild(item.getElement());
        li.appendChild(item.getElement1());
        li.appendChild(item.getElement2());
        li.appendChild(item.getElement3());
        ul.appendChild(li);
    }
    console.log(items);
};
App.init();