const https = require('https');

https.get("https://www.moh.gov.sg/covid-19/vaccination/statistics/GetData/526db8f1-0889-4b32-8bc5-fd89d575f673/", function(res) {
    console.log(res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
}).on('error', function(err) {
    console.log(err);
});

