// SMS 
import axios from 'axios';

//var axios = require('axios');

module.exports = async function(phone: any,msg: string, from = 'EC-UCC') {
    const data = {
        text : msg,
        type: 0,
        sender: from,
        destinations : phone,
    }

    const url = `https://api.smsonlinegh.com/v5/message/sms/send`
    const options = { 
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Host": "api.smsonlinegh.com",
        "Authorization": `key ${process.env.SMS_API_KEY}`
      }
    }
    const res = await axios.post(url,data,options)
    const resp = await res.data
    console.log(resp)
    if(res.status == 200 && resp.handshake.id == 0 && resp.handshake.label == 'HSHK_OK') return resp.data;
    return null;
};