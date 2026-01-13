'use client'
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import {
    FileText,
    ShieldCheck,
    Lock,
    FileArchive,
    FileImage,
    FileSpreadsheet,
    FileJson,
    FileCode,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';

interface InteractiveFolderProps {
    label: string;
    color?: string;
    accentColor?: string;
    items?: string[];
}

const getFileIcon = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'pdf': return <FileText size={14} />;
        case 'zip': return <FileArchive size={14} />;
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'eps': return <FileImage size={14} />;
        case 'xls':
        case 'xlsx':
        case 'csv': return <FileSpreadsheet size={14} />;
        case 'json': return <FileJson size={14} />;
        default: return <FileCode size={14} />;
    }
};

const InteractiveFolder: React.FC<InteractiveFolderProps> = ({
    label = "Asset Dossier",
    color = "#3b82f6",
    accentColor = "bg-blue-500",
    items = [
        "Master_Agreement_2025.pdf",
        "Logo_Vector_Pack_V4.zip",
        "Mascot_Official_Standard.png"
    ]
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="flex flex-col items-center gap-4 group/vault">
            <motion.div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsOpen(!isOpen)}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative w-64 h-48 md:w-72 md:h-52 cursor-pointer transition-all duration-300"
            >
                {/* Shadow floor */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/10 blur-xl rounded-full scale-y-50"></div>

                {/* Back Cover */}
                <div
                    className="absolute inset-0 rounded-4xl bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-white/10 shadow-lg"
                    style={{ transform: 'translateZ(-20px)' }}
                >
                    <div className="absolute -top-3 left-6 w-20 h-4 bg-slate-200 dark:bg-slate-800 rounded-t-xl border-t border-x border-slate-300 dark:border-white/10" />
                </div>

                {/* Pop-out items with fanning effect */}
                <div className="absolute inset-4 flex flex-col items-center pointer-events-none">
                    <AnimatePresence>
                        {isOpen && items.map((item, idx) => {
                            // Fan out logic
                            const fanX = (idx - (items.length - 1) / 2) * 35;
                            const fanRotate = (idx - (items.length - 1) / 2) * 8;

                            return (
                                <motion.div
                                    key={item}
                                    initial={{ y: 0, opacity: 0, scale: 0.5, x: 0 }}
                                    animate={{
                                        y: -(idx + 1) * 45 - 20,
                                        x: fanX,
                                        opacity: 1,
                                        scale: 1,
                                        rotate: fanRotate,
                                        z: 50
                                    }}
                                    exit={{ y: 0, opacity: 0, scale: 0.5, x: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 400,
                                        damping: 22,
                                        delay: idx * 0.04
                                    }}
                                    className="absolute w-56 bg-white dark:bg-slate-700 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 shadow-2xl flex items-center gap-3 pointer-events-auto hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                                >
                                    <div className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400">
                                        {getFileIcon(item)}
                                    </div>
                                    <span className="text-[10px] font-black text-slate-700 dark:text-slate-200 truncate flex-1 uppercase tracking-tight">{item}</span>
                                    <div className="flex gap-1">
                                        <CheckCircle2 size={10} className="text-emerald-500" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Front Cover */}
                <motion.div
                    animate={{ rotateX: isOpen ? -110 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    style={{ transformOrigin: 'bottom', transformStyle: 'preserve-3d' }}
                    className="absolute inset-0 rounded-4xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col p-6 overflow-hidden z-20"
                >
                    {/* Decorative Tab */}
                    <div className={`absolute top-0 right-0 w-16 h-8 ${accentColor} opacity-10 rounded-bl-4xl`} />

                    <div className="mt-auto relative z-10">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex flex-col">
                                <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">System Vault</span>
                                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase leading-none tracking-tight">{label}</h4>
                            </div>
                            <div className={`p-2.5 bg-slate-900 dark:bg-white rounded-xl text-white dark:text-slate-900 shadow-xl ${isOpen ? 'scale-90 opacity-50' : 'scale-100'}`}>
                                {isOpen ? <Lock size={16} /> : <ShieldCheck size={16} strokeWidth={2.5} />}
                            </div>
                        </div>
                        <div className="h-1 w-full bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                className={`h-full ${accentColor}`}
                            />
                        </div>
                    </div>

                    {/* Holographic Sticker */}
                    <div className="absolute top-6 right-6 rotate-12">
                        <div className="px-2 py-0.5 border border-slate-900/10 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-md text-[8px] font-black text-slate-500 uppercase tracking-widest">
                            VERIFIED
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div className={`text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-40 group-hover/vault:opacity-100 group-hover/vault:text-blue-500'}`}>
                Click to Inspect
            </div>
        </div>
    );
};

export default InteractiveFolder;