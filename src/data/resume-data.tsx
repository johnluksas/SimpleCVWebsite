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
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
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
      title: "NMDOT",
      techStack: ["Unity", "C#", "World Locking Tools", ""],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "NMDOT.com",
        href: "https://www.dot.nm.gov/",
      },
    },
    {
      title: "VDOT",
      techStack: ["Unity", "C#", "World Locking Tools"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "NIST",
      techStack: ["Unity", "C#", "World Locking Tools"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Thesis",
      techStack: ["Unity", "C#", "World Locking Tools", ""],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Thesis AR Data App",
      techStack: [
        "Time Series Data",
        "Unity",
        "Unity Editor",
        "Real-time Data Logging",
      ],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "NIST AR Data App",
      techStack: [
        "Time Series Data",
        "Unity",
        "Unity Editor",
        "Gaussian Splats",
        "Real-time Data Logging",
      ],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Bridge Assembly Task",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "AI Canvas AR App",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Google Maps GeoLocation App",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
  ],
} as const;
