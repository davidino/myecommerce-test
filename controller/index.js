var repository = require('./../repository');


exports.getItem = function(request, reply){
  try {
    reply(repository.findOne(request.params.id));
  } catch (error) {
    reply('The page was not found').code(404);
  }
}

exports.getItems = function(request, reply){
   reply(repository.findAll())
}
