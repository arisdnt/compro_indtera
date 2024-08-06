import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang Kami',
      href: getPermalink('/about'),
    },
    {
      text: 'Halaman',
      links: [
        {
          text: 'Layanan',
          href: getPermalink('/services'),
        },
        {
          text: 'Harga Layanan',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Hubungi Kami',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Daftar Artikel',
          href: getBlogPermalink(),
        },
        {
          text: 'Daftar Kategori',
          href: getPermalink('tutorials', 'category'),
        },
      ],
    },
  ],
  actions: [{ text: 'Hubungin Kami', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
