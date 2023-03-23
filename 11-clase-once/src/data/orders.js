export const ORDERS = [
    {
        id: '1',
        date: new Date('2020-09-15T03:24:00'),
        total: 7800,
        items: [
            {
                id: '1',
                name: 'Pan Baguette',
                name: 'Pan Baguette',
                description: 'Clasico pan frances',
                weight: '500 gr',
                price: 1600,
                quantity: 3 
            },
            {
                id: '2',
                category: '1',
                name: 'Pan Ciabatta',
                description: 'Pan de alta hidratacion, miga suave y esponjosa',
                weight: '800 gr',
                price: 3000,
                quantity: 1
            }
        ]
    },
    {
        id: '2',
        date: new Date('2020-09-16T03:24:00'),
        total: 6600,
        items: [
            {
                id: '4',
                category: '2',
                name: 'Pan de Molde harina integral de centeno',
                description: 'Pan de Molde harina integral de centeno',
                weight: '500 gr',
                price: 3200,
                quantity: 2
            }
        ]
    }
]