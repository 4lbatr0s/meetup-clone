const fs = require('fs')

module.exports = class BaseService{
    // constructor(model){ TODO: we dont need to use it anymore, check up the person and meetup services for more information.
    //     this.model = model
    // }

async findAll(){

    return this.model.find()//
}

async add(item){
     return this.model.create(item) //our model is derived from a PersonSchema, therefore any item we create goes to mongodb.
}

async del(itemId){
    return this.model.remove({_id: itemId}) //TODO:delete the item with the id, it's a query you can pass multiple values.
}

async saveModel(){
  return this.model.save()
}


  //default id is 1.
  async find(itemId = 1) {
    return  this.model.findById(itemId)
  }
 
}

