import './style.css'

//creamos el header 


  const header = document.createElement("header")
  const div1header = document.createElement("div")
  const logoHeader = document.createElement("img")
  const button1header = document.createElement("button")
  const button2header = document.createElement("button")
  const inputHeader = document.createElement("input")
  const div2header = document.createElement("div")
  const btn_notif =  document.createElement("button")
  const btn_mens = document.createElement("button")
  const btn_perfil = document.createElement("button")
  const smsNoResultados = document.createElement("p");
  
  logoHeader.src = "https://res.cloudinary.com/dnju3aw4b/image/upload/v1701854294/Pinterest/Pinterest_icon_qjhnkx.jpg"
  button1header.textContent = "Spa"
  button2header.textContent = "Food"
  inputHeader.placeholder = "🔎 Buscar..."
  btn_notif.textContent = "🔔"
  btn_mens.textContent = "💭"
  btn_perfil.textContent = "🙍‍♀️"
  inputHeader.classList.add("inputclass")
  smsNoResultados.textContent = "No se han encontrado resultados"
  smsNoResultados.classList.add("sms-no-results")
  
  
  document.body.appendChild(header)
  header.appendChild(div1header)
  div1header.appendChild(logoHeader)
  div1header.appendChild(button1header)
  div1header.appendChild(button2header)
  header.appendChild(inputHeader)
  header.appendChild(smsNoResultados);
  header.appendChild(div2header)
  div2header.appendChild(btn_notif)
  div2header.appendChild(btn_mens)
  div2header.appendChild(btn_perfil)
  
  inputHeader.addEventListener("click",()=>{  inputHeader.style.border = "5px solid #00B9E8"
  
  })
  
  inputHeader.addEventListener("blur",()=>{  inputHeader.style.border = "none"
  
  })
 
  inputHeader.addEventListener("input", (event) => {
    const query = event.target.value;
    getImages(query);
  });

  button1header.addEventListener("click",() => {
    const query = "Spa"
    getImages(query)

  })
  button2header.addEventListener("click",() => {
    const query = "Food"
    getImages(query)

  })

  
  
  
  //creamos una section para todas las fotos dentro del main -------------------------------------------------------------
  
  
  const main = document.createElement("main")
  const sectionFotos = document.createElement("section")
  document.body.appendChild(main)
  main.appendChild(sectionFotos)
  
/*Creamos las imagnenes*/
const createImages = (e) =>{
  for(let i = 0 ; i < e.length ; i++ ) {
  const image = document.createElement('img');
  image.src = e[i].urls.thumb;
  sectionFotos.appendChild(image);
  }
  } 
  
  
  
  //Accedemos a la APi-------------------------------
  const access_key = "fGNMpPZqIOa-fTzwaG5xTElIxL9LbLvZ_jFDwjmWukI"
  
  const endPoint = 'https://api.unsplash.com/search/photos';
  
 /*  const gallery = document.querySelector(".gallery") */
  
  const getImages = async (query) => {
    try {
      sectionFotos.innerHTML = ""
      if (query) {
        let response = await fetch(endPoint + "?query=" + query + "&client_id=" + access_key);
        let jsonResponse = await response.json();
        let imagesList = await jsonResponse.results;
        if(imagesList.length > 0){
        createImages(imagesList);
        smsNoResultados.style.visibility = "hidden"
        }else {
          smsNoResultados.style.visibility = "visible"
        }
      } else {
        sectionFotos.innerHTML = "";
        smsNoResultados.style.visibility = "hidden"
      }
    } catch (error) {
      const errorMessage = "Hubo algún error";
      console.log(errorMessage);
    }
  };
  
  
  
  /*Creamos el footer*/

  const footer = document.createElement("footer")
  const sectionFooter = document.createElement("section")
  const p = document.createElement("p")
  const a = document.createElement("a")

  p.textContent ="Creado por Narciso 😋"
  a.textContent = "Mi linkedIn"
  a.href = "https://www.linkedin.com/in/narciso-serrano-rabal-8a2701102/"
  a.target = "_blank"

  document.body.appendChild(footer)
  footer.appendChild(sectionFooter)
  sectionFooter.appendChild(p)
  sectionFooter.appendChild(a)
  

  
  
  

