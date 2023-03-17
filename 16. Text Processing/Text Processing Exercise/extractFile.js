function extractFile (input) {
    let info = input.split('\\').pop();
    let name = info.substring(0, info.lastIndexOf('.'));
    let extension = info.substring(info.lastIndexOf('.') + 1);
    console.log(`File name: ${name}\nFile extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')