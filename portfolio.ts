export const categories = [
  "Real Estate",
  "Ventures",
  "Hands-On",
  "Community",
] as const;

export type Category = (typeof categories)[number];

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  category: Category;
  summary: string;
};

export const stats = [
  { value: "350+", label: "Flips completed" },
  { value: "$45M+", label: "Transaction volume" },
  { value: "55+", label: "Homes acquired in 2026" },
  { value: "#1", label: "Investor in Visalia" },
] as const;

export const experience: Experience[] = [
  {
    id: "house-junkies-ops",
    company: "House Junkies Inc.",
    role: "Operations Manager • Full Time • Hybrid",
    location: "Visalia, CA",
    period: "Feb 2026 - Present",
    category: "Real Estate",
    summary:
      "Managing the pipeline from signed contract to closing table, coordinating a massive representative team, acquisitions/escrows, active projects, and market listings for finished properties.",
  },
  {
    id: "ulloa-partner",
    company: "Ulloa Investment Group L.L.C.",
    role: "Partner • Membership",
    location: "Visalia, CA",
    period: "Feb 2026 - Present",
    category: "Real Estate",
    summary:
      "Partner in Visalia's #1 investment entity by transactions and volume. Over 350+ completed projects and $45M in volume.",
  },
  {
    id: "tkqc-house-junkies",
    company: "TKQC House Junkies",
    role: "Team Lead • Part Time • Hybrid",
    location: "Visalia, CA",
    period: "Dec 2025 - Present",
    category: "Real Estate",
    summary:
      "Leading 15+ acquisition representatives sourcing off-market inventory inside a massive team, training them on deal analysis, follow-up, and closing skills.",
  },
  {
    id: "jd-sales-consulting",
    company: "JD Sales and Consulting L.L.C.",
    role: "Consultant • Part Time",
    location: "Visalia, CA",
    period: "Aug 2026 - Present",
    category: "Ventures",
    summary:
      "Consulting the owner of a resell store on LLC structure, business funding, marketing strategy, and real estate acquisitions.",
  },
  {
    id: "quick-cars-cofounder",
    company: "Quick Cars California",
    role: "Co-Founder • Part Time • Remote",
    location: "Visalia, CA",
    period: "Mar 2023 - Present",
    category: "Ventures",
    summary:
      "Co-founded the company with partners, building the brand from the ground up. Managed service offerings, pricing, client acquisition strategies and operations.",
  },
  {
    id: "quick-cars-ceo",
    company: "Quick Cars California",
    role: "Chief Executive Officer • Part Time • Hybrid",
    location: "Visalia, CA",
    period: "Dec 2023 - Jan 2026",
    category: "Ventures",
    summary:
      "Co-founded the company with partners, building the brand from the ground up. Managed service offerings, pricing, client acquisition strategies and operations.",
  },
  {
    id: "rdeptsupply",
    company: "RDeptSupply L.L.C.",
    role: "Consultant • Part Time",
    location: "Tulare, CA",
    period: "Oct 2025 - May 2026",
    category: "Ventures",
    summary:
      "Consulted the owner of a prominent clothing resell store on business structure, bank accounts, and growth strategy.",
  },
  {
    id: "house-junkies-acquisitions",
    company: "House Junkies Inc.",
    role: "Acquisitions Representative • Part Time • Hybrid",
    location: "Visalia, CA",
    period: "Sep 2025 - Feb 2026",
    category: "Real Estate",
    summary:
      "Prospected potential sellers with calls and knocked doors every week to source off-market deals. Evaluated properties for investment potential and negotiated terms directly with homeowners to bring deals under contract.",
  },
  {
    id: "house-junkies-adu",
    company: "House Junkies Inc.",
    role: "ADU Appointment Setter • Part Time • Remote",
    location: "Tulare County, CA",
    period: "Jul 2025 - Sep 2025",
    category: "Real Estate",
    summary:
      "Prospected potential sellers with calls and knocked doors every week to source off-market deals. Evaluated properties for investment potential and negotiated terms directly with homeowners to bring deals under contract.",
  },
  {
    id: "tkqc-board",
    company: "T.K.Q.C. Board of Directors",
    role: "Chairperson • Membership",
    location: "Visalia, CA",
    period: "Jan 2023 - Present",
    category: "Ventures",
    summary:
      "Chairperson of a local investment board and mastermind with the partners behind many of my business ventures.",
  },
  {
    id: "visalia-gmc",
    company: "Visalia GMC",
    role: "Vehicle Salesperson • Part Time • On-site",
    location: "Visalia, CA",
    period: "Jun 2025 - Sep 2025",
    category: "Hands-On",
    summary:
      "Prospected potential sellers with calls and knocked doors every week to source off-market deals. Evaluated properties for investment potential and negotiated terms directly with homeowners to bring deals under contract.",
  },
  {
    id: "valley-oak-spca",
    company: "Valley Oak SPCA",
    role: "Dog Walker • Part Time",
    location: "Visalia, CA",
    period: "Feb 2024 - Aug 2024",
    category: "Community",
    summary:
      "Volunteered with the Steps for Pets program walking dogs and feeding them.",
  },
  {
    id: "round-table-senior",
    company: "Round Table Pizza",
    role: "Sr. Crew Member • Part Time • On-site",
    location: "Visalia, CA",
    period: "May 2024 - Jul 2025",
    category: "Hands-On",
    summary:
      "Trained new crew, and held service standards through peak volume; helped team Supervisors with shift coordination, ensuring all closing tasks and necessary meal breaks were completed.",
  },
  {
    id: "round-table-crew",
    company: "Round Table Pizza",
    role: "Crew Member • Part Time • On-site",
    location: "Visalia, CA",
    period: "Aug 2023 - May 2024",
    category: "Hands-On",
    summary:
      "Handled food preparation, order accuracy and store maintenance in a fast paced restaurant environment. Delivered consistent customer service while working alongside a team to meet fluctuating daily order volumes and party-room events.",
  },
  {
    id: "build-visalia-up",
    company: "Build Visalia Up!",
    role: "Founder • Part Time",
    location: "Visalia, CA",
    period: "Aug 2022 - Jul 2025",
    category: "Community",
    summary:
      "Local nonprofit with three major focuses, education, homelessness, and special needs. Serving the Visalia community.",
  },
  {
    id: "albright-plumbing",
    company: "Albright Plumbing",
    role: "Apprentice Contractor • Part Time • On-site",
    location: "Tulare County, CA",
    period: "Mar 2019 - Aug 2021",
    category: "Hands-On",
    summary:
      "Trained on residential general contracting under a licensed general contractor. Learned system installations, repair, city code enforcement compliance, power tools, and jobsite safety.",
  },
  {
    id: "nathaniels-hope",
    company: "Nathaniel's Hope Nonprofit",
    role: "Buddy Break Volunteer • Part Time",
    location: "Visalia, CA",
    period: "Jan 2018 - Mar 2020",
    category: "Community",
    summary:
      "Volunteered with a respite program for special needs children and their siblings.",
  },
];

export const skillGroups = [
  {
    title: "INVESTMENT",
    items: [
      "Property Acquisition",
      "Off-Market Deal Sourcing",
      "Underwriting & Analysis",
      "Seller Negotiation",
      "In-House Funding",
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      "Pipeline Ownership",
      "Team Leadership",
      "Representative Training",
      "Partnership Development",
      "Project Management",
    ],
  },
  {
    title: "FIELD",
    items: [
      "General Construction",
      "Door-To-Door Sales",
      "Automotive Sales",
      "Social Media Marketing",
      "Generative AI",
    ],
  },
] as const;

export const certifications = [
  {
    name: "Project Management",
    issuer: "Google via Coursera",
    year: "2025",
  },
  {
    name: "Generative AI",
    issuer: "Google Cloud via Coursera",
    year: "2025",
  },
  {
    name: "Marketing & E-Commerce",
    issuer: "Google via Coursera",
    year: "2024",
  },
  {
    name: "Vehicle Salesperson",
    issuer: "California DMV",
    year: "2025–2028",
  },
] as const;
