import { BlogPost, ExperienceItem, ProjectItem, SocialLink, UserProfile } from '../types';

export const initialProfile: UserProfile = {
  name: 'Ankan Debbarma',
  heading: 'hi im ankan.',
  intro:
    'im a software engineer builder and student who enjoys building products startups and AI powered tools. I spend most of my time creating things learning new technologies and experimenting with ideas that can become real products.',
  aboutParagraphs: [
    'im just a guy who loves building things.',
    'My journey started with curiosity exploring how websites work creating side projects and turning random ideas into software. Over time building became more than a hobby; it became something I genuinely enjoy doing every day.',
    'I love the zero to one phase of creating products: talking to users identifying problems validating ideas and shipping solutions quickly. There is something exciting about taking an idea from a blank page to something people can actually use.',
    'My core stack revolves around TypeScript React Next.js Node.js Python and Tailwind CSS. But for me technology is just a tool. What matters most is building products that are simple useful fast and enjoyable to use.',
    'In the past I have built side projects startup experiments developer tools and community focused platforms while collaborating with early stage teams and fellow builders. Each project has taught me something new about technology design and solving real world problems.',
    'Currently im learning Data Analytics and focused on becoming an AI Engineer. im exploring machine learning AI systems intelligent interfaces and data driven products while continuing to build and share what I learn along the way.',
    'When im not coding you will usually find me learning something new reading working out running or thinking about the next thing I want to build.'
  ],
  email: 'ankandebbarmaa@gmail.com',
  location: 'India',
  currentRole: 'Software Engineer & Builder',
  newsletterHeadline: 'when i write. drop your email below.',
  contactNote:
    'i usually reply to thoughtful emails within a few days. p.s: ping me with under 300 characters and a clear ask for fastest response.',
  photoUrl:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  photoCaption: 'taking a breath between builds.'
};

