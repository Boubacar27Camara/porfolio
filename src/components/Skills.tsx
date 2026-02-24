
import tailwind from '../assets/tailwind.png';
import react from '../assets/react.png';
import vite from '../assets/vite.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import next from '../assets/next.svg';
import html from '../assets/html.svg';

interface SkillsProps {
    darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
    const skills = [
        { name: 'React', icon: react, level: 85, color: 'from-cyan-500 to-blue-500' },
        { name: 'Vite', icon: vite, level: 92, color: 'from-teal-500 to-cyan-500' },
        { name: 'Tailwind CSS', icon: tailwind, level: 92, color: 'from-teal-500 to-cyan-500' },
        { name: 'CSS3', icon: css, level: 90, color: 'from-blue-500 to-purple-500' }, // placeholder
        { name: 'JavaScript', icon: javascript, level: 88, color: 'from-yellow-500 to-orange-500' }, // placeholder
        { name: 'Next', icon: next, level: 80, color: 'from-gray-500 to-gray-700' }, // placeholder
        { name: 'HTML5', icon: html, level: 95, color: 'from-orange-500 to-red-500' } // placeholder
    ];
    return (
        <section
            id="skills"
            style={{
                backgroundColor: darkMode ? "#111827" : "#f9fafb"
            }}
            className='py-14 relative overflow-hidden'>
            <div className="container px-5 py-14 mx-auto">
                <div className='text-center mb-20'
                    data-aos="fade-up">
                    <h1
                        className='sm:text-4xl text-3xl font-bold title-font mb-4'
                    >Mes
                        <span style={{
                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}> compétences

                        </span>
                    </h1>
                    <p
                        className='text-lg max-w-2xl mx-auto leading-relaxed'
                        style={{
                            color: darkMode ? '#d1d5db' : '#4b5563'
                        }}>
                       <br />
                       <br />
                       <br />
        
                    </p>
                    <div className='flex flex-wrap -m-4'
                    data-aos="fade-up"
                    data-aos-delay='200'>
                        {skills.map((skill, index) => (
                            <div 
                            key={index}
                            className='p-4 lg:w-1/4 md:w-1/2 w-full'
                            data-aos="fade-up"
                            data-aos-delay={`${300 + index * 100}`}>
                                <div style={{
                                    background: darkMode 
                                    ? 'linear-gradient(to bottom right, #1f2937, #111827)'
                                    : 'linear-gradient(to bottom right, #ffffff, #f3f4f6)'
                                }}
                                className='h-full p-4 rounded-3xl border hover:border-blue-500/50 transition-all duration-300 hover: -translate-y-2 group hover:shadow-[0_0_30px_rgb(59,130,246,0.15)]'>
                                    <div style={{
                                    background: darkMode 
                                    ? 'linear-gradient(to bottom right, #374151, #1f2937)'
                                    : 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)'
                                }}
                                className='w-12 h-12 rounded-2xl p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3'>
                                    <img src={skill.icon} alt={skill.name} 
                                    className='w-full h-full object-contain'/>
                                </div>
                                <div>
                                    <h3 
                                    className='text-2xl font-bold mb-2'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}>
                                        {skill.name}
                                    </h3>
                                    <div className='mb-2 flex justify-between items-center'>
                                        <span 
                                        className='font-medium'
                                        style={{
                                            color: darkMode ? '#d1d5db' : '#6b7280'
                                        }}>
                                            Maîtrise
                                        </span>
                                        <span 
                                        style={{
                                            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: 'transparent'
                                        }}
                                        className='font-bold'>
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className='w-full rounded-full h-3 overflow-hidden'
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                    }}>
                                        <div className={`h-full rounded-full bg-linear-to-r
                                            ${skill.color} transition-all duration-1000 ease-out`}
                                            style={{ width: `${skill.level}%`}}></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;