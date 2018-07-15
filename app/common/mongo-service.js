module.exports.getStocks = (request, reply) => {
  var findObject = {};
  for (var key in request.query) {
    if(isNaN(request.query[key])){
      findObject[key] = request.query[key];
    } else {
      findObject[key] = parseFloat(request.query[key]);
    }
  }

  let val = collection.find(findObject).toArray();

  return reply.response(val);
};
