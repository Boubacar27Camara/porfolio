import { Github, Youtube, Mail, Heart } from 'lucide-react';

interface FooterProps {
    darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
    return (
        <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo et Description */}
                    <div className="text-center md:text-left">
                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            BOUBADEV<span className="text-blue-500">.</span>
                        </h3>
                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Développeur Full-Stack passionné par la création d'expériences web innovantes et performantes.
                        </p>
                    </div>

                    {/* Liens Rapides */}
                    <div className="text-center">
                        <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Liens Rapides
                        </h4>
                        <div className="space-y-2">
                            <a href="#home" className={`block text-sm hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Accueil
                            </a>
                            <a href="#about" className={`block text-sm hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                À Propos
                            </a>
                            <a href="#skills" className={`block text-sm hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Compétences
                            </a>
                            <a href="#projets" className={`block text-sm hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Projets
                            </a>
                            <a href="#contact" className={`block text-sm hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Contact et Réseaux Sociaux */}
                    <div className="text-center md:text-right">
                        <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Restons Connectés
                        </h4>
                        <div className="flex justify-center md:justify-end space-x-4 mb-4">
                            <a
                                href="https://github.com/boubacar27camara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/watch?v=VsLh57x-aMQ&t=1s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:boubacarbakarycamara@esp.sn"
                                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            boubacarbakarycamara@esp.sn
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        © 2026 Boubacar Camara. Tous droits réservés. Fait avec <Heart className="inline w-4 h-4 text-red-500 mx-1" /> en React.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;