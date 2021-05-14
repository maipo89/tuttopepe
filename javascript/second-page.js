// When the user scrolls down 50px from the top of the document, resize the header's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.height= "135px";
    document.getElementById('logo').style.width= "140px";
    document.getElementById('red-bar').style.display= "none";
    document.getElementById('header-responsive').style.height= "100px";
    document.getElementById('logo-container').style.height= "100px";
    document.getElementById('area-accessories').style.top= "130px";
    document.getElementById('area-accessories1').style.top= "130px";
    document.getElementById('area-accessories2').style.top= "130px";
    document.getElementById('area-accessories3').style.top= "130px";
    document.getElementById('area-accessories4').style.top= "130px";
  } else {
    document.getElementById('header').style.height= "165px";
    document.getElementById('logo').style.width= "180px";
    document.getElementById('red-bar').style.display= "flex"
    document.getElementById('header-responsive').style.height= "130px";
    document.getElementById('logo-container').style.height= "150px";
    document.getElementById('area-accessories').style.top= "160px";
    document.getElementById('area-accessories1').style.top= "160px";
    document.getElementById('area-accessories2').style.top= "160px";
    document.getElementById('area-accessories3').style.top= "160px";
    document.getElementById('area-accessories4').style.top= "160px";
  }
}

// Hamburger Menu //

const hamburgerMenu = document.getElementById('hamburger-menu');
const menu = document.getElementById('menu');
const menuBackground = document.getElementById('menu-background');
const xLogo = document.getElementById('x-logo')

hamburgerMenu.addEventListener('click', openMenu);

function openMenu(event)  {
   menu.style.visibility = "visible";
   menuBackground.style.visibility = "visible";
   menu.style.left = "0%";
   menu.style.width = "270px";
   xLogo.style.right = "20px";
} 

xLogo.addEventListener('click', closeMenu);
menuBackground.addEventListener('click', closeMenu);

function closeMenu(event)  {
  menu.style.visibility = "hidden";
  menuBackground.style.visibility = "hidden";
  menu.style.left = "-62%";
  menu.style.right = "162%";
  xLogo.style.right = "-40px";
  menuAccessories.style.visibility = "hidden";
  menuAccessories.style.left = "-62%";
  menuAccessories.style.right = "162%";
  menuShoes.style.visibility = "hidden";
  menuShoes.style.left = "-62%";
  menuShoes.style.right = "162%";
  menuClothing.style.visibility = "hidden";
  menuClothing.style.left = "-62%";
  menuClothing.style.right = "162%";
  menuBags.style.visibility = "hidden";
  menuBags.style.left = "-62%";
  menuBags.style.right = "162%";
  menuNewArrivals.style.visibility = "hidden";
  menuNewArrivals.style.left = "-62%";
  menuNewArrivals.style.right = "162%";
}

// Accessories Hamburger Menu //

const accessoriesHamburger = document.getElementById('accessories-hamburger');
const arrowAccessories = document.getElementById('arrow-hamburger-accessories');
const menuAccessories = document.getElementById('menu1');

arrowAccessories.addEventListener('click', openMenuAccessories);
accessoriesHamburger.addEventListener('click', openMenuAccessories);

function openMenuAccessories(event)  {
  menuAccessories.style.visibility = "visible";
  menuAccessories.style.left = "0%";
  menuAccessories.style.width = "270px";
}

const accessoriesBack = document.getElementById('accessories-back');
const arrowAccessoriesBack = document.getElementById('arrow-accessories-back');

accessoriesBack.addEventListener('click', backToMenu);
arrowAccessoriesBack.addEventListener('click', backToMenu);

function backToMenu(event)  {
  menuAccessories.style.visibility = "hidden";
  menuAccessories.style.left = "-62%";
  menuAccessories.style.right = "162%";
}

// Shoes Hamburger Menu //

const shoesHamburger = document.getElementById('shoes-hamburger');
const arrowShoes = document.getElementById('arrow-hamburger-shoes');
const menuShoes = document.getElementById('menu2');

arrowShoes.addEventListener('click', openMenuShoes);
shoesHamburger.addEventListener('click', openMenuShoes);

function openMenuShoes(event)  {
  menuShoes.style.visibility = "visible";
  menuShoes.style.left = "0%";
  menuShoes.style.width = "270px";
}

const shoesBack = document.getElementById('shoes-back');
const arrowShoesBack = document.getElementById('arrow-shoes-back');

shoesBack.addEventListener('click', backToMenu1);
arrowShoesBack.addEventListener('click', backToMenu1);

