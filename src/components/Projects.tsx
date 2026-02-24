import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
    darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
    const projects = [
        {
            title: 'Portfolio Personnel',
            description: 'Développement et mise en place d\'un portfolio personnel en React.js présentant mes projets.',
            technologies: ['React', 'Vite', 'Tailwind CSS'],
            github: 'https://github.com/boubacar27camara/portfolio',
            demo: 'https://boubacar27camara.github.io/portfolio_boubacar/',
            image: '/assets/project1.png' // placeholder
        },
        {
            title: 'Application CRUD',
            description: 'Réalisation d\'une application CRUD complète (ajout, modification, suppression et affichage de données) avec gestion d\'état via useState et useEffect.',
            technologies: ['React', 'Node.js'],
            github: '#',
            demo: 'https://boubacar27camara.github.io/portfolio_boubacar/',
            image: '/assets/project2.png'
        },
        {
            title: 'Porfolio en 2024',
            description: 'Creation d\'un portfolio moderne et responsive en utilisant les dernières technologies web pour présenter mes compétences et projets de manière professionnelle.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            github: 'https://github.com/Boubacar27Camara/portfolio_boubacar',
            demo: 'https://github.com/Boubacar27Camara/portfolio_boubacar',
            image: '/assets/project2.png'
        },
        {
            title: 'Application Web Interactive',
            description: 'Conception de fonctionnalités dynamiques et interactives, manipulation du DOM et gestion des événements pour améliorer l\'expérience utilisateur.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
            github: '#',
            demo: 'https://boubacar27camara.github.io/portfolio_boubacar/',
            image: '/assets/project3.png'
        },
        {
            title: 'Application Web en Next',
            description: 'Développement d\'une application web en utilisant Next.js pour bénéficier du rendu côté serveur et améliorer les performances.',
            technologies: ['Next.js', 'React', 'Tailwind CSS'],
            github: 'https://github.com/Boubacar27Camara/projet1Mauricv',
            demo: 'https://boubacar27camara.github.io/portfolio_boubacar/',
            image: '/assets/project4.png'
        }
    ];

    return (
        <section id="projets" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Mes <span className="text-blue-500">Projets</span>
                    </h2>
                    <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Découvrez quelques-uns de mes projets récents et les technologies utilisées.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                                darkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <motion.div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}>
                                <span className="text-white text-6xl font-bold">{project.title.charAt(0)}</span>
                            </motion.div>
                            <div className="p-6">
                                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                                    >
                                        <Github className="w-5 h-5 mr-2" />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;