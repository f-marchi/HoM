import { policyPages } from "./policies.mjs";

export { policyPages };

export const basePath = "";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Work", href: "/ourwork/" },
  { label: "About Us", href: "/about/" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms and Content Notice", href: "/terms/" },
];

export const assets = {
  logo: "/assets/hom-logo.png",
  symbol: "/assets/hom-symbol.png",
  homeHeroPoster: "/assets/home-hero-poster.jpg",
  workHeroPoster: "/assets/work-hero-poster.jpg",
  aboutHeroPoster: "/assets/about-hero-poster.jpg",
  homeHeroVideo: "/assets/videos/home-hero.mp4",
  workHeroVideo: "/assets/videos/work-hero.mp4",
  aboutHeroVideo: "/assets/videos/about-hero.mp4",
  homeJennifer: "/assets/home-jennifer.jpg",
  homeBrooke: "/assets/home-brooke.jpg",
  homeGabe: "/assets/home-gabe.jpg",
  aboutPurpose: "/assets/about-purpose.jpg",
  aboutFunding: "/assets/about-funding.jpg",
  tccFront: "/assets/take-this-chemo-front.jpg",
  tccBack: "/assets/take-this-chemo-back.jpg",
  takeThisChemoPdf: "/files/take-this-chemo.pdf",
};

export const expectedVideos = {
  home: ["https://youtu.be/lS38sxFXtJo", "https://youtu.be/tFDxhTL8j90"],
  ourwork: [
    "https://youtu.be/eW7uxYJeyog",
    "https://youtu.be/tFDxhTL8j90",
    "https://youtu.be/pa_a-NXYFfQ",
    "https://youtu.be/neZDJXXWKC4",
    "https://youtu.be/kneDAlbBiBs",
    "https://youtu.be/Y65SCW5WS6A",
    "https://youtu.be/tG7KJuLW_Kw",
    "https://youtu.be/itBZfBxZUP4",
    "https://youtu.be/-02OOgRm_14",
    "https://youtu.be/zPnHJtF4x-c",
    "https://youtu.be/NzVSmewSBeE",
    "https://youtu.be/2s1URkVpgyk",
    "https://youtu.be/8JpCkfyWCNc",
  ],
};

export const commonContent = {
  copyright: "© 2025 by The Heroes of Medicine Foundation.",
};

export const homePage = {
  route: "/",
  title: "Filmmaking in Medicine | Heroes of Medicine Foundation",
  description:
    "The Heroes of Medicine Foundation is a 501(c)3 public charity dedicated to storytelling in medicine.",
  hero: {
    image: assets.logo,
    poster: assets.homeHeroPoster,
    video: assets.homeHeroVideo,
    paragraphs: [
      "The Heroes of Medicine Foundation is a 501(c)3 public charity dedicated to storytelling in medicine.",
      "We tell stories of excellence, resilience, and sacrifice.",
    ],
    ctas: [
      { label: "VIDEOS", href: "/ourwork/" },
      { label: "REFER A PATIENT", href: "mailto:fran@heroesofmedicine.org" },
      { label: "TAKE THIS CHEMO", href: "/ourwork/#take-this-chemo" },
    ],
  },
  storyGrid: [
    {
      person: "JENNIFER MENELASSE",
      heading: "WE TELL STORIES",
      image: assets.homeJennifer,
      alt: "DSCF1546.00_04_30_12.Still016.jpg",
    },
    {
      person: "BROOKE BENEDIT",
      heading: "OF REMARKABLE INDIVIDUALS",
      image: assets.homeBrooke,
      alt: "DSCF1553.00_00_06_20.Still002.jpg",
    },
    {
      person: "GABRIEL DANTZLER",
      heading: "IN MEDICINE",
      image: assets.homeGabe,
      alt: "Gabe Screenshot 5.jpg",
    },
  ],
  videos: [
    {
      eyebrow: "LATEST",
      title: "Warrior",
      url: "https://youtu.be/lS38sxFXtJo",
      description:
        '"Warrior" is the legacy of a young woman named Maddie Neumann whose experience with cancer inspires us all to love deeply, celebrate friendship, and never stop reading. Maddie wanted to create this film to share her advice and help others diagnosed with cancer. She teaches us all that even when it is tough to find meaning in pain, you can still make a meaningful life. Thank you to Maddie and her family for sharing their story with us.',
    },
    {
      eyebrow: "FEATURED",
      title: "Words of Pain: Sickle Cell",
      person: "GIORGIO WILLIAMS",
      url: "https://youtu.be/tFDxhTL8j90",
    },
  ],
  heroJourney: {
    title: "THE HERO'S JOURNEY",
    paragraphs: [
      "True to our name, HoM stories are influenced by the classic archetypal myth of the hero’s journey. The protagonist’s story follows the path to finding one’s destiny on a journey of transformation. Throughout the journey, the hero encounters grave danger, while overcoming these obstacles through the assistance of helpful guides.",
      "In medicine, the hero is the patient, the one who ventures on the path to healing with the help of a compassionate medical team to urge one through life’s threats. Through each threshold, the hero proves the strength of his or her character on the way to following their calling.",
      "Our hope is that HoM film work can be a helpful guide to patients traversing their perilous journey of illness, and that these stories can inspire a more transparent and humanistic healthcare.",
    ],
    credit: "- EMILY MARCHI,CO-FOUNDER",
  },
  quote: {
    lines: ['"ITS PALLIATION IS A DAILY TASK,', 'ITS CURE A FERVENT HOPE"'],
    credit: "WILLIAM CASTLE, 1950",
  },
};

