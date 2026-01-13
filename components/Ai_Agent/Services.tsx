
import { deliverablesData } from '@/data/AiAgent.data';
import { Check } from 'lucide-react';
import React from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';
import DeliverableCard from './DeliverableCard';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-background landing w-full">
            <MaxWidth>
                <Heading
                    badgeText="The Methodology"
                    decorativeText="delivers."
                    align='left'
                >
                    What Alpha Dezine <br />
                </Heading>
                <div className="space-y-6 md:space-y-10">
                    {deliverablesData.map((item, i) => (
                        <DeliverableCard
                            key={i}
                            item={item}
                            i={i}
                        />
                    ))}
                </div>
            </MaxWidth>
        </section>
    );
};

export default Services;
