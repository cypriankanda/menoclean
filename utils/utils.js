import { nanoid } from "nanoid";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUserCog } from "react-icons/fa";
import { FaPuzzlePiece, FaBriefcaseMedical } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
export function formatPhoneNumber(phoneNumber) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const code = cleaned.slice(0, 1);
  const part1 = cleaned.slice(1, 4);
  const part2 = cleaned.slice(4, 7);
  const part3 = cleaned.slice(7);

  return `+${code} (${part1}) ${part2}-${part3}`;
}
export const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },

  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "Contact",
    link: "#contact",
  },
  {
    name: "Faqs",
    link: "#faqs",
  },
];

export const Questions = [
  {
    id: nanoid(),
    question: "WHAT IS CONSIDERED A BIOHAZARD?",
    answer:
      "The term biohazard refers to any biological materials (microorganisms, plants, animals, or their byproducts) that pose a threat to the health of living organisms",
  },
  {
    id: nanoid(),
    question: "HOW DO YOU CLEAN A BIOHAZARD?",
    answer:
      "The job of a biohazard cleaner is to completely clean, sanitize, and deodorize the site where a violent crime, suicide, or traumatic accident has occurred. Biohazard cleanup can be challenging work that requires technicians to handle potentially hazardous materials such as blood and body fluids, and proper handling of the crime or trauma scene is crucial to the safety of everyone involved",
  },
  {
    id: nanoid(),
    question: "WHAT IS BIOHAZARD REMEDIATION?",
    answer:
      "Biohazard remediation refers to the removal, cleaning, and disinfection of blood, bodily fluids, and other potentially harmful pathogens in affected areas after a death, accident, or communicable disease outbreak.",
  },
  {
    id: nanoid(),
    question: "HOW MUCH DOES BIOHAZARD REMEDIATION COST?",
    answer:
      "The cost of remediating biohazards can vary dramatically from situation to situation, which is why we offer to come to the scene and prepare a no-obligation written assessment of our recommended treatment plan.",
  },
];

export const services = [
  {
    id: nanoid(),
    icon: "",
    service: "Janitorial cleanup",
    image: "/janitorial_hero.jpg",
    description:
      "In addition to our specialized remediation services, we offer reliable and thorough janitorial services to keep your residential, commercial, or industrial property clean and well-maintained on a regular basis",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Hoarding cleanup",
    image:
      "https://images.unsplash.com/photo-1706210220394-eeda4906e02c?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Our compassionate and discreet team is trained to handle hoarding cleanup with sensitivity and professionalism, helping individuals regain control of their living spaces and improving their quality of life",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Crime scene cleanup",
    image: "/crime_scene.jpeg",
    description:
      "In the aftermath of a traumatic event, our expert technicians are equipped to handle the cleanup and decontamination of crime scenes, restoring the affected area to a safe and sanitary condition",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Bio-Hazard cleanup",
    image: "/biohazard.jpg",
    description:
      "We specialize in the safe and thorough removal of bio-hazardous materials, including blood, bodily fluids, and other hazardous substances, ensuring that the affected area is thoroughly sanitized and safe for habitation",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Homeless Camp cleanup",
    image: "/homeless_camp.jpg",
    description:
      "We understand the unique challenges associated with homeless camp cleanup and are committed to restoring public spaces to their original condition while maintaining sensitivity to the needs of the individuals involved",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Trauma scene cleanup",
    image:
      "https://images.unsplash.com/photo-1531048230592-9903bf40a199?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDE5MTEyfHxlbnwwfHx8fHw%3D",
    description:
      "Our trauma scene cleanup service is designed to handle the aftermath of traumatic incidents such as accidents, crimes, and other emergencies. Our team of trained professionals specializes in cleaning and sanitizing affected areas, removing biohazardous materials, and restoring the scene to a safe and habitable condition. We follow strict safety protocols and use specialized equipment to ensure thorough cleanup and decontamination, providing peace of mind to our clients during difficult times",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Mold Remediation",
    image: "/mold.jpg",
    description:
      "With our proven techniques and advanced equipment, we can effectively remove mold and prevent its recurrence, safeguarding the health and well-being of building occupants",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Infectious disease decontamination",
    image:
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZmVjdGlvdXMlMjBkaXNlYXNlfGVufDB8fDB8fHww",
    description:
      " Our infectious disease decontamination service is aimed at controlling and eliminating the spread of infectious agents in various settings, including homes, businesses, healthcare facilities, and public spaces. Our certified technicians utilize advanced disinfection techniques and EPA-approved disinfectants to eradicate harmful pathogens, viruses, and bacteria. We prioritize safety and adhere to industry standards to create a clean and hygienic environment for our clients and the community.",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Unattended death cleanup",
    image:
      "https://images.unsplash.com/photo-1601971528243-1f4e8ac0efc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuYXR0ZW5kZWQlMjBkZWF0aHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Our unattended death cleanup service addresses the sensitive and challenging task of cleaning and sanitizing spaces where unattended deaths have occurred. Our compassionate and experienced team understands the emotional and logistical complexities involved in these situations. We handle biohazardous materials with care, restore the affected area to a safe condition, and work discreetly to respect the privacy of our clients and their families during this difficult time",
  },
  {
    id: nanoid(),
    icon: "",
    service: "Blood and bodily fluid cleanup",
    image: "/fluid.jpg",
    description:
      "Our blood and bodily fluid cleanup service focuses on the safe and thorough removal of blood, bodily fluids, and other biohazards from various environments. Whether it's due to accidents, medical emergencies, or crime scenes, our skilled technicians follow strict safety protocols and use specialized equipment to clean, disinfect, and deodorize affected areas. We prioritize rapid response and effective cleanup to minimize health risks and restore the space to its pre-incident condition.",
  },

  {
    id: nanoid(),
    icon: "",
    service: "Chemical spills cleanup",
    image: "/chemicalSpill.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Remquisquam aspernatur mollitia fugitconsequatvoluptatem verodistinctio laboriosam, laborum ipsa voluptate. Provident excepturiitae voluptatem culpa mollitia quidem, exercitationem neque?$",
  },
];

