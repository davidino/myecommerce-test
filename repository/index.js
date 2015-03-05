var items = [
  {id: 0, name: "ipad air 2", price: 20},
  {id: 1, name: "ipad 2", price: 5},
]

exports.findOne = function(id){
  if ( items[id] !== undefined ){
    return items[id]
  }

  throw new Error('Item not found');
}

exports.findAll = function(){
  return items
}
