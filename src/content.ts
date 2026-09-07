export const personal = {
  name: 'Ayush Alag',
  email: 'aalag@stanford.edu',
  github: 'https://github.com/ayush-alag',
  linkedin: 'https://linkedin.com/in/ayushalag',
  x: 'https://x.com/Ayushalag1',
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
    title: 'Selected work',
    navLabel: 'Work',
    entries: [
      {
        title: 'Language models, from scratch',
        description: 'Raw PyTorch, distributed training, scaling laws, and post-training.',
        href: 'https://github.com/ayush-alag/gpt2_xl_from_scratch',
        meta: 'Code',
      },
      {
        title: 'Is EMA robust?',
        description: 'Examining data auditing in ML—and extending it to work without calibration data.',
        href: 'https://neurips.cc/virtual/2023/80624',
        meta: 'Research · 2023',
      },
      {
        title: 'Allergezy',
        description: 'A genomic approach to allergy testing. My first company, started in high school.',
        href: 'https://www.sfchronicle.com/health/article/Why-is-there-not-something-better-Teen-13525123.php',
        meta: 'Origins',
      },
    ],
  },
  { id: 'writing', title: 'Writing', navLabel: 'Writing', entries: [] },
  { id: 'news', title: 'News & updates', navLabel: 'News', entries: [] },
];
