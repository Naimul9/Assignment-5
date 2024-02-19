



const ticket =document.getElementById('ticket-price').innerText

const seatLeft = document.getElementById('seats-left').innerText

let isCouponApplied = false;
// looping all seats

const allBtn =document.getElementsByClassName('add-btn')
let count =0
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if (count < 4) {
            count = count + 1;
            btn.classList.add("pointer-events-none");
            btn.classList.add('bg-green-500');

            document.getElementById('sup-seat').innerText = count;
            document.getElementById('seats-left').innerText = seatLeft - count;

            const seatName = e.target.innerText;
            const seatPrice = ticket;

            const selectedTable = document.getElementById('selected-table');
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerText = seatName;
            const td2 = document.createElement("td");
            td2.innerText = seatPrice;
            const td3 = document.createElement('td');
            td3.innerText = "Economy";

            tr.appendChild(td);
            tr.appendChild(td3);
            tr.appendChild(td2);
            selectedTable.appendChild(tr);

 
            //   const totalCost =document.getElementById('total').innerText

            //   const convertedTotal = parseInt(totalCost)

            //   const sum = convertedTotal + parseInt(seatPrice)

            //   document.getElementById('total').innerText = sum


            //   const grandTotal =document.getElementById('grand-total').innerText

            //   const convertedGrandTotal = parseInt(grandTotal)

            //   document.getElementById('grand-total').innerText =convertedGrandTotal + parseInt(seatPrice)

            //   const sum2 = convertedGrandTotal + parseInt(seatPrice)

            //   document.getElementById('grand-total').innerText = sum2

            totalCost('total', parseInt(seatPrice));
            grandTotal('grand-total', parseInt(seatPrice));
        }
        if (count === 4) {
            for (const btn of allBtn) {
                btn.disabled
            }
        }
    })
}



function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotal = parseInt(totalCost)
    const sum = convertedTotal + parseInt(value)
    
      setInnerText('total', sum)
    
  }



  function grandTotal(){

    

    const totalCost = document.getElementById('total').innerText;
    
    const convertedTotalCost = parseInt(totalCost);

    setInnerText('grand-total', convertedTotalCost);

     const discount =document.getElementById('input')

     const DiscountText = discount.value

    const hide = document.getElementById('hide')



    


    if (  count == 4  ) { 

        if (DiscountText === "NEW15") {

            setInnerText('grand-total', convertedTotalCost - convertedTotalCost * 15 / 100);
            isCouponApplied = true; 
            hide.classList.add('hidden'); 

        } else if (DiscountText === "Couple 20") {
            setInnerText('grand-total', convertedTotalCost - convertedTotalCost * 20 / 100);
            isCouponApplied = true;

            hide.classList.add('hidden');
        }


    } else {
        setInnerText('grand-total', convertedTotalCost);
  
    }

  }


/////////////////////////////


// function couponHide(elementId){

//     const element = document.getElementById(elementId)

//     element.classList.add('hidden')
// }

/////////////////////////////

  function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }



   
function change(){

    const buyTickets = document.getElementById('paribahan')

    buyTickets.scrollIntoView()
}









