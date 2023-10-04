let totalPrice=0;
const product= [
    {
        id: 1,
        price: 39,
        name:"Home-maker",
        img:"https://i.ibb.co/YB3r48S/prod1.png"
    },
    {
        id: 2,
        price: 50,
        name:"sports",
        img:"https://i.ibb.co/YB3r48S/prod1.png"

    },
    {
        id: 3,
        price: 60,
        name:"capsule",
        img:"https://i.ibb.co/YB3r48S/prod1.png"

    }
];

function testFunction (name, price){
    console.log(name, price);
    setTotal(price);
}

const trialDiv= document.querySelector("#trial");
product.forEach(element=>{
    let div= document.createElement('div');
    div.innerHTML=`
    <section>
      <h1 class=" text-5xl text-left mt-8 font-bold">Kitchenware</h1>
      <div class="flex flex-col lg:flex-row">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-3">
          <!-- first-card -->
          <div id="first-card" onclick="getAccesPrice()" class="card w-96 bg-base-100 shadow-xl">
            <figure><img class="px-5 pt-3 w-9/12" style="background-color: rgba(17, 17, 17, 0.05); width: 302px;height: 200px;
                            " src="${element.img}" alt="Shoes" /></figure>
            <div class="card-body ">
              <div class="rating px-12 py-2">
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
              </div>
              <h2 class="card-title px-12 ">K. Accessories</h2>
              <p  class="px-12 "> <span id="price">39.00</span>TK</p>

            </div>
          </div>
         
          </div>
          

        </div>

        <div class="w-[300px]">
          <h2 class="text-2xl">Have coupon?</h2>
          <div class="form-control">  
            <label class="input-group">
              <input type="text" placeholder="cupon code" class="input input-bordered" />
              <button class="bg-pink-500 border w-{150px} text-white">Apply</button>
            </label>
          </div>
          <div id="calculaton-entry">
          </div>
          <div class="mt-8 text-2xl">
            <h3 >Total price:<span id="total-price">00</span>TK</h3>
            <h3>Discount price:<span>00</span>TK</h3>
            <h3>Total:<span>00</span>TK</h3>
          </div>

        </div>

      </div>


    </section>
    `
    trialDiv.appendChild(div);
})




function getAccesPrice(){
    caculateAreaTotal('Home-maker');
    const homePrice=getInputValue('price');
    const totalPrice=getInputValue('total-price')
    const total=totalPrice+homePrice;
    totalPrice.innerText=total;
    setTotal(totalPrice);


}
function caculateAreaTotal(shapeType){
    console.log(shapeType);
    const calculationEntry=document.getElementById('calculaton-entry');
    const p=document.createElement('p');
    p.innerHTML=`${shapeType}`
    calculationEntry.appendChild(p);
}
function setTotal(price){
    const totalAmount=document.getElementById('total-price');
    totalPrice+=parseInt(price)- parseInt(price)*0.2;
    totalAmount.innerHTML=`${totalPrice}`;

}

function getInputValue(inputVal){
    
    const inputField=document.getElementById(inputVal);
    const inputFieldSting=inputField.innerText;
    const val=parseFloat(inputFieldSting);
    return val;
    
}


