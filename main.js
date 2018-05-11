var wholePrices = document.getElementsByClassName("a-price-whole");
var fracPrices = document.getElementsByClassName("a-price-fraction");
var wp = 0;
var fp = 0;

wholePrices.length

for(var i = 0; i < wholePrices.length; i++){
    var dollars = parseInt(wholePrices[i].innerText);
    var cents = parseInt(fracPrices[i].innerText);
    if(!isNaN(dollars+cents)){
        console.log("$"+wp+" + $"+dollars+"=");
        wp += dollars;
        console.log("$"+wp+"\n");
        console.log(fp+"￠ +"+cents+"￠ =");
        fp += cents;
        console.log(fp+"￠  \n");
    }
}

console.log("$"+wp+" + "+fp+"￠ =");

wp += Math.floor(fp/100);
fp %= 100;

console.log("$"+wp+"."+fp);

alert("$"+wp+"."+fp);
