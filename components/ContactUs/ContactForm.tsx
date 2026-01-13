"use client";
import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, Sparkles, UploadCloud, FileText, X } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ClientType, ContactFormData, InquiryType } from '@/types/contact/contact.type';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { getContactUsData } from '@/lib/contactus';
import { toast } from 'sonner';



const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            inquiryType: InquiryType.PROJECT,
            clientType: ClientType.BUSINESS,
            message: '',
            resume: null,
        }
    });

    const inquiryType = watch('inquiryType');
    const clientType = watch('clientType');
    const resume = watch('resume');

    const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
        setStatus('submitting');
        const response = await getContactUsData(data);
        if (response.success) {
            toast.success("Inquiry sent successfully")
            setStatus('success');
            reset();
        } else {
            toast.error("Failed to send the inquiry.")
            setStatus('error');
        }
    };

    function getBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (err) => reject(err);
        });
    }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const base64 = await getBase64(e.target.files[0]);
            setValue('resume', base64);
        }
    };

    const removeFile = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setValue('resume', null);
    };

    const handleReset = () => {
        reset();
        setStatus('idle');
    };

    if (status === 'success') {
        return (
            <div
                className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg shadow-primary/5 p-4 sm:p-5 h-full min-h-[280px] flex flex-col items-center justify-center text-center border border-slate-100 dark:border-zinc-800 relative overflow-hidden"
                role="alert"
                aria-live="polite"
            >
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center mb-3 shadow-md shadow-primary/20">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white mb-1.5">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm mb-4 max-w-xs">
                        We'll be in touch within 24 hours.
                    </p>
                    <Button
                        onClick={handleReset}
                        variant="ghost"
                        className="h-auto bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:border-primary text-slate-700 dark:text-white hover:text-primary font-medium py-1.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md text-xs sm:text-sm"
                    >
                        Send another message
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background landing rounded-2xl shadow-lg shadow-primary/5 p-4 sm:p-5 border border-slate-100 dark:border-zinc-800 relative overflow-hidden transition-colors duration-300">

            {/* Decorative Gradient Blob */}
            <div className="absolute top-0 right-0 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none" />

            <div className="relative z-10">

                {/* Header Section */}
                <div className="mb-5">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 dark:bg-zinc-800 text-primary text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-2 border border-primary/10 dark:border-zinc-700">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Start a Project</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-slate-800 dark:text-white mb-1.5 leading-tight">
                        Let's bring your <span className="text-primary">vision to life.</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                        Tell us about yourself and your goals.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-label="Contact form">

                    {/* Inquiry Type Chips */}
                    <div>
                        <Label className="block text-sm font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider mb-2.5 ml-0.5">
                            I'm interested in...
                        </Label>
                        <div className="flex flex-wrap gap-4">
                            {Object.values(InquiryType).map((type) => (
                                <Button
                                    key={type}
                                    type="button"
                                    onClick={() => setValue('inquiryType', type)}
                                    // Using custom className to override default shadcn button styles significantly
                                    className={`h-auto px-2.5 py-1.5 rounded-lg text-[10px] sm:text-sm font-semibold transition-all duration-300 border ${inquiryType === type
                                        ? 'bg-primary border-primary text-background shadow-sm hover:bg-primary/90'
                                        : 'bg-background border border-border text-slate-500 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-700 hover:border-slate-200 dark:hover:border-zinc-600'
                                        }`}
                                >
                                    {type}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Client Type Toggle - Only for Start a Project */}
                    {inquiryType === InquiryType.PROJECT && (
                        <div>
                            <Label className="block text-sm font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider mb-2.5 ml-0.5">
                                I am a...
                            </Label>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5">
                                {Object.values(ClientType).map((type) => (
                                    <Button
                                        key={type}
                                        type="button"
                                        onClick={() => setValue('clientType', type)}
                                        className={`h-auto px-2 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 border flex items-center justify-center text-center leading-tight ${clientType === type
                                            ? 'bg-primary border-primary text-background shadow-sm hover:bg-primary/90'
                                            : 'bg-background border-border text-slate-500 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-700'
                                            }`}
                                    >
                                        {type}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Name */}
                        <div>
                            <Label htmlFor="name" className="sr-only">Full Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                {...register('name', { required: true })}
                                className="block w-full px-3 py-2 bg-background border border-border hover:border-slate-200 dark:hover:border-zinc-600 focus:border-primary focus:bg-white dark:focus:bg-zinc-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 font-medium text-xs sm:text-sm rounded-lg shadow-none"
                            />
                            {errors.name && <span className="text-red-500 text-[10px] ml-1">Name is required</span>}
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="sr-only">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                {...register('email', { required: true })}
                                className="block w-full px-3 py-2 bg-background border border-border hover:border-slate-200 dark:hover:border-zinc-600 focus:border-primary focus:bg-white dark:focus:bg-zinc-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 font-medium text-xs sm:text-sm rounded-lg shadow-none"
                            />
                            {errors.email && <span className="text-red-500 text-[10px] ml-1">Email is required</span>}
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <Label htmlFor="phone" className="sr-only">Phone Number</Label>
                        <Input
                            id="phone"
                            type="number"
                            placeholder="Phone Number (Optional)"
                            {...register('phone')}
                            className="block w-full px-3 py-2 bg-background border border-border hover:border-slate-200 dark:hover:border-zinc-600 focus:border-primary focus:bg-white dark:focus:bg-zinc-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 font-medium text-xs sm:text-sm rounded-lg shadow-none"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <Label htmlFor="message" className="sr-only">Message</Label>
                        <Textarea
                            id="message"
                            rows={3}
                            placeholder={inquiryType === InquiryType.CAREERS ? "Tell us about your experience..." : "Tell us about your project..."}
                            {...register('message', { required: true })}
                            className="block w-full px-3 py-2 bg-background border border-border hover:border-slate-200 dark:hover:border-zinc-600 focus:border-primary focus:bg-white dark:focus:bg-zinc-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all duration-200 font-medium text-xs sm:text-sm resize-none rounded-lg shadow-none min-h-[80px]"
                        />
                        {errors.message && <span className="text-red-500 text-[10px] ml-1">Message is required</span>}
                    </div>

                    {/* Resume Upload - Only Visible for Careers */}
                    {inquiryType === InquiryType.CAREERS && (
                        <div>
                            <Label className="block text-[9px] sm:text-[10px] font-semibold text-slate-600 dark:text-zinc-400 uppercase tracking-wider mb-1.5 ml-0.5">
                                Resume / CV
                            </Label>
                            <div className="relative">
                                {/* Hidden input for React Hook Form */}
                                <Input
                                    type="file"
                                    id="resume"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                <div
                                    className={`w-full px-3 py-2 border border-dashed transition-all duration-300 rounded-lg flex items-center justify-center gap-2 relative
                    ${resume
                                            ? 'bg-primary/5 dark:bg-primary/10 border-primary border-solid'
                                            : 'bg-background border-border hover:border-primary/50 hover:bg-white dark:hover:bg-zinc-700'
                                        }`}
                                >
                                    {resume ? (
                                        <>
                                            <div className="p-1 bg-primary text-white rounded">
                                                <FileText className="w-3 h-3" />
                                            </div>
                                            <div className="flex-1 text-left min-w-0">
                                                <p className="font-medium text-slate-800 dark:text-white truncate text-[10px] sm:text-xs">
                                                    {resume.name}
                                                </p>
                                            </div>
                                            <Button
                                                onClick={removeFile}
                                                className="z-20 p-1 h-auto w-auto min-w-0 hover:bg-red-50 dark:hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded transition-colors bg-transparent border-none shadow-none"
                                                type="button"
                                                variant="ghost"
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <div className="p-1 bg-slate-200 dark:bg-zinc-700 rounded text-slate-500 dark:text-zinc-400">
                                                <UploadCloud className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="font-medium text-slate-500 dark:text-zinc-400 text-[10px] sm:text-xs">
                                                Upload Resume <span className="opacity-60 ml-0.5 hidden sm:inline">(PDF, DOCX)</span>
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full h-auto bg-primary hover:bg-primary/90 text-background font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 group focus:ring-1 focus:ring-primary/20 outline-none"
                            aria-label={status === 'submitting' ? "Sending message..." : "Send Message"}
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="animate-spin w-3.5 h-3.5" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    {inquiryType === InquiryType.CAREERS ? 'Submit Application' : 'Send Message'}
                                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
