let cancelBtnLog = document.querySelector("#cancel-btn");
let loginBtn = document.querySelector("#login-btn")
let signBtn = document.querySelector("#signup-btn")
let cancelBtnSign = document.querySelector("#cancel-btn-sign")
let exitSB= document.querySelector("#exit-slider");
// let slider=document.querySelector("#slider");
// let sliderHide=document.querySelector("#slider-hide");
let sliderClass=document.querySelector(".slider-class");
let shopCart=document.querySelector("#shopping-cart");
let middleDiv=document.querySelector("#middle");
let isHide=true;
let countItems=0;
// let popupClass=document.querySelector(".popup");
let popup=document.querySelector("#popup-login");

let item=document.querySelector("#items");
let button=document.getElementsByTagName("button");
let total=0;
let totalSpan=document.querySelector("#total-span");
let emptyCart=document.querySelector("#empty-cart");
let removeSingleItemClass=document.querySelectorAll(".rm-show-here");
function hide(){
   $("#popup-login").hide() 
}
function show(){
    $('#popup-login').show();
    hideSign();
    
}
cancelBtnLog.addEventListener("click",hide);
loginBtn.addEventListener("click",show);

function hideSign(){
    $("#popup-signup").hide();  
}
function showSign(){
    $("#popup-signup").show();  
    console.log("in show sign");
    hide();
}
cancelBtnSign.addEventListener("click",hideSign);
signBtn.addEventListener("click",showSign);
 
shopCart.addEventListener("click",()=>{
    sliderClass.setAttribute("id","slider");
    $("#popup-signup").hide();
    $("#popup-login").hide();
    if(countItems===0){
        $("#lower").hide();
        let cartEmptyDiv=document.createElement("div");
        cartEmptyDiv.id="cart-empty";
        cartEmptyDiv.textContent="Cart Empty";
        middleDiv.append(cartEmptyDiv);
        // let checkoutBtn=document.createElement("button");
        // checkoutBtn.id="checkout-btn";
        // checkoutBtn.className="dyn-btn";
        // let emptybtn=document.createElement("button")
        // emptybtn.id="empty-cart";
        // emptybtn.className="dyn-btn";
        // checkoutBtn.textContent="Checkout";
        // emptybtn.textContent="Empty Cart";
        // middleDiv.append(checkoutBtn)
        // middleDiv.append(emptybtn);
    }
})
exitSB.addEventListener("click",()=>{
    sliderClass.setAttribute("id","slider-hide");
})
//


//
let showHereClass=document.querySelectorAll(".show-here");
let addToCartClass=document.querySelectorAll(".atc");
let removeItems=document.querySelectorAll(".ric");
let middleDivCart=document.querySelector("#middle");
let badam ={
    count:0,
    name:"badam",
    price:700
}
let kaju={
    count:0,
    name:"kaju",
    price:1200
}

let pista={
    count:0,
    name:"pista",
    price :1300
}

let gkish={
    count:0,
    name:"g-kish",
    price:550
}
let bkish={
    count:0,
    name:"b-kish",
    price:420
}
let walnut={
    count:0,
    name:"walnut",
    price:1400
}
let jagdaru={
    count:0,
    name:"jagdaru",
    price:650
}
let anjeer={
    count:0,
    name:"anjeer",
    price:1200
}
//

// function hideAfterFiveSec(){
//     ()
// }
addToCartClass[0].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    badam.count++
    countItems++;
    $(removeSingleItemClass[0]).hide();
    $(showHereClass[0]).show();
    console.log("in addb if");
    if(badam.count===1){
         let firstDiv=document.createElement("div");
         firstDiv.id="first-div";
         firstDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=badam.name;
         proName.textContent="BADAM";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="b-price";
         priceOfPro.textContent=badam.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="b-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="b-quan";
         quantity.textContent=badam.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="b-equal";
         equal.textContent="=";
         equal.className="items";

         let totalOfPro=document.createElement("div");
         totalOfPro.id="b-total";
         totalOfPro.textContent=badam.count*badam.price;
         totalOfPro.className="items"
        
         total=total+badam.price;
         totalSpan.textContent=total;

         middleDiv.append(firstDiv);
         firstDiv.append(proName);
         firstDiv.append(priceOfPro);
         firstDiv.append(multiply);
         firstDiv.append(quantity);
         firstDiv.append(equal);
        firstDiv.append(totalOfPro);
        console.log("in if add");
        console.log(total);
    }
    if(badam.count>1){
        document.getElementById("b-quan").textContent=badam.count;
        document.getElementById("b-total").textContent=badam.count*badam.price;
        total=total+badam.price;
        totalSpan.textContent=total;
        console.log("in 2nd if add");
        console.log(total);

    }
})

