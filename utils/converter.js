

exports.strCamelToSnake = (str) => {
    return str.replace(/[A-Z]/g, (c) => { return '_' + c.toLowerCase() });
}