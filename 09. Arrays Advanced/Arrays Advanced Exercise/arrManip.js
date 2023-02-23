function arrayManipulator (arrInt, arrCom) {
    for (let i = 0; i < arrCom.length; i++) {
        let tokens = arrCom[i].split(' ');
        let command = tokens[0];

        if (command === 'add') {
            add();
        } else if (command === 'addMany') {
            addMany();
        } else if (command === 'contains') {
            contains();
        } else if (command === 'remove') {
            remove();
        } else if (command === 'shift') {
            shift();
        } else if (command === 'sumPairs') {
            sumPairs();
        } else if (command === 'print') {
            print();
            break;
        }
        
        // add <index> <element> 
        function add() {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            arrInt.splice(index, 0, element);
        }

        // addMany <index><element 1> <element 2> … <element n>
        function addMany() {
            let index = Number(tokens[1]);

            for (let j = tokens.length - 1; j >= 2; j--) {
                let element = Number(tokens[j]);
                arrInt.splice(index, 0, element);
            }
        }

        // contains <element> 
        function contains() {
            let element = Number(tokens[1]);
            console.log(arrInt.indexOf(element));
        }

        // remove <index>
        function remove() {
            let index = Number(tokens[1]);
            arrInt.splice(index, 1);
        }

        // shift <positions>
        function shift() {
            let position = Number(tokens[1]);

            for (let x = 0; x < position; x++) {
                let element = arrInt.shift();
                arrInt.push(element);
            }
        }

        // sumPairs
        function sumPairs() {
            let newArr = [];

            if (arrInt.length % 2 !== 0) {
                arrInt.push(0);
            }

            for (let i = 0; i < arrInt.length; i += 2) {
                let sum = arrInt[i] + arrInt[i + 1];
                newArr.push(sum);
            }
        
            arrInt = newArr;
        }

        //op print
        function print() {
            console.log(`[ `+arrInt.join(', ') + ` ]`);
        }
    }
}

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"])