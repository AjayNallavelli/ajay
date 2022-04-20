AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "Flipkart",
    time: "(May, 2020 - present)",
    desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  },
  {
    title: "Student Developer",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "Google Summer Of Code",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
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

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

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
    title: "Vivekananda: A Biography ",
    subtitle: "by Nikhilananda",
    image: "assets/images/experience-page/vivekananda.jpg",
    desp: "An absorbing biography of Swami Vivekananda (1863 - 1902) that presents his vast knowledge of Eastern and Western culture, deep spiritual insight, brilliant conversation, broad human sympathy, and colorful personality.",
  },
  {
    title: "The Secret ",
    subtitle: " by Rhonda Byrne",
    image: "assets/images/experience-page/secret.jpg",
    desp: "The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name.",
  },
  {
    title: "The Alchemist",
    subtitle: "by Paulo Coelho",
    image: "assets/images/experience-page/alchemist.jpg",
    desp: "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and soul-stirring wisdom, is about an Andalusian shepherd boy named Santiago, who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids.",
  },
  {
    title: "Think Lilke a Monk",
    subtitle: "by Jay Shetty",
    image: "assets/images/experience-page/monk.jpg",
    desp: "In this inspiring, empowering book, Shetty draws on his time as a monk to show us how we can clear the roadblocks to our potential and power. Combining ancient wisdom and his own rich experiences in the ashram",
  },
  {
    title: "Anthem",
    subtitle: "by Ayn Rand",
    image: "assets/images/experience-page/anthem.jpg",
    desp: "Anthem has long been hailed as one of Ayn Rand's classic novels, and a clear predecessor to her later masterpieces, The Fountainhead and Atlas Shrugged. In Anthem, Rand examines a frightening future in which individuals have no name, no independence, and no values.",
  },
  {
    title: "నా ఇష్టం",
    subtitle: "by Ram Gopal Verma",
    image: "assets/images/experience-page/istam.jpg",
    desp: "Naa Ishtam' - An autobiography by Ram Gopal Verma. ”నీ కోసం నువ్వు బతుకు… ఎవర్నీ నీకోసం బతకమని అడక్కు” - అయాన్ ర్యాండ్ ",
  },
  {
    title: "The Fountainhead",
    subtitle: "by Ayn Rand",
    image: "assets/images/experience-page/fountainhead.jpg",
    desp: "The revolutionary literary vision that sowed the seeds of Objectivism, Ayn Rand's groundbreaking philosophy, and brought her immediate worldwide acclaim.",
  },
  {
    title: "Karna: Victory in Death",
    subtitle: "by Rik Hoskin,Sachin Nagar",
    image: "assets/images/experience-page/karna.jpg",
    desp: "Unwanted by his mother, snubbed by his blood-brothers and ridiculed by all, this is the story of the unsung hero of the Mahabharata. The graphic novel traces the life-journey of this brave and noble man who became victim to the twists of fate.",
  },
  {
    title: "Steve Jobs",
    subtitle: "by Walter Isaacson",
    image: "assests/images/experience-page/stevejobs.jpg",
    desp: "Walter Isaacson's (The New Yorker) worldwide bestselling biography of Apple cofounder Steve Jobs. Based on more than forty interviews with Steve Jobs conducted over two years--as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues",
  },
  {
    title: "Karna's Wife: The Outcast's Queen",
    subtitle: "by Kavita Kané",
    image: "assets/images/experience-page/mission.png",
    desp: "Karna's Wife: The Outcast's Queen tells the extraordinary story of Karna, the unsung hero of the Mahabharata, through the eyes of his wife Uruvi, bringing his story to the reader from a unique perspective.",
  },
   {
    title: "Nikola Tesla",
    subtitle: " by Sean Patrick",
    image: "assets/images/experience-page/tesla.jpg",
    desp: "If you want to learn about one of history’s most fascinating minds and uncover some of his secrets of imagination—secrets that enabled him to invent machines light years ahead of his time and literally bring light to the world—then you want to read this book.",
  },
  {
    title: "The Monk Who Sold His Ferrari",
    subtitle: " by Robin S. Sharma",
    image: "assets/images/experience-page/themonk.jpg",
    desp: "This inspiring tale provides a step-by-step approach to living with greater courage, balance, abundance, and joy. A wonderfully crafted fable, The Monk Who Sold His Ferrari tells the extraordinary story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life.",
  },
  {
    title: "One Indian Girl",
    subtitle: " by Chetan Bhagat",
    image: "assets/images/experience-page/girl.jpg",
    desp: "Hi, I'm Radhika Mehta and I'm getting married this week. I work at Goldman Sachs, an investment bank. Thank you for reading my story. However, let me warn you.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
