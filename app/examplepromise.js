function getTempCallback (loction, callback) {
  callback(undefined, 40);
  callback('Not found');
}

getTempCallback('Manchester', function (err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('sucess', temp);
  }
})

function getTempPromise (location) {
  return new Promise( function(resolve, reject) {
    resolve(50);
    reject('city not found');
  });
}
getTempPromise('Manchester').then(function(temp) {
  console.log('Pro sucess', temp);
}, function(err) {
  console.log('Promise err', err);
})
