const axios = require('axios');
/**
 * 
 * @param {string} from 
 * @param {string} to 
 * @param {number} value 
 */

exports.FromTo = async(
    from,
    to,
    value
)=>{
    const data = await axios.get(`https://v6.exchangerate-api.com/v6/65b4569a9571e875796705bd/pair/${from}/${to}/${value}`)
    return data.data
}