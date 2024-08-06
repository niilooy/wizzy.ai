import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaSmile,
  FaMusic,
  FaTheaterMasks,
  FaGlobeAmericas,
  FaDice,
} from "react-icons/fa";
import { FaBookOpen, FaBrain, FaCode, FaHeart, FaLanguage, FaPalette, FaXTwitter, FaDumbbell, FaBug, FaBlogger, FaThreads, FaFire, FaUserSecret, FaGift } from "react-icons/fa6";

export const contentTemplates = [
  {
    name: "Youtube Video Description",
    desc: "Generate engaging YouTube video descriptions",
    category: "Social",
    icon: FaYoutube,
    aiPrompt:
      "Create an engaging YouTube video description based on the given title and outline. Include relevant keywords, a compelling hook, and a clear call-to-action. Format the description for easy readability, using appropriate line breaks and emojis where suitable.",
    slug: "youtube-description",
    form: [
      {
        label: "Video Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Video Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Video Idea",
    desc: "Generate creative YouTube video ideas",
    category: "Social",
    icon: FaYoutube,
    aiPrompt:
      "Generate a unique and engaging YouTube video idea based on the given niche and outline. Include a catchy title, main talking points, and potential visual elements or B-roll suggestions. Consider current trends and viewer engagement tactics in your idea.",
    slug: "generate-youtube-video-idea",
    form: [
      {
        label: "Video Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Topic Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    desc: "Generate relevant Instagram hashtags",
    category: "Social",
    icon: FaInstagram,
    aiPrompt:
      "Generate a set of 15-20 relevant and effective Instagram hashtags based on the given post niche and outline. Include a mix of popular, niche-specific, and branded hashtags. Provide a brief explanation of why these hashtags are suitable for maximum reach and engagement.",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Threads Hashtags",
    desc: "Generate effective Threads hashtags",
    category: "Social",
    icon: FaThreads,
    aiPrompt:
      "Generate a set of 10-15 relevant and effective Threads hashtags based on the given post niche and outline. Focus on trending and niche-specific hashtags that will increase visibility and engagement. Provide a brief explanation of the strategy behind the chosen hashtags.",
    slug: "generate-threads-hashtags",
    form: [
      {
        label: "Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "LinkedIn Post",
    desc: "Create engaging LinkedIn post ideas",
    category: "Social",
    icon: FaLinkedin,
    aiPrompt:
      "Develop a compelling LinkedIn post idea based on the given niche and outline. Include a attention-grabbing opening, main content points, and a call-to-action. Consider professional tone, industry trends, and LinkedIn's best practices for engagement. Suggest relevant hashtags to include.",
    slug: "generate-linkedin-post",
    form: [
      {
        label: "Post Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Post Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "X Post",
    desc: "Craft concise and impactful X (Twitter) posts",
    category: "Social",
    icon: FaXTwitter,
    aiPrompt:
      "Create a compelling X (Twitter) post of up to 280 characters based on the given niche and outline. Incorporate attention-grabbing language, relevant hashtags, and a call-to-action if appropriate. Consider current trends and viral potential in your post creation.",
    slug: "generate-tweet-post",
    form: [
      {
        label: "Tweet Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Tweet Outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "GenZ Lingo Translator",
    desc: "Translate text into GenZ lingo",
    category: "Social",
    icon: FaFire,
    aiPrompt:
      "Translate the given text into authentic GenZ lingo, maintaining the core message while using popular GenZ slang, abbreviations, and phrases. Ensure the translation is genuine and not exaggerated. Provide a brief explanation of key terms used in the translation.",
    slug: "genz-lingo-translator",
    form: [
      {
        label: "Text to Translate",
        field: "textarea",
        name: "originalText",
        required: true,
      },
    ],
  },
  {
    name: "Rizzlord Dating Advice",
    desc: "Get respectful dating advice and pickup lines",
    category: "Lifestyle",
    icon: FaHeart,
    aiPrompt:
      "Generate respectful and genuine dating advice or a clever pickup line based on the given scenario. Ensure the advice focuses on building authentic connections and respects consent. For pickup lines, aim for wit without being offensive. Provide a brief explanation of why the advice or line is effective and appropriate.",
    slug: "rizzlord-dating-advice",
    form: [
      {
        label: "Dating Scenario",
        field: "textarea",
        name: "scenario",
        required: true,
      },
      {
        label: "Preferred Tone",
        field: "input",
        name: "tone",
      },
    ],
  },
  {
    name: "Emojify",
    desc: "Add appropriate emojis to your text",
    category: "Social",
    icon: FaSmile,
    aiPrompt:
      "Enhance the given text with appropriate emojis, improving its emotional impact and readability. Place emojis where they naturally fit, maintaining a balance that enhances rather than distracts from the message. Consider the specified emoji density in your additions.",
    slug: "emojify-text",
    form: [
      {
        label: "Text to Emojify",
        field: "textarea",
        name: "originalText",
        required: true,
      },
      {
        label: "Emoji Density (light, moderate, heavy)",
        field: "input",
        name: "emojiDensity",
      },
    ],
  },
  {
    name: "Academic Proofreader",
    desc: "Professional proofreading for academic texts",
    category: "Writing",
    icon: FaBookOpen,
    aiPrompt:
      "Proofread the given text with the precision of a journal editor. Correct grammatical errors, improve sentence structure, ensure consistency in terminology and style, and enhance overall clarity and coherence. Provide the corrected text along with a summary of major changes and suggestions for further improvement. Consider the specified academic field or journal style in your edits.",
    slug: "academic-proofreader",
    form: [
      {
        label: "Text to Proofread",
        field: "textarea",
        name: "originalText",
        required: true,
      },
      {
        label: "Academic Field or Journal Style",
        field: "input",
        name: "style",
      },
    ],
  },
  {
    name: "Song Mood Matcher",
    desc: "Get song recommendations based on your mood",
    category: "Lifestyle",
    icon: FaMusic,
    aiPrompt:
      "Recommend 5-7 songs that match the described mood and preferences. For each song, provide the title, artist, and a brief explanation of why it fits the mood. Consider a diverse range of genres unless otherwise specified. Organize the recommendations for easy readability.",
    slug: "song-mood-matcher",
    form: [
      {
        label: "Current Mood",
        field: "textarea",
        name: "mood",
        required: true,
      },
      {
        label: "Preferred Genres (optional)",
        field: "input",
        name: "genres",
      },
    ],
  },
  {
    name: "Improv Scenario",
    desc: "Create unique scenarios for improv or acting",
    category: "Miscellaneous",
    icon: FaTheaterMasks,
    aiPrompt:
      "Generate a unique and engaging improv scenario based on the given parameters. Include detailed character descriptions, setting information, and a central conflict or goal. The scenario should be open-ended enough for creative interpretation while providing sufficient structure to guide the performance. Organize the scenario into clear sections for easy reference during use.",
    slug: "improv-scenario",
    form: [
      {
        label: "Number of Characters",
        field: "input",
        name: "characterCount",
        required: true,
      },
      {
        label: "Setting or Theme (optional)",
        field: "input",
        name: "setting",
      },
    ],
  },
  {
    name: "Code Commenting Assistant",
    desc: "Generate helpful comments for your code",
    category: "Development",
    icon: FaCode,
    aiPrompt:
      "Analyze the provided code snippet and generate clear, concise, and helpful comments. Explain the purpose of key functions, complex logic, and any non-obvious implementations. Use best practices for commenting in the given programming language. Preserve code formatting and indentation in your response.",
    slug: "code-commenting-assistant",
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "codeSnippet",
        required: true,
      },
      {
        label: "Programming Language",
        field: "input",
        name: "language",
        required: true,
      },
    ],
  },
  {
    name: "Travel Itinerary Planner",
    desc: "Create a customized travel itinerary",
    category: "Lifestyle",
    icon: FaGlobeAmericas,
    aiPrompt:
      "Create a detailed daily itinerary for the specified travel destination, duration, and preferences. Include a mix of popular attractions and off-the-beaten-path experiences. Consider the traveler's interests, budget level, and specific requirements. Provide recommendations for accommodations, transportation, and dining. Organize the itinerary by day with clear headings and subheadings.",
    slug: "travel-itinerary-planner",
    form: [
      {
        label: "Destination",
        field: "input",
        name: "destination",
        required: true,
      },
      {
        label: "Duration of Stay (in days)",
        field: "input",
        name: "duration",
        required: true,
      },
      {
        label: "Interests and Preferences",
        field: "textarea",
        name: "preferences",
      },
    ],
  },
  {
    name: "Gym Bro Advice",
    desc: "Get workout and nutrition tips from a gym enthusiast",
    category: "Lifestyle",
    icon: FaDumbbell,
    aiPrompt:
      "Provide gym advice, workout tips, or nutritional guidance in the style of a stereotypical 'gym bro'. Use appropriate slang and enthusiasm, but ensure the advice is fundamentally sound and safe. Include a workout plan or nutritional tip based on the user's goals and experience level.",
    slug: "gym-bro-advice",
    form: [
      {
        label: "Fitness Goal",
        field: "input",
        name: "goal",
        required: true,
      },
      {
        label: "Experience Level",
        field: "input",
        name: "experience",
      },
      {
        label: "Any specific areas of interest?",
        field: "textarea",
        name: "interests",
      },
    ],
  },
  {
    name: "Code Bug Finder",
    desc: "Identify potential bugs in your code",
    category: "Development",
    icon: FaBug,
    aiPrompt:
      "Analyze the provided code snippet for potential bugs, logical errors, and optimization opportunities. Provide a detailed report of findings, including the location of each issue, an explanation of the problem, and suggested fixes. Consider best practices and common pitfalls for the given programming language.",
    slug: "code-bug-finder",
    form: [
      {
        label: "Code Snippet",
        field: "textarea",
        name: "codeSnippet",
        required: true,
      },
      {
        label: "Programming Language",
        field: "input",
        name: "language",
        required: true,
      },
    ],
  },
  {
    name: "Blog Post Idea",
    desc: "Generate creative ideas for your next blog post",
    category: "Writing",
    icon: FaBlogger,
    aiPrompt:
      "Generate 5 unique and engaging blog post ideas based on the given niche and target audience. For each idea, provide a catchy title, a brief outline of the main points to cover, and suggestions for making the content more engaging (e.g., infographics, case studies, interviews). Consider current trends and SEO best practices in your suggestions.",
    slug: "blog-post-idea",
    form: [
      {
        label: "Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "SEO Title Optimizer",
    desc: "Optimize your blog post titles for search engines",
    category: "Writing",
    icon: FaBrain,
    aiPrompt:
      "Analyze the given blog post title and primary keyword. Provide 3-5 SEO-optimized variations of the title that maintain the original meaning while improving search engine visibility. Explain the improvements made in each variation and why they are likely to perform better in search results.",
    slug: "seo-title-optimizer",
    form: [
      {
        label: "Original Blog Post Title",
        field: "input",
        name: "originalTitle",
        required: true,
      },
      {
        label: "Primary Keyword",
        field: "input",
        name: "keyword",
        required: true,
      },
    ],
  },
  {
    name: "Gift Idea",
    desc: "Get personalized gift suggestions for any occasion",
    category: "Miscellaneous",
    icon: FaGift,
    aiPrompt:
      "Generate 5-7 unique and thoughtful gift ideas based on the recipient's interests, the occasion, and the given budget. For each suggestion, provide a brief description of the gift, why it's suitable for the recipient, and where it can be purchased. Include a mix of material gifts and experience-based presents where appropriate.",
    slug: "gift-idea",
    form: [
      {
        label: "Recipient's Interests",
        field: "textarea",
        name: "interests",
        required: true,
      },
      {
        label: "Occasion",
        field: "input",
        name: "occasion",
        required: true,
      },
      {
        label: "Budget Range",
        field: "input",
        name: "budget",
      },
    ],
  },
  {
    name: "Conspiracy Theory",
    desc: "Create outlandish (and fictional) conspiracy theories",
    category: "Miscellaneous",
    icon: FaUserSecret,
    aiPrompt:
      "Generate a completely fictional and over-the-top conspiracy theory based on the given topics or elements. Create an elaborate (but clearly false) narrative connecting these elements in unexpected ways. Include 'evidence' that supports the theory and explain why it's being 'covered up'. Ensure the theory is obviously satirical and not harmful or misleading. Conclude with a clear disclaimer about the fictional nature of the theory.",
    slug: "conspiracy-theory",
    form: [
      {
        label: "Key Elements or Topics",
        field: "textarea",
        name: "elements",
        required: true,
      },
      {
        label: "Desired Level of Absurdity (1-10)",
        field: "input",
        name: "absurdityLevel",
      },
    ],
  },
  {
    name: "Random Challenge",
    desc: "Generate fun and unique personal challenges",
    category: "Miscellaneous",
    icon: FaDice,
    aiPrompt:
      "Create a unique and engaging personal challenge based on the user's interests and the desired duration. The challenge should be achievable, fun, and potentially beneficial for personal growth or skill development. Provide a clear description of the challenge, daily or weekly tasks if applicable, and suggestions for tracking progress. Include tips for staying motivated and potential variations to increase or decrease difficulty.",
    slug: "random-challenge",
    form: [
      {
        label: "Areas of Interest",
        field: "textarea",
        name: "interests",
        required: true,
      },
      {
        label: "Challenge Duration",
        field: "input",
        name: "duration",
        required: true,
      },
      {
        label: "Difficulty Level (Easy, Medium, Hard)",
        field: "input",
        name: "difficulty",
      },
    ],
  },
];