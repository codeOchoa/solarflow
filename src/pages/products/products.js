// Información de los artículos
const items = [{
    title: "Taza Salpik",
    SKU: "BST-498",
    rateItem: 5,
    pricebefore: "",
    price: 5.56,
    installments: 6,
    state: 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "En nuestra tienda online, cada detalle importa. Presentamos nuestra taza de 250 centímetros cúbicos, diseñada para los verdaderos amantes del café. Imagina el aroma envolvente y el sabor reconfortante de tu café favorito, servido en una elegante taza que reposa sobre una cálida base de madera. Esta combinación perfecta de diseño y funcionalidad no solo mejora tu experiencia diaria, sino que también añade un toque de sofisticación a tu rutina. Haz de cada sorbo un momento especial con esta pieza imprescindible para tu colección. ¡Descúbrela ahora y transforma tu manera de disfrutar el café!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/table01tn.jpg",
        "../../media/products/table01p.jpg"
    ]
},
{
    title: "Taza Life Design",
    SKU: "BST-499",
    rateItem: 5,
    priceBefore: 6.49,
    price: 5.49,
    installments: 6,
    state: 3, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Dale un toque de elegancia a tus momentos de café con nuestra taza de 325 centímetros cúbicos, cuidadosamente diseñada para destacar en cualquier ocasión. Esta taza no solo ofrece una capacidad ideal para disfrutar de una generosa porción de tu bebida caliente favorita, sino que también presenta un diseño exclusivo que refleja buen gusto y modernidad. Ya sea para empezar el día con energía o para una pausa relajante, nuestra taza combina estilo y funcionalidad para elevar tu experiencia. Descubre el arte del café con una taza que habla de sofisticación y estilo. ¡Hazla tuya y añade un toque especial a tu colección!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/forest01tn.jpg",
        "../../media/products/forest01p.jpg"
    ]
},
{
    title: "Pocillo Expreso",
    SKU: "BST-500",
    rateItem: 5,
    pricebefore: 2.37,
    price: 1.37,
    installments: 6,
    state: 3, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Eleva tu experiencia de café con nuestro pocillo de 150 centímetros cúbicos, especialmente diseñado para disfrutar de un auténtico espresso. Hecho de porcelana gastronómica de alta calidad, este pocillo ofrece la combinación perfecta de durabilidad y elegancia, ideal para quienes aprecian cada detalle de su ritual de café. Su tamaño compacto es perfecto para resaltar los ricos aromas y sabores de un espresso, mientras que su acabado impecable añade un toque de sofisticación a cualquier entorno. Descubre la diferencia que hace un pocillo bien diseñado y lleva tu experiencia de café a un nuevo nivel con esta pieza esencial para los verdaderos amantes del café. ¡Añádelo a tu colección hoy mismo!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/flower01tn.jpg",
        "../../media/products/flower01p.jpg"
    ]
},
{
    title: "Pocillo Diseño",
    SKU: "BST-501",
    rateItem: 5,
    priceBefore: "",
    price: 7.49,
    installments: 6,
    state: 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Explora el mundo del arte del café con nuestra taza de 290 centímetros cúbicos y su plato a juego, diseñados especialmente para los amantes del latte art. Esta elegante combinación es perfecta para quienes disfrutan no solo del sabor de un buen café, sino también de la creatividad que conlleva su presentación. El tamaño ideal de la taza permite crear intrincados diseños de arte latte, mientras que el plato proporciona una base estable y estilizada para servir con estilo. Ya sea para sorprender a tus invitados o para disfrutar de un momento especial contigo mismo, esta taza con plato es una elección esencial para tu colección de café. ¡Despierta tu artista interior y disfruta de cada sorbo con elegancia!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/coffee11tn.jpg",
        "../../media/products/coffee11p.jpg"
    ]
},
{
    title: "Tetera Retro",
    SKU: "BST-502",
    rateItem: 4,
    pricebefore: 4.43,
    price: 3.43,
    installments: 6,
    state: 3, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Añade un toque de nostalgia y encanto a tus momentos de té con nuestra tetera de cerámica de 500 centímetros cúbicos, diseñada con un estilo retro que enamora. Esta tetera combina la funcionalidad moderna con un diseño clásico, perfecto para quienes aprecian el estilo vintage y la calidad de la cerámica artesanal. Con capacidad para 500 cc, es ideal para preparar y compartir tus infusiones favoritas, manteniendo el calor y el sabor de manera óptima. Ya sea para una tarde relajante o una reunión con amigos, nuestra tetera de estilo retro es un accesorio imprescindible que aporta elegancia y un aire de sofisticación a cualquier ocasión. ¡Descubre la belleza del pasado con una tetera que celebra el arte del té!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/teapot01tn.jpg",
        "../../media/products/teapot01p.jpg"
    ]
},
{
    title: "Taza con Cuchara",
    SKU: "BST-503",
    rateItem: 5,
    pricebefore: "",
    price: 7.21,
    installments: 6,
    state: 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Disfruta de tus bebidas favoritas con un toque de estilo y comodidad gracias a nuestra taza de cerámica de 350 centímetros cúbicos, acompañada de una cuchara a juego. Este set es perfecto para aquellos que valoran tanto la estética como la funcionalidad en sus utensilios de cocina. La taza, con su generosa capacidad, es ideal para una amplia variedad de bebidas calientes, mientras que la cuchara incluida es perfecta para mezclar tu café, té o chocolate caliente. Ya sea para un momento de relajación en casa o para llevar a la oficina, este conjunto de taza y cuchara es una elección práctica y elegante. ¡Añádelo a tu colección y disfruta de cada sorbo con estilo!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/coffee06tn.jpg",
        "../../media/products/coffee06p.jpg"
    ]
},
{
    title: "Taza de Té",
    SKU: "BST-504",
    rateItem: 3,
    pricebefore: 44.99,
    price: 39.30,
    installments: 6,
    state: 3, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Eleva tu experiencia de té con nuestro elegante set de taza de 230 centímetros cúbicos, acompañado de un plato y una cuchara a juego. Este conjunto no solo es funcional, sino que también añade un toque de sofisticación a cualquier ocasión de té. La taza, con su tamaño perfecto, permite disfrutar de tus infusiones favoritas, mientras que el plato y la cuchara complementan el conjunto con estilo y practicidad. Ideal para momentos especiales o para el día a día, este set es una adición esencial para cualquier amante del té que aprecia tanto el sabor como la presentación. ¡Disfruta del ritual del té con elegancia y completa tu experiencia con este exquisito set!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/tea-cup02tn.jpg",
        "../../media/products/tea-cup02p.jpg"
    ]
},
{
    title: "Taza Gaspeada",
    SKU: "BST-505",
    rateItem: 4,
    pricebefore: "",
    price: 3.33,
    installments: 6,
    state: 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Descubre una nueva dimensión de elegancia y estilo con nuestra taza de cerámica de 350 centímetros cúbicos, destacada por su acabado jaspeado único. Esta taza no solo ofrece una capacidad ideal para disfrutar de tus bebidas calientes favoritas, sino que también presenta un diseño sofisticado que combina texturas y colores de manera armoniosa. El acabado jaspeado le da a cada pieza un carácter único, asegurando que cada taza sea tan especial como quien la usa. Perfecta para el hogar o la oficina, esta taza añade un toque de distinción a tus momentos de café o té. ¡Haz de cada bebida una experiencia visual y sensorial con esta elegante taza de cerámica!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/coffee04tn.jpg",
        "../../media/products/coffee04p.jpg"
    ]
},
{
    title: "Taza Chanel",
    SKU: "BST-506",
    rateItem: 5,
    pricebefore: "",
    price: 15.53,
    installments: 6,
    state: 1, // 1: normal, 2: Novedad/Nuevo, 3: Sale, 4: Agotado
    description: "Añade un toque de lujo a tus momentos de café o té con nuestra taza de cerámica de 350 centímetros cúbicos, decorada con un elegante diseño inspirado en Chanel. Esta taza combina estilo y sofisticación, ofreciendo una experiencia única para los amantes de la moda y el buen gusto. Con su generosa capacidad, es perfecta para disfrutar de tus bebidas favoritas mientras aprecias un diseño que evoca la elegancia clásica de la marca icónica. Ideal para quienes buscan una pieza que refleje su amor por el estilo y la calidad, esta taza es una adición imprescindible para cualquier colección. ¡Disfruta de cada sorbo con un toque de glamour y distinción!",
    stockByColor: {
        option1: 1,
        option2: 0,
        option3: 0
    },
    images: [
        "../../media/products/image01tn.jpg",
        "../../media/products/image01p.jpg"
    ]
},
];