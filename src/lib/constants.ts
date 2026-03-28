import type { NavLink, BlogPost, Book, Passion, Country, SpeakingTopic, SpeakingEvent } from "@/lib/types";

export const SITE_URL = "https://www.deepikagorji.com";

export const SITE_NAME = "Deepika Gorji";

export const SITE_TAGLINE = "Survive. Learn. Move On.";

export const CONTACT_EMAIL = "info@deepikagorji.com";

export const CONTACT_PHONE = "+1 713-852-8087";

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About Deepi", path: "/about" },
  { label: "Books", path: "/books" },
  { label: "Speaking", path: "/speaking" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-wrote-a-girls-journey",
    title: "Why I Wrote 'A Girl's Journey'",
    excerpt:
      "The story behind the memoir — how losing my father gave me the courage to finally put pen to paper and share our family's incredible journey across four countries.",
    date: "March 2026",
    category: "Writing",
  },
  {
    slug: "50-5ks-at-50",
    title: "50 5Ks at 50: Running for a Cause",
    excerpt:
      "What started as a personal challenge became a mission. Here's how completing fifty 5K runs in my 50th year taught me about persistence, community, and running for something bigger than myself.",
    date: "February 2026",
    category: "Passions",
  },
  {
    slug: "from-chemistry-to-it",
    title: "From Chemistry to IT: Reinventing Yourself",
    excerpt:
      "After a decade in oil & gas with a PhD in Chemistry, I made the leap to IT. The transition wasn't easy, but it taught me the most valuable lesson: adaptability is your superpower.",
    date: "January 2026",
    category: "Career",
  },
  {
    slug: "lessons-from-four-countries",
    title: "Lessons from Four Countries",
    excerpt:
      "India shaped my roots. Iraq tested my resilience. Canada offered refuge. America became home. Each country left an indelible mark on who I am today.",
    date: "December 2025",
    category: "Journey",
  },
  {
    slug: "tedx-experience",
    title: "My TEDx Experience: Finding My Voice",
    excerpt:
      "Standing on that red circle was both terrifying and exhilarating. Here's what I learned about vulnerability, storytelling, and the power of sharing your truth with the world.",
    date: "November 2025",
    category: "Speaking",
  },
  {
    slug: "happy-and-lucky",
    title: "Happy & Lucky: Life with Fur Babies",
    excerpt:
      "They don't just complete our family — they run it. A lighthearted look at how two four-legged companions became the heart of our Houston home.",
    date: "October 2025",
    category: "Life",
  },
];

export const featuredBook: Book = {
  id: "a-girls-journey",
  title: "A Girl's Journey",
  subtitle: "Survive. Learn. Move On.",
  description: [
    "From a small town in India, through war-torn Iraq, to a new life in Canada and the USA. \"A Girl's Journey\" is a memoir of resilience, learning, and moving forward. This deeply personal story traces the life of Dr. Deepika Gorji as she navigates cultures, careers, and continents — always with courage and an unwavering spirit.",
    "Dedicated to her beloved father, this book is both a tribute and a testament to the strength that comes from family, faith, and the refusal to give up. Every chapter is a lesson in survival, adaptation, and the beauty of starting over.",
  ],
  coverImage: "/assets/images/book-cover.jpg",
  reviews: [
    {
      text: "A powerful memoir with reckless candor that keeps you turning pages. Deepika's journey is one of raw honesty and incredible strength.",
      author: "Ria Reeves",
    },
    {
      text: "An inspiring tale of courage and resilience. A must-read for anyone who has ever faced life's challenges head-on.",
      author: "Book Reviewer",
    },
    {
      text: "This memoir redefines what it means to start over. Beautifully written and deeply moving.",
      author: "Reader Review",
    },
  ],
};

export const passions: Passion[] = [
  { src: "/assets/images/passion-jeep.jpg", label: "Rubicon Jeep", alt: "Red Rubicon Jeep" },
  { src: "/assets/images/passion-family.jpg", label: "Family Portrait", alt: "Family portrait" },
  { src: "/assets/images/passion-dogs.jpg", label: "Happy & Lucky", alt: "Dogs Happy and Lucky" },
  { src: "/assets/images/passion-medal.jpg", label: "Running Medal", alt: "5K Running Medal" },
];

export const countries: Country[] = [
  { name: "India", year: "1978", label: "Origin" },
  { name: "Iraq", year: "1999", label: "Transition" },
  { name: "Canada", year: "2020", label: "Residence" },
  { name: "USA", year: "2022", label: "Current" },
];

export const speakingTopics: SpeakingTopic[] = [
  {
    title: "Survive. Learn. Move On.",
    desc: "The art of reinvention — how embracing change and adversity becomes your greatest strength.",
  },
  {
    title: "A Girl's Journey",
    desc: "From India to Iraq to Canada to the USA — lessons from a life lived across borders and cultures.",
  },
  {
    title: "The Power of Showing Up",
    desc: "How Toastmasters, 50 5K runs, and saying 'yes' to life changed everything.",
  },
];

export const speakingEvents: SpeakingEvent[] = [
  {
    year: "2008",
    event: "Joined Toastmasters International",
    location: "Houston, TX",
    desc: "Began the journey of public speaking and leadership development.",
  },
  {
    year: "2023",
    event: "TEDx Talk — Deepi's Journey",
    location: "TEDx Stage",
    desc: "Delivered a powerful talk about resilience, cultural adaptation, and finding your voice.",
  },
  {
    year: "Ongoing",
    event: "Community & Corporate Speaking",
    location: "Various",
    desc: "Sharing stories of transformation at community events, corporate gatherings, and literary festivals.",
  },
];
