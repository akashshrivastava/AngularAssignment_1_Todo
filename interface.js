var myDiv = document.getElementById("divId");
var Shopping = /** @class */ (function () {
    function Shopping() {
        this.items = [];
    }
    Shopping.prototype.add = function (list) {
        this.items.push(list.item);
    };
    return Shopping;
}());
var list = new Shopping();
//var list = new Shopping();
function addItem(item) {
    list.add({ item: item });
}
