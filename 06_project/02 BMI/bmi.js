const form = document.querySelector('form')
//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 1 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`
    } else if (weight === '' || weight < 1 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * weight) / 10000)).toFixed(1)
        //show the result
        if (bmi < 18.6) {
            results.innerHTML =`<spam>${bmi}</spam><spam>Under Weight = Less than 18.6</spam>`
            
        }
        else if (bmi < 18.5 && bmi < 25 ) {
            results.innerHTML =`<spam>${bmi}</spam><spam>Range = 18.6 and 24.9</spam>`
            
        }
        else if (bmi > 24.9 ) {
            results.innerHTML =`<spam>${bmi}</spam><spam>Greater than 24.9</spam>`
            
        }
        
    }

})