function buildAWall (arr) {
    let parsed = arr.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let costs = 0;
    let crews = parsed.filter(len => len < 30).length;

    while (crews !== 0) {
        let concreteByAllCrews = 0;

        for (let i = 0; i < parsed.length; i++){
            if (parsed[i] !== 30) {
                parsed[i]++;
                concreteByAllCrews += 195;

                if (parsed[i] == 30) {
                    crews--;
                }
            }
        }

        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }
    
    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}

buildAWall([21, 25, 28])