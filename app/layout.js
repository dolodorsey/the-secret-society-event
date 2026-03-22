export const metadata = {
  title: 'SECRET SOCIETY — The Art of Being Selective',
  description: 'The most exclusive after-dark experience in Atlanta. A midnight affair where the music is intimate, the dress code is impeccable, and the guest list is curated.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
      </head>
      <body style={{margin:0,padding:0,background:'#08070A'}}>{children}</body>
    </html>
  );
}
