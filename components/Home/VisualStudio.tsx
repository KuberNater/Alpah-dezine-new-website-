"use client"
import { PRESETS, RATIOS } from '@/data/home.data';
import { GoogleGenAI } from "@google/genai";
import {
    AlertCircle,
    Download,
    FileText,
    Image as ImageIcon,
    Loader2,
    Maximize2,
    MousePointer2,
    RotateCcw,
    Search,
    Sparkles,
    Trash2,
    X,
    Zap
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import Heading from '../Heading';
import MaxWidth from '../MaxWidth';
import { Badge } from '../ui/badge';



export const AIStudio: React.FC = () => {
    const [prompt, setPrompt] = useState("");
    const [aspectRatio, setAspectRatio] = useState("16:9");
    const [imageSize, setImageSize] = useState("1K");
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [analysisImage, setAnalysisImage] = useState<File | null>(null);
    const [analysisPreview, setAnalysisPreview] = useState<string | null>(null);
    const [analysisResult, setAnalysisResult] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const resetAll = () => {
        setPrompt("");
        setGeneratedImageUrl(null);
        setAnalysisImage(null);
        setAnalysisPreview(null);
        setAnalysisResult("");
        setError(null);
    };

    const generateImage = async () => {
        if (!prompt) return;
        setIsGenerating(true);
        setError(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const modelName = imageSize === "1K" ? 'gemini-2.5-flash-image' : 'gemini-3-pro-image-preview';

            const response = await ai.models.generateContent({
                model: modelName,
                contents: { parts: [{ text: prompt }] },
                config: {
                    imageConfig: {
                        aspectRatio: aspectRatio as any,
                        ...(imageSize !== "1K" && { imageSize: imageSize as any })
                    }
                }
            });

            let foundImage = false;
            for (const part of response.candidates?.[0]?.content?.parts || []) {
                if (part.inlineData) {
                    setGeneratedImageUrl(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
                    foundImage = true;
                    break;
                }
            }
            if (!foundImage) setError("We couldn't generate an image. Please try a different prompt.");
        } catch (err: any) {
            setError("There was a connection error. Please try again in a moment.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAnalysisImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setAnalysisPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const analyzeImage = async () => {
        if (!analysisImage) return;
        setIsAnalyzing(true);
        setError(null);
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const base64Data = await new Promise<string>((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve((reader.result as string).split(',')[1]);
                reader.readAsDataURL(analysisImage);
            });

            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: {
                    parts: [
                        { inlineData: { data: base64Data, mimeType: analysisImage.type } },
                        { text: "Describe what is in this image and how it aligns with a modern business brand. Do not use markdown or asterisks." }
                    ]
                }
            });
            const cleanedResult = (response.text || "Analysis complete.").replace(/\*/g, '');
            setAnalysisResult(cleanedResult);
        } catch (err) {
            setError("We couldn't analyze the image at this time.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    const downloadImage = () => {
        if (!generatedImageUrl) return;
        const link = document.createElement('a');
        link.href = generatedImageUrl;
        link.download = `alpha-dezine-gen-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-16 md:py-24 w-full landing bg-background transition-colors duration-700" id="ai-studio">
            <div className='w-full flex items-center justify-center mb-10'>
                <Badge className='mx-auto border-yellow-600 text-white bg-yellow-600 text-lg '>Coming Soon</Badge>
            </div>
            <MaxWidth className='grayscale-100 pointer-events-none cursor-not-allowed'>
                <Heading
                    badgeText="Alpha AI Lab"
                    badgeIcon={<Zap size={14} />}
                    subtitle="Instantly create and analyze design concepts for your business using simple AI tools."
                    containerClassName="mb-16"
                    subtitleClassName="max-w-2xl px-4 md:px-0"
                >
                    Visual <span className="text-primary">Studio.</span>
                </Heading>

                {error && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-10 p-5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-xl flex items-center gap-4 text-red-700 dark:text-red-400 font-bold text-sm" role="alert">
                        <AlertCircle size={20} className="shrink-0" /> {error}
                    </motion.div>
                )}

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Create Section */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-4xl p-6 md:p-8 shadow-xl">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary dark:bg-royal-600 text-white flex items-center justify-center shadow-lg">
                                        <Sparkles size={20} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-navy-950 dark:text-white uppercase tracking-wider">Create an Image</h3>
                                </div>
                                <button
                                    onClick={resetAll}
                                    className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-navy-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                    title="Clear everything"
                                >
                                    <RotateCcw size={18} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="relative">
                                    <label htmlFor="prompt-input" className="sr-only">Describe what you want to see</label>
                                    <textarea
                                        id="prompt-input"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="What should we create? (e.g., A modern office lobby...)"
                                        className="w-full h-32 bg-slate-50 dark:bg-navy-950 rounded-2xl p-5 md:p-6 border border-slate-200 dark:border-navy-700 text-base focus:ring-4 ring-primary/10 dark:ring-royal-400/10 outline-none resize-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium dark:text-white"
                                    />
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {PRESETS.map((p, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setPrompt(p.prompt)}
                                                className="px-4 py-2 bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:border-primary dark:hover:border-royal-400 transition-all focus:ring-2 ring-primary dark:ring-royal-400 outline-none min-h-[38px]"
                                            >
                                                {p.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Shape</label>
                                        <div className="relative flex bg-slate-50 dark:bg-navy-950 p-1.5 rounded-xl border border-slate-200 dark:border-navy-700 gap-1">
                                            {RATIOS.map((r) => (
                                                <button
                                                    key={r.id}
                                                    onClick={() => setAspectRatio(r.id)}
                                                    className={`relative flex-1 flex flex-col items-center gap-1.5 py-2 px-1 rounded-lg transition-colors z-10 min-h-[48px] ${aspectRatio === r.id
                                                        ? 'text-primary dark:text-white'
                                                        : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                                                        }`}
                                                >
                                                    {aspectRatio === r.id && (
                                                        <motion.div
                                                            layoutId="ratio-bg"
                                                            className="absolute inset-0 bg-white dark:bg-navy-800 border border-slate-200 dark:border-navy-700 rounded-lg shadow-sm -z-10"
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    )}
                                                    <r.icon size={16} />
                                                    <span className="text-[9px] font-bold uppercase tracking-tighter">{r.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 flex items-end">
                                        <button
                                            onClick={generateImage}
                                            disabled={isGenerating || !prompt}
                                            className="w-full h-[58px] bg-navy-950 dark:bg-white text-white dark:text-navy-950 font-black text-sm uppercase tracking-widest rounded-xl shadow-lg hover:bg-primary dark:hover:bg-royal-50 transition-all flex items-center justify-center gap-3 disabled:opacity-40 focus:ring-4 ring-primary/20 outline-none"
                                        >
                                            {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Zap size={18} />}
                                            {isGenerating ? 'Creating...' : 'Create Image'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-video rounded-4xl bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 overflow-hidden shadow-inner group">
                            <AnimatePresence mode="wait">
                                {generatedImageUrl ? (
                                    <motion.div key="img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full relative">
                                        <img src={generatedImageUrl} className="w-full h-full object-cover" alt="AI Generated visualization" />
                                        <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4 md:gap-6 backdrop-blur-sm">
                                            <button
                                                onClick={downloadImage}
                                                aria-label="Download image"
                                                className="w-12 h-12 bg-white text-navy-950 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                                            >
                                                <Download size={24} />
                                            </button>
                                            <button
                                                onClick={() => setIsFullscreen(true)}
                                                aria-label="Full screen"
                                                className="w-12 h-12 bg-white text-navy-950 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                                            >
                                                <Maximize2 size={24} />
                                            </button>
                                            <button
                                                aria-label="Delete image"
                                                onClick={() => setGeneratedImageUrl(null)}
                                                className="w-12 h-12 bg-white text-red-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg"
                                            >
                                                <Trash2 size={24} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-12">
                                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 dark:border-navy-700 flex items-center justify-center text-slate-300 dark:text-navy-700 mb-4">
                                            <ImageIcon size={32} />
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Your image will appear here</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Analyze Section */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 rounded-4xl p-6 md:p-8 shadow-xl h-full flex flex-col">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                                    <Search size={20} />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-navy-950 dark:text-white uppercase tracking-wider">Analyze</h3>
                            </div>

                            <div
                                onClick={() => document.getElementById('file-node')?.click()}
                                onKeyDown={(e) => e.key === 'Enter' && document.getElementById('file-node')?.click()}
                                tabIndex={0}
                                role="button"
                                aria-label="Upload an image to analyze"
                                className={`flex-1 min-h-[200px] max-h-[300px] border-2 border-dashed rounded-2xl transition-all cursor-pointer flex flex-col items-center justify-center p-4 mb-6 hover:border-emerald-500/50 focus:ring-4 ring-emerald-500/10 outline-none bg-slate-50/50 dark:bg-navy-950/50 overflow-hidden ${analysisPreview ? 'border-emerald-500/50 p-2' : 'border-slate-200 dark:border-navy-700'}`}
                            >
                                {analysisPreview ? (
                                    <div className="relative w-full h-full flex items-center justify-center bg-white dark:bg-navy-900 rounded-lg overflow-hidden border border-slate-100 dark:border-navy-800">
                                        <img
                                            src={analysisPreview}
                                            className="max-w-full max-h-full object-contain"
                                            alt="Preview of uploaded image"
                                        />
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setAnalysisPreview(null); }}
                                            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <MousePointer2 size={28} className="text-slate-300 dark:text-navy-700 mb-3" />
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Click or drop image</p>
                                    </>
                                )}
                                <input id="file-node" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                            </div>

                            <button
                                onClick={analyzeImage}
                                disabled={isAnalyzing || !analysisImage}
                                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] uppercase tracking-widest rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-40 focus:ring-4 ring-emerald-500/20 outline-none"
                            >
                                {isAnalyzing ? <Loader2 className="animate-spin" size={18} /> : <FileText size={18} />}
                                {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
                            </button>

                            <div className="mt-6 p-4 bg-slate-50 dark:bg-navy-950 rounded-2xl border border-slate-100 dark:border-navy-700 min-h-[120px] max-h-[160px] overflow-y-auto custom-scrollbar shadow-inner transition-colors">
                                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
                                    {analysisResult || (isAnalyzing ? 'Processing your image...' : 'Select an image to see details here.')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </MaxWidth>

            {/* Fullscreen Expansion Modal */}
            <AnimatePresence>
                {isFullscreen && generatedImageUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsFullscreen(false)}
                        className="fixed inset-0 z-200 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-full max-h-full"
                        >
                            <img
                                src={generatedImageUrl}
                                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/10"
                                alt="Expanded visualization"
                            />
                            <div className="absolute -top-12 right-0 flex gap-4">
                                <button
                                    onClick={downloadImage}
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-navy-950 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors shadow-xl"
                                >
                                    <Download size={16} /> Download
                                </button>
                                <button
                                    onClick={() => setIsFullscreen(false)}
                                    className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center justify-center transition-colors backdrop-blur-md"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
