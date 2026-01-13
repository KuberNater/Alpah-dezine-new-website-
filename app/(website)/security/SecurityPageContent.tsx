import Heading from '@/components/Heading'
import MaxWidth from '@/components/MaxWidth'
import { securityData } from '@/data/security.data'
import { Section } from './SecuritySection'

async function SecurityPageContent() {
    return (
        <div className="min-h-screen bg-background landing font-sans flex flex-col selection:bg-accent/30 selection:text-brand">
            <main className="grow pt-16 pb-16 lg:pt-24 lg:pb-32 overflow-hidden">
                <MaxWidth>
                    {/* Hero Section */}
                    <Heading
                        badgeText="Loud Shark LLC dba Alpha Dezine"
                    >
                        <span className='text-primary'>Security</span>
                    </Heading>
                    <p className='text-base max-w-prose mx-auto mb-6 w-full text-foreground text-center px-4 sm:px-0'>
                        Your data security is our top priority. Learn about the comprehensive measures we take to protect your information.
                    </p>
                    {/* Security Sections */}
                    <div className="space-y-6 px-4 sm:px-0">
                        {securityData.map((section, index) => (
                            <Section
                                key={section.title}
                                title={section.title}
                                content={section.content}
                                index={index}
                            />
                        ))}
                    </div>
                </MaxWidth>
            </main>
        </div>
    )
}

export default SecurityPageContent
