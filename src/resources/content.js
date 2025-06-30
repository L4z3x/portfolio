import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Moussa",
  lastName: "Mousselmal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "m_mousselmal@estin.dz",
  location: "Africa/Algiers", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/L4z3x",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/moussa-mousselmal-49642a281/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/l4z3x_m",
  },
];

const home = {
  path: "/",
  image: "/images/og/image.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Diving Into Tech World</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">HCA platform</strong>
      </>
    ),
    href: "/work/hca-website",
  },
  subline: (
    <>
      I'm Moussa, a CS student at{" "}
      <strong href="https://estin.dz" target="_blank" rel="noopener noreferrer">
        Estin
      </strong>
      , I enjoy building
      <br /> software solutions. and learning Cyber security.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Moussa is an Algeria-based software engineer with a passion for solving
        real-world problems through clean, efficient, and purposeful code. His
        work spans command-line tools, desktop integrations, web platforms, and
        the convergence of low-level systems and modern web technologies.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Estin",
        description: <>Studing Computer Science .</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Back-End Developement",
        description: (
          <>
            Able to build powerfull Back-Ends with <strong>django</strong>.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   alt: "hca site",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   alt: "khatamat-platform",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Rust Programming",
        description: (
          <>
            familiar with building Software with <strong>Rust</strong>.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   alt: "hca site",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   alt: "khatamat-platform",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Linux",
        description: <>I Use Arch By The Way</>,
        images: [
          // {
          //   src: "/images/skills/arch.png",
          //   width: 16,
          //   height: 13,
          // }
        ],
      },
      {
        title: "Python Programming",
        description: <>familiar with python language for various purposes</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about Tech  ...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
