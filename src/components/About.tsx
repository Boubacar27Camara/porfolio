import about from '../assets/hero4.png';

interface AboutProps {
    darkMode: boolean;
}

const About = ({darkMode}: AboutProps) => {

    return (
        <section id="about" className={`min-h-screen overflow-hidden flex
        items-center justify-center px-4 sm:px-6 `}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
                    <div className="relative w-75 h-75 lg:w-96 lg:h-96">
                        {/* Image */}
                            <div className="absolute -inset-4 lg:-inset-16 bg-linear-to-l from-blue-400 to-purple-600 rotate-6 rounded-3xl z-0"
                                data-aos="zoom-in"
                                data-aos-delay="600">
                                <img src={about} alt="apropos"
                                    className='absolute inset-0 w-full h-full object-cover z-10 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105'
                                    data-aos="zoom-in"
                                    data-aos-dealy="400" />
                            </div>
                    </div>
                </figure>
                <article
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className='text-center lg:text-left relative order-1 lg:order-2'>
                    <header>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text'
                            data-aos="fade-up"
                            data-aos-delay="400">
                            A Propos de moi
                        </h1>
                    </header>
                    <p className={`text-sm sm:text-base lg:text-lg
                        xl:text-xl mb-6 sm:mb-8 leading-relaxed
                        bg-linear-to-r from-blue-900/10 to-purple-900/5
                        p-4 sm:p-6 rounded-xl sm:rounded-2xl
                        backdrop-blur-sm
                        ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        data-aos='fade-up'
                        data-aos-delay="500">
                        Développeur Full-Stack avec 3 ans d'expérience, je conçois des applications web complexes utilisant React.js et Node.js.
                        Passionné par les technologies modernes du web, je maîtrise React, Next.js et les bonnes pratiques de développement.
                        Mon objectif est de créer des expériences digitales intuitives et performantes.

                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-8">
                        <div
                            className='text-center'
                            data-aos="zoom-in"
                            data-aos-delay="600">
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>1</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Formation
                            </div>
                        </div>
                        <div
                            className='text-center'
                            data-aos="zoom-in"
                            data-aos-delay="600">
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>3+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Annees d'Experience
                            </div>
                        </div>
                        <div
                            className='text-center'
                            data-aos="zoom-in"
                            data-aos-delay="600">
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400'>10+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Mes Projets
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 space-y-8">
                        <div>
                            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Expériences Professionnelles
                            </h3>
                            <div className="space-y-4">
                                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Développeur Full-Stack
                                    </h4>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Conception, développement et maintenance d'applications web complexes utilisant React.js et Node.js.
                                        Réalisation d'une application CRUD complète avec gestion d'état via useState et useEffect.
                                    </p>
                                </div>
                                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        Développeur Web
                                    </h4>
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Utilisation de technologies front-end telles que HTML, CSS, JavaScript/React.js.
                                        Conception de fonctionnalités dynamiques et interactives, manipulation du DOM et gestion des événements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Formation
                            </h3>
                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Licence 3 en Mathématiques-Informatique
                                </h4>
                                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Université Al Aasriya, Nouakchott, Mauritanie | 2019 - 2021
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Langues
                            </h3>
                            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Français - Courant
                                </p>
                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Anglais - Debutant
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </article>
            </div>

        </section>
    );
}

export default About;