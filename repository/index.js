module.exports.findOne = function(id){
  if ( id == 0 ){
    return {
      id: 0,
      name: "iPad Pro",
      price: 20.00
    }
  }

  throw new Error('Item not found');
}
