import * as PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';

import * as fromModels from '../../models';


export class PDFMaker {
  createPDF(data: fromModels.Product[]) {
    const doc = new PDFDocument();

    doc.pipe(createWriteStream('output.pdf'));

    doc.fontSize(14);

    data.forEach((product, idx) => {
      const sellPrice = product.sellPrice || 'none';

      doc
        .fillColor('black')
        .text(product.name, { continued: true })
        .fillColor('green')
        .text(` - ${product.originalPrice}$`, { continued: true })
        .fillColor('black')
        .text('  / ', { continued: true })
        .fillColor('red')
        .text(`${sellPrice}$`);

      doc.moveDown();
    });
    
    doc.end()

    return doc;
  }
}
