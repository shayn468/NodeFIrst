const PDFDocument = require('pdfkit');
const fs = require('fs');


const doc = new PDFDocument();


doc.pipe(fs.createWriteStream('output.pdf'));


doc.fontSize(25).text('Some text', 100, 100);

doc.image('cat.jfif', {
    fit: [250, 300],
    align: 'center',
    valign: 'center'
});

doc.end()