export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  details: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Brand Identity Design",
    category: "Branding",
    description: "Modern brand identity system with comprehensive guidelines",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
    ],
    details:
      "A comprehensive brand identity project including logo design, color palette, typography system, and brand guidelines for a modern creative agency.",
  },
  {
    id: "project-2",
    title: "Digital Marketing Campaign",
    category: "Marketing",
    description: "Integrated digital campaign across multiple platforms",
    image:
      "../background.png",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop",
    ],
    details:
      "A creative digital marketing campaign featuring social media assets, email templates, and digital advertisements with cohesive visual language.",
  },
  {
    id: "project-3",
    title: "Web Design & Development",
    category: "Web Design",
    description: "Responsive website design with modern UX/UI principles",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
    ],
    details:
      "A modern, responsive website design featuring clean layouts, smooth interactions, and optimized user experience across all devices.",
  },
  {
    id: "project-4",
    title: "UI/UX Components Library",
    category: "UI Design",
    description: "Comprehensive design system and component library",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
    ],
    details:
      "A comprehensive UI component library with documentation, including buttons, cards, forms, modals, and other reusable design elements.",
  },
  {
    id: "project-5",
    title: "App Design & Prototyping",
    category: "Mobile App",
    description: "Mobile app design with interactive prototypes",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
    ],
    details:
      "A mobile application design featuring intuitive navigation, beautiful interfaces, and interactive prototypes demonstrating key user flows.",
  },
  {
    id: "project-6",
    title: "Visual Storytelling",
    category: "Content Design",
    description: "Creative visual content and storytelling assets",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
    ],
    details:
      "A series of visual content pieces and illustrations that tell compelling brand stories through creative design and compelling imagery.",
  },
  {
    id: "project-7",
    title: "Visual Storytelling",
    category: "Content Design",
    description: "Creative visual content and storytelling assets",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&fit=crop&q=80",
    ],
    details:
      "A series of visual content pieces and illustrations that tell compelling brand stories through creative design and compelling imagery.",
  },
];
