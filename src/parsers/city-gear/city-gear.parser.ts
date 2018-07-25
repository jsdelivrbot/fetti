// import * as request from 'request';
import * as cheerio from 'cheerio';
import * as rpn from 'request-promise-native';

export class CityGearParser {
  getProducts(params: any = {}): any {
    const url = this.makeUrl(params);

    return rpn(url)
      .then(body => {
        console.log(body);
      })
      .catch(e => console.log(e));
    // return rpn(url, (error, response, body) => {
    //   if (!error) {
    //     const products = this.parseProducts(body);

    //     return Promise.resolve(products);
    //   }

    //   return Promise.reject(error);
    // });
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

    return 'heyyy';
  }

  private makeUrl(params: any): string {
    const category = params.category || 'shoes';
    const gender = params.gender || 'men';
    const page = params.page || 1;
    const sortBy = params.sortBy || 'price';
    const sortDirection = params.sortDirection || 'asc';
    const url = `https://www.citygear.com/catalog/${category}/gender/${gender}/page/${page}/sort-by/${sortBy}/sort-direction/${sortDirection}.html`;

    return url;
  }
};
