
function plusMinus(inputSeatId,seatCharge, isIncrease){
    const seat = document.getElementById(inputSeatId).value;
    const subtotal = document.getElementById("display-subtotal").innerText;
    var totalSeat, totalSubTotal;

    if(isIncrease == true){
        totalSeat = parseInt(seat) + 1;
        totalSubTotal = parseFloat(subtotal) + seatCharge;
    }
    else if(isIncrease == false){
        totalSeat = parseInt(seat) - 1;
        totalSubTotal = parseFloat(subtotal) - seatCharge;
    }

    if(totalSeat >= 0){
        document.getElementById(inputSeatId).value = totalSeat;
        if(totalSubTotal >= 0){
            document.getElementById("display-subtotal").innerText = totalSubTotal;
    
            const vat = totalSubTotal * .10;
            const totalAmount = totalSubTotal - vat;
            document.getElementById("display-vat").innerText = vat;
            document.getElementById("display-total").innerText = totalAmount;
        }
    }
}

const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function(){
    document.getElementById("main-section").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.body.style.background = "none";
    const receiptTable = document.getElementById("receipt");
    receiptTable.style.display = "block";
})