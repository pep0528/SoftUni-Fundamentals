function browserHistory (object, arr) {
    let newObj = {
        'Browser Name': object['Browser Name'],
        'Open Tabs': object['Open Tabs'],
        'Recently Closed': object['Recently Closed'],
        'Browser Logs': object['Browser Logs']
    };

    for (let command of arr) {
        let data = command.split(' ');
        let currCommand = data[0];
        let site = data[1];

        if (currCommand === 'Open') {
            openTab(newObj, site);
            browserLogs(object, command, newObj);
        } else if (currCommand === 'Close') {
            closeTab(newObj, site);
            browserLogs(object, command, newObj);
        } else if (currCommand === 'Clear History and Cache') {
            deleteObject(newObj);
        }
    }

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

    function openTab (obj, site, secObj) {
        if (Object.keys(obj).length === 0) {
            obj = { ...secObj };
        } else {
            obj['Open Tabs'].push(site);
        }
    }

    function browserLogs (obj, command, secObj) {
        if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
            obj = { ...secObj };
        } else {
            obj['Browser Logs'].push(command);
        }
    }

    function closeTab (obj, site, secObj) {
        secObj = Object.assign({}, obj);

        if (secObj['Open Tabs'].includes(site)) {
            let index = secObj['Open Tabs'].findIndex(x => x === site);
            let result = secObj['Open Tabs'].splice(index, 1);
            secObj['Recently Closed'].push(result[0]);
        }
    }

    function deleteObject (obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }
}

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])