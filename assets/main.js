const team = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      image: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      image: './assets/img/scott-estrada-developer.jpg',
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      image: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
];

for ( let i = 0; i < team.length; i++ ){

    console.log(team[i]);
    //abbino il singolo oggetto della classe alla variabile
    let oggetto = team[i]

    for ( let key in oggetto ){
        console.log(key);
        console.log( oggetto[key] );
    }

    document.querySelector('#testo').innerHTML += `
         <div class="col-4 mt-4">
             <div class="card" style="width: 18rem;">
                 <img src='${oggetto.image}' class="card-img-top" alt="...">
                 <div class="card-body" id='${i}'>
                    <h5 class="card-title">${ oggetto.nome }</h5>
                    <p class="card-text">${ oggetto.ruolo }</a>
                 </div>
             </div>
         </div>
     `
    

}