// for kaju

addToCartClass[1].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    kaju.count++
    countItems++;
    $(removeSingleItemClass[1]).hide();
    $(showHereClass[1]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(kaju.count===1){
         let secondDiv=document.createElement("div");
         secondDiv.id="second-div";
         secondDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=kaju.name;
         proName.textContent="KAJU";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="k-price";
         priceOfPro.textContent=kaju.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="k-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="k-quan";
         quantity.textContent=kaju.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="k-equal";
         equal.textContent="=";
         equal.className="items";

         let totalOfPro=document.createElement("div");
         totalOfPro.id="k-total";
         totalOfPro.textContent=kaju.count*kaju.price;
         totalOfPro.className="items"
        
        total=total+kaju.price;
        totalSpan.textContent=total;


         middleDiv.append(secondDiv);
         secondDiv.append(proName);
         secondDiv.append(priceOfPro);
         secondDiv.append(multiply);
         secondDiv.append(quantity);
         secondDiv.append(equal);
        secondDiv.append(totalOfPro);

    }
    if(kaju.count>1){
        document.getElementById("k-quan").textContent=kaju.count;
        document.getElementById("k-total").textContent=kaju.count*kaju.price;
        total=total+kaju.price;
        totalSpan.textContent=total;
    }
})

// for pista 

addToCartClass[2].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    pista.count++
    countItems++;
    $(removeSingleItemClass[2]).hide();
    $(showHereClass[2]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(pista.count===1){
         let thirdDiv=document.createElement("div");
         thirdDiv.id="third-div";
         thirdDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=pista.name;
         proName.textContent="PISTA";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="p-price";
         priceOfPro.textContent=pista.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="p-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="p-quan";
         quantity.textContent=pista.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="p-equal";
         equal.textContent="=";
         equal.className="items";

         total=total+pista.price;
        totalSpan.textContent=total;

         let totalOfPro=document.createElement("div");
         totalOfPro.id="p-total";
         totalOfPro.textContent=pista.count*pista.price;
         totalOfPro.className="items"

         middleDiv.append(thirdDiv);
         thirdDiv.append(proName);
         thirdDiv.append(priceOfPro);
         thirdDiv.append(multiply);
         thirdDiv.append(quantity);
         thirdDiv.append(equal);
        thirdDiv.append(totalOfPro);

    }
    if(pista.count>1){
        document.getElementById("p-quan").textContent=pista.count;
        document.getElementById("p-total").textContent=pista.count*pista.price;
        total=total+pista.price;
        totalSpan.textContent=total;
    }
})

//
addToCartClass[3].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    gkish.count++
    countItems++;
    $(removeSingleItemClass[3]).hide();
    $(showHereClass[3]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(gkish.count===1){
         let fourthDiv=document.createElement("div");
         fourthDiv.id="fourth-div";
         fourthDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=gkish.name;
         proName.textContent="G-KISHMISH";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="gk-price";
         priceOfPro.textContent=gkish.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="p-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="gk-quan";
         quantity.textContent=gkish.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="gk-equal";
         equal.textContent="=";
         equal.className="items";

         total=total+gkish.price;
        totalSpan.textContent=total;

         let totalOfPro=document.createElement("div");
         totalOfPro.id="gk-total";
         totalOfPro.textContent=gkish.count*gkish.price;
         totalOfPro.className="items"

         middleDiv.append(fourthDiv);
         fourthDiv.append(proName);
         fourthDiv.append(priceOfPro);
         fourthDiv.append(multiply);
         fourthDiv.append(quantity);
         fourthDiv.append(equal);
        fourthDiv.append(totalOfPro);

    }
    if(gkish.count>1){
        document.getElementById("gk-quan").textContent=gkish.count;
        document.getElementById("gk-total").textContent=gkish.count*gkish.price;
        total=total+gkish.price;
        totalSpan.textContent=total;
    }
})

