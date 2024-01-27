var inputAccNum = document.getElementById('accnum');
var tempAcc = '';
var accNum = '';
var currentBalance = 2000;

// set pair of account number and pin number
var accDic = {'1234567890123456': '1234', '1234567887654321': '5678'};

// show the page of entering account number
document.getElementById("enteraccnum").style.display = ""
document.getElementById("enterpin").style.display = "none"
document.getElementById("home").style.display = "none"
document.getElementById("accinfo").style.display = "none"
document.getElementById("withdraw").style.display = "none"
document.getElementById("checkwithdraw").style.display = "none"
document.getElementById("withdrawfinished").style.display = "none"
document.getElementById("deposit").style.display = "none"
document.getElementById("checkdeposit").style.display = "none"
document.getElementById("depositcomplete").style.display = "none"
document.getElementById("depositfinished").style.display = "none"
document.getElementById("transfer").style.display = "none"
document.getElementById("checktransfer").style.display = "none"
document.getElementById("transferfinished").style.display = "none"

// insert account number
function insertAccNum(text) {
    tempAcc += text;
    inputAccNum.value = tempAcc;    
}

// enter account number when the user finishes inserting the account number
function enterAccNum() {
    accNum = tempAcc;
    // if the account number exists, show the page of entering pin number and add account information (initial information of account)
    if (Object.keys(accDic).includes(accNum)) {
        document.getElementById("enteraccnum").style.display = "none"
        document.getElementById("enterpin").style.display = ""
        document.getElementById("home").style.display = "none"
        document.getElementById("accinfo").style.display = "none"
        document.getElementById("withdraw").style.display = "none"
        document.getElementById("checkwithdraw").style.display = "none"
        document.getElementById("withdrawfinished").style.display = "none"
        document.getElementById("deposit").style.display = "none"
        document.getElementById("checkdeposit").style.display = "none"
        document.getElementById("depositcomplete").style.display = "none"
        document.getElementById("depositfinished").style.display = "none"
        document.getElementById("transfer").style.display = "none"
        document.getElementById("checktransfer").style.display = "none"
        document.getElementById("transferfinished").style.display = "none"
        addAccInfo(0, 0, currentBalance);
        tempAcc = '';
        inputAccNum.value = '';
    }
    // if the account number does not exist, show the alert
    else {
        alert("That account number does not exist!");
        tempAcc = '';
        inputAccNum.value = '';
    }
}

// delete the last number of account number
function delAccNum() {
    tempAcc = tempAcc.slice(0, -1);
    inputAccNum.value = tempAcc;
}

var inputPIN = document.getElementById('pinnum');
var tempPIN = '';
var PINNum = '';
var leftPINCnt = 5;

// insert pin number
function insertPinNum(text) {
    tempPIN += text;
    inputPIN.value = tempPIN;    
}

// enter pin number when the user finishes inserting the pin number
function enterPinNum() {
    PINNum = tempPIN;
    // if the pin number is correct, show the home page
    if (PINNum == accDic[accNum]) {
        document.getElementById("enteraccnum").style.display = "none"
        document.getElementById("enterpin").style.display = "none"
        document.getElementById("home").style.display = ""
        document.getElementById("accinfo").style.display = "none"
        document.getElementById("withdraw").style.display = "none"
        document.getElementById("checkwithdraw").style.display = "none"
        document.getElementById("withdrawfinished").style.display = "none"
        document.getElementById("deposit").style.display = "none"
        document.getElementById("checkdeposit").style.display = "none"
        document.getElementById("depositcomplete").style.display = "none"
        document.getElementById("depositfinished").style.display = "none"
        document.getElementById("transfer").style.display = "none"
        document.getElementById("checktransfer").style.display = "none"
        document.getElementById("transferfinished").style.display = "none"
    }
    // if the pin number is incorrect, decrease the number of left attempts and show the alert
    else {
        leftPINCnt -= 1;
        alert("incorrect PIN. You have " + leftPINCnt + " attempts left");
        tempPIN = '';
        inputPIN.value = '';
    }
}

// delete the last number of pin number
function delPinNum() {
    tempPIN = tempPIN.slice(0, -1);
    inputPIN.value = tempPIN;
}

