/**
 * @fileOverview Service for fetching social media posts.
 * In a production environment, this would interface with Prisma.
 */

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'facebook';
  imageUrl: string;
  caption: string;
  link: string;
  date: string;
}

export async function getSocialPosts(): Promise<SocialPost[]> {
  // Mock data for social posts - would normally use prisma.socialPost.findMany()
  return [
    {
      id: '1',
      platform: 'instagram',
      imageUrl: '/redes/ig1.webp',
      caption: 'Entregas flash en el centro de MDP! ⚡',
      link: 'https://instagram.com/enviosdosruedas',
      date: '2024-05-20'
    },
    {
      id: '2',
      platform: 'facebook',
      imageUrl: '/redes/fac1.webp',
      caption: 'Nueva flota corporativa lista para rodar. 🏍️',
      link: 'https://facebook.com/enviosdosruedas',
      date: '2024-05-18'
    },
    {
      id: '3',
      platform: 'instagram',
      imageUrl: '/redes/ig3.webp',
      caption: 'Tips para embalar tus envíos E-commerce. 📦',
      link: 'https://instagram.com/enviosdosruedas',
      date: '2024-05-15'
    },
    {
      id: '4',
      platform: 'facebook',
      imageUrl: '/redes/fac2.webp',
      caption: 'Sumate a nuestra red de partners locales.',
      link: 'https://facebook.com/enviosdosruedas',
      date: '2024-05-12'
    }
  ];
}
