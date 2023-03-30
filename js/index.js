fetch('../assets/BankDetails.json').then(res => res.json()).then(BankDetails => {

    document.getElementById("btn-atm").addEventListener("click", () => {
        document.getElementById("cdm-container").style.display = "none";
        document.getElementById("atm-container").style.display = "block";
    });
    
    document.getElementById("btn-cdm").addEventListener("click", () => {
        document.getElementById("cdm-container").style.display = "block";
        document.getElementById("atm-container").style.display = "none";
    });
    
    document.getElementById("btn-atm-submit").addEventListener("click", () => {
        function atmWithDraw(cardNo, pin, amount) {
            let flag = 0;
            for(const element of BankDetails) {
                if( ( parseInt(element.Card_No) === cardNo ) && ( parseInt(element.pin) === pin ) ) {
                    flag = 1;
                    if(amount <= element.Account_Balance) {
                        element.Account_Balance -= amount;
                        alert(`Amount Withdrawn : `+amount+`\nBalance : `+element.Account_Balance);
                    }
                    else {
                        alert(`Insufficiant Balance`);
                    }
                }
            }
    
            if(flag === 0) {
                alert(`Card Number or PIN Wrong`);
            }
        }
        let cardNo = parseInt(document.getElementById("atm-card-no").value);
        let pin = parseInt(document.getElementById("atm-pin").value);
        let amount = parseInt(document.getElementById("atm-amount").value);
    
        atmWithDraw(cardNo, pin, amount);
    
    });
    
    document.getElementById("btn-cdm-submit").addEventListener("click", () => {
        function cdmDeposit(cardNo, pin, amount) {
            let flag = 0;
            for(const element of BankDetails) {
                if( ( parseInt(element.Card_No) === cardNo ) && ( parseInt(element.pin) === pin ) ) {
                    flag = 1;
                    element.Account_Balance += parseInt(amount);
                    alert(`Amount Deposited : `+amount+`\nBalance : `+element.Account_Balance);
                }
            }
    
            if(flag === 0) {
                alert(`Card Number or PIN Wrong`);
            }
        }
        let cardNo = parseInt(document.getElementById("cdm-card-no").value);
        let pin = parseInt(document.getElementById("cdm-pin").value);
        let amount = parseInt(document.getElementById("cdm-amount").value);
    
        cdmDeposit(cardNo, pin, amount);
    });
    
});