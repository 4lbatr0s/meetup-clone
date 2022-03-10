const fs = require('fs')

const save = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data))
}

const load = (filename) => {
    let data =  JSON.parse(fs.readFileSync(filename))
    return data
}


module.exports = {save, load}