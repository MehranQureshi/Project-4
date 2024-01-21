const reviews = [
    {
      id: 1,
      name: 'Fahad Abbasi',
      job: 'President',
      img: 'fahad.jpg',
      text: "Manage Team",
    },
    {
      id: 2,
      name: 'Fahad Wahid',
      job: 'Vice President',
      img: 'fahadW.jpg',
      text: 'To leading and guideing the team',
    },
    {
      id: 3,
      name: 'Mehran Qureshi',
      job: 'Information Secretary',
      img: 'mehranQureshi.jpg',
      text: 'To Manage All Information',
    },
    {
      id: 4,
      name: 'Saad Raza',
      job: 'Media Manager',
      img: 'saad.jpg',
      text: 'Handle Social media & designing ',
    },
    {
        id: 5,
        name: 'Ali Hassan',
        job: 'General Secretary',
        img: 'ali hassan.jpg',
        text: 'Maintenence of communication ',
      },
      {
        id: 6,
        name: 'Aamir Naeem',
        job: 'Finance Secretary',
        img: 'aamir.jpg',
        text: 'Preppare monthly and annual financial reports ',
      },
      {
        id: 7,
        name: 'Mehran Ali',
        job: 'Google Sheet Developer',
        img: 'mehranA.jpg',
        text: 'Create and handle google sheet',
      },
      {
        id: 8,
        name: 'Wahaj Sajid',
        job: 'Discipline Manager',
        img: 'wahaj.jpg',
        text: 'Program Controller',
      },
  ];
  let myName= document.getElementById('name');
  let myPosition= document.getElementById('position');
  let myDescription= document.getElementById('description');
  let myImage= document.getElementById('image');

  let prev_btn=document.querySelector(".prev");
  let next_btn=document.querySelector(".next");
  let random_btn=document.querySelector(".rand");

  let currentItem=0;

  window.addEventListener("DOMContentLoaded",()=>{
    let item=reviews[currentItem];
    myImage.src=item.img;
    myName.textContent=item.name;
    myPosition.textContent=item.job;
    myDescription.textContent=item.text;

  })
 
  function showPerson(currentItem){
    let item=reviews[currentItem];
    myImage.src=item.img;
    myName.textContent=item.name;
    myPosition.textContent=item.job;
    myDescription.textContent=item.text;
  }

  next_btn.addEventListener("click",()=>{
    currentItem++; 
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    
    showPerson(currentItem)
  })
  prev_btn.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1
    }
    
    showPerson(currentItem)
  })
  random_btn.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem)
  })
  
  

  