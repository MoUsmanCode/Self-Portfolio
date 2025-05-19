AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
    title: "IT Support Analyst",
    cardImage: "assets/images/experience-page/derma_science.png",
    place: "Derma Science",
    time: "(May, 2025 - Present)",
    desp: "<li>Managed and analyzed ERP data in Sage, ensuring 99%+ accuracy to support reporting and operational efficiency.</li> <li>Installed and configured 30+ workstations, optimizing system performance and reducing setup time by 40%.</li> <li>Managed user accounts and permissions across Microsoft, Windows, ERP, and warehouse systems, enhancing security compliance.</li> <li>Resolved 50+ IT issues with cross-functional teams, cutting downtime by 25% and improving response speed.</li>"
  },
  {
    title: "President - Project Developers OTU",
    cardImage: "assets/images/experience-page/image(1).jpg",
    place: "Ontario Tech University",
    time: "(Aug, 2024 - Present)",
    desp: "<li>Led the club’s strategic development, overseeing initiatives to enhance members’ programming skills and career growth.</li> <li>Organized and executed events such as coding challenges, collaborative hackathons, and virtual coding escape rooms.</li> <li>Fostered a learning environment, mentoring members in Python, Java, JavaScript, C++, and software development methodologies.</li> <li>Collaborated with officers and members to ensure teamwork, inclusivity, and productivity within the club.</li> <li>Managed resources effectively, including budgeting and sourcing materials for smooth event execution.</li> <li>Represented the club to the university and broader community, promoting innovation and collaboration in software development.</li> <li>Guided members in developing portfolios, improving problem-solving skills, and staying updated on emerging technologies.</li>"  
  },
    {
    title: "Full Stack Developer",
    cardImage: "assets/images/experience-page/karloo.jpg",
    place: "Karloo Logistics Ltd.",
    time: "(Sep, 2024 - April 2025)",
    desp: "<li>Led a team of 3 developers to design and launch the company’s official website, boosting online engagement by 45% through a responsive UI using HTML, CSS, and JavaScript.</li> <li>Deployed scalable AWS infrastructure with SSL, ensuring 99.9% uptime and safeguarding user data.</li> <li>Developed backend APIs using Node.js and Express.js to handle form submissions and dynamic content, reducing manual data handling by 60%.</li>"
  },
  {
    title: "Junior Financial Aid Assistant",
    cardImage: "assets/images/experience-page/Experience1.png",
    place: "Ontario Tech University",
    time: "(May, 2024 - Sep 2024)",
    desp: "<li>Designed and implemented Python scripts to automate data entry processes, reducing manual work by 25%.</li> <li>Developed SQL queries to extract and analyze financial aid data from the ERP system (Banner), improving reporting accuracy.</li> <li>Created a web-based dashboard using React and Flask to streamline payment plan workflows for tracking and managing student accounts.</li> <li>Integrated encryption protocols to ensure data security and compliance for student funding records.</li> <li>Collaborated with cross-functional teams to prototype an automated notification system for financial aid updates.</li> <li>Applied machine learning algorithms to predict trends in student funding needs, optimizing resource allocation.</li> <li>Maintained comprehensive documentation and conducted regular audits to ensure the reliability of data pipelines.</li>"  
  },
  {
    title: "Game Day Staff",
    cardImage: "assets/images/experience-page/Experience3.png",
    place: "Ontario Tech University",
    time: "(May, 2023 - April 2024)",
    desp: "<li>Managed game day logistics, ensuring seamless event execution under time constraints.</li> <li>Utilized problem-solving skills to quickly resolve technical and logistical challenges.</li> <li>Demonstrated adaptability and decision-making in high-pressure situations.</li> <li>Provided customer support, effectively handling inquiries and resolving issues in real time.</li> <li>Collaborated with event staff to optimize operations, ensuring an efficient workflow.</li>"  
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(  
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);



const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Hack Hive",
    subtitle: "Participant",
    image: "assets/images/experience-page/hackhive.png",
    desp: "I'm excited to participate in HackHive, where I'll collaborate with my team to tackle real-world challenges and apply my technical skills in a fast-paced environment. With the theme AI for a Better Tomorrow, I'll be exploring how machine learning and AI-driven solutions can optimize systems, enhance decision-making, and contribute to innovative, impactful technologies.",
    href: "https://www.instagram.com/p/DEs1DYRR7RH/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
