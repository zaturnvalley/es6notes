function createBookShop(inventory){
  return {
    inventory: inventory,
    inventoryValue: function(){
      return this.inventory.reduce((total, book)=> total + book.price, 0);
    },
    priceForTitle: function(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
{ title: 'Harry Potter', price: 10 },
{ title: 'Eloquent JavaScrxipt', price: 15 }
];

const bookShop = createBookShop(inventory);
bookShop.priceForTitle('Harry Potter');

// enhanced object literal version
function createBookShopTwo(inventory){
  return {
    inventory, // if key and value are the same, just state once
    inventoryValue(){ //can omit function and colon
      return this.inventory.reduce((total, book)=> total + book.price, 0);
    },
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

// jQuery example
// function saveFile() {
//   $ajax.({ method: 'POST', url: url, data: data });
// }
function saveFile() {
  $ajax.({ 
    url, 
    data, 
    method: 'POST' 
  });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);