export const initialExperiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Digontom Pvt. Ltd.',
    position: 'Frontend Engineer Intern',
    dates: 'April 2026 to June 2026',
    location: 'Remote',
    description:
      'Engineered responsive web interfaces and production frontend platforms with focus on performance and usability.',
    achievements: [
      'Developed responsive web interfaces using React.js and Tailwind CSS, focusing on usability, functionality, and performance.',
      'Built and optimized a Food Delivery website and an E-commerce platform during the internship.',
      'Identified and resolved interface and functionality issues while improving the overall user experience.',
      'Collaborated with team members during development and incorporated feedback to improve application quality.'
    ],
    link: 'https://digontom.com'
  },
  {
    id: 'exp-2',
    company: 'Cisco',
    position: 'Remote Virtual Internship',
    dates: 'October 2025 to November 2025',
    location: 'Remote',
    description:
      'Completed virtual training on enterprise computer networking, network protocols, and security fundamentals.',
    achievements: [
      'Completed virtual training in networking, cybersecurity, and IoT using Cisco Packet Tracer.',
      'Worked on routing, switching, IP addressing, and network security fundamentals.',
      'Applied networking concepts through virtual network configuration and troubleshooting exercises.'
    ]
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-ne-startups',
    name: 'NE Startups',
    technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://nestartups.site',
    points: [
      'Developed a platform focused on showcasing and supporting startups from Northeast India.',
      'Built responsive interfaces and integrated Firebase for dynamic data management.',
      'Tested core functionality and refined the interface for usability and application reliability.'
    ]
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'post-ne-startups',
    slug: 'i-built-ne-startups',
    title: "I Built NE Startups Because I Couldn't Find Northeast India's Startups Anywhere Else",
    date: 'Sep 26, 2026',
    readingTime: '3 min read',
    category: 'Startups & Building',
    tags: ['northeast', 'startups', 'building-in-public', 'community', 'indie-building'],
    excerpt:
      'Why I built a free directory exclusively for startups across Northeast India and an open invitation for regional founders to get listed.',
    content: `A few months ago I went looking for startups from the Northeast: companies building things in Assam Meghalaya Manipur Nagaland and the rest of the region. I wanted to see what people were working on maybe find inspiration maybe find a company to follow or apply to.

I could not find them.

Not because they do not exist. They do and some of them are doing genuinely interesting work but because there is no single place that collects them. Every startup directory I found was dominated by Bangalore Delhi NCR and Mumbai. If a founder in Guwahati or Shillong wanted visibility their options were basically: hope a journalist notices them or post on LinkedIn and hope the algorithm is kind.

So I built **NE Startups** a free directory exclusively for startups from Northeast India.

---

### The idea in plain terms

It is simple by design:

- **Startups from the Northeast can create a free listing for their company**
- **They can post open roles if they're hiring**
- **They get a public profile that's discoverable, instead of invisible**

No paywall no "premium tier" to get seen. The whole point is publicity that these companies otherwise do not get. If you're building something in the region the bar to be included is just: *you're from the Northeast and you're building something real.*

---

### Why this, and why now

The Northeast has a startup scene recently at that. But most of the infrastructure built around Indian startups (media coverage discovery platforms investor networks) is designed around a Tier 1 city map of the country.

When your company does not show up on that map you do not just lose visibility you lose the compounding benefits of visibility:

1. **Talent** that hears about you and wants to join
2. **Founders** who might collaborate or trade insights
3. **Journalists and investors** who might write about or back you

> "A directory does not fix all of that on its own. But it is a start and it is the piece I could actually build."

---

### Keeping it simple on purpose

I kept the build intentionally simple. This is a side project and the goal was not to prove I could use a complicated setup. It was to ship something real and useful as fast as possible. 

A directory doesn't need to be technically impressive to be valuable. It needs to be:
- Easy to list on
- Easy to browse
- Fast to load

Everything else was a distraction from getting it in front of founders. I would rather spend the next few months talking to founders and getting listings than polishing a feature nobody asked for yet.

---

### What was hard about it

Building the listing pages and forms was not the hard part. The genuinely hard part has been the same problem every early directory faces: **a directory with no listings is not a directory it is an empty page.**

Getting the first startups to sign up when there is no existing traffic or credibility yet is a classic chicken and egg problem. I have been reaching out directly to founders I know in Northeast focused founder groups and just being upfront that this is new and I need early listings to make it useful for everyone else.

---

### Where it stands today

The site is live. It does not have listings yet which is exactly why im writing this post.

If you're a founder building something in the Northeast or you know one this is an open invitation to be one of the first companies on there. Early listings get outsized visibility simply because there is less competing for attention right now.

---

### What's next

Once there are enough listings to make browsing genuinely useful I want to add:
- **Filtering by state & sector** (Assam Meghalaya Manipur Nagaland Tripura Mizoram Arunachal Pradesh Sikkim)
- **A way for people to follow specific startups** for updates
- **A lightweight "who's hiring" digest**

But none of that matters if the directory is empty. So for now the goal is simple: **get the first 20 to 30 startups on the platform.**

---

### Get listed or say hello

If you're building something in Assam Meghalaya Manipur Nagaland Tripura Mizoram Arunachal Pradesh or Sikkim:

👉 **[Come list your startup for free → nestartups.site](https://nestartups.site/)**

Building this in public. If you have feedback know a startup that should be listed or just want to say something did not work when you tried it I would genuinely like to hear it. Drop me a note below or reach out directly!`
  }
];

export const initialSocials: SocialLink[] = [
  {
    platform: 'email',
    label: 'Email',
    href: 'mailto:ankandebbarmaa@gmail.com',
    handle: 'ankandebbarmaa@gmail.com'
  },
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/ankandebbarma',
    handle: '@ankandebbarma'
  },
  {
    platform: 'x',
    label: 'X / Twitter',
    href: 'https://x.com/ankandebbarma',
    handle: '@ankandebbarma'
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ankan-debbarma',
    handle: 'in/ankan-debbarma'
  }
];
