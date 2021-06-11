//login button handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transectionArea = document.getElementById("transection-area")
    transectionArea.style.display = "block";
});

// deposit buton event handeler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    
    // const currentDeopsit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeopsit);
    // const totalDeposit = depositNumber + currentDepositNumber;

    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = currentBalanceNumber + totalDeposit;
    // document.getElementById("currentBalance").innerText = totalBalance;
    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)
    if(depositAmount==""){
        alert("please enter a valid amount");
    }

    document.getElementById("depositAmount").value = null;
});

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + depositNumber;
    document.getElementById(id).innerText = totalAmount;    
}

//withdraw button event handeler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = currentWithdrawNumber + withdrawNumber;
    document.getElementById("currentWithdraw").innerText = totalWithdraw;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - totalWithdraw;
    if(currentBalanceNumber<totalWithdraw){
        alert("টাকা পয়সা নাই 😥")
    }
    document.getElementById("currentBalance").innerText = totalBalance;
    document.getElementById("withdrawAmount").value = "";
})
