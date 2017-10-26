var myDiv = (<HTMLInputElement>document.getElementById(`divId`));

interface todolist{
    item: string
}

class Shopping{
    public items:string[];
    constructor(){
        this.items = [];
    }


    add(list:todolist){
        this.items.push(list.item);
    }
}

var list = new Shopping();
//var list = new Shopping();
function addItem(item:string)
    {
        list.add({item: item});
    }


