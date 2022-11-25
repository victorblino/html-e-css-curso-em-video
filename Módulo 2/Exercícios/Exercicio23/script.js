const itensNumbers = document.getElementsByClassName('numero');
let totalPopulation = 0;

Array.from(itensNumbers).forEach(element => {
    totalPopulation += parseInt(element.innerHTML.replace(/\s/g,''));
});

sumPopulation = totalPopulation.toLocaleString(undefined, {minimumFractionDigits: 0}).replaceAll('.', ' ')
document.getElementById('total').innerHTML = `<strong>${sumPopulation}</strong>`