import { Manrope } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import SilktideCookieBanner from "@/components/SilktideCookieBanner";
import { Toaster } from "sonner";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en">
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${manrope.className} antialiased`}
      >
        {/* GTM Consent Defaults - should load first */}
        <Script
          id="gtm-consent-defaults"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        
                        // Check localStorage for previously saved consent
                        var analyticsConsent = localStorage.getItem('silktideCookieChoice_analytics');
                        var marketingConsent = localStorage.getItem('silktideCookieChoice_marketing');
                        var functionalConsent = localStorage.getItem('silktideCookieChoice_functional');
                        
                        // Set default consent state
                        gtag('consent', 'default', {
                            analytics_storage:  'granted',
                            ad_storage: 'granted',
                            ad_user_data: 'granted',
                            ad_personalization: 'granted',
                            functionality_storage: 'granted',
                            security_storage: 'granted',
                        });
                    `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <Toaster
            toastOptions={{
              style: {
                color: "#0054B9"
              }
            }}
          />
          <SilktideCookieBanner />
          <Footer />
        </ThemeProvider>
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-59W5JK4');
          `}
        </Script>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tkajkehh13");
          `}
        </Script>
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="66e25ce5-43eb-4f46-95b5-7ac8bddf055e" />
        <Script src="https://app.rybbit.io/api/script.js" async data-site-id="6d04aea81440" />
      </body>
    </html>
  );
}
