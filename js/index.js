const BankDetails = [
    {
        "Account_No" : 50001,
        "Card_No" : 10005,
        "pin" : 123,
        "Account_Balance" : 15000
    },
    {
        "Account_No" : 50002,
        "Card_No" : 20005,
        "pin" : 123,
        "Account_Balance" : 30000
    },
    {
        "Account_No" : 50003,
        "Card_No" : 30005,
        "pin" : 123,
        "Account_Balance" : 5000
    },
    {
        "Account_No" : 50004,
        "Card_No" : 40005,
        "pin" : 123,
        "Account_Balance" : 25000
    },
    {
        "Account_No" : 50005,
        "Card_No" : 50005,
        "pin" : 123,
        "Account_Balance" : 45000
    },
];


document.getElementById("btn-atm").addEventListener("click", () => {
    document.getElementById("cdm-container").style.display = "none";
    document.getElementById("atm-container").style.display = "block";
});

document.getElementById("btn-cdm").addEventListener("click", () => {
    document.getElementById("cdm-container").style.display = "block";
    document.getElementById("atm-container").style.display = "none";
});


document.getElementById("btn-atm-submit").addEventListener("click", () => {
    function atmWithDraw(Card_No, pin, amount) {
        let flag = 0;
        for(let i=0; i<BankDetails.length; i++) {
            if( (BankDetails[i].Card_No == cardNo) && (BankDetails[i].pin == pin) ) {
                flag = 1;
                if(amount <= BankDetails[i].Account_Balance) {
                    BankDetails[i].Account_Balance -= amount;
                    alert("Amount Withdrawn : "+amount+"\nBalance : "+BankDetails[i].Account_Balance);
                }
                else {
                    alert("Insufficiant Balance");
                }
            }
        }

        if(flag == 0) {
            alert("Card Number or PIN Wrong");
        }
    }
    let cardNo = document.getElementById("atm-card-no").value;
    let pin = document.getElementById("atm-pin").value;
    let amount = document.getElementById("atm-amount").value;

    atmWithDraw(cardNo, pin, amount);

});

document.getElementById("btn-cdm-submit").addEventListener("click", () => {
    function cdmDeposit(Card_No, pin, amount) {
        let flag = 0;
        for(let i=0; i<BankDetails.length; i++) {
            if(BankDetails[i].Card_No == cardNo && BankDetails[i].pin == pin) {
                flag = 1;
                BankDetails[i].Account_Balance += parseInt(amount);
                alert("Amount Deposited : "+amount+"\nBalance : "+BankDetails[i].Account_Balance);
            }
        }

        if(flag == 0) {
            alert("Card Number or PIN Wrong");
        }
    }
    let cardNo = document.getElementById("cdm-card-no").value;
    let pin = document.getElementById("cdm-pin").value;
    let amount = document.getElementById("cdm-amount").value;

    cdmDeposit(cardNo, pin, amount);
});