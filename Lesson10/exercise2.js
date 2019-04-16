let promiseToCleanTheRoom = new Promise(function(resolve,reject){
    
    let isClean = false;

    if(isClean){
        resolve('Clean');
    } else {
        reject('not Clean');
    }
});

promiseToCleanTheRoom.then( (goodStuff) => {
    console.log("hey its clean")
}, (badStuff) => {
    console.log(badStuff)
} )