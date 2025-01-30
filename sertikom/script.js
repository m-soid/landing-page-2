
function showekonomi(){
    document.getElementById('ekonomi')
    .classList.remove('hide')

    document.getElementById('bisnis')
    .classList.add('hide')
    document.getElementById('first')
    .classList.add('hide')
}

function showbisnis(){
    document.getElementById('bisnis')
    .classList.remove('hide')

    document.getElementById('ekonomi')
    .classList.add('hide')
    document.getElementById('first')
    .classList.add('hide')
}

function showfirst(){
    document.getElementById('first')
    .classList.remove('hide')

    document.getElementById('bisnis')
    .classList.add('hide')
    document.getElementById('ekonomi')
    .classList.add('hide')
}