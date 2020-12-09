"use strict";
console.log("Hey, Don't dig to deep! :) ");

AOS.init({
  duration: 1200,
});

$(function () {
      $('.contactEmail').click(function (event) {
        var email = 'ore.yusuf@hotmail.co.uk';
        var subject = 'Contact - Oreyusuf.com';
        var emailBody = 'Hi Ore, ';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
      });
    });

// let userNameKey = "";

// const iniCheck = () => {
// console.log("hhhhhhh")
// userNameKey = "Username";
//
//   if (localStorage.getItem(userNameKey) == null) {
//
//       localStorage.setItem(userNameKey, 'unknown');
//
//   } else {
//       alert("Welcome Back !");
//       return true;
//   }
//
// }
//  iniCheck();

// const formFinish = () => {
//   console.log("Form Submitted");
//   document.getElementsByClassName('dialog')[0].style.display = "block";
//   document.getElementsByClassName('contactForm')[0].style.display = "none";
//
//   let userNameValue = document.getElementById("contactname").value;
//
// if (userNameValue == null) {
//   return false;
// }else{
//   localStorage.setItem(userNameKey, userNameValue);
//   alert("Thanks " + userNameValue + "!" +" I will get back to you as soon as possible");
// }

// }
// document.getElementById("contactSubmit").addEventListener("click",formFinish);


// const writeMoreBlog = (data) => {
//   let theData = "";
//   let langLinks = "";
//   let img = "";
//   let title = "";
//   let k;
//   let key;
//
//   for(k = 0; k < 6; k++) {
//     let currentPage = data.articles[k];
//     console.log(currentPage);
//     if (currentPage.urlToImage) {
//       img = currentPage.urlToImage;
//       title = currentPage.title;
//       console.log(img);
//       console.log(title);
//       // img = `<img  src="${currentPage.urlToImage}" alt="${currentPage.title}">`;
//     }
//     // let title = `<p> ${currentPage.title} </p>`;
//     let toImage = ('image' + k);
//     let toTitle = ('title' + k);
//     //alert(toImage);
//     document.getElementById(toImage).src = img;
//     document.getElementById(toTitle).textContent = title;
//   }
// }

// const techNewsApi = () => {
//
//   const nxhr = new XMLHttpRequest();
//
//   const baseURL = "https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=e6fb25eaca55406194636962f43854c8";
//
//   nxhr.open("GET", baseURL, true);
//
//   nxhr.send();
//
//   nxhr.onreadystatechange = function() {
//
//     if (nxhr.readyState === 4 && nxhr.status === 200) {
//       console.log(this.responseText);
//       let response = JSON.parse(nxhr.responseText);
//       console.log(response.articles);
//       writeMoreBlog(response);
//     }
//   };
// }
//
// techNewsApi();


/////////////
const gatherData = (data) => {
 let theData = "";
 theData = data.contents.quotes[0].quote;
 document.getElementById("qod").innerHTML = theData;
}

const get_quote_of_the_day = () => {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
     let response = JSON.parse(this.responseText);
     gatherData(response);
    }
  };

 xhttp.open("GET", "https://quotes.rest/qod?language=en", true);
 xhttp.send();
}

get_quote_of_the_day()


const writeToBlog = (qouteData) => {

   let rawString = "";
   rawString = qouteData.rate;
    ///to two decimal places
  rawString = rawString.toFixed(2);
   document.getElementById("title_bitcoin").innerHTML = " £ ".concat(rawString);
  }


const bitcoinApi = () => {
  console.log("Bitcoin_Api_Launched");
  const bxhr = new XMLHttpRequest();

//Sandbox endpoint: https://rest-sandbox.coinapi.io/

  const baseURL = "https://rest-sandbox.coinapi.io/v1/exchangerate/BTC/GBP?apikey=1F091DFF-88D0-44C8-84C5-A4FCA539EA25";

  bxhr.open("GET", baseURL, true);

  bxhr.setRequestHeader('X-CoinAPI-Key', '1F091DFF-88D0-44C8-84C5-A4FCA539EA25');
  bxhr.setRequestHeader("Content-type", "application/json");

  bxhr.send();

  bxhr.onreadystatechange = function() {
    //Current state to log
    console.log(`Current readyState: ${bxhr.readyState}`);

    if (bxhr.readyState === 4 && bxhr.status === 200) {

    let response = JSON.parse(bxhr.responseText);
    writeToBlog(response);
    console.log(response);
    console.log(response.rate);
    }
  }
}

  bitcoinApi();




//Keep header in place through entire page
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
  }
  else {
    document.getElementById("navbar").style.top = "-105px";
    document.getElementById("navbar").style.boxShadow = "none";
  }
  prevScrollpos = currentScrollPos;
}

//remove backshadow when top of page.
window.addEventListener("scroll", function (e) {
  var scrollTop = document.body.scrollTop;
  if (window.pageYOffset === 0) {
    document.getElementById("navbar").style.boxShadow = "none";
    console.log(window.scrollY);
  }
});

//Mobile Menu Nav Toggle
const menuToggle = document.getElementById('menu-toggle');
const menuContainer = document.getElementById('menuContainer');
const navitems = document.getElementsByClassName('nav_items')[0].getElementsByTagName('li');

const toggleMenu = () => {
  console.log("I have called toggleMenu");
  console.log(navitems);
  menuContainer.classList.toggle("menu-toggle");
}

menuToggle.addEventListener("click", toggleMenu);

//Add listerner For each menu item to close menu on click
for (let i = 0; i < navitems.length; i++) {
  navitems[i].addEventListener("click", toggleMenu);
}




//See More button toggle
const toggleBtn = document.getElementById('seeMore');
const cards = document.getElementsByClassName('morecards');

const toggleCards = () => {
  console.log("You clicked to see more");
  if (document.querySelector('.seeMoreBtn .activebtn').innerHTML == "See More") {

    for (let j = 0; j < cards.length; j++) {
      cards[j].style.display = 'block';
      document.querySelector('.seeMoreBtn .activebtn').innerHTML = "Hide";
    }

  }
  else {

    for (let k = 0; k < cards.length; k++) {
      cards[k].style.display = 'none';
      document.querySelector('.seeMoreBtn .activebtn').innerHTML = "See More";

    }

  }

}

toggleBtn.addEventListener("click", toggleCards);


const closeTab = () => {
  //Hide all the tabs
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
}

closeTab();


const openTab = (btnpressed, tabName) => {
  closeTab();
  document.getElementById(tabName).style.display = "flex";

  let btntab = document.getElementsByClassName("tablinks");
  for (let i = 0; i < btntab.length; i++) {
    btntab[i].style.borderBottom = "none";
  }

  document.getElementById(btnpressed).style.borderBottom = "thick solid #CBEF43";


}
document.getElementById("btn_front-end").addEventListener("click", function () {
  openTab("btn_front-end", "Front-End");
});
document.getElementById("btn_back-end").addEventListener("click", function () {
  openTab("btn_back-end", "Back-End");
});
document.getElementById("btn_frameworksplatforms").addEventListener("click", function () {
  openTab("btn_frameworksplatforms", "Frameworks&Platforms");
});


//Open front end by default
document.getElementById("btn_front-end").click();


///
