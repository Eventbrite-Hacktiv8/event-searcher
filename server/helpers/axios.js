const axios = require('axios')
let axiosBase = axios.create({
    baseURL: 'https://api.github.com'
})
axiosBase.defaults.headers.common["Authorization"] = `token ${process.env.GITHUB_TOKEN}`

module.exports = axiosBase