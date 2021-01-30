// For increasing or decreasing the number of seats.
function plusMinus(inputSeatId, isIncrease){
    const seat = document.getElementById(inputSeatId).value;
    var totalSeat;

    if(isIncrease == true){
        totalSeat = parseInt(seat) + 1;
    }
    else if(isIncrease == false){
        totalSeat = parseInt(seat) - 1;
    }
    // Checking the value of total seats is positive or not.
    if(totalSeat >= 0){
        document.getElementById(inputSeatId).value = totalSeat;
        calculateTotal();
    }
}

var seatFirstClass = 0, seatEconomyClass = 0, subTotal = 0, vat = 0, totalAmount = 0;   // Declaring Global variable for repeating use.
// For calculating and displaying subtotal, vat, and total amount.
function calculateTotal(){
    seatFirstClass = getTotalSeat("input-firstClass");
    seatEconomyClass = getTotalSeat("input-economy");
    subTotal = seatFirstClass * 150 + seatEconomyClass * 100;
    vat = subTotal * .10;
    totalAmount = subTotal + vat;
    document.getElementById("display-subtotal").innerText = subTotal;
    document.getElementById("display-vat").innerText = vat;
    document.getElementById("display-total").innerText = totalAmount;
}

// For getting the value of total seats by input-box id.
function getTotalSeat(inputSeatId){
    const seat = document.getElementById(inputSeatId).value;
    return parseInt(seat);
}

// For displaying receipt after clicking book now button.
const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function(){
    document.getElementById("main-section").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.body.style.background = "none";
    const receiptTable = document.getElementById("receipt");
    receiptTable.style.display = "block";

    document.getElementById("receipt-firstClass").innerText = seatFirstClass;
    document.getElementById("receipt-economy").innerText = seatEconomyClass;
    document.getElementById("receipt-subtotal").innerText = "$ " + subTotal;
    document.getElementById("receipt-vat").innerText = "$ " + vat;
    document.getElementById("receipt-total").innerText = "$ " + totalAmount;
});