function backToMenu1(event)  {
  menuShoes.style.visibility = "hidden";
  menuShoes.style.left = "-62%";
  menuShoes.style.right = "162%";
}

// Clothing Hamburger Menu //

const clothingHamburger = document.getElementById('clothing-hamburger');
const arrowClothing = document.getElementById('arrow-hamburger-clothing');
const menuClothing = document.getElementById('menu3');

arrowClothing.addEventListener('click', openMenuClothing);
clothingHamburger.addEventListener('click', openMenuClothing);

function openMenuClothing(event)  {
  menuClothing.style.visibility = "visible";
  menuClothing.style.left = "0%";
  menuClothing.style.width = "270px";
}

const clothingBack = document.getElementById('clothing-back');
const arrowClothingBack = document.getElementById('arrow-clothing-back');

clothingBack.addEventListener('click', backToMenu2);
arrowClothingBack.addEventListener('click', backToMenu2);

function backToMenu2(event)  {
  menuClothing.style.visibility = "hidden";
  menuClothing.style.left = "-62%";
  menuClothing.style.right = "162%";
}

// Bags Hamburger Menu //

const bagsHamburger = document.getElementById('bags-hamburger');
const arrowBags = document.getElementById('arrow-hamburger-bags');
const menuBags = document.getElementById('menu4');

arrowBags.addEventListener('click', openMenuBags);
bagsHamburger.addEventListener('click', openMenuBags);

function openMenuBags(event)  {
  menuBags.style.visibility = "visible";
  menuBags.style.left = "0%";
  menuBags.style.width = "270px";
}

const bagsBack = document.getElementById('bags-back');
const arrowBagsBack = document.getElementById('arrow-bags-back');

bagsBack.addEventListener('click', backToMenu3);
arrowBagsBack.addEventListener('click', backToMenu3);

function backToMenu3(event)  {
  menuBags.style.visibility = "hidden";
  menuBags.style.left = "-62%";
  menuBags.style.right = "162%";
}

// NewArrivals Hamburger Menu //

const newArrivalsHamburger = document.getElementById('newarrivals-hamburger');
const arrowNewArrivals = document.getElementById('arrow-hamburger-newarrivals');
const menuNewArrivals = document.getElementById('menu5');

arrowNewArrivals.addEventListener('click', openMenuNewArrivals);
newArrivalsHamburger.addEventListener('click', openMenuNewArrivals);

function openMenuNewArrivals(event)  {
  menuNewArrivals.style.visibility = "visible";
  menuNewArrivals.style.left = "0%";
  menuNewArrivals.style.width = "270px";
}

const newArrivalsBack = document.getElementById('newarrivals-back');
const arrowNewArrivalsBack = document.getElementById('arrow-newarrivals-back');

newArrivalsBack.addEventListener('click', backToMenu4);
arrowNewArrivalsBack.addEventListener('click', backToMenu4);

function backToMenu4(event)  {
  menuNewArrivals.style.visibility = "hidden";
  menuNewArrivals.style.left = "-62%";
  menuNewArrivals.style.right = "162%";
}

// Contact Us Menu //

const arrow = document.getElementById('arrow');
const contactUs = document.getElementById('contact-us');
const costumerService = document.getElementById('costumer-service');

const arrowWrapper = document.querySelector('.arrow-wrapper');

arrowWrapper.addEventListener('click', animateArrow);

function animateArrow(event) {
  arrowWrapper.classList.toggle('open-bar');
}

arrow.addEventListener('click', openBar);

function openBar(event) {
  contactUs.classList.toggle('toggle-contactus')
  costumerService.classList.toggle('toggle-costumerservice');
}

// Shop Menu //

const shopResponsive = document.getElementById('shop-responsive');
const shopPosition = document.getElementById('shop-position-responsive');
const arrow2 = document.getElementById('arrow2');

const arrowWrapper2 = document.querySelector('.arrow-wrapper2');

arrowWrapper2.addEventListener('click', animateArrow2);

function animateArrow2(event) {
  arrowWrapper2.classList.toggle('open-bar2');
}

arrow2.addEventListener('click', openBar2);

function openBar2(event) {
  shopPosition.classList.toggle('toggle-contactus')
  shopResponsive.classList.toggle('toggle-costumerservice');
}

// Accessories Hover //

const accessories = document.getElementById('accessories');
const areaAccessories = document.getElementById('area-accessories');
const after = document.getElementById('after');
const before = document.getElementById('before');

