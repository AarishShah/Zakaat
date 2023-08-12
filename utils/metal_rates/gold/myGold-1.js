const axios = require('axios');
const cheerio = require('cheerio'); 
const url = `https://www.goldpricelive.in/`;

axios.get(url)
    .then(response => {
        const data = response.data;
        const $ = cheerio.load(data);

        const tableData = [];
        
        $('table tr').each((index, row) => {
            // Only process rows 27 to 51
            if (index >= 27 && index <= 51) {
                const rowData = [];
                
                $(row).find('td').each((tdIndex, col) => {
                    rowData.push($(col).text().trim());
                });
                
                if (rowData.length > 0) {
                    tableData.push(rowData);
                }
            }
        });
        
        // console.log(tableData);
        for(let i = 0; i < tableData.length; i++) {
        const goldData = tableData[i];
        for(let j = 0; j < 3; j++) {
            console.log(goldData[j]);
        }
        
        }
        
    })
    .catch(error => {
        console.error('Error fetching web data:', error);
    });
