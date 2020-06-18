// controller

//Select en stolpe
function selectStolpe(id) {
    chosenBar = chosenBar==id ? null : id;
    show();
}
function slettStolpe(id) {
    numbers.splice(id-1, 1);
    show();
}
function endreStolpe(id, inputValue) {
    if (inputValue > 0 && inputValue < 11) {
    numbers.splice(id-1, 1 ,inputValue);
    show();
} else {
    console.log('Venligst tast in en gyldig verdi!');
}}
function leggStolpe(input) {
    if (inputValue > 0 && inputValue < 11) {
    numbers.push(input);
    show();
} else {
    console.log('Venligst tast in en gyldig verdi!');  
}
}