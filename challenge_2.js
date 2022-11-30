const root = document.getElementById("root")
const item = [ 
     {name: 'Bike', price:100},
     {name: 'TV', price:200}, 
     {name: 'Album', price:10}, 
     {name: 'Book', price:5}, 
     {name: 'Phone', price:500}, 
     {name: 'Computer', price:1000},
     ];

     ///1 . Filter and show the product that will be 
     ///bought when you don't have much money I mean Cheap one

     const cheapone =  item.filter( items =>{
        return items.price <= 100
     })
     console.log("cheap product:");
     console.log(cheapone)

    // 2.Filter and show the product that will be expensive in the array

     const expensive = item.filter( items =>{
        return items.price > 100
     })
     console.log("expensive");
     console.log(expensive)

    // 3.Calculate the full price of all product combined

     const fullprice = item.reduce( (currentTotal,item) => {
        return item.price+currentTotal
     },0)

     console.log('fullprice')
     console.log(fullprice)

     // 4.Calculate the full price of all product combined and remove product that are under the 10 dollar
     const fullpricewithoutdollar = item.filter(items => {
        return items.price > 10
     }).reduce((currentTotal,items) =>{
        return items.price + currentTotal
     },0)

     console.log('full price with product under the 10 dollar')
     console.log(fullpricewithoutdollar)
