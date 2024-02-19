

function change(){

    const buyTickets = document.getElementById('paribahan')

    buyTickets.scrollIntoView()

}




  







const ticket =document.getElementById('ticket-price').innerText

const seatLeft = document.getElementById('seats-left').innerText

// looping all seats

const allBtn =document.getElementsByClassName('add-btn')
let count =0
for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count=count+1
        
        btn.classList.add('bg-green-500')


        document.getElementById('sup-seat').innerText = count

        document.getElementById('seats-left').innerText = seatLeft - count

//  Append Seat details

        const seatName =  e.target.innerText
        const seatPrice = ticket

  
        const selectedTable =document.getElementById('selected-table')
  
        const tr = document.createElement("tr")
  
        const td = document.createElement("td")
               td.innerText=seatName
  
               const td2 = document.createElement("td")  
               td2.innerText=seatPrice

               const td3 =document.createElement('td')
               td3.innerText = "Economy"
  
               tr.appendChild(td)
               tr.appendChild(td3)
               tr.appendChild(td2)
               selectedTable.appendChild(tr)

              const totalCost =document.getElementById('total').innerText

              const convertedTotal = parseInt(totalCost)

              const sum = convertedTotal + parseInt(seatPrice)

              document.getElementById('total').innerText = sum


              const grandTotal =document.getElementById('grand-total').innerText

              const convertedGrandTotal = parseInt(grandTotal)

              document.getElementById('grand-total').innerText =convertedGrandTotal + parseInt(seatPrice)

              const sum2 = convertedGrandTotal + parseInt(seatPrice)

              document.getElementById('total').innerText = sum2






       

})}

   

