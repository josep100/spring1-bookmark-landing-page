const menuHamburguesa = document.getElementById("menu-mobile");
const modalMenu = document.getElementById("modal-menu");
const closeModal = document.getElementById("close-modal");

const tabs = document.querySelectorAll('.features-content ul li');
const image = document.querySelector('.features-content figure img');
const title = document.querySelector('.features-content article h3');
const text = document.querySelector('.features-content article p');

const features = [
    {
      img: '../starter-code/images/illustration-features-tab-1.svg',
      title: 'Bookmark in one click',
      text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    {
      img: '../starter-code/images/illustration-features-tab-2.svg',
      title: 'Intelligent search',
      text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    {
      img: '../starter-code/images/illustration-features-tab-3.svg',
      title: 'Share your bookmarks',
      text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
  ];

menuHamburguesa.addEventListener("click", () => {
        if(window.getComputedStyle(modalMenu).display === "none"){
                modalMenu.style.display = "block";
                menuHamburguesa.style.display = "none";
               
        }
});

closeModal.addEventListener("click", () => {
        if(window.getComputedStyle(modalMenu).display === "block"){
                modalMenu.style.display = "none";
                menuHamburguesa.style.display = "block";
        }
});



  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();
      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');
      image.src = features[index].img;
      title.textContent = features[index].title;
      text.textContent = features[index].text;
    });
  });