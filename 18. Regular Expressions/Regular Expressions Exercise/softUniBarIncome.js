function softUniBarIncome (input) {
    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let line = input.shift();
    let totalPrice = 0;

    while (line !== 'end of shift') {
        let currOrder;

        if (currOrder = pattern.exec(line)) {
            let { customer, product, count, price } = currOrder.groups;
            totalPrice += count * price;
            console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
        }
        line = input.shift();
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])