//
addToCartClass[4].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    bkish.count++
    countItems++;
    $(removeSingleItemClass[4]).hide();
    $(showHereClass[4]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(bkish.count===1){
         let fifthDiv=document.createElement("div");
         fifthDiv.id="fifth-div";
         fifthDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=bkish.name;
         proName.textContent="B-KISHMISH";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="bk-price";
         priceOfPro.textContent=bkish.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="p-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="bk-quan";
         quantity.textContent=bkish.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="bk-equal";
         equal.textContent="=";
         equal.className="items";

         let totalOfPro=document.createElement("div");
         totalOfPro.id="bk-total";
         totalOfPro.textContent=bkish.count*bkish.price;
         totalOfPro.className="items"

         total=total+bkish.price;
        totalSpan.textContent=total;

         middleDiv.append(fifthDiv);
         fifthDiv.append(proName);
         fifthDiv.append(priceOfPro);
         fifthDiv.append(multiply);
         fifthDiv.append(quantity);
         fifthDiv.append(equal);
        fifthDiv.append(totalOfPro);

    }
    if(bkish.count>1){
        document.getElementById("bk-quan").textContent=bkish.count;
        document.getElementById("bk-total").textContent=bkish.count*bkish.price;
        total=total+bkish.price;
        totalSpan.textContent=total;
    }
})

//

addToCartClass[5].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    walnut.count++
    countItems++;
    $(removeSingleItemClass[5]).hide();
    $(showHereClass[5]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(walnut.count===1){
         let sixthDiv=document.createElement("div");
         sixthDiv.id="sixth-div";
         sixthDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=walnut.name;
         proName.textContent="C-WALNUT";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="walnut-price";
         priceOfPro.textContent=walnut.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="p-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="walnut-quan";
         quantity.textContent=walnut.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="walnut-equal";
         equal.textContent="=";
         equal.className="items";

         total=total+walnut.price;
        totalSpan.textContent=total;

         let totalOfPro=document.createElement("div");
         totalOfPro.id="walnut-total";
         totalOfPro.textContent=walnut.count*walnut.price;
         totalOfPro.className="items"

         middleDiv.append(sixthDiv);
         sixthDiv.append(proName);
         sixthDiv.append(priceOfPro);
         sixthDiv.append(multiply);
         sixthDiv.append(quantity);
         sixthDiv.append(equal);
        sixthDiv.append(totalOfPro);

    }
    if(walnut.count>1){
        document.getElementById("walnut-quan").textContent=walnut.count;
        document.getElementById("walnut-total").textContent=walnut.count*walnut.price;
        total=walnut.price;
        totalSpan.textContent=total;
    }
})

//

addToCartClass[6].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();
    jagdaru.count++
    countItems++;
    $(removeSingleItemClass[6]).hide();
    $(showHereClass[6]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(jagdaru.count===1){
         let seventhDiv=document.createElement("div");
         seventhDiv.id="seventh-div";
         seventhDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=jagdaru.name;
         proName.textContent="JAGDARU";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="jagdaru-price";
         priceOfPro.textContent=jagdaru.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="p-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="jagdaru-quan";
         quantity.textContent=jagdaru.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="jagdaru-equal";
         equal.textContent="=";
         equal.className="items";

         total=total+jagdaru.price;
        totalSpan.textContent=total;

         let totalOfPro=document.createElement("div");
         totalOfPro.id="jagdaru-total";
         totalOfPro.textContent=jagdaru.count*jagdaru.price;
         totalOfPro.className="items"

         middleDiv.append(seventhDiv);
         seventhDiv.append(proName);
         seventhDiv.append(priceOfPro);
         seventhDiv.append(multiply);
         seventhDiv.append(quantity);
         seventhDiv.append(equal);
        seventhDiv.append(totalOfPro);

    }
    if(jagdaru.count>1){
        document.getElementById("jagdaru-quan").textContent=jagdaru.count;
        document.getElementById("jagdaru-total").textContent=jagdaru.count*jagdaru.price;
        total=total+jagdaru.price;
        totalSpan.textContent=total;
    }
})

//