export const ourWorkPage = {
  route: "/ourwork/",
  title: "Our Work | Heroes of Medicine",
  description:
    "The Heroes of Medicine Foundation honors remarkable individuals in medicine through filmmaking and storytelling.",
  intro: {
    title: "OUR WORK",
    poster: assets.workHeroPoster,
    video: assets.workHeroVideo,
    paragraphs: [
      "Here we present to you some of our published stories. They have been created with love.",
      "We hope you feel that as you watch.",
    ],
  },
  anchors: [
    { label: "CANCER", href: "#cancer" },
    { label: "SICKLE CELL", href: "#sickle-cell" },
    { label: "CYSTIC FIBROSIS", href: "#cystic-fibrosis" },
    { label: "KIDNEY FAILURE", href: "#kidney-failure" },
    { label: "LEGACY", href: "#legacy-stories" },
    { label: "TAKE THIS CHEMO", href: "#take-this-chemo" },
  ],
  categories: [
    {
      id: "cancer",
      title: "CANCER",
      items: [
        {
          title: "Healing in Selflessness",
          person: "GABRIEL DANTZLER",
          url: "https://youtu.be/eW7uxYJeyog",
        },
        {
          title: "Finding a Reason to Fight",
          person: "KAYLA SMITH",
          url: "https://youtu.be/kneDAlbBiBs",
        },
        {
          title: "Climbing",
          person: "REBECCA HEAD",
          url: "https://youtu.be/Y65SCW5WS6A",
        },
        {
          title: "It Will Be Grand",
          person: "SARAH STEDMAN",
          url: "https://youtu.be/tG7KJuLW_Kw",
        },
      ],
    },
    {
      id: "sickle-cell",
      title: "SICKLE CELL",
      items: [
        {
          title: "Words of Pain: Sickle Cell",
          person: "GIORGIO WILLIAM",
          url: "https://youtu.be/tFDxhTL8j90",
        },
      ],
    },
    {
      id: "cystic-fibrosis",
      title: "CYSTIC FIBROSIS",
      items: [
        {
          title: "Breathing Through New Lungs",
          person: "SKYLAR HYDE",
          url: "https://youtu.be/pa_a-NXYFfQ",
        },
      ],
    },
    {
      id: "kidney-failure",
      title: "KIDNEY FAILURE",
      items: [
        {
          title: "Keep Pushing",
          person: "CALVIN LEE",
          url: "https://youtu.be/neZDJXXWKC4",
        },
      ],
    },
  ],
  legacy: {
    id: "legacy-stories",
    title: "LEGACY STORIES",
    items: [
      {
        title: "Lilly's Strength and Gratitude",
        url: "https://youtu.be/itBZfBxZUP4",
        description:
          "In memory of this wonderful young lady, Lilly Toxavidis. She was the very first patient that we filmed, and the very inspiration for what we do today. We are so honored to have met Lilly and her family,",
      },
      {
        title: "A Tribute to Megan Kardatzke  (We Love and Miss You)",
        url: "https://youtu.be/-02OOgRm_14",
        description:
          'Megan battled Acute Myeloid Leukemia bravely since her first diagnosis two years ago. She was a model, a gamer, and had aspirations to become an anesthesiologist. Her assertiveness and strength, built into a 6-foot tall woman, would only hide the sweet, funny girl whose hugs everyone loved. As it was tattooed on her back, "sometimes you\'ve gotta fall before you fly."',
      },
    ],
  },
  interviews: {
    id: "two-minute-medical-interviews",
    title: "TWO-MINUTE MEDICAL INTERVIEWS",
    items: [
      {
        title: "The Cost of Medicine in the US",
        person: "WILLIAM SLAYTON, MD",
        quote:
          '"For one of the medicines to cost a hundred thousand dollars is just too high. And then you consider the fact that they need ten medicines."',
        url: "https://youtu.be/zPnHJtF4x-c",
      },
      {
        title: "The Current State of Cancer Drug Development",
        person: "DANIEL TENEN, MD",
        quote: '"I am not very politically correct about this, but this is the truth."',
        url: "https://youtu.be/NzVSmewSBeE",
      },
      {
        title: "The Issue with Mice in Cancer Research",
        person: "MAHMOUD BASSAL, PHD",
        quote:
          '"We know how to cure cancers in mice so well, we are great at it. Very poor at curing it in humans, because the work doesn\'t translate across."',
        url: "https://youtu.be/2s1URkVpgyk",
      },
      {
        title: "Finding Purpose in Hematology",
        person: "ANNALISA DIRUSCIO, MD, PHD",
        quote:
          '"When you see young people dying and you, yourself, are very young, that impacts your perspective of life."',
        url: "https://youtu.be/8JpCkfyWCNc",
      },
    ],
  },
  takeThisChemo: {
    id: "take-this-chemo",
    title: "TAKE THIS CHEMO",
    subtitle: "YOUR GUIDE TO GETTING THROUGH CANCER",
    description:
      "Take This Chemo is a book for adolescents and young adults battling cancer. It addresses over 100 practical tips and reflections about hospitalization, chemotherapy, procedures, and everything that surrounds a diagnosis of cancer.",
    checkItOut: { label: "CHECK IT OUT", href: assets.takeThisChemoPdf },
    images: [
      { src: assets.tccFront, alt: "TCC2 v6 Cover Front Only.JPG" },
      { src: assets.tccBack, alt: "tcc2 V6 Cover Back.JPG" },
    ],
    availability: "NOW AVAILABLE ON AMAZON",
    availabilitySubtitle: "IN BOTH KINDLE AND PAPERBACK VERSIONS",
    buy: { label: "BUY NOW", href: "https://www.amazon.com/dp/B098CZ1MXF" },
  },
  quote: {
    lines: ['"THE NEXT STEP, THE COMPLETE CURE,', 'IS ALMOST SURE TO FOLLOW"'],
    credit: "KENNETH ENDICOTT",
    subcredit: "NCI DIRECTOR, 1963",
  },
};

