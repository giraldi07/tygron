import './globals.css';
import type { Metadata } from 'next';
import { Bebas_Neue, Poppins } from 'next/font/google';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Tygron Playground & Lounge - Gaming Lounge Bogor | PS Rental & E-Sport',
  description: 'The biggest gaming lounge in Bogor! PlayStation 4, PS5, Nintendo Switch rental, VIP rooms, and e-sport tournaments. Join the ultimate gaming experience at Tygron.',
  keywords: 'gaming lounge Bogor, PS rental Bogor, e-sport Bogor, PlayStation rental, Nintendo Switch, gaming center, tournament gaming',
  openGraph: {
    title: 'Tygron Playground & Lounge - The Biggest Playground in Town',
    description: 'Experience premium gaming with PS4, PS5, Nintendo Switch, and VIP rooms. Join tournaments and gaming events in Bogor.',
    url: 'https://tygron.com',
    siteName: 'Tygron Playground & Lounge',
    images: [{
      url: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg',
      width: 1200,
      height: 630,
      alt: 'Tygron Gaming Lounge',
    }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tygron Playground & Lounge - Gaming Center Bogor',
    description: 'The biggest gaming lounge in Bogor with PS4, PS5, Nintendo Switch rentals and e-sport tournaments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bogor" />
        <meta name="geo.position" content="-6.595038;106.816635" />
        <meta name="ICBM" content="-6.595038, 106.816635" />
      </head>
      <body className={`${bebasNeue.variable} ${poppins.variable} font-poppins bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}