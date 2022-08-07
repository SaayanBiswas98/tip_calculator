let btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let billAmount=document.getElementById('bill_amount').value;
    let tipPercent=document.getElementById('tip_percent').value;
    console.log(billAmount);
    let tipamount=document.getElementById('tip').value=billAmount/tipPercent;
    document.getElementById('total_bill').value=parseFloat(billAmount)+parseFloat(tipamount);

})