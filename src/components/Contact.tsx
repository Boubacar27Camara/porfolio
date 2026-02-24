import { Mail, Phone, MapPin, Github, Youtube } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

interface ContactProps {
    darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            /* Template EmailJS:
            Subject: Nouveau message avec sujet

            Bonjour,

            Vous avez reçu un nouveau message de :



            Cordialement,
            L'équipe EmailJS
            */
            emailjs
                .sendForm(
                    'service_31b4n5s', // À remplacer par votre Service ID d'EmailJS
                    'template_hqpt5u7', // À remplacer par votre Template ID d'EmailJS
                    form.current,
                    'V0tDGYVeHMXwJAK3T' // À remplacer par votre Public Key d'EmailJS
                )
                .then(
                    (result) => {
                        console.log('Email envoyé avec succès:', result.text);
                        alert('Message envoyé avec succès !');
                        form.current?.reset();
                    },
                    (error) => {
                        console.log('Erreur:', error.text);
                        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
                    }
                );
        }
    };
    return (
        <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Contactez-<span className="text-blue-500">moi</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Coordonnées
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 text-blue-500 mr-4" />
                                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    boubacarbakarycamara@esp.sn
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 text-blue-500 mr-4" />
                                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    +222 47911596
                                </span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-6 h-6 text-blue-500 mr-4" />
                                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Mauritanie
                                </span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Suivez-moi
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/boubacar27camara"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.youtube.com/watch?v=VsLh57x-aMQ&t=1s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Envoyez un message
                        </h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Votre nom"
                                    className={`w-full p-3 rounded-lg border ${
                                        darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Votre email"
                                    className={`w-full p-3 rounded-lg border ${
                                        darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={5}
                                    name="message"
                                    placeholder="Votre message"
                                    className={`w-full p-3 rounded-lg border ${
                                        darkMode
                                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                                            : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                                    } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;