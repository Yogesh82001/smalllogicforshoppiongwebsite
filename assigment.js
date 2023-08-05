/*Q-> Build a Shopping System.

Where we have 10 Products
Products are objects
Product can have id, name , price, brand   ----- Done

Products can be arrange by name or price or brand. (In Asc and Desc)  ----  Done

You need to show total price of all products            ---- Done

Product can be search by Name or Price, search result can 0 to N. ---- Done

New Product can be add in middle , end , beg ----- Done

Any Existing product can be delete by name or price. ---- Done.
Can be delete single or multiple products

Every product has 10% Tax , it need to be show during printing. ----Done
So the Final price of product can be Price + Tax.

Show the Highest and Lowest Price Product   ---- Done

Show the Sum of all Products whose price is >2000.----Done 
 */





var products=[{id:101,name:'product1',brand:'brand1',price:500},{id:102,name:'product2',brand:'brand2',price:5460},{id:103,name:'product3',brand:'brand3',price:550},{id:104,name:'product4',brand:'brand4',price:2000},{id:105,name:'product5',brand:'brand5',price:4999},{id:106,name:'product6',brand:'brand6',price:1569},{id:107,name:'product7',brand:'brand1',price:100},{id:108,name:'product8',brand:'brand2',price:10000},{id:109,name:'product9',brand:'brand3',price:8000},{id:110,name:'product10',brand:'brand5',price:600}];

//  price
//asc
products.sort((a, b) => {
    return a.price - b.price;
});
//desc
products.sort((a, b) => {
    return b.price - a.price;
});
//name
//asc
products.sort((a, b) => {
    let pa = a.name.toLowerCase(),
        pb = b.name.toLowerCase();

    if (pa < pb) {
        return -1;
    }
    if (pa > pb) {
        return 1;
    }
    return 0;
});
//desc
products.sort((a, b) => {
    let pa = a.name.toLowerCase(),
        pb = b.name.toLowerCase();

    if (pa > pb) {
        return -1;
    }
    if (pa < pb) {
        return 1;
    }
    return 0;
});
//brand
//asc
products.sort((a, b) => {
    let pa = a.brand.toLowerCase(),
        pb = b.brand.toLowerCase();

    if (pa < pb) {
        return -1;
    }
    if (pa > pb) {
        return 1;
    }
    return 0;
});
//desc
products.sort((a, b) => {
    let pa = a.brand.toLowerCase(),
        pb = b.brand.toLowerCase();

    if (pa > pb) {
        return -1;
    }
    if (pa < pb) {
        return 1;
    }
    return 0;
});
//total price
var result = products.reduce(function(acc, ele) { return acc + ele.price; }, 0);
result;

//search by price
//only one product 
var res=products.find(product=>product.price==500) ;
res;
//many
var m=products.filter(el=>el.price==10000);
m;

//search by name
//only one product 
var res1=products.find(product=>product.name=='product1');
res1;
//many
var m=products.filter(el=>el.name=='product1');

//add new product at end 
products.push({id:111,name:'product11',brand:'brand4',price:6500});
//at front
products.unshift({id:112,name:'product12',brand:'brand7',price:600});
//any position
products.splice(2,0,{id:113,name:'product13',brand:'brand5',price:750});


//delete single item (splice)
// by brand 
var n=products.findIndex(index=>index.brand=='brand1');
products.splice(n,1);
//by name 
var n=products.findIndex(index=>index.name=='product1');
products.splice(n,1);
// by id 
var n=products.findIndex(index=>index.price=='600');
products.splice(n,1);
//delete multiple item
//by brand 
products=products.filter(h=>h.brand!=='brand1');

//by name
products=products.filter(h=>h.name!=='product1');
//by id 
products=products.filter(h=>h.id!==106);




//Sum of all Products whose price is >2000.
var sum=0;
products.forEach(x=>{ if(x.price>2000){sum+=x.price}});
sum;

//find lowest price product

function getlowerprice() {
    var lower= products.reduce((min, p) => p.price < min ? p.price : min, products[0].price);
    return products.find(e=>e.price==lower);
  };
  getlowerprice();

//find highest price product 
function gethigherprice() {
    var high= products.reduce((max, p) => p.price > max ? p.price : max, products[0].price);
    return products.find(e=>e.price==high);
  };
  gethigherprice();

// find tax
var total_price;

let obj=products.find((o, i) => {
    if (o.price === 10000) {
        total_price=o.price*0.1;
        
    }
    return total_price;
});
//total_price;
//obj;
console.log(obj,"total price is : ",total_price);


















