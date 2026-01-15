'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from "next/image";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
    imageUrl:string;
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className='relative h-88 w-full md:h-88'>
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className='absolute bg-white dark:bg-black w-[90vw] md:w-[600px] h-80 md:h-80 rounded-3xl p-6 shadow-xl border border-neutral-200 dark:border-white/10 shadow-black/10 dark:shadow-white/5 flex flex-col gap-3'
                        style={{
                            transformOrigin: 'top center',
                            left: '50%',
                            x: '-50%', // Use Framer Motion x for translation to avoid conflicts
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className='flex items-center gap-4'>
                            <div className='size-12 rounded-full overflow-hidden'>
                                <Image
                                    src={card.imageUrl}
                                    alt={card.name}
                                    width={100}
                                    height={100}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='flex flex-col items-start'>
                                <p className='text-primary font-bold '>
                                    {card.name}
                                </p>
                                <p className='text-neutral-400 font-normal dark:text-neutral-200 text-sm'>
                                    {card.designation}
                                </p>
                            </div>
                        </div>
                        <div className='font-normal text-neutral-700 dark:text-neutral-200 text-sm md:text-base leading-relaxed line-clamp-6 md:line-clamp-none'>
                            {card.content}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