accessories.addEventListener('mouseover', showArea);
areaAccessories.addEventListener('mouseover', showArea);

function showArea(event) {
  areaAccessories.style.display = "flex";
}

accessories.addEventListener('mouseout', hideArea);
areaAccessories.addEventListener('mouseout', hideArea);

function hideArea(event) {
  areaAccessories.style.display = "none";
}

// Shoes Hover //

const shoes = document.getElementById('shoes');
const areaShoes = document.getElementById('area-accessories1');

shoes.addEventListener('mouseover', showShoes);
areaShoes.addEventListener('mouseover', showShoes);

function showShoes(event)  {
   areaShoes.style.display = "flex";
}

shoes.addEventListener('mouseout', hideShoes);
areaShoes.addEventListener('mouseout', hideShoes);

function hideShoes(event)  {
   areaShoes.style.display = "none";
}

// Clothing Hover //

const clothing = document.getElementById('clothing');
const areaClothing = document.getElementById('area-accessories2');

clothing.addEventListener('mouseover', showClothing);
areaClothing.addEventListener('mouseover', showClothing);

function showClothing(event)  {
  areaClothing.style.display = "flex";
}

clothing.addEventListener('mouseout', hideClothing);
areaClothing.addEventListener('mouseout', hideClothing);

function hideClothing(event)  {
  areaClothing.style.display = "none";
}

// Bags Hover //

const bags = document.getElementById('bags');
const areaBags = document.getElementById('area-accessories3');

bags.addEventListener('mouseover', showBags);
areaBags.addEventListener('mouseover', showBags);

function showBags(event)  {
  areaBags.style.display = "flex";
}

bags.addEventListener('mouseout', hideBags);
areaBags.addEventListener('mouseout', hideBags);

function hideBags(event)  {
  areaBags.style.display = "none";
}

// New Arrivals Hover //

const newArrivals = document.getElementById('new-arrivals');
const areaNewArrivals = document.getElementById('area-accessories4');

newArrivals.addEventListener('mouseover', showNewArrivals);
areaNewArrivals.addEventListener('mouseover', showNewArrivals);

function showNewArrivals(event) {
   areaNewArrivals.style.display = "flex";
}

newArrivals.addEventListener('mouseout', hideNewArrivals);
areaNewArrivals.addEventListener('mouseout', hideNewArrivals);

function hideNewArrivals(event) {
   areaNewArrivals.style.display = "none";
}

// Open Search Window //  

const searchIcon = document.getElementById('search-icon');
const searchWindow = document.getElementById('search-window');
const closeSearchWindow = document.getElementById('close-search');
const accountIconSearch = document.getElementById('account-icon-search');
const shoppingCartIconSearch = document.getElementById('shopping-cart-icon-search');

searchIcon.addEventListener('click', OpenMenuSearch);

function OpenMenuSearch(event)  {
  searchWindow.style.top = "0px";
}

accountIconSearch.addEventListener('click', OpenMenuAccount2);

function OpenMenuAccount2(event)  {
  searchWindow.style.top = "-200px";
  accountWindow.style.top= "0px"
}

shoppingCartIconSearch.addEventListener('click', OpenMenuShoppingCart2);

function OpenMenuShoppingCart2(event)  {
  searchWindow.style.top = "-200px";
  shoppingCartWindow.style.top= '0px';
}

closeSearchWindow.addEventListener('click', CloseMenuSearch);

function CloseMenuSearch(event)  {
  searchWindow.style.top = "-200px";
}


// Open Account Window //

const accountIcon = document.getElementById('account-icon');
const accountWindow = document.getElementById('account-window');
const closeAccountWindow = document.getElementById('close-account');
const accountSearchIcon = document.getElementById('account-search-icon');
const accountShoppingCartIcon = document.getElementById('account-shopping-cart-icon');

accountIcon.addEventListener('click', OpenMenuAccount);

function OpenMenuAccount(event)  {
  accountWindow.style.top = "0px";
}

accountSearchIcon.addEventListener('click', OpenMenuSearch2);

function OpenMenuSearch2(event)  {
  searchWindow.style.top = "0px";
  accountWindow.style.top= "-200px"
}

accountShoppingCartIcon.addEventListener('click', OpenShoppingCartMenu);

function OpenShoppingCartMenu(event)  {
  accountWindow.style.top= "-200px";
  shoppingCartWindow.style.top= "0";
}

closeAccountWindow.addEventListener('click', CloseMenuAccount);

