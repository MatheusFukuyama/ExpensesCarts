const currentDate = new Date()
let currentDay = currentDate.getDay()
let dayCounter = 1;

fetch ("https://expenses-chart-component-main.herokuapp.com/days")
.then(response => response.json())
.then(data => {
    const graphic = document.getElementById('graphic')

    data.forEach(dia => {
        let dayName = document.createElement('div')
        let column = document.createElement('div')
        let dayColumn = document.createElement('p')
        let amount = document.createElement('p')
        
        column.classList.add('column')
        column.style.height = `${(dia.amount / 0.349)/16}rem`

        dayName.innerHTML = `${dia.day}`
        amount.innerHTML = `$${dia.amount}`

        amount.classList.add('amount')

        dayColumn.appendChild(amount)
        dayColumn.appendChild(column)
        dayColumn.appendChild(dayName)

        dayColumn.classList.add('dayColumn')
        
        if(dayCounter == currentDay) {
            column.classList.add('emphasis')
            console.log(currentDay)
        }

        graphic.appendChild(dayColumn)
        
        column.addEventListener("mouseenter", () => {
            amount.style.display = 'block'
            amount.style.top = `${-(amount.clientHeight + 9)/16}rem`
        })
        column.addEventListener("mouseleave", () => {
            amount.style.display = 'none'
        })
        
        dayCounter++
    });
})