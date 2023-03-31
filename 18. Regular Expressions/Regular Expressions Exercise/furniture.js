function furniture (input) {
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    let command = input.shift();
    let furniture = [];
    let money = 0;
    let total = 0;
    let quantity = 0;

    while (command !== 'Purchase') {
        let match = pattern.exec(command);

        if (match !== null) {
            furniture.push(match.groups['furniture']);
            money = Number(match.groups['price']);
            quantity = Number(match.groups['quantity']);
            total += money * quantity;
        }
        command = input.shift();
    }

    console.log('Bought furniture:');

    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }

    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])