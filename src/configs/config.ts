export const siteConfig: {
  baseUrl: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://muhammadfiaz.com',
  author: 'Amit Singh',
  author_surname: 'Singh',
  titlePrefix: 'Amit Singh',
  profile_image: 'https://avatars.githubusercontent.com/u/79762903?v=4',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: 'https://ko-fi.com/muhammadfiaz',
    sponsor: 'https://github.com/sponsors/muhammad-fiaz',
    email: 'timaraw18@gmail.com',
    twitter: '@muhammadfiaz_',
    github: 'muhammad-fiaz',
    linkedin: 'https://www.linkedin.com/in/muhammad-fiaz-/',
    blog: 'https://articles.muhammadfiaz.com',
    medium: 'https://medium.com/@amit.singh_37203',
    dev: 'https://dev.to/muhammadfiaz',
    hashnode: 'https://muhammadfiaz.hashnode.dev',
    discord: 'https://discord.gg/mXMhy2EX',
    github_organisation: 'https://github.com/FiazTechnologies',
    daily_dev: {
      username: 'muhammadfiaz',
      card: 'https://api.daily.dev/devcards/v2/JVyK3ICBzKPdM0rcDj1o4.png?type=wide&r=vde'
    },
    holopin: 'muhammadfiaz'
  },
  metadata: {
    description: `Hi! I'm Amit Singh, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Amit Singh, Full Stack Developer, Amit Singh portfolio, Amit Singh GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/muhammad-fiaz/muhammad-fiaz/output/github-contribution-grid-snake.svg'
  }
};
