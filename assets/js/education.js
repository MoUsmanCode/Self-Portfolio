AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Discrete Mathematics for Computer Scientists - Logic, Set Theory, Graph Theory",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=48&coid=79362#:~:text=This%20is%20an%20elementary%20introduction,state%20machines%2C%20and%20graph%20theory.",
  },
  {
    title: "Computational Science I - Numerical Methods, Scientific Computing, Parallel Computing",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=62&coid=113002",
  },
  {
    title: "Data Structures - Arrays, Trees, Graphs, Hashing",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=48&coid=79358",
  },
  {
    title: "Software Design and Analysis - Design Patterns, UML, SOLID Principles",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=67&coid=123549",
  },
  {
    title: "Software Systems Development - API Development, CI/CD, Microservices",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=62&coid=112282",
  },
  {
    title: "Linear Algebra - Matrices, Eigenvalues, Linear Transformations",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=48&coid=79804",
  },
  {
    title: "Scientific Data Analysis - Statistical Analysis, Data Visualization, Regression Models",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=62&coid=112280",
  },
  {
    title: "Calculus II - Integrals, Sequences, Differential Equations",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=48&coid=79800",
  },
  {
    title: "Physics II - Electricity, Thermodynamics, Quantum Mechanics",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink:
      "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=48&coid=79912",
  },
  {
    title: "Computer Architecture I - Assembly, CPU Design, Pipelining",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=67&coid=123550",
  },
  {
    title: "Programming Workshop II - OOP, Web Development, Software Testing",
    cardImage: "assets/images/education-page/otu.jpg",
    moocLink: "https://calendar.ontariotechu.ca/preview_course_nopop.php?catoid=62&coid=113001",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
