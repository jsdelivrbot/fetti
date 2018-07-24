import * as request from 'request';
import * as cheerio from 'cheerio';

const url = "https://www.citygear.com/catalog/shoes/gender/men/page/1/sort-by/price/sort-direction/asc.html";

export class CityGearParser {
  getProducts() {
    request(url, (error, response, body) => {
      if (!error) {
          this.parseProducts(body);
      } else {
        console.log(error);
      }
    });
  }

  private parseProducts(body) {
    const $ = cheerio.load(body);
    const products = $(".category-products .item");

      products.each((idx, elem) => {
        const price = $(elem).find('.price').text().trim();
        const name = $(elem).find('.product-name a').text();

        console.log(name + ' - ' + price);
      });

    console.log('-------------------');
    console.log('The end of the road');
    console.log('-------------------');
  }
};
