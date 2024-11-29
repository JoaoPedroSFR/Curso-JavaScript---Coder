const array = [1, null, 2, undefined, 3, '', 4, NaN, 5];



//
// Filtrando apenas os elementos "preenchidos"


const elementosPreenchidos = array.filter(element => element !== null && element !== undefined && element !== '' && !isNaN(element));



console.log(elementosPreenchidos); // Saída: [1, 2, 3, 4, 5]