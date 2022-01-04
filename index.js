const billAmountVar = document.querySelector("#bill-amount");
const cashGivenVar = document.querySelector("#cash-given");
const buttonVar = document.querySelector("#submitbtn");

const errorPara = document.querySelector("#err");

const billError = "*Enter valid bill amount greater than 0";
const cashError = "*Enter valid cash/amount given which is greater or equal to bill amount";

buttonVar.addEventListener("click", () => Validateinput(billAmountVar, cashGivenVar));

function showMsg(msg) {

    errorPara.style.display = "block";
    errorPara.style.color = "red";
    errorPara.innerText = msg;

}

function calcChange(diff) {


}

function Validateinput(BA, CG) {
    errorPara.style.display = "none";
    if (BA.value > 0) {
        if (CG.value < BA.value) {
            showMsg(cashError);
        } else {
            const ChangeToGive = CG.value - BA.value;
            calcChange(ChangeToGive);
        }
    } else {
        showMsg(billError);
    }
}