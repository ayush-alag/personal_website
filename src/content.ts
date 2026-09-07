export const personal = {
  name: 'Ayush Alag',
  email: 'aalag@stanford.edu',
  github: 'https://github.com/ayush-alag',
  linkedin: 'https://linkedin.com/in/ayushalag',
  x: 'https://x.com/Ayushalag1',
  allergezy: 'https://www.sfchronicle.com/health/article/Why-is-there-not-something-better-Teen-13525123.php',
};

export type Entry = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

export type ContentSection = {
  id: 'work' | 'writing' | 'news';
  title: string;
  navLabel: string;
  entries: Entry[];
};

// Add writing and news here when you have something to share.
// Empty sections (and their navigation links) stay hidden.
export const sections: ContentSection[] = [
  {
    id: 'work',
    title: 'Work',
    navLabel: 'Work',
    entries: [
      {
        title: 'GPT-2 from scratch',
        description: 'A transformer in PyTorch, including distributed training, scaling laws, and post-training.',
        href: 'https://github.com/ayush-alag/gpt2_xl_from_scratch',
        meta: '',
      },
      {
        title: 'Is EMA robust?',
        description: 'Research on the robustness of data auditing, with Yangsibo Huang and Kai Li.',
        href: 'https://neurips.cc/virtual/2023/80624',
        meta: 'RegML @ NeurIPS 2023',
      },
      {
        title: 'Allergezy',
        description: 'The allergy-testing company I started in high school. A story in the SF Chronicle.',
        href: 'https://www.sfchronicle.com/health/article/Why-is-there-not-something-better-Teen-13525123.php',
        meta: '',
      },
    ],
  },
  { id: 'writing', title: 'Writing', navLabel: 'Writing', entries: [] },
  { id: 'news', title: 'News', navLabel: 'News', entries: [] },
];
