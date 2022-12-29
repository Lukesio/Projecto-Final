//See more

document.getElementById("VerMas").addEventListener ("click",function(){
    document.getElementById("exp1").classList.remove('texto');
    document.getElementById("exp1").classList.add('texto1');
    
})

document.getElementById("VerMas").addEventListener ("click",function(){
    document.getElementById("window").classList.remove('window1');
    document.getElementById("window").classList.add('window');
    
})

document.getElementById("VerMas").addEventListener ("click",function(){
    document.getElementById("VerMas").classList.remove('vermas');
    document.getElementById("VerMas").classList.add('vermas1');

})

document.getElementById("VerMas").addEventListener ("click",function(){
    document.getElementById("VerMenos").classList.remove('vermenos1');
    document.getElementById("VerMenos").classList.add('vermenos');

})

//See less

document.getElementById("VerMenos").addEventListener ("click",function(){
    document.getElementById("exp1").classList.remove('texto1');
    document.getElementById("exp1").classList.add('texto');
    
})

document.getElementById("VerMenos").addEventListener ("click",function(){
    document.getElementById("window").classList.remove('window');
    document.getElementById("window").classList.add('window1');
    
})

document.getElementById("VerMenos").addEventListener ("click",function(){
    document.getElementById("VerMas").classList.remove('vermas1');
    document.getElementById("VerMas").classList.add('vermas');

})

document.getElementById("VerMenos").addEventListener ("click",function(){
    document.getElementById("VerMenos").classList.remove('vermenos');
    document.getElementById("VerMenos").classList.add('vermenos1');

})