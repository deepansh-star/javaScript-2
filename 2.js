function totalCartValue () {
let totalValue = 0 ;
for (let i = 0 ; i < arguments.length ; i++) {
    totalValue  += arguments[i] 
}
console.log(`The Total Value Of Cart Is ${totalValue}`) ;
return totalValue ;
}

totalCartValue(210, 536, 121) ;