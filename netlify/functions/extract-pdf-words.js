const pdfjsLib = require('pdfjs-dist');

exports.handler = async (event) => {
  try {
    const { pdfUrl, pageNumber = 1 } = JSON.parse(event.body);
    
    console.log('Processing PDF:', pdfUrl, 'Page:', pageNumber);
    
    // PDF yüklə
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    
    // Sözləri və koordinatları çıxart
    const words = textContent.items
      .filter(item => item.str.trim().length > 0)
      .map(item => ({
        word: item.str.trim(),
        x: item.transform[4],
        y: item.transform[5], 
        width: item.width,
        height: item.height,
        page: pageNumber
      }))
      .filter(item => /^[a-zA-Z]+$/.test(item.word) && item.word.length > 2);
    
    console.log(`Found ${words.length} words on page ${pageNumber}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        words,
        page: pageNumber,
        totalPages: pdf.numPages
      })
    };
    
  } catch (error) {
    console.error('PDF Processing Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        error: error.message 
      })
    };
  }
};
