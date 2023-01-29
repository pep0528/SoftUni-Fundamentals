function echoType (parameter) {
    const dataType = typeof parameter;
    console.log(dataType);

    if (dataType == 'string' || dataType == 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType(null)