// change background color of menu when the mouse is over and out
document.getElementById("infobtn").addEventListener('mouseover', (event) => {
    document.getElementById("infobtn").style.backgroundColor = "skyblue"; 
});
document.getElementById("infobtn").addEventListener('mouseout', (event) => {
    document.getElementById("infobtn").style.backgroundColor = "#DDFEFD";
});
document.getElementById("withdrawbtn").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtn").style.backgroundColor = "skyblue"; 
});
document.getElementById("withdrawbtn").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtn").style.backgroundColor = "#DDFEFD";
});
document.getElementById("depositbtn").addEventListener('mouseover', (event) => {
    document.getElementById("depositbtn").style.backgroundColor = "skyblue"; 
});
document.getElementById("depositbtn").addEventListener('mouseout', (event) => {
    document.getElementById("depositbtn").style.backgroundColor = "#DDFEFD";
});
document.getElementById("transferbtn").addEventListener('mouseover', (event) => {
    document.getElementById("transferbtn").style.backgroundColor = "skyblue"; 
});
document.getElementById("transferbtn").addEventListener('mouseout', (event) => {
    document.getElementById("transferbtn").style.backgroundColor = "#DDFEFD";
});

document.getElementById("accinfoback").addEventListener('mouseover', (event) => {
    document.getElementById("accinfoback").style.backgroundColor = "rgb(187, 6, 6)"; 
})
document.getElementById("accinfoback").addEventListener('mouseout', (event) => {
    document.getElementById("accinfoback").style.backgroundColor = "red"; 
})

// add account information when withdraw, deposit, or transfer is done
function addAccInfo(fundsOut, fundsIn, balance) {
    document.getElementById("currentbalance").innerHTML = "Current Balance: $" + currentBalance;
    const table = document.getElementById('accinfotable');
  
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);
    const newCell4 = newRow.insertCell(3);
  
    newCell1.innerText = Date();
    newCell2.innerText = fundsOut;
    newCell3.innerText = fundsIn;
    newCell4.innerText = balance;
}

