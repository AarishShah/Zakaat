const request = require('postman-request');

const key = 'fc9d2ffbae683086a1ea46d9ac12e5aa' // 95 requests remaining
const base = INR;
const url = 'https://api.metalpriceapi.com/v1/latest?api_key=' + key + '&base=' + base;

request
    (
        { url: url, json: true },

        (error, response) =>
        {
            if (error) // means no response
                console.log('Unable to connect to service!');

            else console.log(response.body);

        }
    )