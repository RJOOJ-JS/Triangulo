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


    a: document.querySelector('input#a'),
    h: document.querySelector('input#h'),
    c: document.querySelector('input#c'),

    hipoLabel: document.querySelector('label.hipo-label'),
    resList: document.querySelector('ul.res')
    
}

const results = []

function update()
{
    if(elements.opTypes.value == 'hipo')
    {
        elements.de.classList.add('hidde')
        elements.hipoLabel.classList.add('hidde')
        elements.sides.classList.remove('hidde')
        

    } else{
        elements.de.classList.remove('hidde')
        elements.hipoLabel.classList.remove('hidde')


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
        res.hipo = Math.sqrt(Math.pow(Number(elements.a.value), 2) + Math.pow(Number(elements.c.value), 2))
        results.push(res.hipo)
        resAdd('Hipotenusa')
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

function resAdd(tipo)
{
    
    for(result in results)
    {
        let newResult = document.createElement('li')
        newResult.innerHTML = `${tipo}: ${results[result]}`


        elements.resList.appendChild(newResult)
    }
    
}