// change the page to account information page
function accInfo() {
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = ""
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the page to withdraw page and initialize the withdraw amount, input value
function withdraw() {
    withDrawAmount = 0;
    inputWithDraw.value = '';
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = ""
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the page to deposit page and initialize the deposit amount, input value
function deposit() {
    tempDepositAmount = '';
    DepositAmount = '';
    inputDeposit.value = '';
    document.getElementById("depositdotbtn").style.backgroundColor = "rgba(239, 235, 235, 0.929)";
    document.getElementById("depositdotbtn").disabled = false;
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = ""
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the page to transfer page and initialize the transfer amount, input value
function transfer() {
    tempTransferAmount = '';
    TransferAmount = '';
    inputTransferAmount.value = '';
    document.getElementById("transferdotbtn").style.backgroundColor = "rgba(239, 235, 235, 0.929)";
    document.getElementById("transferdotbtn").disabled = false;
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = ""
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the page to selecting menu page
function gohome() {
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = ""
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

var inputDeposit = document.getElementById('inputdeposit');
var tempDepositAmount = '';
var DepositAmount = '';

// insert deposit amount
// if the user inserts '.', disable the button -> show decimal point only once
function insertDepositAmount(text) {
    tempDepositAmount += text;
    inputDeposit.value = tempDepositAmount;    
    if (text=='.') {
        document.getElementById("depositdotbtn").style.backgroundColor = "grey";
        document.getElementById("depositdotbtn").disabled = true;
    }
}

// enter deposit amount when the user finishes inserting the deposit amount
// add account information
function enterDepositAmount() {
    DepositAmount = tempDepositAmount;
    document.getElementById("showdepositamount").innerHTML = "$" + DepositAmount + "?";
    currentBalance += parseFloat(DepositAmount);
    addAccInfo(0, DepositAmount, currentBalance);
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = ""
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// delete the last number of deposit amount
function delDepositAmount() {
    tempDepositAmount = tempDepositAmount.slice(0, -1);
    inputDeposit.value = tempDepositAmount;
}

// change background color of buttons when the mouse is over and out
document.getElementById("deposityesbtn").addEventListener('mouseover', (event) => {
    document.getElementById("deposityesbtn").style.backgroundColor = "#245a4e"; 
});
document.getElementById("deposityesbtn").addEventListener('mouseout', (event) => {
    document.getElementById("deposityesbtn").style.backgroundColor = "#399480"; 
});
document.getElementById("depositnobtn").addEventListener('mouseover', (event) => {
    document.getElementById("depositnobtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("depositnobtn").addEventListener('mouseout', (event) => {
    document.getElementById("depositnobtn").style.backgroundColor = "red"; 
});
document.getElementById("depositokbtn").addEventListener('mouseover', (event) => {
    document.getElementById("depositokbtn").style.backgroundColor = "skyblue"; 
});
document.getElementById("depositokbtn").addEventListener('mouseout', (event) => {
    document.getElementById("depositokbtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("deposithomebtn").addEventListener('mouseover', (event) => {
    document.getElementById("deposithomebtn").style.backgroundColor = "rgb(0, 0, 12)"; 
});
document.getElementById("deposithomebtn").addEventListener('mouseout', (event) => {
    document.getElementById("deposithomebtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("depositagainbtn").addEventListener('mouseover', (event) => {
    document.getElementById("depositagainbtn").style.backgroundColor = "rgb(0, 0, 12)"; 
});
document.getElementById("depositagainbtn").addEventListener('mouseout', (event) => {
    document.getElementById("depositagainbtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("depositreturnbtn").addEventListener('mouseover', (event) => {
    document.getElementById("depositreturnbtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("depositreturnbtn").addEventListener('mouseout', (event) => {
    document.getElementById("depositreturnbtn").style.backgroundColor = "red"; 
});

// change the page to final checking deposit amount page
function depositConfirm() {
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = ""
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the page to showing deposit finished page
function depositFinish() {
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = ""
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

var withDrawAmount = 0;
var inputWithDraw = document.getElementById('inputwithdraw');

// change background color of buttons when the mouse is over and out
// change the input value of withdraw amount when the user clicks the up or down arrow
// insert the withdraw amount
document.getElementById("up100").addEventListener('mouseover', (event) => {
    document.getElementById("up100").src = "assets/uparrow100copyhover.png";
})
document.getElementById("up100").addEventListener('mouseout', (event) => {
    document.getElementById("up100").src = "assets/uparrow100copy.png";
})
document.getElementById("up100").addEventListener('click', (event) => {
    withDrawAmount += 100;
    inputWithDraw.value = withDrawAmount;
})

document.getElementById("up20").addEventListener('mouseover', (event) => {
    document.getElementById("up20").src = "assets/uparrow20copyhover.png";
})
document.getElementById("up20").addEventListener('mouseout', (event) => {
    document.getElementById("up20").src = "assets/uparrow20copy.png";
})
document.getElementById("up20").addEventListener('click', (event) => {
    withDrawAmount += 20;
    inputWithDraw.value = withDrawAmount;
})

document.getElementById("down100").addEventListener('mouseover', (event) => {
    document.getElementById("down100").src = "assets/downarrow100copyhover.png";
})
document.getElementById("down100").addEventListener('mouseout', (event) => {
    document.getElementById("down100").src = "assets/downarrow100copy.png";
})
document.getElementById("down100").addEventListener('click', (event) => {
    withDrawAmount -= 100;
    inputWithDraw.value = withDrawAmount;
})

document.getElementById("down20").addEventListener('mouseover', (event) => {
    document.getElementById("down20").src = "assets/downarrow20copyhover.png";
})
document.getElementById("down20").addEventListener('mouseout', (event) => {
    document.getElementById("down20").src = "assets/downarrow20copy.png";
})
document.getElementById("down20").addEventListener('click', (event) => {
    withDrawAmount -= 20;
    inputWithDraw.value = withDrawAmount;
})

document.getElementById("withdrawbtn20").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtn20").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtn20").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtn20").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtn20").addEventListener('click', (event) => {
    withDrawAmount = 20;
    enterWithdrawAmount();
})

document.getElementById("withdrawbtn40").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtn40").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtn40").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtn40").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtn40").addEventListener('click', (event) => {
    withDrawAmount = 40;
    enterWithdrawAmount();
})

document.getElementById("withdrawbtn60").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtn60").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtn60").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtn60").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtn60").addEventListener('click', (event) => {
    withDrawAmount = 60;
    enterWithdrawAmount();
})

document.getElementById("withdrawbtn80").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtn80").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtn80").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtn80").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtn80").addEventListener('click', (event) => {
    withDrawAmount = 80;
    enterWithdrawAmount();
})

document.getElementById("withdrawbtnr100").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtnr100").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtnr100").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtnr100").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtnr100").addEventListener('click', (event) => {
    withDrawAmount = 100;
    enterWithdrawAmount();
})

document.getElementById("withdrawbtnr200").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtnr200").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtnr200").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtnr200").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtnr200").addEventListener('click', (event) => {
    withDrawAmount = 200;
    enterWithdrawAmount();
})

document.getElementById("withdrawbtnr300").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtnr300").style.backgroundColor = 'grey';
})
document.getElementById("withdrawbtnr300").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtnr300").style.backgroundColor = 'navy';
})
document.getElementById("withdrawbtnr300").addEventListener('click', (event) => {
    withDrawAmount = 300;
    enterWithdrawAmount();
})

