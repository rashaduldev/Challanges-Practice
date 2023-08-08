const shopingChart=[
    {name:'Techno', price:15000, quantity:3},
    {name:'samsung', price:12000, quantity:3},
    {name:'Iphone', price:55000, quantity:3},
    {name:'Redme', price:18000, quantity:3},
    {name:'Realme', price:9000, quantity:3}
];
function totalCost(products) {
    var sum=shopingChart[0];
    for (let i = 0; i < products.length; i++) {
        // const index=i;
        const element = products[i];
        // sum=sum+element.price;
        if (element.price<sum.price) {
            sum=element;
        }
        // const productTotal=element.price;
        // console.log(index,element);
        
    }
    return sum;
}
const expence =totalCost(shopingChart);
console.log(expence.price);
