let myInput = document.getElementById('date')
let myBtn = document.querySelector('button')
let myelem = document.querySelector('p')
// console.log(myInput, myBtn, myelem);

myBtn.addEventListener('click', function () {
    // console.log('kjjhhh');
    calcAge()
})

function calcAge() {
    let today = new Date() // current  date
    //    console.log(today);
    let value = myInput.value  
    //    console.log(value);
    let userDate = new Date(value)
    //    console.log(userDate);
    let year = today.getFullYear() - userDate.getFullYear()
    // console.log(year);
    let month = today.getMonth() - userDate.getMonth()
    // console.log(month);
    let day = today.getDate() - userDate.getDate()
    if (!value) {
        myelem.innerHTML = `please select date`
        return;
    }
    if (userDate > today) {
        myelem.innerHTML = `invalid date`
        return;
    }
    if (month < 0) {
        year--;
        month += 12;
    }
    if (day < 0) {
        month--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0)
        day += lastMonth.getDate()
    }
    myelem.innerHTML = `you are ${year} years , ${month} months and ${day} days old`
}
