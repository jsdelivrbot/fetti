const request = require('request');
const cheerio = require('cheerio');

request(url, function (error, response, body) {
  if (!error) {
      var $ = cheerio.load(body),
          products = $(".category-products .item");

        products.each((idx, elem) => {
          const price = $(elem).find('.price').text().trim();
          const name = $(elem).find('.product-name a').text();

          console.log(name + ' - ' + price);
        });
  } else {
    console.log(error);
  }
});
