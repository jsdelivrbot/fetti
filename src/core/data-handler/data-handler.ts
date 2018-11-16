import { parsers } from '../parsers';
import { PDFMaker } from '../utils'

const pdfMaker = new PDFMaker();

class DataHandler {
  async createPDF(parser: string): Promise<any> {
    const products = await parsers[parser].getAllProducts();

    pdfMaker.createPDF(products);
  }
}

export const dataHandler = new DataHandler();