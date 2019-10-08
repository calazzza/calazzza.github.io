window.onload = function(){
    header = document.getElementById("header-id");
    logo = document.getElementById("svg-logo");
    

    //Rolar página ao clicar no header
    header.onclick = function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //Observação da rolagem da página
    var prevScrollpos = window.pageYOffset; 
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;         
        headerHeight = header.offsetHeight;        
        
        //Exibição do header quanto à rolagem
        if (prevScrollpos > currentScrollPos) {
            header.style.transform = "translateY(0px)";
            
            //Gira logo ao chegar no topo
            if (currentScrollPos <= 15){            
                logo.classList.add("rotate");
                
                //Remove classe rotate ao terminar transition
                rotate = document.querySelector(".rotate");
                style = getComputedStyle(rotate);                     
                setTimeout(function(){ 
                    logo.classList.remove("rotate")
                }, parseFloat(style.transitionDuration) * 1000);       
            }            
        } else if (prevScrollpos < currentScrollPos && currentScrollPos > headerHeight * 2) {            
            header.style.transform = "translateY(-"+ headerHeight +"px)";            
        }       

        prevScrollpos = currentScrollPos; 
    }
};