// change background color of buttons when the mouse is over and out
// when the user clicks the back button, change the page to selecting menu page
document.getElementById("withdrawbtnback").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawbtnback").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("withdrawbtnback").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawbtnback").style.backgroundColor = "red"; 
});
document.getElementById("withdrawbtnback").addEventListener('click', (event) => {
    gohome();
})

// change background color of buttons when the mouse is over and out
document.getElementById("withdrawyesbtn").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawyesbtn").style.backgroundColor = "#245a4e"; 
});
document.getElementById("withdrawyesbtn").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawyesbtn").style.backgroundColor = "#399480"; 
});
document.getElementById("withdrawnobtn").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawnobtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("withdrawnobtn").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawnobtn").style.backgroundColor = "red"; 
});
document.getElementById("withdrawhomebtn").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawhomebtn").style.backgroundColor = "rgb(0, 0, 12)"; 
});
document.getElementById("withdrawhomebtn").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawhomebtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("withdrawagainbtn").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawagainbtn").style.backgroundColor = "rgb(0, 0, 12)"; 
});
document.getElementById("withdrawagainbtn").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawagainbtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("withdrawreturnbtn").addEventListener('mouseover', (event) => {
    document.getElementById("withdrawreturnbtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("withdrawreturnbtn").addEventListener('mouseout', (event) => {
    document.getElementById("withdrawreturnbtn").style.backgroundColor = "red"; 
});

// enter withdraw amount when the user finishes inserting the withdraw amount
function enterWithdrawAmount() {
    // if the withdraw amount is larger than the current balance, show the alert
    if (withDrawAmount > currentBalance) {
        alert("You do not have enough funds to withdraw that amount!");
        withDrawAmount = 0;
        document.getElementById("inputwithdraw").value = '';
    }
    // if the withdraw amount is smaller than the current balance, show the final checking withdraw amount page
    else {
        document.getElementById("showwithdrawamount").innerHTML = "$" + withDrawAmount + "?";
        document.getElementById("enteraccnum").style.display = "none"
        document.getElementById("enterpin").style.display = "none"
        document.getElementById("home").style.display = "none"
        document.getElementById("accinfo").style.display = "none"
        document.getElementById("withdraw").style.display = "none"
        document.getElementById("checkwithdraw").style.display = ""
        document.getElementById("withdrawfinished").style.display = "none"
        document.getElementById("deposit").style.display = "none"
        document.getElementById("checkdeposit").style.display = "none"
        document.getElementById("depositcomplete").style.display = "none"
        document.getElementById("depositfinished").style.display = "none"
        document.getElementById("transfer").style.display = "none"
        document.getElementById("checktransfer").style.display = "none"
        document.getElementById("transferfinished").style.display = "none"
    }
}

// change the page to showing withdraw complete page
// add account information
function withdrawConfirm() {
    currentBalance -= withDrawAmount;
    addAccInfo(withDrawAmount, 0, currentBalance);
    document.getElementById("inputwithdraw").value = '';
    withDrawAmount = 0;
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = ""
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the toggle value to account number
document.getElementById("dropdown-item1").addEventListener('click', (event) => {
    document.getElementById("dropdowntoggle1").innerHTML = 1234567890123456;
})

document.getElementById("dropdown-item2").addEventListener('click', (event) => {
    document.getElementById("dropdowntoggle2").innerHTML = 1234567887654321;
})

var inputTransferAmount = document.getElementById('inputtransferamount');
var tempTransferAmount = '';
var TransferAmount = '';

// insert transfer amount
function insertTransferAmount(text) {
    tempTransferAmount += text;
    inputTransferAmount.value = tempTransferAmount;    
    if (text=='.') {
        document.getElementById("transferdotbtn").style.backgroundColor = "grey";
        document.getElementById("transferdotbtn").disabled = true;
    }
}

// enter transfer amount when the user finishes inserting the transfer amount
function enterTransferAmount() {
    // if the transfer amount is larger than the current balance, show the alert
    if (tempTransferAmount > currentBalance) {
        alert("You do not have enough funds to transfer that amount!");
        tempTransferAmount = '';
        inputTransferAmount.value = '';
    }
    // if the transfer amount is smaller than the current balance, show the checking transfer amount page
    else {
        TransferAmount = tempTransferAmount;
        document.getElementById("showtransferamount").innerHTML = "$" + TransferAmount;
        document.getElementById("showtransferfrom").innerHTML = "From " + document.getElementById("dropdowntoggle1").innerHTML;
        document.getElementById("showtransferto").innerHTML = "To " + document.getElementById("dropdowntoggle2").innerHTML;
        document.getElementById("enteraccnum").style.display = "none"
        document.getElementById("enterpin").style.display = "none"
        document.getElementById("home").style.display = "none"
        document.getElementById("accinfo").style.display = "none"
        document.getElementById("withdraw").style.display = "none"
        document.getElementById("checkwithdraw").style.display = "none"
        document.getElementById("withdrawfinished").style.display = "none"
        document.getElementById("deposit").style.display = "none"
        document.getElementById("checkdeposit").style.display = "none"
        document.getElementById("depositcomplete").style.display = "none"
        document.getElementById("depositfinished").style.display = "none"
        document.getElementById("transfer").style.display = "none"
        document.getElementById("checktransfer").style.display = ""
        document.getElementById("transferfinished").style.display = "none"
    }
}

// delete the last number of transfer amount
function delTransferAmount() {
    tempTransferAmount = tempTransferAmount.slice(0, -1);
    inputTransferAmount.value = tempTransferAmount;
}

// change background color of buttons when the mouse is over and out
document.getElementById("transferyesbtn").addEventListener('mouseover', (event) => {
    document.getElementById("transferyesbtn").style.backgroundColor = "#245a4e"; 
});
document.getElementById("transferyesbtn").addEventListener('mouseout', (event) => {
    document.getElementById("transferyesbtn").style.backgroundColor = "#399480"; 
});
document.getElementById("transfernobtn").addEventListener('mouseover', (event) => {
    document.getElementById("transfernobtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("transfernobtn").addEventListener('mouseout', (event) => {
    document.getElementById("transfernobtn").style.backgroundColor = "red"; 
});
document.getElementById("transferhomebtn").addEventListener('mouseover', (event) => {
    document.getElementById("transferhomebtn").style.backgroundColor = "rgb(0, 0, 12)"; 
});
document.getElementById("transferhomebtn").addEventListener('mouseout', (event) => {
    document.getElementById("transferhomebtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("transferagainbtn").addEventListener('mouseover', (event) => {
    document.getElementById("transferagainbtn").style.backgroundColor = "rgb(0, 0, 12)"; 
});
document.getElementById("transferagainbtn").addEventListener('mouseout', (event) => {
    document.getElementById("transferagainbtn").style.backgroundColor = "rgb(0, 0, 128)"; 
});
document.getElementById("transferreturnbtn").addEventListener('mouseover', (event) => {
    document.getElementById("transferreturnbtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("transferreturnbtn").addEventListener('mouseout', (event) => {
    document.getElementById("transferreturnbtn").style.backgroundColor = "red"; 
});

// change the page to showing transfer complete page
// add account information
function transferConfirm() {
    currentBalance -= parseFloat(TransferAmount);
    addAccInfo(TransferAmount, 0, currentBalance);
    tempTransferAmount = '';
    TransferAmount = '';
    inputTransferAmount.value = '';
    document.getElementById("enteraccnum").style.display = "none"
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = ""
}

// change the page to entering account number page
function returnCard() {
    document.getElementById("enteraccnum").style.display = ""
    document.getElementById("enterpin").style.display = "none"
    document.getElementById("home").style.display = "none"
    document.getElementById("accinfo").style.display = "none"
    document.getElementById("withdraw").style.display = "none"
    document.getElementById("checkwithdraw").style.display = "none"
    document.getElementById("withdrawfinished").style.display = "none"
    document.getElementById("deposit").style.display = "none"
    document.getElementById("checkdeposit").style.display = "none"
    document.getElementById("depositcomplete").style.display = "none"
    document.getElementById("depositfinished").style.display = "none"
    document.getElementById("transfer").style.display = "none"
    document.getElementById("checktransfer").style.display = "none"
    document.getElementById("transferfinished").style.display = "none"
}

// change the background color of buttons when the mouse is over and out
document.getElementById("homereturnbtn").addEventListener('mouseover', (event) => {
    document.getElementById("homereturnbtn").style.backgroundColor = "rgb(43, 4, 4)"; 
});
document.getElementById("homereturnbtn").addEventListener('mouseout', (event) => {
    document.getElementById("homereturnbtn").style.backgroundColor = "red"; 
});

