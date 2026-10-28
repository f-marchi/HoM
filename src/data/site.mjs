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

export const commonContent = {
  copyright: "© 2026 by The Heroes of Medicine Foundation.",
};

const warrior = {
  title: "Warrior",
  person: "Maddie Neumann",
  url: "https://youtu.be/EreWrvjHKzU",
  description:
    "“Warrior” honors the legacy of Maddie Neumann, a young woman whose experience with cancer inspires us to love deeply, celebrate friendship, and never stop reading.\n\nMaddie wanted to create this film to share her advice and help others diagnosed with cancer. Her story reminds us that even when meaning is difficult to find in pain, we can still make a meaningful life.\n\nThank you to Maddie and her family for sharing their story.",
};

const wordsOfPain = {
  title: "Words of Pain: Sickle Cell",
  person: "Giorgio Williams",
  url: "https://youtu.be/PG0yp9Fyl2s",
  description:
    "“Words of Pain: Sickle Cell” features Giorgio Williams and brings a personal perspective to sickle cell disease.\n\nA Heroes of Medicine short film sharing the lived experience behind a diagnosis.",
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
      { label: "TAKE THIS CHEMO", href: "/ourwork/#take-this-chemo" },
    ],
  },
  storyGrid: [
    {
      person: "JENNIFER MENELASSE",
      heading: "WE TELL STORIES",
      image: assets.homeJennifer,
      alt: "Jennifer Menelasse smiling in a hospital room",
    },
    {
      person: "BROOKE BENEDIT",
      heading: "OF REMARKABLE INDIVIDUALS",
      image: assets.homeBrooke,
      alt: "Brooke Benedit resting in a hospital bed",
    },
    {
      person: "GABRIEL DANTZLER",
      heading: "IN MEDICINE",
      image: assets.homeGabe,
      alt: "Gabriel Dantzler in a warmly lit room",
    },
  ],
  videos: [
    { eyebrow: "LATEST", ...warrior },
    { eyebrow: "FEATURED", ...wordsOfPain },
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
    channel: {
      label: "Visit our YouTube channel",
      href: "https://www.youtube.com/@HeroesofMedicineFoundation",
    },
  },
  anchors: [
    { label: "CANCER", href: "#cancer" },
    { label: "SICKLE CELL", href: "#sickle-cell" },
    { label: "CYSTIC FIBROSIS", href: "#cystic-fibrosis" },
    { label: "KIDNEY FAILURE", href: "#kidney-failure" },
    { label: "LEGACY", href: "#legacy-stories" },
    { label: "COMMUNITY", href: "#community-stories" },
    { label: "INTERVIEWS", href: "#two-minute-medical-interviews" },
    { label: "TAKE THIS CHEMO", href: "#take-this-chemo" },
  ],
  categories: [
    {
      id: "cancer",
      title: "CANCER",
      items: [
        warrior,
        {
          title: "Healing in Selflessness",
          person: "Gabriel Dantzler",
          url: "https://youtu.be/Ld__akydk7M",
          description:
            "Gabriel Dantzler’s experience with cancer is at the center of “Healing in Selflessness,” a short film from Heroes of Medicine.",
        },
        {
          title: "Finding a Reason to Fight",
          person: "Kayla Smith",
          url: "https://youtu.be/IxFzanUBtYo",
          description:
            "“Finding a Reason to Fight” features Kayla Smith’s story and experience with cancer.",
        },
        {
          title: "Climbing",
          person: "Rebecca Head",
          url: "https://youtu.be/iobrGb5tQ6I",
          description:
            "Rebecca’s experience with cancer is at the center of “Climbing,” a short film from Heroes of Medicine.",
        },
        {
          title: "It Will Be Grand",
          person: "Sarah Stedman",
          url: "https://youtu.be/4d7WKJSxjkM",
          description:
            "Sarah Stedman brings dry humor to a frightening diagnosis, then speaks plainly about the toll of chemotherapy. Her account makes room for laughter, frustration, and the difficult parts of treatment she wants others to understand.",
        },
      ],
    },
    {
      id: "sickle-cell",
      title: "SICKLE CELL",
      items: [
        wordsOfPain,
      ],
    },
    {
      id: "cystic-fibrosis",
      title: "CYSTIC FIBROSIS",
      items: [
        {
          title: "Breathing Through New Lungs",
          person: "Skylar Hyde",
          url: "https://youtu.be/ELux8COrsSs",
          description:
            "“Breathing Through New Lungs” features Skylar Hyde in a Heroes of Medicine patient story about cystic fibrosis.\n\nPart of our collection honoring the lives and experiences of people facing serious illness.",
        },
      ],
    },
    {
      id: "kidney-failure",
      title: "KIDNEY FAILURE",
      items: [
        {
          title: "Keep Pushing",
          person: "Calvin Lee",
          url: "https://youtu.be/JatkNRB3A2w",
          description:
            "“Keep Pushing” features Calvin Lee in a Heroes of Medicine patient story about kidney failure.\n\nThrough personal storytelling, the film honors the individual behind the medical experience.",
        },
      ],
    },
  ],
  legacy: {
    id: "legacy-stories",
    title: "LEGACY STORIES",
    items: [
      {
        title: "Lilly’s Strength and Gratitude",
        person: "Lilly Toxavidis",
        url: "https://youtu.be/bUMmvk0n11U",
        description:
          "In loving memory of Lilly Toxavidis.\n\nLilly was the very first patient we filmed and an inspiration for the work that became Heroes of Medicine.\n\n“Lilly’s Strength and Gratitude” honors her memory and the lasting significance of her story. We are grateful to have known Lilly and her family.",
      },
      {
        title: "With Love and Laughter",
        person: "Megan Kardatzke",
        url: "https://youtu.be/FJzEk9D9utE",
        description:
          "Megan Kardatzke was a gamer, a model, and an aspiring anesthesiologist whose confidence came with warmth and unforgettable hugs. Through laughter, teasing, and moments with friends, this tribute remembers the personality and affection that made Megan herself.",
      },
      {
        title: "A Graduation Surrounded by Love",
        person: "Aaryn “Tootie” King",
        url: "https://youtu.be/YgnFnk7I5DU",
        description:
          "Aaryn “Tootie” King celebrates her high school graduation at the hospital, surrounded by family, teachers, and her care team. From her diploma to a tribute to her time in Junior ROTC, the day honors her achievement and the community cheering her on. Tootie, we love you and miss you!",
      },
    ],
  },
  community: {
    id: "community-stories",
    title: "COMMUNITY STORIES",
    items: [
      {
        title: "Finding Meaning in Streetlight",
        person: "Max van Belkum",
        url: "https://youtu.be/O4lw_CTsJfo",
        description:
          "At a campfire celebrating Streetlight’s graduating volunteers, Max van Belkum reflects on finding a community where he felt heard and understood. He shares how his friendships and the smiles they brought to patients gave him a sense of meaning.",
      },
    ],
  },
  interviews: {
    id: "two-minute-medical-interviews",
    title: "TWO-MINUTE MEDICAL INTERVIEWS",
    items: [
      {
        title: "The Cost of Medicine in the US",
        person: "William Slayton, MD",
        url: "https://youtu.be/qkw5gkdEIy0",
        description:
          "Drawing on his work treating children with leukemia, William Slayton, MD, questions the burden of exceptionally expensive medicines. He calls for people to understand the problem, speak up, and take part in changing the system.",
      },
      {
        title: "The Current State of Cancer Drug Development",
        person: "Daniel Tenen, MD",
        url: "https://youtu.be/CosDCN9zjGg",
        description:
          "Using FLT3 inhibitors in acute myeloid leukemia as an example, Daniel Tenen, MD, questions why promising treatments take so long to reach patients. He challenges how risk is weighed when the disease itself is life-threatening.",
      },
      {
        title: "The Issue with Mice in Cancer Research",
        person: "Mahmoud Bassal, PhD",
        url: "https://youtu.be/t1D7F8hpKLY",
        description:
          "Mahmoud Bassal, PhD, questions what cancer studies in heavily altered mice can tell us about people. He explains why he believes promising laboratory results so often fail to become useful treatments.",
      },
      {
        title: "Finding Purpose in Hematology",
        person: "Annalisa Di Ruscio, MD, PhD",
        url: "https://youtu.be/tAEvcnKfVoE",
        description:
          "The patients Annalisa Di Ruscio, MD, PhD, knew during her medical training still shape her work in the laboratory. She reflects on how their lives and losses give her a reason to persist when experiments fail.",
      },
      {
        title: "Keeping Patients in Mind",
        person: "Christina Pacak, PhD",
        url: "https://youtu.be/qg7w411qhko",
        description:
          "For Christina Pacak, PhD, thinking about patients begins long before a treatment reaches the clinic. She offers young scientists a guiding principle: consider the patient at every step, from designing safer gene therapies to asking whether a basic discovery could open the door to a new treatment.",
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
      { src: assets.tccFront, alt: "Front cover of Take This Chemo" },
      { src: assets.tccBack, alt: "Back cover of Take This Chemo" },
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
      alt: "Patient with medical staff in an operating room",
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
      alt: "Film crew recording an interview in a hospital conference room",
      paragraphs: [
        "We are largely self-funded. We do not fundraise and do not monetize our films. If you would like to contribute to our endowment, please contact us below.",
      ],
    },
  ],
  contact: {
    title: "CONTACT US",
    subtitle: "WRITE TO US",
    emailLine: "Email fran@heroesofmedicine.org",
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
