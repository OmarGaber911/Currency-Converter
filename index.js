// const express =require('express');
// const axios =require('axios');
// const req = require('express/lib/request');

// const app =express();
// const port =3000;
// app.listen(port , ()=>{
//     console.log('server listening on port ${port}')
// });
// app.get('/convert',(req,res){
//   const apiKey='35eaed6a87964ba8a777adf84f9501fc';
//   const baseCurrency=req.query.base; 
//   const TargetCurrency=req.query.target;
//   const amount=req.query.amount;  
 
//   axios
//   .get(`https://api.currencyapi.com/v1/rates?apiKey=${apiKey}&base=${baseCurrency}`)
//   .then((response) => {
//     const exchangeRates = response.data.rates;
//     const targetRate = exchangeRates[targetCurrency];
//     const convertedAmount = amount * targetRate;

//     res.json({ result: convertedAmount });
//   })
//   .catch((error) => {
//     res.status(500).json({ error: 'Error converting currency' });
//   });
// });

const express = require('express');
const request = require('request');

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Currency Conversion API');
});

app.get('/convert', (req, res) => {
  const baseCurrency = req.query.base;
  const targetCurrency = req.query.target;
  const amount = req.query.amount;

  const options = {
    method: 'GET',
    url: `https://api.currencyfreaks.com/v2.0/rates/latest?base=${baseCurrency}&symbols=${targetCurrency}&apikey=35eaed6a87964ba8a777adf84f9501fc`,
    headers: {}
  };

  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    }
    
    const data = JSON.parse(body);
    const exchangeRate = data.rates[targetCurrency];
    const convertedAmount = amount * exchangeRate;

    res.json({ result: convertedAmount });
  });
});
