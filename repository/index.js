exports.findOne = function(id){
  if ( id == 0 ){
    return {
      id: 0,
      name: "iPad Pro",
      price: 20.00
    }
  }

  throw new Error('Item not found');
}

exports.findAll = function(){

  return [
    {id: 0, name: "ipad air 2", price: 20},
    {id: 1, name: "ipad 2", price: 5},
  ]
}
