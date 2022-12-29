    //see more

    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("demo1").classList.remove('texto1');
        document.getElementById("demo1").classList.add('textov1');
        document.getElementById("demo1").innerText = "Nombre y Apellido: Frank Henderson" ;
        
    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("demo2").classList.remove('texto1');
        document.getElementById("demo2").classList.add('textov1');
        document.getElementById("demo2").innerText = "Edad : 23 años " ;
        
    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("demo3").classList.remove('texto1');
        document.getElementById("demo3").classList.add('textov1');
        document.getElementById("demo3").innerText = "Fecha de nacimiento : 4/3/1959 " ;
        
    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("demo4").classList.remove('texto1');
        document.getElementById("demo4").classList.add('textov1');
        document.getElementById("demo4").innerText = "E-mail : frank.henderson@example.com" ;
        
    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("demo5").classList.remove('texto1');
        document.getElementById("demo5").classList.add('textov1');
        document.getElementById("demo5").innerText = "Teléfono : (569) 970-0772" ;
        
    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("demo6").classList.remove('texto1');
        document.getElementById("demo6").classList.add('textov1');
        document.getElementById("demo6").innerText = "Nacionalidad : 6163 Northaven Rd" ;
        
    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("next").classList.remove('next');
        document.getElementById("next").classList.add('next1');

    })
    
    document.getElementById("next").addEventListener ("click",function(){
        document.getElementById("back").classList.remove('back1');
        document.getElementById("back").classList.add('back');

    })

    ////////////////////////////////

    //See Less

    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("demo1").innerText = "Descripción" ;
        document.getElementById("demo1").classList.remove('textov1');
        document.getElementById("demo1").classList.add('texto');
    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("demo2").classList.remove('textov1');
        document.getElementById("demo2").classList.add('texto1');
  
        
    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("demo3").classList.remove('textov1');
        document.getElementById("demo3").classList.add('texto1');
        
    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("demo4").classList.remove('textov1');
        document.getElementById("demo4").classList.add('texto1');

        
    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("demo5").classList.remove('textov1');
        document.getElementById("demo5").classList.add('texto1');
        
    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("demo6").classList.remove('textov1');
        document.getElementById("demo6").classList.add('texto1');
        
    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("next").classList.remove('next1');
        document.getElementById("next").classList.add('next');

    })
    
    document.getElementById("back").addEventListener ("click",function(){
        document.getElementById("back").classList.remove('back');
        document.getElementById("back").classList.add('back1');

    })

    