function CloseMenuAccount(event)  {
  accountWindow.style.top = "-200px";
}

// Open Shopping Cart Window //

const shoppingCartIcon = document.getElementById('shopping-cart-icon');
const shoppingCartWindow = document.getElementById('shopping-cart-window');
const closeShoppingCartWindow = document.getElementById('close-shopping-cart');
const shoppingCartAccountIcon = document.getElementById('shopping-cart-account-icon');
const shoppingCartSearchIcon = document.getElementById('shopping-cart-search-icon');

shoppingCartIcon.addEventListener('click', OpenMenuShoppingCart);

function OpenMenuShoppingCart(event)  {
  shoppingCartWindow.style.top = "0px";
}

shoppingCartAccountIcon.addEventListener('click', OpenMenuAccount3);

function OpenMenuAccount3(event)  {
  shoppingCartWindow.style.top = "-200px";
  accountWindow.style.top = "0px";
}

shoppingCartSearchIcon.addEventListener('click', OpenMenuSearch3);

function OpenMenuSearch3(event)  {
  shoppingCartWindow.style.top = "-200px";
  searchWindow.style.top = "0px";
}

closeShoppingCartWindow.addEventListener('click', CloseMenuShoppingCart);

function CloseMenuShoppingCart(event)  {
  shoppingCartWindow.style.top = "-200px";
}

// Shopping Cart Responsive //

const shoppingCartIconResponsive = document.getElementById('shopping-cart-responsive');

shoppingCartIconResponsive.addEventListener('click', OpenMenuShoppingCart);


// Search Responsive //

const searchIconResponsive = document.getElementById('search-icon-responsive');

searchIconResponsive.addEventListener('click', OpenMenuSearch);

// Open Banner Subscribe //

const closeBanner = document.getElementById('close-banner');
const bannerSubscribe = document.getElementById('banner-subscribe');

setTimeout(OpenBanner, 5000);

function OpenBanner(event)  {
  bannerSubscribe.style.bottom = "0px";
}

closeBanner.addEventListener('click', closeSubscribe)

function closeSubscribe(event)  {
  bannerSubscribe.style.bottom = "-400px";
}

// Open Newsletter // 

const newsletterMessage = document.getElementById('newsletter-message');
const subscribeButton = document.querySelectorAll('.subscribebutton');
const xLogoNewsletter = document.getElementById('x-logo-newsletter');

subscribeButton.forEach (function (subscribebutton)  {
  subscribebutton.addEventListener('click', OpenNewsletterWindow);
})

function OpenNewsletterWindow(event)  {
  newsletterMessage.style.display= "block";
}

xLogoNewsletter.addEventListener('click', closeNewsletter);

function closeNewsletter(event)  {
  newsletterMessage.style.display= "none";
}

// Open Window Country //

const countryWindow = document.getElementById('country-window');
const closeCountryWindow = document.getElementById('close-country-window');
const flag = document.querySelectorAll('.flag-italy');

flag.forEach (function (flagitaly)  {
   flagitaly.addEventListener('click', OpenCountryWindow);
})

function OpenCountryWindow(event)  {
  countryWindow.style.display = "block";
}

closeCountryWindow.addEventListener('click', CloseCountryMenu);

function CloseCountryMenu(event)  {
  countryWindow.style.display = "none";
}

// Button Numbers Increment //

function up(max) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
  if (document.getElementById("myNumber").value >= parseInt(max)) {
      document.getElementById("myNumber").value = max;
  }
}

function down(min) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
  if (document.getElementById("myNumber").value <= parseInt(min)) {
      document.getElementById("myNumber").value = min;
  }
}

// Arrow Second Page //

const arrowShippingInformations = document.getElementById('arrow-shipping-informations');
const shippingInformations = document.getElementById('shipping-informations');
const descriptionprice = document.getElementById('description-price');

arrowShippingInformations.addEventListener('click', OpenShippingInformations);

function OpenShippingInformations(event)  {
  shippingInformations.classList.toggle('shipping-informations2');
  arrowShippingInformations.classList.toggle('animation-shipping');
  descriptionprice.classList.toggle('description-price2');
}

const arrowShippingInformations2 = document.getElementById('arrow-shipping-informations2');
const shippingInformations2 = document.getElementById('shipping-informations2');

arrowShippingInformations2.addEventListener('click', OpenShippingInformations2);

function OpenShippingInformations2(event)  {
  shippingInformations2.classList.toggle('shipping-informations2');
  arrowShippingInformations2.classList.toggle('animation-shipping');
}