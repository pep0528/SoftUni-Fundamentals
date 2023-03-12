function companyUsers (input) {
    let companies = {};

    for (let el of input) {
        let [company, id] = el.split(' -> ');

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }

    let sort = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sort) {
        console.log(el[0]);
        let set = new Set(el[1]);
        
        for (let num of set) {
            console.log(`-- ${num}`);
        }
    }
}

companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'])