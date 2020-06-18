//velge stolpe (teste både velge den som er valgt og en annen)
function show() {
    return 0
}
QUnit.test( "Velge stolpe", function( assert ) {
    let nur = 1;
    selectStolpe(nur);
  assert.equal( chosenBar == nur, true);
});
//slette en stolpe
QUnit.test( "Slette stolpe", function( assert ) {
    numbers = [7, 3, 1, 5, 8];
    let enBorte = numbers.length -1;
    slettStolpe(3);
    const result = numbers.length;
    assert.equal(result, enBorte);
  });
//endre en stolpe
  QUnit.test( "endre en stolpe", function( assert ) {
      høydeVerdi = 5;
    numbers = [7, 3, 1, 5, 8];
    endreStolpe(5, høydeVerdi);
    const result = numbers[4];
    assert.equal(result, høydeVerdi);
  });
    //legge til en stolpe
    QUnit.test( "legge til en stolpe", function( assert ) {
        inputValue = 10;
        numbers = [7, 3, 1, 5, 8];
        const result = numbers;
        leggStolpe(inputValue);
        assert.deepEqual(result, [7, 3, 1, 5, 8, inputValue]);
      });