const billAmountVar = document.querySelector("#bill-amount");
const cashGivenVar = document.querySelector("#cash-given");
const buttonVar = document.querySelector("#submitbtn");
const noOfNotes = document.querySelectorAll(".changeDis");
const errorPara = document.querySelector("#err");

const billError = "*Enter valid bill amount greater than 0";
const cashError = "*Enter valid cash/amount given which is greater or equal to bill amount";

const denos = [2000, 500, 100, 20, 10, 5, 1];

buttonVar.addEventListener("click", () => Validateinput(billAmountVar, cashGivenVar));

function showMsg(msg) {

    errorPara.style.display = "block";
    errorPara.style.color = "red";
    errorPara.innerText = msg;

}

function Validateinput(BA, CG) {
    errorPara.style.display = "none";
    if (BA.value > 0) {
        if (CG.value <= BA.value) {
            showMsg(cashError);
        } else {
            const ChangeToGive = (CG.value - BA.value);
            calcChange(ChangeToGive);
        }
    } else {
        showMsg(billError);
    }
}


function calcChange(diff) {

    for (var i = 0; i < denos.length; i++) {

        var notes = Math.trunc(diff / denos[i]);

        diff %= denos[i];

        noOfNotes[i].innerText = notes;
    }
}