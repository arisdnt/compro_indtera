import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Page',
      links: [
        {
          text: 'Service',
          href: getPermalink('/services'),
        },
        {
          text: 'Princing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Concact Us',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Article List',
          href: getBlogPermalink(),
        },
        {
          text: 'Category',
          href: getPermalink('tutorials', 'category'),
        },
      ],
    },
  ],
  actions: [{ variant: 'primary', text: 'Hubungi Kami', href: 'https://wa.me/+6282220005101', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/+6282220005101' },
    { ariaLabel: 'Tiktok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@teracendani' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/teracendani/' },
    { ariaLabel: 'Gmail', icon: 'tabler:brand-gmail', href: 'mailto:indteracendani@gmail.com' },
  ],
};
