/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "AK'S Portfolio",
  description:
    "🚀 Fueling my Passion: Embarking on a DevOps Journey of Continuous Learning! 💡 ",
  og: {
    title: "Aditya Koganti Portfolio",
    type: "website",
    url: "http://adityakoganti.com/",
  },
};

//Home Page
const greeting = {
  title: "Aditya Koganti",
  logo_name: "AdityaKoganti",
  nickname: "Honey",
  subTitle:
    "🚀 Fueling my Passion: Embarking on a DevOps Journey of Continuous Learning! 💡 ",
  resumeLink:
    "https://drive.google.com/file/d/1SeqLSsGtuxBB9TNjvik4SrGHUU7q83Wo/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/Aditya056",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Aditya056",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aditya-koganti//",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:adityakoganti18@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/aditya.__.chowdary/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Programming Langauges",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Dedicated programming student with a strong foundation in C, C++, Python, and Java seeking a position that allows me to learn and grow in a team-oriented environment.",
        "⚡ seeking a challenging programming position to develop, test, and deploy software solutions that exceed user expectations.",
      ],
      softwareSkills: [
        {
          skillName: " C ",
          fontAwesomeClassname: "skill-icons:c",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: " C++ ",
          fontAwesomeClassname: "skill-icons:cpp",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "JAVA",
          fontAwesomeClassname: "skill-icons:java-dark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing applications using React Native and solo android apps using Kotlin",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/adityakoganti/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/adityakoganti18",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/aditya5620",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/aditya5603",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Prasad V Potluri Siddhartha Institute Of Technology,Kanuru,Vijayawada",
      subtitle: "B.Tech in Information Technology",
      logo_path: "pvp.png",
      alt_name: "PVPSIT KANURU",
      duration: "2020- PRESENT",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
        
      ],
      website_link: "https://www.pvpsiddhartha.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Programming Fundamentals",
      subtitle: "- Andrew D. Hilton",
      logo_path: "duke.png",
      certificate_link:
        "https://drive.google.com/file/d/1_TVCg83KLVs--DhlqnnpTItzL1_4YnfP/view?usp=sharing",
      alt_name: "Duke University",
      color_code: "#2596be",
    },
    {
      title: "English for Career Development",
      subtitle: "- Brian McManus",
      logo_path: "penn3.png",
      certificate_link:
        "https://drive.google.com/file/d/1yseSVpRPcgqKmMthjqv2v2tTvuGNpUxE/view?usp=sharing",
      alt_name: "Penn University",
      color_code: "#2596be",
    },
    {
      title: "Operating Systems and You: Becoming a PowerUser",
      subtitle: "- Google Via Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mOMYP3MEwH5Yg9ZAte7hph0LObReHOn4/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "System Administrator",
      subtitle: "- Catherine Lang",
      logo_path: "sn.png",
      certificate_link:
        "https://drive.google.com/file/d/153z1SJ-pC0g6zdrjYovSqyFBudLLi1Eu/view?usp=sharing",
      alt_name: "Service Now",
      color_code: "#2596be",
    },
    {
      title: "Modern Desktop Administrator Associate",
      subtitle: "- MCP",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XoKb_wPyiO-7U-yGqh2Zz5iNTvUTG7Ag/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Cloud Technical Essentials",
      subtitle: "- Alana Layton",
      logo_path: "aws1.png",
      certificate_link:
        "https://drive.google.com/file/d/1Vt8itaDOLxcrLdJBQRpZ5YUdqx46C4Io/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#1F70C199",
    },
    {
      title: "Cloud Digital Leader",
      subtitle: "- CDL",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1DSYlDXXTvbYA8lgPNqLS1WUSQl9CzgxX/view?usp=sharing",
      alt_name: "Google",
      color_code: "#4285F499",
    },
    {
      title: "Technical Support Fundamentals",
      subtitle: "- Google Via Coursera",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1MbEUKQ1S7GEUoU6zwe8RynKHfrnzx26r/view?usp=sharing",
      alt_name: "google",
      color_code: "#0C9D5899",
    },
    {
      title: "Office 365 for Administrators:Supporting Users (Office 365/Microsoft 365)",
      subtitle: "- Linked in Learning",
      logo_path: "linkedin.png",
      certificate_link:
        "https://drive.google.com/file/d/1yZqaWqLzU4O4ohRSAx4v_q3eCzuHC7aO/view?usp=sharing",
      alt_name: "Linkedin",
      color_code: "#010001",
    },
    {
      title: "Power Programmer",
      subtitle: "- Qwiklabs",
      logo_path: "forage.png",
      certificate_link:
        "https://drive.google.com/file/d/14qsH5SsGB_rWnhrWLsKE0V8GmV36JOf8/view?usp=sharing",
      alt_name: "FORAGE",
      color_code: "#4FA62C",
    },
    {
      title: "Data Science Foundations",
      subtitle: "- Great Learning Academy",
      logo_path: "gl.png",
      certificate_link:
        "https://drive.google.com/file/d/1M6Dbh0IQ46E7WqgE1STpzbBsAz5_9voT/view?usp=sharing",
      alt_name: "GREATLEARNING",
      color_code: "#FFBB0099",
    },
    {
      title: "The Fundamentals Of Digital Marketing",
      subtitle: "- Google Digital Unlocked",
      logo_path: "gdu.png",
      certificate_link:
        "https://drive.google.com/file/d/1c8bzN-WjIxukwg_dpvqS-jBuINL6_hOr/view?usp=sharing",
      alt_name: "GDU",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  header_image_path: "experience.svg",
  sections: [
    /*{
      title: "Work",
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "legato_logo.png",
          duration: "",
          location: "",
          description:
            "",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },*/
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Devlopment",
          company: "CodeClause",
          company_url: "https://drive.google.com/file/d/1ZW4V7QmWSIIPRpLKGVscHXcIWRkxzR12/view?usp=sharing",
          logo_path: "download.png",
          duration: "Jul 2023 - Aug 2023",
          //location: "San Francisco, USA",//
          description:
            "• Completed Various Tasks assigned as part of the internship such as TO-DO List and Stop Watch & Timer using VS code as IDE and using JavaScript and Html and CSS.Utilized HTML, CSS, and JavaScript to create a user-friendly interface.",
          color: "#000000",
        },
        {
          title: "ML Summer School",
          company: "Amazon",
          company_url: "https://drive.google.com/file/d/1_idZbkTtfefkaOgP4aBWeMnt3e0RlcKy/view?usp=sharing",
          logo_path: "download1.png",
          duration: "Sep 2023 - Oct 2023",
          //location: "Gurgaon, Haryana",//
          description:
            "🌟 As an Intern at AWS ML Summer School, I had the opportunity to work alongside some of the brightest minds in the machine learning industry. Throughout the program, I gained hands-on experience working on real-world projects and learned about the latest advancements in machine learning from top experts at Amazon Web Services. 🚀💻 During my time at AWS ML Summer School, I worked on a variety of projects ranging from natural language processing to computer vision, honing my skills in areas such as data analysis, model training, and deployment. 📊🤖 Additionally, I collaborated with a diverse group of peers, exchanging ideas and insights that helped me to grow both personally and professionally. 👥💡🌈 Overall, my experience at AWS ML Summer School was both rewarding and challenging, and I am grateful for the opportunity to have been a part of such an exceptional program. I look forward to continuing to build upon the skills and knowledge I gained through this experience in my future endeavors.🌟 As an Intern at AWS ML Summer School, I had the opportunity to work alongside some of the brightest minds in the machine learning industry. Throughout the program, I gained hands-on experience working on real-world projects and learned about the latest advancements in machine learning from top experts at Amazon Web Services. 🚀 💻 During my time at AWS ML Summer School, I worked on a variety of projects ranging from natural language processing to computer vision, honing my skills in areas such as data analysis, model training, and deployment. 📊🤖 Additionally, I collaborated with a diverse group of peers, exchanging ideas and insights that helped me to grow both personally and professionally. 👥💡 🌈 Overall, my experience at AWS ML Summer School was both rewarding and challenging, and I am grateful for the opportunity to have been a part of such an exceptional program. I look forward to continuing to build upon the skills and knowledge I gained through this experience in my future endeavors.Skills: Machine Learning · TensorFlow · Deep Neural Networks (DNN) · Data Analysis",
          color: "#ee3c26",
        },
        /*{
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Institute Innovation Council Department Coordinator",
          company: "IIC",
          company_url: "https://iic.mic.gov.in/",
          logo_path: "iic.png",
          duration: "Oct 2022 - Present",
          //location: "Hyderabad, Telangana",//
          description:
            "Serving as a volunteer Institute Innovation Council Department Coordinator, leading efforts to promote innovation and entrepreneurship on campus, including organizing events and workshopsand collaborating with stakeholders to identify and support promising student-led initiatives.",
          color: "#4285F4",
        },
        /*{
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },*/
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  /*title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",*/
};

const publications = {
 data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me2.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "https://www.thehansindia.com/news/cities/vijayawada/vijayawada-chennai-team-bags-first-prize-in-hackathon-791301",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Get In Touch",
    
    subtitle:
      "Have a question, suggestion, or just want to say hello? Drop an email and will get back to you as soon as possible!",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:adityakoganti18@gmail.com",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
