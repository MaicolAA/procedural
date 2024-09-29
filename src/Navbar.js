import { useState } from 'react';
import { List, X } from 'phosphor-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="mb-[1rem] bg-blue-600 text-white py-3 px-4 sm:py-4 sm:px-6 flex justify-between items-center fixed top-0 left-0 right-0">
            <h1 className="text-base sm:text-xl font-bold truncate">
                Sistema Experto de Diagnóstico
            </h1>

            <div className="sm:hidden">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <X size={24} className="text-white" />
                    ) : (
                        <List size={24} className="text-white" />
                    )}
                </button>
            </div>


            <div className="hidden sm:flex space-x-4">
                <a
                    href="https://github.com/MaicolAA/procedural"
                    target="_blank"
                    className="text-sm sm:text-lg hover:underline truncate"
                >
                    Ver Repositorio Github
                </a>
                <a
                    href="/project.pdf"
                    target="_blank"
                    className="text-sm sm:text-lg hover:underline truncate"
                >
                    Ver Documento descripción
                </a>
                <a
                    href="/tree.pdf"
                    target="_blank"
                    className="text-sm sm:text-lg hover:underline truncate"
                >
                    Ver diagrama
                </a>
            </div>

            {isMenuOpen && (
                <div className="absolute top-[4rem] left-0 w-full bg-blue-600 sm:hidden flex flex-col space-y-2 py-2">
                    <a
                        href="https://github.com/MaicolAA/procedural"
                        target="_blank"
                        className="text-sm sm:text-lg hover:underline px-4"
                    >
                        Ver Github
                    </a>
                    <a
                        href="/project.pdf"
                        target="_blank"
                        className="text-sm sm:text-lg hover:underline px-4"
                    >
                        Ver Repositorio Github

                    </a>
                    <a
                        href="/tree.pdf"
                        target="_blank"
                        className="text-sm sm:text-lg hover:underline px-4"
                    >
                        Ver diagrama
                    </a>
                </div>
            )}
        </nav>
    );
};

