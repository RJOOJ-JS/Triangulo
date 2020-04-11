const inputs = {
    //header selects
    opTypes: document.querySelector('select#operacoes'),
    opOper: document.querySelector('select#operar'),
    de: document.querySelector('div.de'),

    //other inputs
    beta: document.querySelector('input#beta'),
    alfa: document.querySelector('input#alfa'),
    hipo: document.querySelector('input#hipo'),

    sides: document.querySelector('div.sideInputs'),
    angles: document.querySelector('div.angleInputs'),

    a: document.querySelector('input#a'),
    b: document.querySelector('input#b'),
    c: document.querySelector('input#c'),
    
}
function update()
{
    if(inputs.opTypes.value == 'hipo')
    {
        inputs.de.classList.add('hidde')
        inputs.angles.classList.add('hidde')
        inputs.sides.classList.remove('hidde')

    } else{
        inputs.de.classList.remove('hidde')
        inputs.sides.classList.add('hidde')
        inputs.angles.classList.remove('hidde')

    }
}


