"use client"
import React, { useEffect } from 'react'
import Script from "next/script"

// Extend Window interface for global properties
declare global {
    interface Window {
        dataLayer: unknown[];
        silktideCookieBannerManager?: {
            updateCookieBannerConfig: (config: object) => void;
        };
    }
}

const GA_MEASUREMENT_ID = 'G-PG2TDNNJVB';


function SilktideCookieBanner() {
    const initializeCookieBanner = () => {
        // Helper function for gtag
        const gtag = (...args: unknown[]) => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(args);
        };

        window.silktideCookieBannerManager?.updateCookieBannerConfig({
            // Banner text customization
            text: {
                bannerTitle: 'Your privacy matters to us',
                bannerDescription: 'We use cookies on our site to enhance your user experience, provide personalized content, and analyze our traffic.',
                bannerLinkText: 'Cookie Policy',
                bannerLinkUrl: '/cookie-policy',
                acceptButtonText: 'Accept all cookies',
                rejectButtonText: 'Reject non-essential',
                preferencesButtonText: 'Cookie preferences',
                preferencesTitle: 'Manage cookie preferences',
                preferencesDescription: 'We respect your right to privacy. You can choose not to allow some types of cookies.',
                acceptAllButtonText: 'Accept all',
                rejectAllButtonText: 'Reject non-essential',
            },

            cookieTypes: [
                {
                    id: 'necessary',
                    name: 'Essential',
                    description: 'These cookies are necessary for the website to function properly and cannot be switched off. They help with things like logging in and setting your privacy preferences.',
                    required: true,
                    defaultValue: true,
                },
                {
                    id: 'analytics',
                    name: 'Analytics',
                    description: 'These cookies help us improve the site by tracking which pages are most popular and how visitors move around the site.',
                    defaultValue: false,
                    onAccept: function () {
                        gtag('consent', 'update', {
                            analytics_storage: 'granted'
                        });
                        gtag('event', 'consent_accepted_analytics');
                    },
                    onReject: function () {
                        gtag('consent', 'update', {
                            analytics_storage: 'denied'
                        });
                    },
                },
                {
                    id: 'marketing',
                    name: 'Advertising',
                    description: 'These cookies provide extra features and personalization to improve your experience. They may be set by us or by partners whose services we use.',
                    defaultValue: false,
                    onAccept: function () {
                        gtag('consent', 'update', {
                            ad_storage: 'granted',
                            ad_user_data: 'granted',
                            ad_personalization: 'granted'
                        });
                        gtag('event', 'consent_accepted_marketing');
                    },
                    onReject: function () {
                        gtag('consent', 'update', {
                            ad_storage: 'denied',
                            ad_user_data: 'denied',
                            ad_personalization: 'denied'
                        });
                    },
                },
            ],

            bannerPosition: 'bottom-right',
            cookieIconPosition: 'bottom-left',
            showCredit: true,
        });
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.silktideCookieBannerManager) {
            initializeCookieBanner();
        }
    }, []);

    return (
        <>


            {/* Load Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />

            <Script
                id="google-analytics-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_MEASUREMENT_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />

            {/* Load Silktide Cookie Banner CSS */}
            <link
                rel="stylesheet"
                href="/cookie-banner/silktide-consent-manager.css"
            />

            {/* Load Silktide Cookie Banner JavaScript */}
            <Script
                src="/cookie-banner/silktide-consent-manager.js"
                strategy="afterInteractive"
                onLoad={initializeCookieBanner}
            />
        </>
    )
}

export default SilktideCookieBanner