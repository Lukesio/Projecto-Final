//See more

document.getElementById("VerMas1").addEventListener ("click",function(){
    document.getElementById("Skill1").classList.remove('texto');
    document.getElementById("Skill1").classList.add('textov1');
    document.getElementById("Skill1").innerHTML = " HTML Y CSS : HTML semántico - Responsive web design / CSS flexbox - CSS hover - CSS grid - CSS posicionamiento absolute - CSS Animation"

})

document.getElementById("VerMas1").addEventListener ("click",function(){
    document.getElementById("Skill2").classList.remove('texto1');
    document.getElementById("Skill2").classList.add('textov1');
    document.getElementById("Skill2").innerHTML = " Java Script : eventos "

})

document.getElementById("VerMas1").addEventListener ("click",function(){
    document.getElementById("Skill3").classList.remove('texto1');
    document.getElementById("Skill3").classList.add('textov1');
    document.getElementById("Skill3").innerHTML = " JAVA : Tipo de Datos - Clases - Estructuras Condicionales ( if/if-else - switch - while - do while - for ) - Matrices y vectores - Funciones - POO - Get y Set - ArrayList - Relaciones entre clases - Herencia entre clases "

})

document.getElementById("VerMas1").addEventListener ("click",function(){
    document.getElementById("VerMas1").classList.remove('vermasV1');
    document.getElementById("VerMas1").classList.add('vermasV2');

})

document.getElementById("VerMas1").addEventListener ("click",function(){
    document.getElementById("VerMenos1").classList.remove('vermenosV2');
    document.getElementById("VerMenos1").classList.add('vermenosV1');

})

//See less

document.getElementById("VerMenos1").addEventListener ("click",function(){
    document.getElementById("Skill1").classList.remove('textov1');
    document.getElementById("Skill1").classList.add('texto');
    document.getElementById("Skill1").innerHTML = " Mis Conocimientos "

})

document.getElementById("VerMenos1").addEventListener ("click",function(){
    document.getElementById("Skill2").classList.remove('textov1');
    document.getElementById("Skill2").classList.add('texto1');

})

document.getElementById("VerMenos1").addEventListener ("click",function(){
    document.getElementById("Skill3").classList.remove('textov1');
    document.getElementById("Skill3").classList.add('texto1');

})

document.getElementById("VerMenos1").addEventListener ("click",function(){
    document.getElementById("VerMas1").classList.remove('vermasV2');
    document.getElementById("VerMas1").classList.add('vermasV1');

})

document.getElementById("VerMenos1").addEventListener ("click",function(){
    document.getElementById("VerMenos1").classList.remove('vermenosV1');
    document.getElementById("VerMenos1").classList.add('vermenosV2');

})