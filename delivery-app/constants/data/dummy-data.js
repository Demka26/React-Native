import Category from '../models/Category';
import Food from '../models/Foods'

export const CATEGORIES=[
    new Category("c1","Pizza","https://readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_6941_6018.JPEG"),
    new Category("c2","Hamburger","https://i.pinimg.com/474x/d9/11/ea/d911ea0db51105f84be0f1516c760925.jpg"),
    new Category("c3","Sushi","https://images.rappi.com.ar/products/25ccf721-0a09-4bff-9ce2-23235699819c-1625776821489.png?d=128x90"),
    new Category("c4","Salads","https://mealplannerpro.com/images/recipes/4/712316_256x256.jpg"),
    new Category("c5","Pasta","https://www.stylist.co.uk/images/app/uploads/2021/06/18095157/chitarra-alla-genovese-crop-1624006416-1334x1334.png?w=256&h=256&fit=max&auto=format%2Ccompress"),
    new Category("c6","Shakes","https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/shamrock-shake-99e81e.jpg"),
];

export const FOODS=[
    new Food("f1",["c1"],"Pizza Bianca","https://livelytable.com/wp-content/uploads/2017/10/garlic-white-chicken-pizza-4-700x700.jpg",20,3,"White pizza or a white pie is an Italian-style pizza which does not use tomato sauce. The pizza generally consists of pizza dough, olive oil, garlic, cheese, salt and sometimes toppings including vegetables such as spinach, tomato, and herbs.", "8''","Very tasty, highly recommended" ),
    new Food("f2",["c1"],"Pizza Margarita","https://www.acouplecooks.com/wp-content/uploads/2018/10/Margherita-Pizza-018.jpg",18,3,"Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil","6''","Expected a better pizza, I don't recommend"),
    new Food("f3",["c1"],"Pizza Polenta","https://images.eatsmarter.de/sites/default/files/styles/1600x1200/public/polenta-pizza-mit-lila-brokkolini-664759.jpg",16,3,"Red pepper flakes, mozzarella cheese, grape tomatoes and corn crust.","4''","Great gluten free pizza"),
    new Food("f4",["c1"],"Pizza Peperoni","https://www.halfbakedharvest.com/wp-content/uploads/2019/05/Sweet-and-Spicy-Tomato-Basil-Pepperoni-Pizza-1.jpg",19,3,"Pepperoni is an American variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper.","6''","Love it"),
    new Food("f5",["c2"],"Hamburger and fries","https://static.toiimg.com/photo/79693966.cms",23,3,"220 gram of pure beef meat with tasty fries","220 gram","Great Price for this kind of meal"),
    new Food("f6",["c2"],"Black Hamburger and fries","https://media.istockphoto.com/photos/black-burger-with-french-fries-on-wooden-cutting-board-picture-id684063732?k=20&m=684063732&s=170667a&w=0&h=TpHoirctriRlpoexz0LzYCrziaDeqi_JrcSxCYNSZ8k=",25,3,"Black bun filled with 160 gram of meat, with lettuce, tomato, our secret sauce","160 gram","Too expensive"),
    new Food("f7",["c2"],"Royal Burger","https://www.worldatlas.com/r/w1200/upload/72/b0/06/shutterstock-337714676.jpg",22,3,"Royalty burger with 350 gram of pure beef meat, with all the toppings a man can ask for","350 gram","The best burger I've ever eaten"),
    new Food("f8",["c2"],"Chicken Burger","https://beynur.eu/en/wp-content/uploads/2020/03/shutterstock_1163579620.jpg",17,3,"Tasty bun with chicken and fries","270 gram","The chicken is dry"),
    new Food("f10",["c3"],"California Roll","https://www.blondelish.com/wp-content/uploads/2020/11/California-Rolls-Recipe-Sushi-Rice-Recipe-10.jpg",17,3,"A California roll or California maki is a makizushi sushi roll that is usually rolled inside-out, and containing cucumber, crab or imitation crab, and avocado.","8 pices","Love it"),
    new Food("f11",["c3"],"Dragon Roll","https://www.mashed.com/img/gallery/dragon-roll-what-you-should-know-before-ordering/l-intro-1621019231.jpg",19,3,"Dragon roll is a tasty uramaki sushi roll featuring avocado, unagi, and shrimp tempura.","6 pices","Tastes like shit"),
    new Food("f12",["c3"],"Rainbow Roll","https://www.mashed.com/img/gallery/rainbow-roll-what-you-should-know-before-ordering/l-intro-1618943604.jpg",16,3,"Rainbow roll is a type of uramaki sushi roll filled with cucumber, avocado and crab stick. It is prepared with multiple types of fish, most commonly tuna, salmon, white fish, yellowtail, snapper, and eel.","10 pices","Very beautiful and tasty roll"),
    new Food("f13",["c3"],"Maki Roll","https://fusedbyfionauyema.com/wp-content/uploads/2021/02/FUSED-BY-FIONA-UYEMA-FUTO-MAKI-SUSHI.jpg",14,3,"Traditional sushi roll that consists of fish, vegetables, rice and rolled up in a seaweed.","12 pices","Very simple and cheap sushi"),
    new Food("f14",["c4"],"Israeli Salad","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2016%2F02%2F22%2F1604p112-chopped-israeli-salad.jpg&q=60",10,3,"Israeli salad is a chopped salad of finely diced tomato, onion, cucumber, and bell or chili peppers.","Large","Nice and simple salad"),
    new Food("f15",["c4"],"Greek Salad","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1529943050536.jpeg",13,3,"Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, pepper, Greek oregano, and olive oil.","Medium","Love it"),
    new Food("f16",["c4"],"Tabouli Salad","https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-Tabbouleh-d2135dc3-b144-4c54-9304-0b3a25bfcce7-0-1400x919.jpg",9,3,"Tabbouleh is a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, bulgur, and seasoned with olive oil, lemon juice, salt and sweet pepper.","Small","My favorite salad"),
    new Food("f17",["c4"],"Burgul Salad","https://veggiesociety.com/wp-content/uploads/2018/04/Bulgur-Wheat-Salad-Recipe-1.jpg",11,3,"With fresh herbs, chopped vegetables and chickpeas, this Middle Eastern-style bulgur salad is like a bulked-up tabbouleh.","Medium","Didn't like it at all"),
    new Food("f18",["c5"],"Pesto alla Genovese pasta","https://www.seriouseats.com/thmb/5-_K6m_uvaD-u9aowEeCAUbSBAE=/1125x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160209-finishing-pasta-pesto-vicky-wasik-8-2-ef92adeced95462b8a8871aec7e163e8.jpg",15,3,"True to tradition in this classic Ligurian dish, with basil pesto gently coating al dente pasta, cubed potato and green beans.","Large","Amazing"),
    new Food("f19",["c5"],"Bucatini all'Amatriciana","https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_51/1822747/bucatini-main-jc-211220.png",16,3,"Sugo all'amatriciana, or alla matriciana, also known as salsa all'amatriciana, is a traditional Italian pasta sauce based on guanciale, pecorino romano cheese, tomato, and, in some variations, onion.","Large","Delicious"),
    new Food("f20",["c5"],"Vermicelli Alla Puttanesca","https://static01.nyt.com/images/2020/12/06/dining/15COOKING-PASTA/15COOKING-PASTA-articleLarge-v2.jpg",16,3,"Spaghetti alla puttanesca is an Italian pasta dish invented in Naples in the mid-20th century and made typically with tomatoes, olive oil, olives, chili peppers, capers, and garlic—with vermicelli or spaghetti pasta","Small","Nice"),
    new Food("f21",["c5"],"Orecchiette ai Cime di Rapa","https://media-cdn.greatbritishchefs.com/media/cgddqkwm/img74903.jpg?mode=crop&width=768&height=512",14,3,"olive oil, garlic, chiles, anchovies, bitter greens, and toasted breadcrumbs","Medium","Nasty"),
    new Food("f22",["c6"],"Chocolate Shake","https://insanelygoodrecipes.com/wp-content/uploads/2021/07/Chocolate-Shake-with-Chocolate-Syrup-Whipped-Cream-and-Cherry.jpg",9,3," Chocolate milkshake with milk, chocolate syrup, and ice cream","Tall","Very chocolty"),
    new Food("f23",["c6"],"Vanila Shake","https://insanelygoodrecipes.com/wp-content/uploads/2021/04/Vanilla_Milkshake_without_Ice_Cream.png",8,3,"Vanilla Milkshake, world's favorite milkshake, is a smooth and creamy concoction of vanilla ice cream, milk, vanilla extract topped up with whipped cream and chocolate vermicelli for irresistible looks.","Tall","Tasty"),
    new Food("f24",["c6"],"Strawberry Shake","https://celebratingsweets.com/wp-content/uploads/2021/05/Strawberry-Milkshake-1-2-500x500.jpg",10,3,"Strawberry milkshake is a delicious drink made with strawberries, milk, ice cream and flavoring ingredients like vanilla extract or strawberry syrup.","Small","Expensive"),
    new Food("f9",["c6"],"Mango Shake","https://cdn.nurfit.de/media/22/91/b3/1622196133/Mango%20Smoothie.jpg",7,3,"Fresh mango shake","Medium","Nice")

];


const bianca = {
    id: "f1",
    categoryIds: ["c1"],
    title:"Pizza Margarita",
    imgUrl:"https://livelytable.com/wp-content/uploads/2017/10/garlic-white-chicken-pizza-4-700x700.jpg",
    price:20,
    description: "White pizza or a white pie is an Italian-style pizza which does not use tomato sauce. The pizza generally consists of pizza dough, olive oil, garlic, cheese, salt and sometimes toppings including vegetables such as spinach, tomato, and herbs.",
    size:"12''"
}

 export const myCart = [
    {
        ...bianca,
        qty: 1
    },
   
]