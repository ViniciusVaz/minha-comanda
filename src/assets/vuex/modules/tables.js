export default {
    state: {
        list: [
            {
                items: [
                    {
                        id: 1,
                        quantity: 2,
                        product: "X-salada",
                        price: 15.00,
                        paid: 0
                    },
                    {
                        id: 2,
                        quantity: 2,
                        product: "Sucos",
                        price: 8.14,
                        paid: 0
                    },
                    {
                        id: 3,
                        quantity: 2,
                        product: "Milkshake de morango",
                        price: 10.50,
                        paid: 0
                    }
                ]
            },
            {
                items: [
                    {
                        id: 1,
                        quantity: 2,
                        product: "Salada Caesar",
                        price: 18.00,
                        paid: 0
                    },
                    {
                        id: 2,
                        quantity: 2,
                        product: "Macarrão com molho branco",
                        price: 20.00,
                        paid: 1
                    },
                    {
                        id: 3,
                        quantity: 3,
                        product: "Suco de laranja",
                        price: 4.50,
                        paid: 2
                    },
                    {
                        id: 4,
                        quantity: 2,
                        product: "Coca-Cola lata",
                        price: 4.50,
                        paid: 0
                    }
                ]
            },
            {
                items: [
                    {
                        id: 1,
                        quantity: 1,
                        product: "X-Bacon com cheddar",
                        price: 18.00,
                        paid: 0
                    },
                    {
                        id: 2,
                        quantity: 1,
                        product: "Porção de batata",
                        price: 12.00,
                        paid: 0
                    },
                    {
                        id: 3,
                        quantity: 1,
                        product: "Milkshake de chocolate",
                        price: 10.50,
                        paid: 0
                    }
                ]
            },
            {
                items: [
                    {
                        id: 1,
                        quantity: 1,
                        product: "Pizza de calabresa",
                        price: 24.00,
                        paid: 0
                    },
                    {
                        id: 2,
                        quantity: 1,
                        product: "Pizza de frango",
                        price: 24.00,
                        paid: 0
                    },
                    {
                        id: 3,
                        quantity: 2,
                        product: "Pizza de quatro queijos",
                        price: 22.00,
                        paid: 0
                    },
                    {
                        id: 4,
                        quantity: 3,
                        product: "Coca-Cola lata",
                        price: 4.50,
                        paid: 0
                    },
                    {
                        id: 5,
                        quantity: 2,
                        product: "Suco de abacaxi com hortelã",
                        price: 4.50,
                        paid: 0
                    },
                    {
                        id: 6,
                        quantity: 1,
                        product: "Suco de limão suiço",
                        price: 4.50,
                        paid: 0
                    },
                    {
                        id: 7,
                        quantity: 1,
                        product: "Suco de laranja",
                        price: 4.50,
                        paid: 0
                    }
                ]
            }
        ]
    },
    getters: {
        getList: state => (id) => {
            return state.list[id]
        }
    }
}