const request = require('request');
const cheerio = require('cheerio');

const url = "https://www.citygear.com/catalog/shoes/gender/men/page/1/sort-by/price/sort-direction/asc.html";

class CityGearParser {
  getProducts() {
    request(url, (error, response, body) => {
      if (!error) {
          this.parseProducts(body);
      } else {
        console.log(error);
      }
    });
  }

  parseProducts(body) {
    const $ = cheerio.load(body);
    const products = $(".category-products .item");

      products.each((idx, elem) => {
        const price = $(elem).find('.price').text().trim();
        const name = $(elem).find('.product-name a').text();

        console.log(name + ' - ' + price);
      });
  }
};


module.exports = {
  CityGearParser
};