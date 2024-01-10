/* const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3({
    endpoint: 'https://s3.filebase.com',
    region: 'us-east-1',
    signatureVersion: 'v4',
});

fs.readFile('image.png', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const params = {
        Bucket: 'RTg2OEQ0NkY4MDA4RDEwQTA0MUQ6aWtTdUQ0TkRaZFV5QjVvMGFreEhHd2QzSlNIMGtaSGhVQ1Nnc3hxNDpnYW1lbmZ0ZXJjNzIx',
        Key: '',
        ContentType: 'image/png',
        Body: data,
        Metadata: { import: "nft" }
    };
    
    const request = s3.putObject(params);
    request.on('httpHeaders', (statusCode, headers) => {
        console.log(`CID: ${headers['x-amz-meta-cid']}`);
    });
    request.send();
}); */