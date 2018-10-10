import * as PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

import * as fromModels from '../../models';


export class PDFMaker {
  createPDF(data: fromModels.Product[]) {
    const doc = new PDFDocument;

    doc.pipe(createWriteStream('output.pdf'));

    doc.fontSize(14);

    data.forEach(product => {
      const line = `${product.name} - ${product.originalPrice} - ${product.sellPrice}`;
      doc
        .text(product.name, 100, 100, { lineBreak : false })
        .fillColor('red')
        .text('World!');
      doc.moveDown();
    });
    
    doc.end()

    return doc;
  }
}
