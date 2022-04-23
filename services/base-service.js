const fs = require('fs')
const flatted = require('flatted')

module.exports = class BaseService{
    constructor(model, dbPath){
        this.model = model
        this.dbPath = dbPath
    }



async findAll(){
    return new Promise((resolve, reject) => {
        fs.readFile(this.dbPath, 'utf8', async (err,file) => {
            if(err){
                if(err.code == 'ENOENT') //TODO:NO SUCH file.
                {
                    await this.saveAll([]) //callback function, save nothing.
                    return resolve() //return nothing, and finish after, we call resolve here because this error does not come from system.
                }
                return reject(err) 
            }
               //object mapping
            //do not use JSON.parse use Flatted.parse
            const items = flatted.parse(file).map(this.model.create)//you can pass functions to map function.
            resolve(items)
        })
    })
}

async add(item){
    const allItems = await this.findAll();
    const lastItem = allItems[allItems.length-1]//bring last item.
    const lastItemsId = lastItem && lastItem.id || 0  //if there is a last item, assign it's id, if not assign 0 
    item.id = lastItemsId+1
    allItems.push(item)
    await this.saveAll(allItems)
    return item 
}

async del(itemId){
    const allItems = await this.findAll()
    const itemIndex = allItems.findIndex(p => p.id == itemId)
    if(itemIndex<0) return 
    allItems.splice(itemIndex, 1) //delete the item with the Index. with the itemId
    await this.saveAll(allItems) //save to db
}


  //default id is 1.
  async find(itemId = 1) {
    const allItems = await this.findAll()

    return allItems.find(p => p.id == itemId)
  }


async saveAll(items){
    return new Promise((resolve, reject) => {
        fs.writeFile(this.dbPath, flatted.stringify(items), (err,file) => {
            if(err) return reject() //FIXME:The return purpose is to terminate the execution of the function after the rejection, and prevent the execution of the code after it. 
            resolve()
        })
    })
}
}

