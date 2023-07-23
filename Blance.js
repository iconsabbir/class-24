
// input fild


function getInput(inputID){
    const inputField = document.getElementById(inputID)
    const inputValue = inputField.value;
    const inputAmount = parseFloat(inputValue);
    
    return inputAmount;
   
}

function pastValue(pastAmount){
    const pastFild = document.getElementById(pastAmount)
    const pastValue = pastFild.innerText;
    const pastNumbers = parseFloat(pastValue);
    
    return pastNumbers;
    
}


function updateMoney(updateId, inputAmount,pastAmount, blance,isAdded){
    const newFild = document.getElementById(updateId)
    const newAmount = inputAmount + pastAmount;
    newFild.innerText = newAmount
    if(isAdded == true){
    const newBlance = inputAmount + blance;
    document.getElementById('Blance-amo').innerText = newBlance

    }else{
        const newBlance = blance - inputAmount;
        document.getElementById('Blance-amo').innerText = newBlance
    }


    
    
}


document.getElementById('deposit-button').addEventListener('click', function(){
    
    const inputDepositAmount = getInput('deposit-fild');
    if(isNaN(inputDepositAmount)){
        alert ('Enter Your Vailed Number')
    }else{
        const pastDepositMoney = pastValue('deposit-amo')
        const presentmoney = pastValue('Blance-amo')
        updateMoney('deposit-amo', inputDepositAmount,pastDepositMoney, presentmoney, true)
    }
    

})

document.getElementById('whitdraw-button').addEventListener('click', function(){
    getInput('whitdraw-fild');
    const inputwithdrawAmount = getInput('whitdraw-fild')
    if(isNaN(inputwithdrawAmount)){
        alert ('Enter Your Vailed Number')
    }else{
        const pastwithdrawMoney = pastValue('whitdraw-amo')
        const presentmoney = pastValue('Blance-amo')
        if(inputwithdrawAmount > presentmoney){
            alert('You Dont Have sufficient blance')
        }else{
            updateMoney('whitdraw-amo', inputwithdrawAmount,pastwithdrawMoney, presentmoney, false)
        }

       
    }
    

})















//withdraw & deposit btn

// const depositBtn = document.querySelector('#deposit-btn');
// const withdrawBtn = document.querySelector('#whitdraw-btn');

// const depositFild = document.querySelector('#deposit-fild');
// const withdrawFild = document.querySelector('#whitdraw-fild');

// const depositAmount = document.getElementById('deposit-amo');
// const blanceAmount = document.getElementById('Blance-amo');
// const withdrawAmount = document.getElementById('whitdraw-amo');

// // console.log(depositBtn, withdrawBtn, depositFild, withdrawFild, depositAmount, blanceAmount, withdrawAmount);

// depositBtn.addEventListener('click',function(){

//     const depositFildValue = depositFild.value;

//     const depositConvertAmount = parseFloat(depositFildValue)

//     const pastDeposit = depositAmount.innerText;

//     const pastDepositConvert = parseFloat(pastDeposit);
//     const pastBlance = blanceAmount.innerText;
//     const pastBlanceConvert = parseFloat(pastBlance);

//     const totalDeposit = depositConvertAmount + pastDepositConvert;
//     const totalBlance = depositConvertAmount + pastBlanceConvert;

//     depositAmount.innerText = totalDeposit;
//     blanceAmount.innerText = totalBlance;

//     depositFild.value = "";


// })
// withdrawBtn.addEventListener('click', function(){

//     const withdrawFildValue = withdrawFild.value;
//     const whitdrawConvertAmo = parseFloat(withdrawFildValue)
//      const prsentWithdraw = withdrawAmount.innerText;
//      const prsentWithdrawConvert = parseFloat(prsentWithdraw);
//      const presentBlance = blanceAmount.innerText;
//      const prsentBlanceConvert = parseFloat(presentBlance);
//      const totalMony = whitdrawConvertAmo + prsentWithdrawConvert;
//      const totalMonyConvert =  prsentBlanceConvert - totalMony ;

//     withdrawAmount.innerText = totalMony;
//     blanceAmount.innerText = totalMonyConvert;


//     withdrawFild.value = "";
// })
