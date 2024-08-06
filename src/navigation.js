import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
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
  actions: [{ variant: 'primary', text: 'Hubungi Kami', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
