// tickets price
var firstClassTicket = 150; // first class ticket price $150
var economyTicket = 100; // economy ticket price $100

function ticketCounting(ticketType, isIncrease){
    const ticketInput = document.querySelector(ticketType + '-ticket-quantity');
    const ticketNum = parseInt(ticketInput.value);
    if(isIncrease == true){
        ticketQuantity = ticketNum + 1;
    }if(isIncrease == false && ticketNum > 0){
        ticketQuantity = ticketNum - 1;
    }
    ticketInput.value = ticketQuantity;
   subTotalPrice();
}

function subTotalPrice(){
    const fcTicketNum = subTotalPriceCalculation('#fc'); //---- fc means frist class-----
    const ecoTicketCount = subTotalPriceCalculation('#eco');//---- eco means economiy ----
    const totalPrice = fcTicketNum * firstClassTicket + ecoTicketCount * economyTicket;
    document.querySelector('#sub-total-price').innerText = '$' + totalPrice;
    const vat = totalPrice * 0.1;
    document.querySelector('#vat').innerText = '$' + vat;
    const totalTicketprice = totalPrice + vat;
    document.querySelector('#totalTicketprice').innerText = '$' + totalTicketprice;
}

function subTotalPriceCalculation(tickets){
    const ticketNum = document.querySelector(tickets + '-ticket-quantity');
    const ticketCount = parseInt(ticketNum.value);
    return ticketCount;
}

///--------Book Now button click work /// Form Validation ---------------------------------

document.querySelector('#book-btn').addEventListener('click', function(){
var totalPriceValue = (document.querySelector('#totalTicketprice').innerText).length;
    const attr = document.querySelector('#book-btn');
    if(totalPriceValue > 2){
        attr.setAttribute('href', 'ticket-confirm.html');
    }else{
        attr.removeAttribute('href');
        document.querySelector('#error').innerText = "Please Select a Ticket First!";
    }
})