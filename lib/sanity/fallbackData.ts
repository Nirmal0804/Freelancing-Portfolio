export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  services: string[];
  liveUrl: string;
  image: string;
  alt: string;
}

export const fallbackProjects: Project[] = [
  {
    id: "ember-and-bean",
    number: "01",
    title: "EMBER & BEAN",
    category: "RESTAURANT WEBSITE",
    description:
      "A sophisticated digital presence for a premium dining establishment, focusing on reservation flow and visual storytelling through immersive photography.",
    services: ["Web Design", "Web Development"],
    liveUrl: "https://restaurent-web-five.vercel.app",
    image: "/images/ember-and-bean.png",
    alt: "A high-end, editorial website preview for a modern restaurant named EMBER & BEAN.",
  },
  {
    id: "sol-clothing",
    number: "02",
    title: "SOL CLOTHING",
    category: "CLOTHING / E-COMMERCE",
    description:
      "An elegant e-commerce platform designed for an independent fashion label. The focus was on creating a seamless shopping experience with large imagery and refined typography.",
    services: ["Web Design", "Web Development"],
    liveUrl: "https://sol-clothing.vercel.app",
    image: "/images/sol-clothing.png",
    alt: "A clean, minimalist e-commerce website preview for a fashion brand named SOL CLOTHING.",
  },
  {
    id: "apex-fitness",
    number: "03",
    title: "APEX FITNESS",
    category: "FITNESS / GYM WEBSITE",
    description:
      "A high-energy digital platform for a modern fitness center, highlighting class schedules, membership tiers, and trainer profiles within a structured, impactful layout.",
    services: ["Web Design", "Web Development"],
    liveUrl: "https://apex-gym-web.vercel.app",
    image: "/images/apex-fitness.png",
    alt: "A dynamic and bold website preview for a gym named APEX FITNESS.",
  },
];

export interface ServiceItem {
  number: string;
  title: string;
  slug: string;
  startingPrice: string;
  description: string;
  ctaText: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "Web Development",
    slug: "web-development",
    startingPrice: "₹4,499+",
    description:
      "Custom websites built around your business, with responsive layouts, strong performance, and a polished user experience.",
    ctaText: "Start a Web Project",
    deliverables: [
      "Custom website design & development",
      "Responsive desktop/tablet/mobile experience",
      "Modern interactions and animations",
      "Performance optimization",
      "Basic SEO setup",
      "Sanity CMS for editable website content",
      "Update your website without coding",
      "Client content-management dashboard",
      "Third-party integrations when required",
      "Deployment and launch support",
      "Post-launch assistance for minor issues",
    ],
  },
  {
    number: "02",
    title: "Web Design",
    slug: "web-design",
    startingPrice: "₹1,499+",
    description:
      "Comprehensive UI/UX design, establishing visual direction and creating robust design systems.",
    ctaText: "Design My Website",
    deliverables: [
      "UI/UX design",
      "Page layouts",
      "Visual direction",
      "Responsive designs",
      "Typography and spacing system",
      "Consistent visual language",
      "Interactive design concepts",
      "Design refinement",
    ],
  },
  {
    number: "03",
    title: "Logo Design",
    slug: "logo-design",
    startingPrice: "₹199+",
    description:
      "Initial logo concepts, iterative refinement, and final delivery of versatile brand variations.",
    ctaText: "Create My Logo",
    deliverables: [
      "Logo concept",
      "Typography direction",
      "Visual direction",
      "Refinement",
      "Logo variations",
      "Final logo files",
      "Brand-ready assets",
    ],
  },
  {
    number: "04",
    title: "Portfolio Development",
    slug: "portfolio-development",
    startingPrice: "₹1,499+",
    description:
      "Custom design tailored for creatives, project showcase functionality, and seamless deployment.",
    ctaText: "Build My Portfolio",
    deliverables: [
      "Custom portfolio design",
      "Responsive layout",
      "Project showcase",
      "About and contact sections",
      "Smooth interactions",
      "Performance optimization",
      "Basic SEO setup",
      "Deployment support",
    ],
  },
];
