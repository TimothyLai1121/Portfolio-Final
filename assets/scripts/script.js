// Updating aboutme greeting based on time of day //
let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18) {
    greeting = 'Good evening, welcome to my page!';
} else if (hourNow >= 12) {
    greeting = 'Good afternoon, welcome to my page!';
} else if (hourNow >= 0) {
    greeting = 'Good morning, welcome to my page!';
} else {
    greeting = 'Welcome to my page!';
}

let greetingBasedOnTime = document.getElementById('greeting');
greetingBasedOnTime.textContent = greeting;

// End of aboutme greeting based on time of day //

// softer click on nav links //

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // end of softer click on nav links //

// Quote of the day //  
let intervalId;

fetch("https://type.fit/api/quotes")
  .then(response => response.json())
  .then(data => {
    const quotesOfDays = document.querySelector(".quotesOfDays");

    const displayQuote = () => {
      const quote = data[Math.floor(Math.random() * data.length)];
      const quoteEl = document.createElement("p");
      let quoteText = `"${quote.text}" - ${quote.author}`;
      let index = 0;

      const typeWriter = () => {
        if (index < quoteText.length) {
          if (quoteText.charAt(index) === " ") {
            quoteEl.innerHTML += "&nbsp;";
          } else {
            quoteEl.innerText += quoteText.charAt(index);
          }
          index++;
          setTimeout(typeWriter, 50);
        }
      };

      typeWriter();
      quotesOfDays.innerHTML = "";
      quotesOfDays.appendChild(quoteEl);
    };

    displayQuote();
    intervalId = setInterval(displayQuote, 32000);
  });




  // end of Quote of the day //

  // About me section //
  const aboutMe = document.querySelector("#about");
  const aboutLink = document.querySelector("a[href='#about']");
  
  aboutMe.style.display = "none";
  aboutMe.style.opacity = "0";
  aboutMe.style.transition = "opacity 1s ease-in-out";
  
  aboutLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (aboutMe.style.display === "block") {
      aboutMe.style.opacity = "0";
      setTimeout(function() {
        aboutMe.style.display = "none";
      }, 1000);
    } else {
      aboutMe.style.display = "block";
      setTimeout(function() {
        aboutMe.style.opacity = "1";
      }, 10);
    }
  });
  
  const skillSets = document.querySelector("#skills");
  const skillLink = document.querySelector("a[href='#skills']");
  
  skillSets.style.display = "none";
  skillSets.style.opacity = "0";
  skillSets.style.transition = "opacity 1s ease-in-out";
  
  skillLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (skillSets.style.display === "block") {
      skillSets.style.opacity = "0";
      setTimeout(function() {
        skillSets.style.display = "none";
      }, 1000);
    } else {
      skillSets.style.display = "block";
      setTimeout(function() {
        skillSets.style.opacity = "1";
      }, 10);
    }
  });
  
  const socialMedia = document.querySelector("#socialMedia");
  const socialLink = document.querySelector("a[href='#socialMedia']");
  
  socialMedia.style.display = "none";
  socialMedia.style.opacity = "0";
  socialMedia.style.transition = "opacity 1s ease-in-out";
  
  socialLink.addEventListener("click", function(event) {
    event.preventDefault();
    if (socialMedia.style.display === "block") {
      socialMedia.style.opacity = "0";
      setTimeout(function() {
        socialMedia.style.display = "none";
      }, 1000);
    } else {
      socialMedia.style.display = "block";
      setTimeout(function() {
        socialMedia.style.opacity = "1";
      }, 10);
    }
  });
  