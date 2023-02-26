function cats (arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let newCat = new Cat(catData[0], catData[1]);
        newCat.meow();
    }


}

cats(['Mellow 2', 'Tom 5'])