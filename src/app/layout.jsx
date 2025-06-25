// app/layout.jsx
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StoryblokProvider from '../components/StoryblokProvider'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics';
import ScrollTracker from '../components/ScrollTracker';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Refine Web Studio - Professional Web Development Birmingham',
  description: 'Professional web development services for Birmingham businesses. We create high-performance websites that convert visitors into customers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        
        {/* Analytics scripts */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="clarity-script" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Analytics />
        <ScrollTracker />
        <StoryblokProvider>
          <Navigation />
          {children}
          <Footer />
        </StoryblokProvider>
      </body>
    </html>
  )
}