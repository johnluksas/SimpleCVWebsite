import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "John Luksas",
  initials: "JL",
  location: "Blacksburg, VA, USA",
  locationLink: "https://www.google.com/maps/place/Blacksburg",
  about: "XR Engineer and Developer Building the Spatial Computing Future",
  summary:
    "As an AR/VR engineer and UX designer with a specialized focus in Unity and other spatial computing platforms, I have dedicated over four years to refining immersive experiences on platforms like the HoloLens 2 and Quest. Collaborating closely with cross-functional teams and research clients have led to the deployment of groundbreaking large-scale AR applications and proof of concepts for industries such as search and rescue and bridge inspection, which have the potential to carve out new pathways for AR/VR innovation. I am committed to driving the evolution of AR/VR technology, actively engaging with emergent technologies, including WebXR, Gaussian splatting and world-scale tracking, continuously looking for opportunities for enhancement and integration in the AR/VR space.",
  avatarUrl:
    "https://media.licdn.com/dms/image/C4E03AQGBumrZlWJu3A/profile-displayphoto-shrink_800_800/0/1554057271629?e=1710979200&v=beta&t=haG0fSDLTGPbaNOdUhYou8jrDNxX0EyHbjjEtXrsp8A",
  personalWebsiteUrl: "johnluksas.com",
  contact: {
    email: "johnluksas@gmail.com",
    tel: "+14139772872",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/johnluksas",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/john-luksas/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/futureofxr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Virginia Polytechnic Institute and State University",
      degree: "Bachelor's Degree in Industrial and Systems Engineering",
      start: "2016",
      end: "2020",
    },
    {
      school: "Virginia Polytechnic Institute and State University",
      degree:
        "Masters' Degree in Industrial and System Engineering - Human Factors and Ergonomics Concentration",
      start: "2021",
      end: "2024",
    },
  ],
  work: [
    {
      company: "New Mexico Department of Transportation (NMDOT)",
      link: "https://www.dot.nm.gov/",
      badges: ["Remote"],
      title:
        "Graduate Research Assistant (Macro Tracking Developer and UI Designer)",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "o	Implementing large world scale tracking system which can recognize individual bridges for save persistence \n" +
        "o	Collaborating to integrate RGB-D based micro-tracking system to overlay AR elements precisely on defects \n" +
        "o	Evaluating hardware and software upgrades for HoloLens 2 to suit summer and winter conditions in NM \n" +
        "o	Designing and building minimally invasive AR UI system to help inspectors collect bridge defect data and overlay previous data accurately onto the bridge",
    },
    {
      company: "Virginia Department of Transportation (VDOT)",
      link: "https://www.vdot.virginia.gov/",
      badges: ["Remote"],
      title:
        "Graduate Research Assistant (Macro Tracking Developer and UI Designer)",
      logo: ClevertechLogo,
      start: "2022",
      end: "2024",
      description:
        "•	Acquire understanding of workflow and technology restrictions present for VDOT personnel and bridge inspectors to design an Augmented Reality (AR) bridge inspection system that would meet their data recording extents, function in their workplace conditions, and ultimately gain inspector buy-in•	Develop initial proof of concept AR HoloLens 2 application in Unity to introduce stakeholders to the functionalpossibilities of AR and provide a design milestone for which future work could be added•	Collaborate with experimenters to develop an app to facilitate a user study exploring interaction techniques",
    },
    {
      company: "National Institute of Standards and Technology (NIST)",
      link: "https://www.nist.gov/",
      badges: [],
      title: "Lead Developer",
      logo: JojoMobileLogo,
      start: "2021",
      end: "2024",
      description:
        "•	Implement and test world-scale outdoor tracking architecture for use with HoloLens 2 headsets which can recall which location a user is and load relevant virtual object saves for that location" +
        "•	Develop and update an AR HoloLens 2 application in Unity designed to aid search and rescue personnel in the notation and localization of hazards and victims in a wide area disaster or search scenario" +
        "•	Develop an author mode for experimenters to easily setup and  save training scenes in their real world" +
        "•	Present research and perform live demos at NIST’s premier PSCR first responder conference",
    },
    {
      company: "Master of Science Thesis Research",
      link: "https://www.ise.vt.edu/",
      badges: [],
      title: "Graduate Researcher",
      logo: NSNLogo,
      start: "2021",
      end: "2024",
      description:
        "•	Develop an interaction-triggered method to estimate the normal and position of missing environmental mesh in real-time for non-prior knowledge Augmented Reality applications" +
        "•	Implement the method in Unity with common game engine features for a low computational overhead" +
        "•	Design and conduct a 24 person user study to test 3 different custom estimating configurations",
    },
    {
      company: "Creative Systems and Consulting (ICF)",
      link: "https://www.icf.com",
      badges: ["Remote"],
      title: "Business Analyst",
      logo: NSNLogo,
      start: "2020",
      end: "2021",
      description:
        "•	Develop an interaction-triggered method to estimate the normal and position of missing environmental mesh in real-time for non-prior knowledge Augmented Reality applications" +
        "•	Implement the method in Unity with common game engine features for a low computational overhead" +
        "•	Design and conduct a 24 person user study to test 3 different custom estimating configurations",
    },
    {
      company: "Collins Aerospace",
      link: "https://www.collinsaerospace.com/",
      badges: [],
      title: "Aftermarket Engineering Intern",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "•	Develop an interaction-triggered method to estimate the normal and position of missing environmental mesh in real-time for non-prior knowledge Augmented Reality applications" +
        "•	Implement the method in Unity with common game engine features for a low computational overhead" +
        "•	Design and conduct a 24 person user study to test 3 different custom estimating configurations",
    },
    {
      company: "COGnitive Engineering for Novel Technologies (COGENT) Lab",
      link: "https://cogent.ise.vt.edu/",
      badges: ["Undergrad"],
      title: "Application Designer",
      logo: NSNLogo,
      start: "2020",
      end: "2020",
      description:
        "•	Develop an interaction-triggered method to estimate the normal and position of missing environmental mesh in real-time for non-prior knowledge Augmented Reality applications" +
        "•	Implement the method in Unity with common game engine features for a low computational overhead" +
        "•	Design and conduct a 24 person user study to test 3 different custom estimating configurations",
    },
    {
      company: "COGnitive Engineering for Novel Technologies (COGENT) Lab",
      link: "https://cogent.ise.vt.edu/",
      badges: ["Undergrad"],
      title: "Research Assistant",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "•	Develop an interaction-triggered method to estimate the normal and position of missing environmental mesh in real-time for non-prior knowledge Augmented Reality applications" +
        "•	Implement the method in Unity with common game engine features for a low computational overhead" +
        "•	Design and conduct a 24 person user study to test 3 different custom estimating configurations",
    },
    {
      company: "COGnitive Engineering for Novel Technologies (COGENT) Lab",
      link: "https://cogent.ise.vt.edu/",
      badges: ["Undergrad"],
      title: "AR Application Designer",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description:
        "•	Develop an interaction-triggered method to estimate the normal and position of missing environmental mesh in real-time for non-prior knowledge Augmented Reality applications" +
        "•	Implement the method in Unity with common game engine features for a low computational overhead" +
        "•	Design and conduct a 24 person user study to test 3 different custom estimating configurations",
    },
  ],
  skills: [
    "Unity",
    "C#",
    "Microsoft MRTK",
    "HoloLens 2",
    "Meta Quest",
    "Microsoft World Locking Tools",
    "Vuforia",
    "CAD",
  ],
  projects: [
    {
      title: "NMDOT Bridge AR App",
      techStack: ["Unity", "C#", "World Locking Tools", "HoloLens 2", "MRTK"],
      description: "",
      logo: ConsultlyLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/NMDOTBridgePortfolio",
      },
    },
    {
      title: "VDOT Bridge AR App",
      techStack: ["Unity", "C#", "World Locking Tools", "HoloLens 2", "MRTK"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/VDOTBridgePortfolio",
      },
    },
    {
      title: "NIST AR First Responder App",
      techStack: ["Unity", "C#", "World Locking Tools", "HoloLens 2", "MRTK"],
      description: "",
      logo: JarockiMeLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/NISTExperimentPortfolio-copy",
      },
    },
    {
      title: "Thesis AR App",
      techStack: ["Unity", "C#", "World Locking Tools", "HoloLens 2", "MRTK"],
      description: "",
      logo: Minimal,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/ThesisPortfolio",
      },
    },
    {
      title: "Thesis Data Viewer",
      techStack: [
        "Time Series Data",
        "Unity",
        "C#",
        "Unity Editor",
        "Real-time Data Logging",
      ],
      description: "",
      logo: BarepapersLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/ThesisDataViewerPortfolio",
      },
    },
    {
      title: "NIST Data Viewer",
      techStack: [
        "Time Series Data",
        "Unity",
        "C#",
        "Unity Editor",
        "Gaussian Splats",
        "Real-time Data Logging",
      ],
      description: "",
      logo: YearProgressLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/NISTDataViewerPortfolio",
      },
    },
    {
      title: "AR Bridge Assembly Tutorial",
      techStack: ["Unity", "C#", "HoloLens 1", "Vuforia"],
      description: "",
      logo: ParabolLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/BridgeAssemblyPortfolio",
      },
    },
    {
      title: "AI Canvas AR App",
      techStack: ["Unity", "C#", "Quest 3", "OpenXR", "XRI Toolkit"],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/AICanvasPortfolio",
      },
    },
    {
      title: "Google Maps GeoLocation App",
      techStack: ["ARCore", "Unity", "Geospatial API", "Android"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "FutureofXR",
        href: "https://futureofxr.com/Project-Examples/GoogleMapsGeolocationPortfolio",
      },
    },
  ],
} as const;
