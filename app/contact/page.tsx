'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
    
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY!); 
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setIsSuccess(true);
          setIsSubmitting(false);
        } else {
          console.log("Erreur", data);
          setIsSubmitting(false);
        }
      }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Parlons de votre <span className="text-app-primary">projet</span>.
          </h1>
          <p className="text-app-muted text-lg mb-10 max-w-md">
            Que vous ayez une idée précise ou que vous souhaitiez simplement discuter, n&apos;hésitez pas à me contacter.
          </p>

          <div className="space-y-6">
            <a href="mailto:crozat.tedy@gmail.com" className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-app-primary/10 text-app-primary group-hover:bg-app-primary group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-app-muted uppercase font-bold tracking-widest">Email</p>
                <p className="text-lg font-medium">crozat.tedy@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/TedamersX" target="_blank" className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-app-primary/10 text-app-primary group-hover:bg-app-primary group-hover:text-white transition-all">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs text-app-muted uppercase font-bold tracking-widest">Github</p>
                <p className="text-lg font-medium">TedamersX</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div className="bg-app-muted/5 border border-app-muted/10 p-8 rounded-[2rem]">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Nom</label>
                <input name="name" type="text" required className="w-full px-5 py-4 rounded-2xl bg-app-bg border border-app-muted/20 focus:border-app-primary outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Email</label>
                <input name="email" type="email" required className="w-full px-5 py-4 rounded-2xl bg-app-bg border border-app-muted/20 focus:border-app-primary outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Message</label>
                <textarea name="message" rows={5} required className="w-full px-5 py-4 rounded-2xl bg-app-bg border border-app-muted/20 focus:border-app-primary outline-none transition-all resize-none" />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-app-primary text-white py-5 rounded-2xl font-bold hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-lg shadow-app-primary/25"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                <Send size={20} />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-10"
            >
              <CheckCircle2 size={80} className="text-app-primary mb-6" />
              <h2 className="text-2xl font-bold mb-2">Message envoyé !</h2>
              <p className="text-app-muted mb-8">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-app-primary font-bold hover:underline"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}