export const aboutPage = {
  route: "/about/",
  title: "About Us | Heroes of Medicine Foundation",
  description:
    "Heroes of Medicine creates patient-centered short films for young palliative care patients.",
  titleText: "ABOUT US",
  hero: {
    poster: assets.aboutHeroPoster,
    video: assets.aboutHeroVideo,
  },
  sections: [
    {
      title: "OUR PURPOSE",
      subtitle: "RESILIENCE, EXCELLENCE, AND SACRIFICE",
      image: assets.aboutPurpose,
      alt: "20150609_093100_edited.jpg",
      paragraphs: [
        "Heroes of Medicine® (HoM), a 501(c)3 public charity, is organized and operated exclusively for scientific, educational, and charitable purposes. Primarily, HoM creates short films as legacy projects for young palliative care patients.",
        "We are moved by an everlasting sense of self realization that comes when one decides to be the hero of someone else's life story, rather than one's own.",
      ],
    },
    {
      title: "THE FOUNDATION",
      subtitle: "The most powerful human stories are hidden in hospital rooms",
      paragraphs: [
        "Heroes of Medicine (HoM) creates patient-centered short films, seeking to capture the human condition in the areas where it is most threatened and cultivated. Illness is both an agent of devastation and growth, revealing vulnerable moments that translates into resilience, excellence, and sacrifice.",
        "HoM provides, through storytelling, a medium through which young palliative care patients may be honored, highlighting what matters most to them and their loved ones. The foundation also interviews physicians and scientists to bridge the educational gap between medical professionals and the general public.",
        "By spanning the full spectrum of medicine from the bench to the bedside through the most transparent lens, HoM seeks to benefit the individual patient hero as well as move forward the greater evolution of healthcare.",
      ],
    },
    {
      title: "OUR FILMING PROCESS",
      subtitle: "The fine line between sickness and beauty",
      paragraphs: [
        "What makes HoM unique is our process for filming a patient. Through our relationship with Streetlight at UF Health Shands Children's Hospital, a program offering palliative care support through the model of peer support, we connect with our patients and build a relationship. If we feel a personalized video could provide an opportunity to enhance that person's life, we propose it. Then we brainstorm the story with the patient, request hospital approval, and film it.",
        "HoM films only after appropriate patient, family, or guardian consent and, when required, approval from the hospital, venue, Communications, Public Relations, Marketing, or other institutional representatives responsible for filming permissions.",
        "The brainstorming process balances dual goals to provide awareness for a specific disease, as well as inspiration demonstrated through a patient's life.",
        "After viewing, patients decide whether their video will remain private (only they see it) or public (the foundation hosts the video on the HoM website). HoM holds the copyright of the work, which means that patients have full control of their videos forever.",
      ],
    },
    {
      title: "OUR PATIENTS",
      subtitle: "Friendship, inspiration, and support",
      paragraphs: [
        "The heroes featured are adolescent and young adult patients living with cancer, cystic fibrosis, sickle cell, and other chronic and life-limiting illnesses at UF Health Shands Children's Hospital. Some of these patients live with the hope of an available medical cure, and some of these patients know that no cure currently exists.",
        "In every case, where medicine shows its strengths and limitations, one facet of healing remains: relationship. Relationship enfolds each patient's video, as it is through quality time and conversation that we can best learn what message each patient would like to share with a greater community. HoM aims to give our patients a lens through which to better appreciate the significance of their own story as well as a means by which to give their precious perspective to others needing a hero.",
      ],
    },
    {
      title: "OUR FUNDING",
      image: assets.aboutFunding,
      alt: "Edited 1.JPG",
      paragraphs: [
        "We are largely self-funded. We do not fundraise and do not monetize our films. If you would like to contribute to our endowment, please contact us below.",
      ],
    },
  ],
  contact: {
    title: "CONTACT US",
    subtitle: "WRITE TO US THROUGH THE BOX BELOW",
    emailLine: "Or email: fran@heroesofmedicine.org",
    success:
      "Thank you for submitting a message. We will get back to you within a day.",
    recipient: "fran@heroesofmedicine.org",
  },
  quote: {
    lines: ['"THE REMEDIES ARE IN OUR OWN BACKYARD"'],
    credit: "TIMES MAGAZINE COVER, 1949",
  },
};

export const allPages = [
  homePage,
  ourWorkPage,
  aboutPage,
  ...policyPages,
];
