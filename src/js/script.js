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
    resList: document.querySelector('ul.res'),

    titA: document.querySelector('span#inputTitA'),
    titB: document.querySelector('span#inputTitB'),
    titC: document.querySelector('span#inputTitC'),
    
    clearBtn: document.querySelector('button#clear')
}

let results = []

function update()
{
    if(elements.opTypes.value == 'hipo')
    {
        elements.de.classList.add('hidde')
        elements.hipoLabel.classList.add('hidde')
        elements.sides.classList.remove('hidde')
        elements.h.value = 10

    } else if(elements.opTypes.value == 'tg'){
        elements.hipoLabel.classList.add('hidde')
        elements.de.classList.remove('hidde')
        elements.h.value = 10
    }
    else{
        elements.de.classList.remove('hidde')
        elements.hipoLabel.classList.remove('hidde')


    }

    //titulos

    if(elements.opTypes.value == 'cos' || elements.opTypes.value == 'sen')
    {
        switch(elements.opOper.value)
        {
            case 'beta':
                elements.titA.innerHTML = 'Cateto Oposto'
                elements.titB.innerHTML = 'Cateto adjacente'
                elements.titC.innerHTML = 'Hipotenusa'
            break;
            case 'alfa':
                elements.titA.innerHTML = 'Cateto Adjacente'
                elements.titB.innerHTML = 'Cateto Oposto'
                elements.titC.innerHTML = 'Hipotenusa'
        }
    } else if(elements.opTypes.value == 'tg'){
        switch(elements.opOper.value)
        {
            case 'beta':
                elements.titA.innerHTML = 'Cateto Oposto'
                elements.titB.innerHTML = 'Cateto adjacente'
            break;
            case 'alfa':
                elements.titA.innerHTML = 'Cateto Adjacente'
                elements.titB.innerHTML = 'Cateto Oposto'
        }
    }
    else {
        elements.titA.innerHTML = 'Lado A'
        elements.titB.innerHTML = 'Lado B'
    }
    
}

function calculo()
{
    if(elements.a.value == '' || elements.h.value == '' || elements.c.value == '')
    {
        alert('Preencha todas as entradas')
    }
    else
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
        res.hipo = Math.sqrt(Math.pow(Number(elements.a.value), 2) + Math.pow(Number(elements.c.value), 2)).toFixed(2)
        results.push(`Hipotenusa: ${res.hipo}`)
        resAdd()
        console.log(res.hipo)
        //fazer calculo
    }

    if(elements.opTypes.value == 'sen')
    {

        //pegar valor dos lados
        let ang = elements.opOper.value
        let op = null
        let adj = null
        let hip = elements.h.value
        let qu = ''
        switch(ang)
        {
            case 'beta':
                op = Number(elements.a.value) 
                qu = '(beta)'
            break;
            case 'alfa':
                op = Number(elements.c.value)
                adj = Number(elements.a.value)
                qu = '(alfa)'

        }

        res.sen = (op/hip).toFixed(2)
        results.push(`Seno${qu}: ${res.sen}`)
        resAdd()
        //calcular seno
    }
    if(elements.opTypes.value == 'cos')
    {
        //pegar valor dos lados
        let ang = elements.opOper.value
        let op = null
        let adj = null
        let hip = elements.h.value
        let qu = ''
        //calcular coscenos
        switch(ang){
            case 'beta':
                adj = Number(elements.c.value)
                qu = '(beta)'
            break;
            case 'alfa':
                adj = Number(elements.a.value)
                qu = '(alfa)'
        }

        res.cos = (adj/hip).toFixed(2)
        results.push(`Cosseno${qu}: ${res.cos}`)
        resAdd()
    }
    if(elements.opTypes.value == 'tg')
    {
         //pegar valor dos lados
         let ang = elements.opOper.value
         let op = null
         let adj = null
         let hip = elements.h.value
         let qu = ''
         switch(ang)
         {
             case 'beta':
                 op = Number(elements.a.value) 
                 adj = Number(elements.c.value)
                 qu = '(beta)'
             break;
             case 'alfa':
                 op = Number(elements.c.value)
                 adj = Number(elements.a.value)
                 qu = '(alfa)'
 
         }
 
         res.tg = (op/adj).toFixed(2)
         results.push(`Tangente${qu}: ${res.tg}`)
         resAdd()
         //calcular seno
        
        //calcular coscenos
    }
    }
}

function resAdd()
{
    elements.resList.innerHTML = ''
    for(result in results)
    {
        let newResult = document.createElement('li')
        newResult.innerHTML = `${results[result]}`


        elements.resList.appendChild(newResult)
    }
    
}

elements.clearBtn.addEventListener('click', ()=>{
    results = []
    resAdd()
})

 
