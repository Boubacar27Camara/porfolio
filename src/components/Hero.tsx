import github from '../assets/github.png';
import youtube from '../assets/youtube.png';
import CV from '../assets/CV.pdf';
import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import hero from '../assets/hero2.png';

interface HeroProps {
    darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) =>{

    const socialIcons = [
        { icon: github, alt: 'github', href: 'https://github.com/boubacar27camara' },
        { icon: youtube, alt: 'youtube', href: 'https://www.youtube.com/watch?v=VsLh57x-aMQ&t=1s' },
    ];

    const darkTheme = {
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        buttonSecondary: `text-white border-2 border-blue-500
        hover:bg-blue-600`,
        decorativeCircle: 'bg-blue-500 opacity-10',
    };

    const lightTheme = {
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-700',
        buttonSecondary: `text-gray-800 border-2 border-blue-500
        hover:bg-blue-500 hover:text-white`,
        decorativeCircle: 'bg-blue-400 opacity-10',
    };

    const theme = darkMode ? darkTheme : lightTheme;
    return (
        <div className='relative overflow-hidden min-h-screen flex flex-col'>
            <section
            id="home"
            data-aos="fade-up"
            data-aos-delat="250"
            className='body-font z-10'>
                <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14'>
                    <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>
                    <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
                        { socialIcons.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target='_blank'
                                data-aos-delay={`${400 + index * 100}`}
                                whileHover={{ scale: 1.12 }}
                                className='transform transition-transform duration-300'>
                                <img
                                    src={social.icon}
                                    alt={social.alt}
                                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? '' : 'filter brightness-75'}`}
                                />
                            </motion.a>
                        ))}
                    </div>
                    <h1 className={`title-font text-3xl sm:text-4xl
                        lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
                        data-aos="fade-up"
                        data-aos-delay='500'>
                            Salut, Je suis Boubacar
                        </h1>
                        <p className={`mb-6 sm:mb-8 learning-relaxed max-w-md
                            sm:max-w-lg ${theme.textSecondary}`}
                            data-aos='fade-up'
                            data-aos-dela="600">
                                Développeur React.js créatif et orienté solutions, je conçois des applications web interactives, rapides et responsives. 
                                Passionné par les technologies modernes du web, je maîtrise React, Next.js et les bonnes pratiques de développement.
                                
                            </p>
                            { /* Buttons */}
                            <div className='w-full pt-4 sm:pt-6'>
                                <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                                data-aos="fade-up"
                                data-aos-delay="700">
                                    <a href={CV} download className='w-full sm:w-auto'>
                                        <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-blue-500 to-purple-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                            <Download className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                                            Telechager CV
                                        </button>
                                    </a>
                                    <a href="#contact" className="w-full sm:w-auto">
                                        <button className={`w-full sm:w-auto
                                            inline-flex items-center ${theme.buttonSecondary} justify-center border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(59,130,246,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                                <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                                Contactez-moi
                                            </button>
                                    </a>
                                </div>
                            </div>
                    </div>
                    { /* Image */}
                    <div
                    className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
                    data-aos="fade-left"
                    data-aos-delay="400">
                        <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
                        <div className='relative overflow-hidden'>
                            <motion.img
                                src={hero}
                                alt='Image boubacar'
                                className='w-full h-auto object-cover rounded-2xl shadow-xl'
                                whileHover={{ scale: 1.04 }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )


    }

export default Hero;