export const WhyChooseUs = [
  {
    id: nanoid(),
    icon: <MdOutlineVerifiedUser size={32} fill="white" />,
    title: "Expertise and Experience",
    background: "",
    description:
      "Our team of trained professionals brings years of experience and expertise to every project, ensuring thorough and effective results",
  },
  {
    id: nanoid(),
    icon: <FaPuzzlePiece size={32} fill="white" />,
    title: "Comprehensive Solutions",
    background: "",
    description:
      "From bio-hazard cleanup to janitorial services, we offer a comprehensive range of cleaning solutions tailored to meet your specific requirements.",
  },
  {
    id: nanoid(),
    icon: <FaRocket size={32} fill="white" />,
    title: "Quick Response",
    background: "",
    description:
      "We understand the urgency of certain cleaning situations and strive to provide prompt and efficient service, minimizing disruption to your daily operations.",
  },
  {
    id: nanoid(),
    icon: <FaBriefcaseMedical size={32} fill="white" />,
    title: "Health and Safety Compliance",
    background: "",
    description:
      "Our adherence to industry standards and best practices ensures that all cleaning and remediation activities are conducted safely and in compliance with relevant regulations",
  },
  {
    id: nanoid(),
    icon: <GiReceiveMoney size={32} fill="white" />,
    title: "Cost-Effectiveness",
    background: "",
    description:
      "By outsourcing your cleaning needs to MenoClean Remedial Services, you can save time and resources while maintaining a clean and healthy environment for your employees, customers, or residents",
  },
];

export const heroText = [
  " Your Partner in Comprehensive Cleanup Solutions",
  "offering quality and affordable clean up solutions ",
  "Get started today to receive the kind of service you been looking for",
];
export const heroImages = [
  // "https://plus.unsplash.com/premium_photo-1661664806712-d0403ea8af18?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://plus.unsplash.com/premium_photo-1661662870418-a90775088d02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://plus.unsplash.com/premium_photo-1663045752763-65b887a28ece?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://plus.unsplash.com/premium_photo-1661662912652-6b4ef35bddad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "/janitorial_hero.jpg",
  "/heo_suited.jpg",
  "/chemicalSpill.jpg",
  "https://images.unsplash.com/photo-1708534925926-0b85747ba69e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxjcmltZSUyMHNjZW5lfGVufDB8fDB8fHww",
];

export const testimonials = [
  {
    id: nanoid(),
    name: "Philip jones",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "Devastated after a loss, Menoclean handled everything with professionalism and compassion. They restored my property and my peace of mind",
  },
  {
    id: nanoid(),
    name: "viserys jr",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    testimony:
      "My father's hoarding spiraled.Menoclean understood. With care, they helped us clear the clutter, keeping memories safe. Today, Dad's home is a haven again. Thank you!",
  },
  {
    id: nanoid(),
    name: "mitchell barrack",
    image:
      "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    testimony:
      "Long hours, messy kitchens that was our reality. Now, thanks to Menoclean's nightly janitorial service, our restaurant is spotless, customers rave, and our staff can focus on what matters  great food!",
  },
];

export const links = {
  phone: +12065567827,
  email: "info@menoclean.com",
};

// footer links

export const footerLinks = [
  {
    baseUrl: "https://facebook.com/menoclean",
    icon: "/facebook.png",
    alt: "facebook",
  },
  {
    baseUrl: "https://linkedin.com/in/menoclean",
    icon: "/linkedin.png",
    alt: "linkedin",
  },
  {
    baseUrl: "https://twitter.com/menoclean",
    icon: "/twitter.png",
    alt: "twitter",
  },
];
