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
      imageUrl: 'https://picsum.photos/seed/envios-ig1/600/600',
      caption: 'Entregas flash en el centro de MDP! ⚡',
      link: 'https://instagram.com/enviosdosruedas',
      date: '2024-05-20'
    },
    {
      id: '2',
      platform: 'facebook',
      imageUrl: 'https://picsum.photos/seed/envios-fb1/600/600',
      caption: 'Nueva flota corporativa lista para rodar. 🏍️',
      link: 'https://facebook.com/enviosdosruedas',
      date: '2024-05-18'
    },
    {
      id: '3',
      platform: 'instagram',
      imageUrl: 'https://picsum.photos/seed/envios-ig2/600/600',
      caption: 'Tips para embalar tus envíos E-commerce. 📦',
      link: 'https://instagram.com/enviosdosruedas',
      date: '2024-05-15'
    },
    {
      id: '4',
      platform: 'facebook',
      imageUrl: 'https://picsum.photos/seed/envios-fb2/600/600',
      caption: 'Sumate a nuestra red de partners locales.',
      link: 'https://facebook.com/enviosdosruedas',
      date: '2024-05-12'
    }
  ];
}
