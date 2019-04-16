const request = require('request');
const moment = require('moment');
const rp = require('request-promise');

setInterval(() => {
    rp.get('http://jsonplaceholder.typicode.com/posts/1',(err,response,body) => {
        console.log(moment().format('h:mm:ss a'));
        //process(response);
    }).then( (success) => {
        console.log(success);
    }, (fail) => {
        console.log(fail);
    })
},3000);