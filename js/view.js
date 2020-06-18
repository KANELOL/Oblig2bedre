// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
        <svg id="chart" width="500" viewBox="0 0 80 60">
            ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${(chosenBar>0&&numbers.length>0)?chosenBar:'Ingen'}</i>
        <br />
        Verdi:
        <input value="${inputValue>0&&inputValue<11?inputValue:''}" type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button onclick="leggStolpe(inputValue)">Legg til stolpe</button>
        <button ${chosenBar>0?'enabled':'disabled'} onclick="endreStolpe(chosenBar, inputValue)">Endre valgt stolpe</button><br />
        <button ${chosenBar>0?'enabled':'disabled'} onclick="slettStolpe(chosenBar)">Fjerne valgt stolpe</button>
        `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 5;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect id="${barNo}" width="${width}" height="${height}"
                        x="${x}" y="${y}" fill="${color}" onclick="selectStolpe(this.id)"
                        class="${chosenBar==barNo?'selected':''}"
                        ></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}
