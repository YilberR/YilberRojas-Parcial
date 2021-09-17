
document.getElementById("botonBuscar").onclick=function(){
        let div=document.createElement("div");
        let palabra =document.getElementById("palabra1").value;
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+palabra)
       .then(response => response.json())
       .then(data => {
           data.forEach((mostrar)=>{
           let significados = data.meanings;
            significados.forEach(a){
                let definicion=a.definitions;
                let usos=a.partOfSpeech;
                let p=document.createElement("p");
                p.innerHTML=usos;
                div.appendChild(p);
                definicion.forEach((q){
                let p=document.createElement("p");
                p.innerHTML=q.definition
                div.appendChild(p);
                if(q.example!=undefined){
                    let p=document.createElement("p");
                    p.innerHTML=q.example
                    div.appendChild(p);
                }

                })
            
            };

                });
           document.getElementById("resul").appendChild(div)


                console.log(data);
             
        })    
}
      