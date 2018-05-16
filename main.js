var prices = document.getElementsByClassName("g-item-sortable");
var totalPrice = 0;
var notFound = 0;

for(var i = 0; i < prices.length; i++){
    var currentPrice = prices[i].getAttribute("data-price");
    console.log(currentPrice);
    currentPrice = parseFloat(currentPrice);
    console.log(currentPrice+"\n");
    if(!isNaN(currentPrice) && currentPrice != Number.NEGATIVE_INFINITY){
        console.log("$"+totalPrice+" + $"+currentPrice+"=");
        totalPrice += currentPrice;
        console.log("$"+totalPrice+"\n");
    }else{
        notFound++;
    }
}
var prettyPrice = totalPrice.toString();
console.log(prettyPrice);
var decimal = prettyPrice.indexOf(".");


if(prettyPrice.length > decimal+3 && decimal!=-1){  //if price has trailing zeroes truncate
    prettyPrice = prettyPrice.substr(0,decimal+3);  //ie 1.000000005 -> 1.00
}

else if(prettyPrice.length == decimal + 2){ //price ends in tenths place add zero
    prettyPrice += "0";                     //ie (1.2) -> (1.20)
}

var alertMsg = "Your Total is:\n$"+ prettyPrice;

if(notFound > 0){
    alertMsg += "\n\nPrices for "+notFound+" item(s) could not be found";
}
alert(alertMsg);
console.log(prettyPrice);
