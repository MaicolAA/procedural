export const Steps = [
    {
        question: '¿Cuál es tu color favorito?',
        options: {
            Rojo: {
                question: '¿Por qué te gusta el rojo?',
                options: {
                    'Es llamativo': {
                        question: '¿Qué te atrae de lo llamativo?',
                        options: {
                            'Es único': {
                                question: '¿Qué te atrae de lo único?',
                                options: {
                                    'Es divertido': {
                                        question: '¿Qué te atrae de lo divertido?',
                                        options: {
                                            'Es divertido': null,
                                            'Es inteligente': null,
                                        },
                                    },
                                    'Es inteligente': {
                                        question: '¿Qué te atrae de lo inteligente?',
                                        options: {
                                            'Es inteligente': null,
                                            'Es divertido': null,
                                        },
                                    },
                                },
                            },
                            'Es visible': null,
                        },
                    },
                    'Es apasionante': null,
                },
            },
            Azul: {
                question: '¿Por qué prefieres el azul?',
                options: {
                    'Es calmante': null,
                    'Es confiable': null,
                },
            },
            Verde: {
                question: '¿Por qué te gusta el verde?',
                options: {
                    'Es natural': null,
                    'Es fresco': null,
                },
            },
        },
    },
];