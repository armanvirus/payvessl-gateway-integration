const axios = require('axios')
module.exports = async (payload) => {
    console.log(process.env.PAYVASSEL_URL)
    const { email, name, phoneNumber } = payload
    const data = {
        email,
        name,
        phoneNumber,
        "bankcode": ["101", "120001"],
        "account_type": "STATIC",
        "businessid": process.env.PAYVASSEL_BUSSINESS_ID,
        "bvn": "",

    }
    const header = {
        'api-key': process.env.PAYVASSEL_API_KEY,
        'api-secret':`Bearer ${process.env.PAYVASSEL_SEC_KEY}`,
        'Content-Type': 'application/json'
    }
    const request = await axios.post(`${process.env.PAYVASSEL_URL}api/external/request/customerReservedAccount/`,
    data,{header}
)
    console.log(request.status)
    return request
}