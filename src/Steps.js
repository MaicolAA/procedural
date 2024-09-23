export const Steps = [
    {
        question: 'Cuenta con Scanner que Permita comprobaciones activas?',
        options: {
            Si: {
                question: 'Presenta código de fallo de encendido en 1 o más cilindros?',
                options: {
                    'En 1 cilindro': {
                        question: 'Se replicó en el mismo cilindro o cambio junto al cilindro que se intercambio la bobina?',
                        options: {
                            'En el mismo': {
                                question: 'El fallo se paso de cilindro?',
                                options: {
                                    'Si': {
                                        finalSolution: 'Se deben reemplazar las bujías de todos los cilindros por unas nuevas de buena calidad y calibrar los electrodos',
                                    },
                                    'No': {
                                        finalSolution: 'Se procede a verificar el estado de los inyectores y se debe medir la compresión y estanqueidad de los cilindros. Comprobaciones adicionales necesarias con herramientas especiales',
                                    },
                                },
                            },
                            'En el que se intercambio': {
                                finalSolution: 'Remplazar el cilindro con fallo en la misma bobina',
                            },
                        },
                    },
                    'En más de 1 cilindro': {
                        question: 'El fallo se replico en los cilindros intercambiados?',
                        options: {
                            'Si': {
                                finalSolution: 'Remplazar los cilindros con fallos, por cilindro nuevos de buena calidad',
                            },
                            'No': {
                                question: 'El fallo se sigue presentando en los cilindro inicales?',
                                options: {
                                    'Si': {
                                        finalSolution: 'Se deben reemplazar las bujías de todos los cilindros por unas nuevas de buena calidad y calibrar los electrodos',
                                    },
                                    'No': {
                                        finalSolution: 'Se procede a verificar el estado de los inyectores y se debe medir la compresión y estanqueidad de los cilindros. Comprobaciones adicionales necesarias con herramientas especiales',
                                    },
                                },
                            },
                        },
                    },
                },
            },
            No: {
                question: 'Cuenta con lector de codigos?',
                options: {
                    'Si': {
                        question: 'Presenta código de fallo de encendido en 1 o más cilindros?',
                        options: {
                            'En 1 cilindro': {
                                question: 'Se replicó en el mismo cilindro o cambio junto al cilindro que se intercambio la bobina?',
                                options: {
                                    'En el mismo': {
                                        question: 'El fallo se paso de cilindro?',
                                        options: {
                                            'Si': {
                                                finalSolution: 'Se deben reemplazar las bujías de todos los cilindros por unas nuevas de buena calidad y calibrar los electrodos',
                                            },
                                            'No': {
                                                finalSolution: 'Se procede a verificar el estado de los inyectores y se debe medir la compresión y estanqueidad de los cilindros. Comprobaciones adicionales necesarias con herramientas especiales',
                                            },
                                        },
                                    },
                                    'En el que se intercambio': {
                                        finalSolution: 'Remplazar el cilindro con fallo en la misma bobina',
                                    },
                                },
                            },
                            'En más de 1 cilindro': {
                                question: 'El fallo se replico en los cilindros intercambiados?',
                                options: {
                                    'Si': {
                                        finalSolution: 'Remplazar los cilindros con fallos, por cilindro nuevos de buena calidad',
                                    },
                                    'No': {
                                        question: 'El fallo se sigue presentando en los cilindro inicales?',
                                        options: {
                                            'Si': {
                                                finalSolution: 'Se deben reemplazar las bujías de todos los cilindros por unas nuevas de buena calidad y calibrar los electrodos',
                                            },
                                            'No': {
                                                finalSolution: 'Se procede a verificar el estado de los inyectores y se debe medir la compresión y estanqueidad de los cilindros. Comprobaciones adicionales necesarias con herramientas especiales',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    'No': {
                        finalMessage: 'Lo sentimos, no se puede comprobar la averia.',
                    }
                },
            },
        },
    },
];