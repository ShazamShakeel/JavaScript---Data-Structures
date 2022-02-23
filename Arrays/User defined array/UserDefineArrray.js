class myArray {
    constructor() {
        this.data = {}
        this.length = 0
    }

    get(index){
        if(index >= 0 && index < this.length){
            return this.data.index;
        }
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    shiftIndexes(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        return --this.length
    }
    
    remove(index){
        if(index >= 0 && index < this.length){
            const item = this.data[index];
            this.shiftIndexes(index);
            return item;
        }
    }

    shift(){
        const item = this.data[0];
        this.shiftIndexes(0);
        return item;
    }

    unshift(item){
        this.unshiftIndexes(0);
        this.data[0] = item;
        return this.data;
    }

    unshiftIndexes(index){
        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i - 1]
        }
        this.length++;
        return this.data;
    }

    insert(index, value){
        this.unshiftIndexes(index);
        this.data[index] = value;
        return this.data;
    }

    splice(index, deleteCount, ...items){
        for(let i = 0; i < deleteCount; i++){
            this.shiftIndexes(index);
        }
        console.log(items)
        for(let x of items){
            this.insert(index, x)
            index++; // Without it the items will be inserted in reverse order, or otherwise you will have to reverse the items
        }
        return this.data;
    }
}

const arr = new myArray();
console.log(arr)