addToCartClass[7].addEventListener("click",()=>{
    $("#cart-empty").hide();
    $("#lower").show();

    anjeer.count++
    countItems++;
    $(removeSingleItemClass[7]).hide();
    $(showHereClass[7]).show();
    console.log("in addb if");
    // middleDiv.textContent="ello"
    if(anjeer.count===1){
         let eighthDiv=document.createElement("div");
         eighthDiv.id="eighth-div";
         eighthDiv.className="inner-div";
     
         let proName=document.createElement("div");
         proName.id=anjeer.name;
         proName.textContent="ANJEER";
     
         let priceOfPro=document.createElement("div");
         priceOfPro.id="anjeer-price";
         priceOfPro.textContent=anjeer.price;
         priceOfPro.className="items"
     
         let multiply=document.createElement("div");
         multiply.id="p-multiply-sign";
         multiply.textContent="X";
         multiply.className="items"
        
         let quantity=document.createElement("div");
         quantity.id="anjeer-quan";
         quantity.textContent=anjeer.count;
         quantity.className="items"

         let equal=document.createElement("div");
         equal.id="anjeer-equal";
         equal.textContent="=";
         equal.className="items";

         total=total+anjeer.price;
        totalSpan.textContent=total;

         let totalOfPro=document.createElement("div");
         totalOfPro.id="anjeer-total";
         totalOfPro.textContent=anjeer.count*anjeer.price;
         totalOfPro.className="items"

         middleDiv.append(eighthDiv);
         eighthDiv.append(proName);
         eighthDiv.append(priceOfPro);
         eighthDiv.append(multiply);
         eighthDiv.append(quantity);
         eighthDiv.append(equal);
        eighthDiv.append(totalOfPro);

    }
    if(anjeer.count>1){
        document.getElementById("anjeer-quan").textContent=anjeer.count;
        document.getElementById("anjeer-total").textContent=anjeer.count*anjeer.price;
        total=total+anjeer.price;
        totalSpan.textContent=total;
    }
})


emptyCart.addEventListener("click",()=>{
    $("#first-div").remove();
    $("#second-div").remove();    
    $("#third-div").remove();    
    $("#fourth-div").remove();    
    $("#fifth-div").remove();
    $("#sixth-div").remove();    
    $("#seventh-div").remove();
    $("#eighth-div").remove();
    badam.count=0;
    kaju.count=0;
    pista.count=0;
    bkish.count=0;
    gkish.count=0;
    walnut.count=0;
    jagdaru.count=0;
    anjeer.count=0;
    total=0;
    totalSpan.textContent=total;

})

