export type Restaurant = {
  id: number
  name: string
  logo: string
  rating: number
  deliveryFee: number | null
  deliveryTime: string
  distance: string
  minOrder: number
  freeDeliveryOver: number | null
  isOpen: boolean
}

export type Category = {
  id: number
  name: string
  description?: string
  restaurantId: number
  hasPromotion?: boolean
}

export type ProductOption = {
  id: number
  name: string
  required: boolean
  multiSelect: boolean
  minSelect?: number
  maxSelect?: number
  items: {
    id: number
    name: string
    price: number | null
    default?: boolean
  }[]
}

export type Product = {
  id: number
  name: string
  description: string
  price: number
  image?: string
  categoryId: number
  restaurantId: number
  options?: ProductOption[]
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Matsuri Sushi House',
    logo: '/images/restaurants/matsuri-concept.png',
    rating: 4.6,
    deliveryFee: null,
    deliveryTime: '30-40 min',
    distance: '5.2km',
    minOrder: 20.0,
    freeDeliveryOver: 50.0,
    isOpen: true,
  },
  {
    id: 2,
    name: 'Subway - Shopping Center',
    logo: '/images/restaurants/subway.png',
    rating: 4.2,
    deliveryFee: 4.0,
    deliveryTime: '25-35 min',
    distance: '2.8km',
    minOrder: 18.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 3,
    name: 'Burger King Express',
    logo: '/images/restaurants/burger-king.png',
    rating: 4.5,
    deliveryFee: null,
    deliveryTime: '30-40 min',
    distance: '4.1km',
    minOrder: 22.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 4,
    name: "McDonald's Drive Thru",
    logo: '/images/restaurants/mac-donalds.png',
    rating: 4.3,
    deliveryFee: null,
    deliveryTime: '20-30 min',
    distance: '3.5km',
    minOrder: 15.0,
    freeDeliveryOver: 40.0,
    isOpen: true,
  },
  {
    id: 5,
    name: 'Pizza Express',
    logo: '/images/restaurants/pizza-express.png',
    rating: 4.4,
    deliveryFee: 5.5,
    deliveryTime: '35-45 min',
    distance: '6.0km',
    minOrder: 25.0,
    freeDeliveryOver: 60.0,
    isOpen: true,
  },
  {
    id: 6,
    name: 'Taco Bell Central',
    logo: '/images/restaurants/taco-bell.png',
    rating: 4.1,
    deliveryFee: 7.0,
    deliveryTime: '30-40 min',
    distance: '5.7km',
    minOrder: 18.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 7,
    name: "Domino's Pizza",
    logo: '/images/restaurants/dominos.png',
    rating: 4.5,
    deliveryFee: null,
    deliveryTime: '20-30 min',
    distance: '2.9km',
    minOrder: 20.0,
    freeDeliveryOver: 50.0,
    isOpen: true,
  },
  {
    id: 8,
    name: 'Outback Steakhouse',
    logo: '/images/restaurants/outback.png',
    rating: 4.8,
    deliveryFee: 8.0,
    deliveryTime: '40-50 min',
    distance: '7.5km',
    minOrder: 30.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 9,
    name: 'Starbucks Café',
    logo: '/images/restaurants/starbucks.png',
    rating: 4.7,
    deliveryFee: 3.0,
    deliveryTime: '15-25 min',
    distance: '2.2km',
    minOrder: 12.0,
    freeDeliveryOver: 30.0,
    isOpen: true,
  },
  {
    id: 10,
    name: 'China In Box',
    logo: '/images/restaurants/china-in-box.png',
    rating: 4.3,
    deliveryFee: 5.0,
    deliveryTime: '30-40 min',
    distance: '5.0km',
    minOrder: 20.0,
    freeDeliveryOver: 45.0,
    isOpen: true,
  },
  {
    id: 11,
    name: 'Giraffas Grill',
    logo: '/images/restaurants/giraffas.png',
    rating: 4.1,
    deliveryFee: 4.0,
    deliveryTime: '25-35 min',
    distance: '4.3km',
    minOrder: 17.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 12,
    name: 'Spoleto Restaurante',
    logo: '/images/restaurants/spoleto.png',
    rating: 4.4,
    deliveryFee: 5.0,
    deliveryTime: '30-40 min',
    distance: '5.6km',
    minOrder: 19.0,
    freeDeliveryOver: 50.0,
    isOpen: true,
  },
  {
    id: 13,
    name: "Habib's Delivery",
    logo: '/images/restaurants/habibs.png',
    rating: 4.0,
    deliveryFee: null,
    deliveryTime: '20-30 min',
    distance: '3.0km',
    minOrder: 15.0,
    freeDeliveryOver: 40.0,
    isOpen: true,
  },
  {
    id: 14,
    name: 'KFC - Avenida Central',
    logo: '/images/restaurants/kfc.png',
    rating: 4.5,
    deliveryFee: 6.0,
    deliveryTime: '25-35 min',
    distance: '4.8km',
    minOrder: 22.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 15,
    name: "Bob's Hamburgueria",
    logo: '/images/restaurants/bobs.png',
    rating: 4.2,
    deliveryFee: 4.5,
    deliveryTime: '20-30 min',
    distance: '3.5km',
    minOrder: 18.0,
    freeDeliveryOver: 45.0,
    isOpen: true,
  },
  {
    id: 16,
    name: 'Coco Bambu Restaurante',
    logo: '/images/restaurants/coco-bambu.png',
    rating: 4.9,
    deliveryFee: 10.0,
    deliveryTime: '45-55 min',
    distance: '8.0km',
    minOrder: 40.0,
    freeDeliveryOver: null,
    isOpen: true,
  },
  {
    id: 17,
    name: 'Outback Shopping Sul',
    logo: '/images/restaurants/outback.png',
    rating: 4.7,
    deliveryFee: 8.0,
    deliveryTime: '35-45 min',
    distance: '6.8km',
    minOrder: 35.0,
    freeDeliveryOver: null,
    isOpen: false,
  },
  {
    id: 18,
    name: 'Sushiloko Express',
    logo: '/images/restaurants/sushiloko.png',
    rating: 4.6,
    deliveryFee: 5.0,
    deliveryTime: '30-40 min',
    distance: '5.4km',
    minOrder: 25.0,
    freeDeliveryOver: 60.0,
    isOpen: true,
  },
  {
    id: 19,
    name: 'Matsuri Fusion',
    logo: '/images/restaurants/matsuri-concept.png',
    rating: 4.8,
    deliveryFee: null,
    deliveryTime: '25-35 min',
    distance: '4.9km',
    minOrder: 20.0,
    freeDeliveryOver: 50.0,
    isOpen: false,
  },
]

