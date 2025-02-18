const carre1 = document.getElementById("carre1");
const carre2 = document.getElementById("carre2");
const carre3 = document.getElementById("carre3");
const carre4 = document.getElementById("carre4");
const carre5 = document.getElementById("carre5");
const carre6 = document.getElementById("carre6");
const carre7 = document.getElementById("carre7");
const carre8 = document.getElementById("carre8");

// réagir au clique pour faire disparaitre le carré

carre1.addEventListener("click",function(e){


       carre1.classList.add("mouvement");
       carre1.classList.remove("inerte");
     
            
});



carre2.addEventListener("click",function(e){


    carre2.classList.add("mouvement");
    carre2.classList.remove("inerte");
  
         
});

carre3.addEventListener("click",function(e){


    carre3.classList.add("mouvement");
    carre3.classList.remove("inerte");
  
         
});

carre4.addEventListener("click",function(e){


 carre4.classList.add("mouvement");
 carre4.classList.remove("inerte");

      
});

carre5.addEventListener("click",function(e){


    carre5.classList.add("mouvement");
    carre5.classList.remove("inerte");
  
         
});

carre6.addEventListener("click",function(e){


 carre6.classList.add("mouvement");
 carre6.classList.remove("inerte");

      
});

carre7.addEventListener("click",function(e){


    carre7.classList.add("mouvement");
    carre7.classList.remove("inerte");
  
         
});

carre8.addEventListener("click",function(e){


 carre8.classList.add("mouvement");
 carre8.classList.remove("inerte");

      
});



// verifie si tous les éléments colonnes ont obtenues la classe mouvement si oui , il fait apparaitre le textee

  let mouvement;
  let colonnes = document.querySelectorAll(".colonne");

  colonnes.forEach(element => {

    element.addEventListener("click",function(e){

        mouvement = document.querySelectorAll('.mouvement');  
                  
               if(mouvement.length == 8 ){
    
                    // const titre = document.querySelector(".titre");       
                   const parent = document.querySelector(".principal");
                   const sous_parent = document.createElement("div");
                   sous_parent.classList.add("sous_parent");

                   const titre = document.createElement("h1");
                   titre.innerHTML = '<span>Smile</span>, You Are Unique.';
                   titre.classList.add("titre");

    
                   const button = document.createElement("button");
                   button.innerHTML = '<i class="fa-solid fa-rotate-right" style="color: #000000;"></i>';
                   button.classList.add("button");
    
    
                 
                   parent.appendChild(sous_parent);
                   sous_parent.appendChild(titre);
                   sous_parent.appendChild(button);
                  
       
               }
         
    
      })
     
    
  });

  


  // enlever la classe mouvement au colonne

document.addEventListener("click",function(){
    
    if(document.querySelectorAll(".button").length > 0 ){
        
        document.querySelector(".button").addEventListener("click",function(){

            document.querySelector(".sous_parent").style.cssText = "z-index:2";
    

           // permet de rendre les classes colonnes leurs visibilités avec un décalage d'une demi seconde 
           let i = 0;
           
           const max =  colonnes.length;
           let tableau = [0,1,2,3,4,5,6,7]
           
           function ajouterClasseInnerte(){
            
                    if(i < max ){
                      
                       
                        const index = Math.floor(Math.random() * tableau.length); 
                        let key = tableau[index];
                        colonnes[key].classList.remove("mouvement");
                        colonnes[key].classList.add('inerte');
                        tableau.splice(index,1);
                        i++;

                        setTimeout(ajouterClasseInnerte,500);

                    }

           }

           ajouterClasseInnerte();

           //supprime la partie des écrits et du button
        
            document.querySelector(".sous_parent").remove();
        
        
          });
    
      }

})

  

  
  


  
