import { parsers } from '../parsers';
import { PDFMaker } from '../utils'

const pdfMaker = new PDFMaker();

class DataHandler {
  async getAsPDF(parser: string): Promise<any> {
    const products = await parsers[parser].getAllProducts();

    return pdfMaker.createPDF(products);
  }
}

export const dataHandler = new DataHandler();