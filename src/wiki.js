const axios = require('axios')

async function wiki(texto) {
    try {
        let data = await axios({url: `https://pt.wikipedia.org/api/rest_v1/page/summary/${texto}`, method: 'GET'})
        return {texto: data.data.extract, foto: data.data.originalimage.source}
    } catch (e) {
        console.log(e)
        return 1
    }
}

module.exports = wiki
