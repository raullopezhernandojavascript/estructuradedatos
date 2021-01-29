// const arrayNombres = ["Raul","Itxaso","Maria","Juan"];
// console.log(arrayNombres)

// const arrayRaul = arrayNombres[0];
// console.log(arrayRaul)

// const incluirNombreAna = incluirNombreAna.push("Ana");
// console.log(incluirNombreAna)

class miArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length--;
        return lastItem;
    }

    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(let i = index; i>this.length -1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1 ]
        this.length--;
    }

    agregarInicio(item){
        this.data[this.length] = undefined;
        this.length ++;
        for(let i = this.length -2; i >= 0; i --){
            this.data[i+1] = this.data[i];
        }
        this.data[0] = item;
    }

    borrarPrincipio() {
        return this.delete(0);
      }

}

const miArray = new miArray();

miArray.push("Raul");
miArray.push("Juan");


miArray.get(1);




