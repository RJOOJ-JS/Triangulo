const elements = {
    //header selects
    opTypes: document.querySelector('select#operacoes'),
    opOper: document.querySelector('select#operar'),
    de: document.querySelector('div.de'),

    //other elements
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
    if(elements.opTypes.value == 'hipo')
    {
        elements.de.classList.add('hidde')
        elements.angles.classList.add('hidde')
        elements.sides.classList.remove('hidde')

    } else{
        elements.de.classList.remove('hidde')
        elements.sides.classList.add('hidde')
        elements.angles.classList.remove('hidde')

    }
}

function calculo()
{
    let res = {
        cos: 0,
        sen: 0,
        tg: 0,
        hipo: 0,
    }
    if(elements.opTypes.value == 'hipo')
    {
        //pegar valor dos lados
        res.hipo = Math.sqrt((Math.pow(Number(elements.a.value), 2)+ Math.pow(Number(elements.c.value))))
        console.log(res.hipo)
        //fazer calculo
    }

    if(elements.opTypes.value == 'sen')
    {
        //pegar valor dos angulos
        //calcular seno
    }
    if(elements.opTypes.value == 'cos')
    {
        //pegar valor dos angulos
        //calcular coscenos
    }
    if(elements.opTypes.value == 'tg')
    {
        //pegar valor dos angulos
        //calcular coscenos
    }
}