export const categories: Category[] = [
  {
    id: 1,
    name: 'Niguiris',
    restaurantId: 1,
    hasPromotion: true,
  },
  {
    id: 2,
    name: 'Ceviches',
    description: 'um prato super refrescante de peixe fatiado e marinado com limão',
    restaurantId: 1,
    hasPromotion: true,
  },
  {
    id: 3,
    name: 'Temakis',
    description: 'sushi em forma de cone com salmão e cream cheese',
    restaurantId: 1,
  },
  {
    id: 4,
    name: 'Bebidas',
    restaurantId: 1,
  },
  {
    id: 5,
    name: 'Sobremesas',
    restaurantId: 1,
  },
  {
    id: 6,
    name: 'Sanduíches',
    description: 'Feitos na hora com ingredientes frescos',
    restaurantId: 2,
    hasPromotion: true,
  },
  {
    id: 7,
    name: 'Saladas',
    restaurantId: 2,
  },
  {
    id: 8,
    name: 'Bebidas',
    restaurantId: 2,
  },
  {
    id: 9,
    name: 'Cookies',
    restaurantId: 2,
    hasPromotion: true,
  },
  {
    id: 10,
    name: 'Combos',
    restaurantId: 3,
    hasPromotion: true,
  },
  {
    id: 11,
    name: 'Whoppers',
    restaurantId: 3,
  },
  {
    id: 12,
    name: 'Acompanhamentos',
    restaurantId: 3,
  },
  {
    id: 13,
    name: 'Sobremesas',
    restaurantId: 3,
  },
  {
    id: 14,
    name: 'McLanches',
    restaurantId: 4,
    hasPromotion: true,
  },
  {
    id: 15,
    name: 'McOfertas',
    restaurantId: 4,
  },
  {
    id: 16,
    name: 'McSundae',
    restaurantId: 4,
  },
  {
    id: 17,
    name: 'McBebidas',
    restaurantId: 4,
  },
  {
    id: 18,
    name: 'Pizzas Tradicionais',
    restaurantId: 5,
  },
  {
    id: 19,
    name: 'Pizzas Especiais',
    restaurantId: 5,
    hasPromotion: true,
  },
  {
    id: 20,
    name: 'Bebidas',
    restaurantId: 5,
  },
  {
    id: 21,
    name: 'Esfihas',
    restaurantId: 5,
  },
  {
    id: 22,
    name: 'Tacos',
    restaurantId: 6,
    hasPromotion: true,
  },
  {
    id: 23,
    name: 'Burritos',
    restaurantId: 6,
  },
  {
    id: 24,
    name: 'Nachos',
    restaurantId: 6,
  },
  {
    id: 25,
    name: 'Cafés',
    restaurantId: 9,
  },
  {
    id: 26,
    name: 'Frappuccinos',
    restaurantId: 9,
    hasPromotion: true,
  },
  {
    id: 27,
    name: 'Pães de Queijo',
    restaurantId: 9,
  },
]

