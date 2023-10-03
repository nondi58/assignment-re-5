document.getElementById('first-card').addEventListener('click',function(){
    caculateAreaTotal('Home-maker');
})
function caculateAreaTotal(shapeType,area){
    const calculationEntry=document.getElementById('calculaton-entry');
    const p=document.createElement('p');
    p.innerHTML=`${shapeType} `
    calculationEntry.appendChild(p);



}