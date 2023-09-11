const request = require('postman-request');

const amount = 10000;
const from = 'inr';
const to = 'usd';
const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`

request({ url, json: true }, function (error, response, body)
{
    if (error)
    {
        console.log('Unable to connect to service!');
        return;
    }
    
    console.log(body[to]);// 1 INR = 0.013 USD
    console.log(body[to] * amount);
});