export const products: Product[] = [
  {
    id: 1,
    name: 'Califórnia',
    description: 'Kani, pepino e maçã ou manga',
    price: 17.0,
    categoryId: 3,
    restaurantId: 1,
    options: [
      {
        id: 1,
        name: 'qual o tamanho?',
        required: true,
        multiSelect: false,
        items: [
          {
            id: 1,
            name: 'médio',
            price: -3.01,
            default: true,
          },
          {
            id: 2,
            name: 'grande',
            price: null,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Filadélfia',
    description: 'Arroz, salmão fresco, cream cheese e cebolinha',
    price: 13.99,
    categoryId: 3,
    restaurantId: 1,
    options: [
      {
        id: 1,
        name: 'escolha 3 ingredientes',
        required: true,
        multiSelect: true,
        minSelect: 3,
        maxSelect: 3,
        items: [
          {id: 1, name: 'shimeji', price: null},
          {id: 2, name: 'cream cheese', price: null},
          {id: 3, name: 'tomate seco', price: null},
          {id: 4, name: 'alface americana', price: null},
          {id: 5, name: 'rúcula', price: null},
          {id: 6, name: 'pepino', price: null},
          {id: 7, name: 'cebolinha', price: null},
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Mix',
    description: 'Escolha 3 ingredientes: shimeji, alface americana, rúcula, pepino, tomate seco, cream cheese, maionese',
    price: 13.99,
    categoryId: 3,
    restaurantId: 1,
    options: [
      {
        id: 1,
        name: 'quer o dobro?',
        required: false,
        multiSelect: false,
        items: [{id: 1, name: 'salmão', price: 8.0}],
      },
    ],
  },
  {
    id: 4,
    name: 'Salmão picante',
    description: 'Alga, arroz, salmão fresco, pimenta e cebolinha',
    price: 13.99,
    categoryId: 3,
    restaurantId: 1,
  },
  {
    id: 5,
    name: 'Ceviche de salmão',
    description: 'salmão temperado com limão, cebola e pimenta',
    price: 19.9,
    image: '/images/products/ceviche.png',
    categoryId: 2,
    restaurantId: 1,
    options: [
      {
        id: 1,
        name: 'qual o tamanho?',
        required: true,
        multiSelect: false,
        items: [
          {id: 1, name: 'médio', price: -3.0, default: true},
          {id: 2, name: 'grande', price: 5.0},
        ],
      },
      {
        id: 2,
        name: 'acompanhamentos',
        required: true,
        multiSelect: true,
        minSelect: 1,
        maxSelect: 2,
        items: [
          {id: 1, name: 'shoyu', price: null},
          {id: 2, name: 'gengibre', price: null},
          {id: 3, name: 'wasabi', price: null},
          {id: 4, name: 'sem acompanhamentos', price: null},
        ],
      },
      {
        id: 3,
        name: 'vai querer bebida?',
        required: false,
        multiSelect: true,
        items: [
          {id: 1, name: 'coca-cola', price: 5.0},
          {id: 2, name: 'fanta laranja', price: 5.0},
          {id: 3, name: 'guaraná antarctica', price: 5.0},
          {id: 4, name: 'suco prats laranja', price: 6.0},
          {id: 5, name: 'água sem gás', price: 3.0},
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Coca-cola lata',
    description: 'Refrigerante em lata 350ml',
    price: 5.0,
    categoryId: 4,
    restaurantId: 1,
  },
  {
    id: 7,
    name: 'Subway Club',
    description: 'Peito de peru, carne bovina e presunto',
    price: 22.9,
    categoryId: 6,
    restaurantId: 2,
    options: [
      {
        id: 6,
        name: 'Pão',
        required: true,
        multiSelect: false,
        items: [
          {id: 20, name: 'Italiano', price: null},
          {id: 21, name: 'Parmesão e Orégano', price: null},
          {id: 22, name: 'Integral', price: null},
        ],
      },
      {
        id: 7,
        name: 'Queijo',
        required: false,
        multiSelect: false,
        items: [
          {id: 23, name: 'Cheddar', price: 2.5},
          {id: 24, name: 'Suíço', price: 2.5},
          {id: 25, name: 'Sem queijo', price: null},
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Salada Caesar',
    description: 'Mix de folhas, croutons e molho Caesar',
    price: 18.5,
    categoryId: 7,
    restaurantId: 2,
  },
  {
    id: 9,
    name: 'Cookie de Chocolate',
    description: 'Cookie tradicional com gotas de chocolate',
    price: 6.9,
    categoryId: 9,
    restaurantId: 2,
  },
  {
    id: 10,
    name: 'Whopper Duplo',
    description: '2 hambúrgueres, queijo, alface e maionese',
    price: 24.9,
    categoryId: 11,
    restaurantId: 3,
    options: [
      {
        id: 8,
        name: 'Adicionais',
        required: false,
        multiSelect: true,
        items: [
          {id: 26, name: 'Bacon', price: 4.5},
          {id: 27, name: 'Cheddar extra', price: 3.5},
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'Combo Whopper',
    description: 'Whopper, batata média e refrigerante',
    price: 32.9,
    categoryId: 10,
    restaurantId: 3,
  },
  {
    id: 12,
    name: 'Sundae Chocolate',
    description: 'Softeice com calda de chocolate',
    price: 7.9,
    categoryId: 13,
    restaurantId: 3,
  },
  {
    id: 13,
    name: 'Big Mac',
    description: 'Dois hambúrgueres, alface, queijo e molho especial',
    price: 19.9,
    categoryId: 14,
    restaurantId: 4,
  },
  {
    id: 14,
    name: 'McFlurry Oreo',
    description: 'Softeice com pedaços de biscoito Oreo',
    price: 12.9,
    categoryId: 16,
    restaurantId: 4,
  },
  {
    id: 15,
    name: 'McFritas Média',
    description: 'Batata frita temperada',
    price: 8.9,
    categoryId: 15,
    restaurantId: 4,
  },
  {
    id: 16,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela e manjericão',
    price: 49.9,
    categoryId: 18,
    restaurantId: 5,
    options: [
      {
        id: 9,
        name: 'Tamanho',
        required: true,
        multiSelect: false,
        items: [
          {id: 28, name: 'Pequena (4 fatias)', price: null},
          {id: 29, name: 'Média (6 fatias)', price: 10.0},
          {id: 30, name: 'Grande (8 fatias)', price: 20.0},
        ],
      },
    ],
  },
  {
    id: 17,
    name: 'Pizza Calabresa',
    description: 'Molho de tomate, mussarela e calabresa',
    price: 54.9,
    categoryId: 19,
    restaurantId: 5,
  },
  {
    id: 18,
    name: 'Esfiha de Carne',
    description: 'Esfiha aberta de carne temperada',
    price: 6.9,
    categoryId: 21,
    restaurantId: 5,
    options: [
      {
        id: 10,
        name: 'Quantidade',
        required: true,
        multiSelect: false,
        items: [
          {id: 31, name: '1 unidade', price: null},
          {id: 32, name: '3 unidades', price: 18.9},
          {id: 33, name: '6 unidades', price: 35.9},
        ],
      },
    ],
  },
  {
    id: 19,
    name: 'Taco Supreme',
    description: 'Tortilha crocante com carne, queijo e vegetais',
    price: 14.9,
    categoryId: 22,
    restaurantId: 6,
  },
  {
    id: 20,
    name: 'Burrito Vegano',
    description: 'Burrito com feijão, arroz e vegetais',
    price: 16.9,
    categoryId: 23,
    restaurantId: 6,
  },
  {
    id: 21,
    name: 'Café Latte',
    description: 'Espresso com leite vaporizado',
    price: 12.9,
    categoryId: 25,
    restaurantId: 9,
  },
  {
    id: 22,
    name: 'Frappuccino Caramelo',
    description: 'Bebida gelada com café e calda de caramelo',
    price: 18.9,
    categoryId: 26,
    restaurantId: 9,
  },
]

export const data = {
  restaurants,
  categories,
  products,
}
