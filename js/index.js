const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAVBAR

let navItems = Array.from(document.querySelectorAll('a'));

navItems.forEach(item => {
  let index = navItems.indexOf(item) + 1;
  item.innerText = siteContent['nav'][`nav-item-${index}`];
  item.style.color = 'green';
})

//ADD 2 NEW ITEMS TO THE NAV

let nav = document.querySelector('nav');

function makeNavItem(item){
    let newItem = document.createElement('a');
    newItem.setAttribute('href', '#');
    newItem.innerText = `${item}`;
    newItem.style.color = 'green';
    return newItem;
}
nav.prepend(makeNavItem('Thing1'));
nav.appendChild(makeNavItem('Thing2'));

//CTA

let ctah1 = document.querySelector('.cta-text h1');
let ctaButton = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');
ctah1.innerHTML = "DOM <br> Is <br> Awesome";
ctaButton.innerText = siteContent['cta']['button'];

ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//FEATURES

let featHeader = document.querySelectorAll('.top-content .text-content h4')[0];
featHeader.innerText = siteContent['main-content']['features-h4'];

let featContent = document.querySelectorAll('.top-content .text-content p')[0];
featContent.innerText = siteContent['main-content']['features-content'];

//ABOUT

let aboutHeader = document.querySelectorAll('.top-content .text-content h4')[1];
aboutHeader.innerText = siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll('.top-content .text-content p')[1];
aboutContent.innerText = siteContent['main-content']['about-content'];

//ACCENT IMAGE

let accent = document.querySelector('.middle-img');

accent.setAttribute('src', siteContent['main-content']['middle-img-src']);

//SERVICES

let servicesHeader = document.querySelectorAll('.bottom-content .text-content h4')[0];
servicesHeader.innerText = siteContent['main-content']['services-h4'];

let servicesContent = document.querySelectorAll('.bottom-content .text-content p')[0];
servicesContent.innerText = siteContent['main-content']['services-content'];

//PRODUCT

let productHeader = document.querySelectorAll('.bottom-content .text-content h4')[1];
productHeader.innerText = siteContent['main-content']['product-h4'];

let productContent = document.querySelectorAll('.bottom-content .text-content p')[1];
productContent.innerText = siteContent['main-content']['product-content'];

//VISION

let visionHeader = document.querySelectorAll('.bottom-content .text-content h4')[2];
visionHeader.innerText = siteContent['main-content']['vision-h4'];

let visionContent = document.querySelectorAll('.bottom-content .text-content p')[2];
visionContent.innerText = siteContent['main-content']['vision-content'];

//CONTACT

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerText = siteContent['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p');
contactContent[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA";
contactContent[1].innerText = siteContent['contact']['phone'];
contactContent[2].innerText = siteContent['contact']['email'];

//FOOTER

let footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];

//STYLE CHANGES (Stretch Goal)

ctaButton.style.borderRadius = "25px";
ctaButton.style.backgroundColor = "#000055";
ctaButton.style.color = 'white';
ctaButton.style.fontWeight = 'bold';
ctaButton.style.boxShadow = '2px 2px 2px 2px rgba(33, 33, 33, 0.5)';

footer.style.fontWeight = 'bold';



//DARKMODE BUTTON (Stretch Goal)

let darkmodeActive = false;

function darkMode(){

  if(darkmodeActive === false){
    document.body.style.backgroundColor = '#333333'
    ctah1.style.color = '#dddddd';
    featHeader.style.color = '#dddddd';
    featContent.style.color = '#dddddd';
    aboutHeader.style.color = '#dddddd';
    aboutContent.style.color = '#dddddd';
    servicesHeader.style.color = '#dddddd';
    servicesContent.style.color = '#dddddd';
    productHeader.style.color = '#dddddd';
    productContent.style.color = '#dddddd';
    visionHeader.style.color = '#dddddd';
    visionContent.style.color = '#dddddd';
    contactContent[0].style.color = '#dddddd';
    contactContent[1].style.color = '#dddddd';
    contactContent[2].style.color = '#dddddd';
    footer.style.color = '#dddddd';
    darkmodeActive = true;
  } else if(darkmodeActive === true){
    document.body.style.backgroundColor = '#ffffff'
    ctah1.style.color = '#000000';
    featHeader.style.color = '#000000';
    featContent.style.color = '#000000';
    aboutHeader.style.color = '#000000';
    aboutContent.style.color = '#000000';
    servicesHeader.style.color = '#000000';
    servicesContent.style.color = '#000000';
    productHeader.style.color = '#000000';
    productContent.style.color = '#000000';
    visionHeader.style.color = '#000000';
    visionContent.style.color = '#000000';
    contactContent[0].style.color = '#000000';
    contactContent[1].style.color = '#000000';
    contactContent[2].style.color = '#000000';
    footer.style.color = '#000000';
    darkmodeActive = false;
  }
}

let newButton = document.createElement('button');
newButton.innerText = 'Dark Mode?';
newButton.addEventListener('click', function(){darkMode()});
nav.appendChild(newButton);