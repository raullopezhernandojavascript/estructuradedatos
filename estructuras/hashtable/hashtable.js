class HashTable {
    // Predefinimos el tamaño del "HashTable"
    constructor(size) {
        this.data = new Array(size)
    }

    // Funcion que genera un hash que se guaradara en los bloques de
    // "myHashTable"

    hasMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash
    }
    // Agregar elementos a "HashTable"
    set(key,value){
        const address = this.hasMethod(key);
        // Si no exite el address generamos como un nuevo arrat
        if(!this.data[address]){
            this.data[address] = [];
        }

        // Si existe agregame un array a ese espacio de memoria para luego tener
        // acceso a la informacion
        this.data[address].push([key,value]);
        return this.data;
    }

    // Metodo que simula al insert

    get(key){
        const address = this.hasMethod(key);
        // EL indice donde se encuentra el valor
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i=0; i<currentBucket.length; i++){
                // Lo recorremos en el [i] son los keys
                if(currentBucket[i][0] === key){
                    //El 1 seria el valor
                    return currentBucket[i][1];
                }
            }
        }
        //Si no encuentra nada regresa undefined
        return undefined
    }

    // Obtner todas las keys
    getAllKeys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i]) {
            for (let j = 0; j < this.data[i].length; j++) {
              keys.push(this.data[i][j][0]);
            }
          }
        }
        return keys;
      }

      remove(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
          for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] === key) {
              const deletedValue = this.data[address][i];
              //En vez de retornar el valor con splice lo borramos
              this.data[address].splice(i, 1);
              return deletedValue;
            }
          }
        }
        return undefined;
      }
}

const myHashTable = new HashTable(50);