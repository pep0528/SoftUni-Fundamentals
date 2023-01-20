function vacation (people, group, day) {
    let price = 0;

    switch (day) {
        case "Friday":
            if (group === "Students") {
                price = people * 8.45;

                if (people >= 30) {
                    price -= 0.15 * price;
                }
            } else if (group === "Business") {
                price = people * 10.90;

                if (people >= 100) {
                    price = (people - 10) * 10.90;
                }
            } else if (group === "Regular") {
                price = people * 15;

                if (people >= 10 && people <= 20) {
                    price -= 0.05 * price;
                }
            }
            break;
        case "Saturday":
            if (group === "Students") {
                price = people * 9.80;
    
                if (people >= 30) {
                    price -= 0.15 * price;
                }
            } else if (group === "Business") {
                price = people * 15.60;
    
                if (people >= 100) {
                    price = (people - 10) * 15.60;
                }
            } else if (group === "Regular") {
                price = people * 20;
    
                if (people >= 10 && people <= 20) {
                    price -= 0.05 * price;
                }
            }
            break;
        case "Sunday":
            if (group === "Students") {
                price = people * 10.46;
    
                if (people >= 30) {
                    price -= 0.15 * price;
                }
            } else if (group === "Business") {
                 price = people * 16;
    
                if (people >= 100) {
                    price = (people - 10) * 16;
                }
            } else if (group === "Regular") {
                price = people * 22.50;
    
                if (people >= 10 && people <= 20) {
                    price -= 0.05 * price;
                }
            }
        break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")