const axios = require('axios')

async function wiki(texto) {
    try {
        let data = await axios({url: `https://pt.wikipedia.org/api/rest_v1/page/summary/${texto}`, method: 'GET'})
        return data.data.extract
    } catch (e) {
        console.log(e)
        return 1
    }
}

module.exports = wiki
