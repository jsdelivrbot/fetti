import * as cheerio from 'cheerio';
import * as rpn from 'request-promise-native';

interface ParsedData {
  noMoreItems: boolean,
  products: any[];
};

export class CityGearParser {
  getProducts(params: any = {}): Promise<ParsedData> {
    const url = this.makeUrl(params);

    return rpn(url)
      .then(body => {
        const products = this.parseProducts(body);

        return Promise.resolve(products);
      })
      .catch(e => console.log(e));
  }

  async getAllProducts() {
    let noMoreItems = false;
    let allProducts = [];
    let page = 1;

    while (!noMoreItems) {
      try {
        const parsedData = await this.getProducts({ page });
        
        console.log('Finished page №' + page);
        noMoreItems = parsedData.noMoreItems;
        allProducts = [
          ...allProducts,
          ...parsedData.products
        ]
        page++;
      } catch (e) {
        noMoreItems = true;
      }

      // if (!pageProducts) return;

      // allProducts = [
      //   ...allProducts,
      //   ...products
      // ]
      // page++;
    }

    console.log(allProducts);
  };

  private parseProducts(body: any): ParsedData {
    const $ = cheerio.load(body);
    const noMoreItems = !!$('.no-more').length;
    const productsEl = $('.category-products .item');
    const products = [];
    
    console.log(productsEl.length);
    productsEl.each((idx, elem) => {
        const price = $(elem).find('.price').text().trim();
        const name = $(elem).find('.product-name a').text();
        const [ original, sell ] = price.split(/\n/);
        const originalPrice = +original.replace(/[^0-9]/, '' );
        const sellPrice = sell && +sell.replace(/[^0-9]/, '' );

        products.push({
          name,
          originalPrice,
          sellPrice
        });
      });


    // console.log('-------------------');
    // console.log('Finished page №' + );
    // console.log('-------------------');
    
    return {
      noMoreItems,
      products
    };
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
