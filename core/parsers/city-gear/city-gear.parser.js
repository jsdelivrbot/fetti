const request = require('request');
const cheerio = require('cheerio');

const config = {
  links: {
    baseUrl: 'https://www.citygear.com/catalog/',
    sortPriceAsc: 'sort-by/price/sort-direction/asc.html',
    base() {
      config.links.path = config.links.baseUrl;
      return config.links;
    },
    shoes() {
      config.links.path += 'shoes/';
      return config.links;
    },
    sort() {
      config.links.path += config.links.sortPriceAsc;
      return config.links;
    },
    men() {
      config.links.path += 'gender/men/';
      return config.links;
    },
    women() {
      config.links.path += 'gender/women/';
      return config.links;
    },
    path: null
  },
  pages: null
};

const cityGearParser = {
  parseMenShoes() {
    config.links
      .base()
      .shoes()
      .men()
      .sort();

    this.parser(config.links.path);
  },
  parseWomenShoes() {
    config.links
      .base()
      .shoes()
      .women()
      .sort();

    this.parser(config.links.path);
  },
  parser(link) {
    request(link, function (error, response, body) {
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
  }
};

module.exports = cityGearParser;
