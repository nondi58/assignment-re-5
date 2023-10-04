let totalPrice = 0;
const product = [
    {
        id: 1,
        price: 100,
        name: "Home-maker",
        img: "https://i.ibb.co/YB3r48S/prod1.png"
    },
    {
        id: 2,
        price: 70,
        name: "sports",
        img: "https://i.ibb.co/YB3r48S/prod1.png"

    },
    {
        id: 3,
        price: 90,
        name: "capsule",
        img: "https://i.ibb.co/YB3r48S/prod1.png"

    }
];

function testFunction(name, price) {
    console.log(name, price);
    setTotal(price);
}
const applyButton= document.querySelector('#applyButton');
const makePurchase= document.querySelector("#makeButton");
applyButton.setAttribute("disabled", true);
makePurchase.setAttribute('disabled', true);


const trialDiv = document.querySelector("#trial");
const total= document.querySelector('#total');
product.forEach(element => {
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl" onclick="testFunction('${element.name}','${element.price}')">
            <figure><img class="px-5 pt-3 w-9/12" style="background-color: rgba(17, 17, 17, 0.05); width: 302px;height: 200px;
                            "src="${element.img}" alt="Shoes" /></figure>
            <div class="card-body ">
             
              <h2 class="card-title px-12 ">${element.name}</h2>
              <p class="px-12 ">${element.price} TK</p>

            </div>
          </div>
    `
    trialDiv.appendChild(div);
})




function getAccesPrice() {
    caculateAreaTotal('Home-maker');
    const homePrice = getInputValue('price');
    const totalPrice = getInputValue('total-price')
    const total = totalPrice + homePrice;
    totalPrice.innerText = total;
    setTotal(totalPrice);


}
function caculateAreaTotal(shapeType) {
    console.log(shapeType);
    const calculationEntry = document.getElementById('calculaton-entry');
    const p = document.createElement('p');
    p.innerHTML = `${shapeType}`
    calculationEntry.appendChild(p);
}
function setTotal(price) {
    const totalAmount = document.getElementById('total-price');
    totalPrice += parseInt(price) ;
    totalAmount.innerHTML = `${totalPrice}`;
    total.innerText= `${totalPrice}`;
    if(totalPrice>=200){
        applyButton.removeAttribute('disabled');
        makePurchase.removeAttribute('disabled');
    }

}

function getInputValue(inputVal) {

    const inputField = document.getElementById(inputVal);
    const inputFieldSting = inputField.innerText;
    const val = parseFloat(inputFieldSting);
    return val;

}
document.querySelector("#applyButton").addEventListener('click', function(){
    const cupon= document.querySelector("#inputCupon");
    if(cupon.value!=='SELL200'){
        alert("Please use valid cupon");
        return;
    }
    else{
        const discount= document.querySelector("#discountPrice");
        discount.innerText=`${totalPrice*0.2}`

        total.innerText=`${totalPrice-totalPrice*0.2}`
    }
})