removeItems[0].addEventListener("click",()=>{
    badam.count--
    $(removeSingleItemClass[0]).show();
    $(showHereClass[0]).hide();
    if(badam.count>=1){
        document.getElementById("b-quan").textContent=badam.count;
        document.getElementById("b-total").textContent=badam.count*badam.price;
        total=total-badam.price;
        totalSpan.textContent=total;
    }
    if(badam.count===0){
        console.log("in 2nd if")
        $("#first-div").remove();
        badam.count=0;
        // total=0;
        total=total-badam.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(badam.count<0){
        badam.count=0;
            // total=total-badam.price;
        // totalSpan.textContent=0;
    }
})

//
removeItems[1].addEventListener("click",()=>{
    kaju.count--
    $(removeSingleItemClass[1]).show();
    $(showHereClass[1]).hide();
    if(kaju.count>=1){
        document.getElementById("k-quan").textContent=kaju.count;
        document.getElementById("k-total").textContent=kaju.count*kaju.price;
        total=total-kaju.price;
        totalSpan.textContent=total;
    }
    if(kaju.count===0){
        // console.log("in 2nd if")
        $("#second-div").remove();
        kaju.count=0;
        // total=0;
        total=total-kaju.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(kaju.count<0){
        kaju.count=0;
            // total=total-kaju.price;
        // totalSpan.textContent=0;
    }
})
//

//
removeItems[2].addEventListener("click",()=>{
    pista.count--
    $(removeSingleItemClass[2]).show();
    $(showHereClass[2]).hide();
    if(pista.count>=1){
        document.getElementById("p-quan").textContent=pista.count;
        document.getElementById("p-total").textContent=pista.count*pista.price;
        total=total-pista.price;
        totalSpan.textContent=total;
    }
    if(pista.count===0){
        console.log("in 2nd if")
        $("#third-div").remove();
        pista.count=0;
        // total=0;
            total=total-pista.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(pista.count<0){
        pista.count=0;
            // total=total-pista.price;
        // totalSpan.textContent=0;
    }
})
//

//
removeItems[3].addEventListener("click",()=>{
    gkish.count--
    $(removeSingleItemClass[3]).show();
    $(showHereClass[3]).hide();
    if(gkish.count>=1){
        document.getElementById("gk-quan").textContent=gkish.count;
        document.getElementById("gk-total").textContent=gkish.count*gkish.price;
        total=total-gkish.price;
        totalSpan.textContent=total;
    }
    if(gkish.count===0){
        console.log("in 2nd if")
        $("#fourth-div").remove();
        gkish.count=0;
        // total=0;
            total=total-gkish.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(gkish.count<0){
        gkish.count=0;
            // total=total-gkish.price;
        // totalSpan.textContent=0;
    }
})
//

//
removeItems[4].addEventListener("click",()=>{
    bkish.count--
    $(removeSingleItemClass[4]).show();
    $(showHereClass[4]).hide();
    if(bkish.count>=1){
        document.getElementById("bk-quan").textContent=bkish.count;
        document.getElementById("bk-total").textContent=bkish.count*bkish.price;
        total=total-bkish.price;
        totalSpan.textContent=total;
    }
    if(bkish.count===0){
        console.log("in 2nd if")
        $("#fifth-div").remove();
        bkish.count=0;
        // total=0;
            total=total-bkish.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(bkish.count<0){
        bkish.count=0;
            // total=total-bkish.price;
        // totalSpan.textContent=0;
    }
})
//

//
removeItems[5].addEventListener("click",()=>{
    walnut.count--
    $(removeSingleItemClass[5]).show();
    $(showHereClass[5]).hide();
    if(walnut.count>=1){
        document.getElementById("walnut-quan").textContent=walnut.count;
        document.getElementById("walnut-total").textContent=walnut.count*walnut.price;
        total=total-walnut.price;
        totalSpan.textContent=total;
    }
    if(walnut.count===0){
        console.log("in 2nd if")
        $("#sixth-div").remove();
        walnut.count=0;
        // total=0;
            total=total-walnut.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(walnut.count<0){
        walnut.count=0;
            // total=total-walnut.price;
        // totalSpan.textContent=0;
    }
})
//

//
removeItems[6].addEventListener("click",()=>{
    jagdaru.count--
    $(removeSingleItemClass[6]).show();
    $(showHereClass[6]).hide();
    if(jagdaru.count>=1){
        document.getElementById("jagdaru-quan").textContent=jagdaru.count;
        document.getElementById("jagdaru-total").textContent=jagdaru.count*jagdaru.price;
        total=total-jagdaru.price;
        totalSpan.textContent=total;
    }
    if(jagdaru.count===0){
        console.log("in 2nd if")
        $("#seventh-div").remove();
        jagdaru.count=0;
        // total=0;
            total=total-jagdaru.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(jagdaru.count<0){
        jagdaru.count=0;
            // total=total-jagdaru.price;
        // totalSpan.textContent=0;
    }
})
//

//
removeItems[7].addEventListener("click",()=>{
    anjeer.count--
    $(removeSingleItemClass[7]).show();
    $(showHereClass[7]).hide();
    if(anjeer.count>=1){
        document.getElementById("anjeer-quan").textContent=anjeer.count;
        document.getElementById("anjeer-total").textContent=anjeer.count*anjeer.price;
        total=total-anjeer.price;
        totalSpan.textContent=total;
    }
    if(anjeer.count===0){
        console.log("in 2nd if")
        $("#eighth-div").remove();
        anjeer.count=0;
        // total=0;
            total=total-anjeer.price;
        console.log(total);
        totalSpan.textContent=total;

    }
    if(anjeer.count<0){
        anjeer.count=0;
            // total=total-anjeer.price;
        // totalSpan.textContent=0;
    }
})
//
// for(let i=0;i<8;i++){
// addToCartClass[i].addEventListener("click",()=>{
//    $(showHereClass[i]).show();
   
// kaju
// }