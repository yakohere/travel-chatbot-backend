const database = {
    London: {
      localAttractions: {
        "British Museum": {
          workingHours: "10:00 AM - 5:30 PM",
          price: "Free",
          description:
            "The British Museum is a world-renowned museum showcasing art, artifacts, and cultural treasures from around the globe.",
          rating: 4.8,
          tips: "Get a map at the entrance to navigate the vast museum collection.",
          location:
            "Great Russell St, Bloomsbury, London WC1B 3DG, United Kingdom",
        },
        "Tower of London": {
          workingHours: "9:00 AM - 5:30 PM",
          price: "$30",
          description:
            "The Tower of London is a historic castle located on the north bank of the River Thames. It houses the Crown Jewels and has a rich history.",
          rating: 4.7,
          tips: "Join a guided tour to learn fascinating stories about the Tower's past.",
          location:
            "Tower of London, St Katharine's & Wapping, London EC3N 4AB, United Kingdom",
        },
        "London Eye": {
          workingHours: "10:00 AM - 8:30 PM",
          price: "$35",
          description:
            "The London Eye is a giant Ferris wheel offering panoramic views of the city. It's a popular tourist attraction and provides stunning photo opportunities.",
          rating: 4.6,
          tips: "Book tickets in advance to avoid long queues during peak hours.",
          location:
            "Riverside Building, County Hall, Westminster Bridge Rd, Bishop's, London SE1 7PB, United Kingdom",
        },
      },
      localCuisine: {
        "Fish and Chips": {
          ingredients: ["Fish", "Potatoes", "Flour", "Oil", "Salt", "Vinegar"],
          price: "$10",
          description:
            "Fish and chips is a classic British dish consisting of battered and fried fish fillets served with thick-cut chips. It's a popular takeaway meal in the UK.",
          recommendedPlaces: ["Poppie's Fish & Chips", "The Golden Hind"],
        },
        "Full English Breakfast": {
          ingredients: [
            "Bacon",
            "Sausages",
            "Eggs",
            "Baked Beans",
            "Mushrooms",
            "Tomatoes",
            "Toast",
          ],
          price: "$12",
          description:
            "A full English breakfast is a hearty meal that typically includes bacon, sausages, eggs, baked beans, mushrooms, tomatoes, and toast. It's a traditional British breakfast.",
          recommendedPlaces: ["Regency Café", "The Breakfast Club"],
        },
        "Sunday Roast": {
          ingredients: [
            "Roast Beef",
            "Roast Potatoes",
            "Yorkshire Pudding",
            "Vegetables",
            "Gravy",
          ],
          price: "$15",
          description:
            "Sunday roast is a traditional British meal consisting of roasted meat (often beef), roast potatoes, Yorkshire pudding, vegetables, and gravy. It's typically enjoyed on Sundays with family and friends.",
          recommendedPlaces: ["The Princess of Shoreditch", "The Harwood Arms"],
        },
      },
      activities: {
        "Riding the London Eye": {
          itemsNeeded: ["London Eye Ticket"],
          price: "$25",
          description:
            "Experience breathtaking views of London's skyline by riding the iconic London Eye. The slow rotation provides ample time to enjoy the scenery.",
          rating: 4.5,
          tips: "Try to schedule your ride during sunset for a mesmerizing view. Capture memorable photos!",
        },
        "Watching a play at Shakespeare's Globe Theatre": {
          itemsNeeded: ["Theatre Ticket"],
          price: "$40",
          description:
            "Immerse yourself in the world of Shakespeare by watching a play at the historic Shakespeare's Globe Theatre. The authentic Elizabethan-style theater offers a unique theatrical experience.",
          rating: 4.7,
          tips: "Consider booking seats in the standing area, known as the 'Yard,' for a truly immersive and affordable experience.",
        },
        "Shopping at Harrods": {
          itemsNeeded: ["Money or Credit Card"],
          price: "Varies",
          description:
            "Indulge in luxury shopping at Harrods, one of the world's most famous department stores. From designer fashion to gourmet food, Harrods offers a lavish retail experience.",
          rating: 4.6,
          tips: "Explore the various departments, including the Food Halls, and don't forget to visit the iconic Egyptian Escalator.",
        },
      },
    },
    Paris: {
      localAttractions: {
        "Eiffel Tower": {
          workingHours: "9:30 AM - 11:45 PM",
          price: "$25",
          description:
            "The Eiffel Tower is an iconic symbol of France. It offers a stunning view of the city from its viewing platforms.",
          rating: 4.6,
          tips: "It's best to visit in the early morning or late evening to avoid crowds.",
          location: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        },
        "Louvre Museum": {
          workingHours: "9:00 AM - 6:00 PM",
          price: "$20",
          description:
            "The Louvre Museum is the world's largest art museum and a historic monument in Paris.",
          rating: 4.7,
          tips: "Visit on a Wednesday or Friday evening when the museum is open until 9:45 PM.",
          location: "Rue de Rivoli, 75001 Paris, France",
        },
        "Notre-Dame": {
          workingHours: "8:00 AM - 6:45 PM",
          price: "Free",
          description:
            "Notre-Dame de Paris is a medieval Catholic cathedral and is considered to be one of the finest examples of French Gothic architecture.",
          rating: 4.4,
          tips: "Check out the view from the top, but be prepared for a lot of steps!",
          location: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France",
        },
      },
      localCuisine: {
        Croissant: {
          ingredients: ["Flour", "Yeast", "Salt", "Butter", "Milk", "Eggs"],
          price: "$2",
          description:
            "A croissant is a buttery, flaky, viennoiserie pastry. It's a perfect breakfast or snack, often enjoyed with coffee.",
          recommendedPlaces: ["Du Pain et des Idées", "Maison Landemaine"],
        },
        Ratatouille: {
          ingredients: [
            "Eggplant",
            "Zucchini",
            "Bell Peppers",
            "Tomatoes",
            "Onions",
            "Garlic",
          ],
          price: "$15",
          description:
            "Ratatouille is a traditional Provençal dish made with fresh vegetables cooked in olive oil. It's a delicious and healthy choice.",
          recommendedPlaces: ["Chez L'Ami Jean", "Le Comptoir du Relais"],
        },
        Escargot: {
          ingredients: ["Snails", "Butter", "Garlic", "Parsley"],
          price: "$18",
          description:
            "Escargot is a French delicacy that consists of cooked snails served with butter, garlic, and parsley. It's a unique and flavorful dish.",
          recommendedPlaces: ["L'Escargot Montorgueil", "Chez Léa"],
        },
      },
      
      activities: {
        "Seine River Cruise": {
          itemsNeeded: ["Cruise Ticket", "Camera", "Comfortable Shoes"],
          price: "$30",
          description:
            "A cruise on the Seine River offers a unique way to see the city's most famous landmarks.",
          rating: 4.4,
          tips: "Try to go at night when the monuments are illuminated.",
        },
        "Wine Tasting": {
          itemsNeeded: ["ID proving age", "Notebook for notes"],
          price: "$50",
          description:
            "Indulge in a wine tasting experience to explore the rich flavors of French wines.",
          rating: 4.8,
          tips: "Choose a reputable wine bar or vineyard for an authentic and educational wine tasting.",
        },
        "Shopping in Le Marais": {
          itemsNeeded: [
            "Money or Credit Card",
            "Shopping Bag",
            "Comfortable Shoes",
          ],
          price: "Varies",
          description:
            "Le Marais is a trendy neighborhood in Paris known for its fashionable boutiques and unique shops.",
          rating: 4.6,
          tips: "Explore the narrow streets and discover local designers, vintage stores, and stylish concept stores.",
        },
      },
    },
    Rome: {
      localAttractions: {
        Colosseum: {
          workingHours: "8:30 AM - 7:00 PM",
          price: "$20",
          description:
            "The Colosseum is an ancient amphitheater and one of Rome's most iconic landmarks. It's a testament to the grandeur of the Roman Empire.",
          rating: 4.8,
          tips: "Consider booking skip-the-line tickets to save time and avoid long queues.",
          location: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
        },
        "Vatican City": {
          workingHours: "9:00 AM - 6:00 PM",
          price: "$30",
          description:
            "Vatican City is an independent city-state and the spiritual and administrative headquarters of the Roman Catholic Church. It houses renowned art and historical treasures.",
          rating: 4.7,
          tips: "Cover your shoulders and knees when visiting the Vatican's religious sites, such as St. Peter's Basilica and the Sistine Chapel.",
          location: "Vatican City, 00120, Vatican City",
        },
        "Roman Forum": {
          workingHours: "8:30 AM - 7:00 PM",
          price: "$15",
          description:
            "The Roman Forum is an archaeological site showcasing the ruins of ancient Rome's political, commercial, and religious center.",
          rating: 4.6,
          tips: "Consider hiring a guide to learn about the historical significance of the ruins.",
          location: "Via della Salara Vecchia, 5/6, 00186 Roma RM, Italy",
        },
      },
      localCuisine: {
        Pizza: {
          ingredients: [
            "Flour",
            "Yeast",
            "Water",
            "Salt",
            "Tomatoes",
            "Mozzarella",
            "Olive Oil",
          ],
          price: "$8",
          description:
            "Pizza is a beloved Italian dish consisting of a thin, crispy crust topped with tomato sauce, cheese, and various toppings. It's a must-try in Rome.",
          recommendedPlaces: ["Da Remo", "Pizzarium"],
        },
        "Pasta Carbonara": {
          ingredients: [
            "Pasta",
            "Eggs",
            "Pancetta",
            "Parmesan Cheese",
            "Black Pepper",
          ],
          price: "$12",
          description:
            "Pasta carbonara is a classic Roman dish made with pasta, eggs, pancetta (Italian bacon), Parmesan cheese, and black pepper. It's rich and flavorful.",
          recommendedPlaces: ["Trattoria Da Danilo", "Hostaria Romana"],
        },
        Gelato: {
          ingredients: [
            "Milk",
            "Sugar",
            "Flavorings (e.g., fruits, chocolate, nuts)",
          ],
          price: "$5",
          description:
            "Gelato is a popular Italian frozen dessert known for its creamy texture and intense flavors. It's a refreshing treat during hot Roman summers.",
          recommendedPlaces: ["Giolitti", "Fatamorgana"],
        },
      },
      
      activities: {
        "Visit the Vatican Museums": {
          itemsNeeded: ["Vatican Museums Ticket"],
          price: "$20",
          description:
            "Explore the Vatican Museums, which house an extensive collection of art and historical artifacts, including the famous Sistine Chapel.",
          rating: 4.5,
          tips: "Book tickets in advance and allocate sufficient time to fully appreciate the vast museum complex.",
        },
        "Walking Tour of Ancient Rome": {
          itemsNeeded: ["Comfortable Shoes"],
          price: "$15",
          description:
            "Embark on a guided walking tour to discover the ancient ruins of Rome, including the Colosseum, Roman Forum, and Palatine Hill.",
          rating: 4.7,
          tips: "Wear comfortable shoes as there will be a fair amount of walking on uneven surfaces.",
        },
        "Pizza Making Class": {
          itemsNeeded: ["Reservation"],
          price: "$30",
          description:
            "Join a pizza making class to learn the art of crafting authentic Italian pizza from scratch. You'll get hands-on experience and enjoy your creations.",
          rating: 4.6,
          tips: "Choose a reputable cooking school that offers interactive and informative classes.",
        },
      },
    },
    Berlin: {
      localAttractions: {
        "Brandenburg Gate": {
          workingHours: "Open 24 hours",
          price: "Free",
          description:
            "The Brandenburg Gate is a historic landmark and a symbol of Berlin. It once stood as a divide between East and West Berlin but now represents German unity.",
          rating: 4.7,
          tips: "Visit during sunset or at night when the gate is beautifully illuminated.",
          location: "Pariser Platz, 10117 Berlin, Germany",
        },
        "Berlin Wall": {
          workingHours: "Open 24 hours",
          price: "Free",
          description:
            "The Berlin Wall was a barrier that divided Berlin from 1961 to 1989. Today, remnants of the wall serve as a powerful reminder of the city's history.",
          rating: 4.8,
          tips: "Explore the East Side Gallery to see colorful murals painted on the remaining sections of the wall.",
          location: "Various locations in Berlin",
        },
        "Museum Island": {
          workingHours: "10:00 AM - 6:00 PM",
          price: "$15",
          description:
            "Museum Island is a UNESCO World Heritage site that houses several world-class museums, including the Pergamon Museum and the Neues Museum.",
          rating: 4.6,
          tips: "Consider purchasing a combination ticket to visit multiple museums on the island.",
          location: "Museum Island, 10178 Berlin, Germany",
        },
      },
      localCuisine: {
        Currywurst: {
          ingredients: ["Pork sausage", "Curry ketchup", "Curry powder"],
          price: "$5",
          description:
            "Currywurst is a popular Berlin street food dish. It consists of a grilled pork sausage topped with a tangy curry ketchup sauce and sprinkled with curry powder.",
          recommendedPlaces: ["Curry 36", "Konnopke's Imbiss"],
        },
        "Döner Kebab": {
          ingredients: [
            "Pita bread",
            "Grilled meat",
            "Lettuce",
            "Tomatoes",
            "Onions",
            "Garlic sauce",
          ],
          price: "$7",
          description:
            "Döner kebab is a Turkish-inspired fast food dish widely popular in Berlin. It features grilled meat (typically lamb or chicken) wrapped in pita bread with fresh vegetables and flavorful sauces.",
          recommendedPlaces: ["Mustafa's Gemüse Kebap", "Imren Grill"],
        },
        "Berliner Pfannkuchen": {
          ingredients: ["Sweet dough", "Jam or cream filling", "Powdered sugar"],
          price: "$3",
          description:
            "Berliner Pfannkuchen, also known as Berliner or Krapfen, is a traditional German pastry. It's a sweet doughnut-like treat filled with jam or cream and dusted with powdered sugar.",
          recommendedPlaces: ["Bäckerei Siebert", "Bäckerei W. Balzer"],
        },
      },
      
      activities: {
        "Tour of Historical Sites": {
          itemsNeeded: ["Comfortable shoes", "Camera"],
          price: "Free",
          description:
            "Embark on a self-guided walking tour to explore the historical sites of Berlin, including the Brandenburg Gate, Checkpoint Charlie, and the Berlin Wall Memorial.",
          rating: 4.5,
          tips: "Download a map or use a guidebook to navigate the city's significant landmarks.",
        },
        "Visit Art Galleries": {
          itemsNeeded: ["Museum ticket"],
          price: "$10",
          description:
            "Berlin is known for its vibrant art scene. Visit art galleries, such as the Hamburger Bahnhof or the KW Institute for Contemporary Art, to discover cutting-edge works.",
          rating: 4.7,
          tips: "Check for special exhibitions or events happening during your visit.",
        },
        "Cycling in Tiergarten": {
          itemsNeeded: ["Bicycle rental", "Helmet"],
          price: "$15",
          description:
            "Rent a bicycle and explore the picturesque Tiergarten park on two wheels. Cycling is a popular and enjoyable way to experience the park's natural beauty.",
          rating: 4.6,
          tips: "Follow designated cycling paths and be mindful of pedestrians.",
        },
      },
    },
    Prague: {
      localAttractions: {
        "Prague Castle": {
          workingHours: "9:00 AM - 5:00 PM",
          price: "$12",
          description:
            "Prague Castle is a historic fortress complex that dates back to the 9th century. It's the largest ancient castle in the world and houses various palaces, churches, and gardens.",
          rating: 4.8,
          tips: "Visit St. Vitus Cathedral and don't miss the changing of the guard ceremony.",
          location: "119 08 Prague 1, Czechia",
        },
        "Charles Bridge": {
          workingHours: "Open 24 hours",
          price: "Free",
          description:
            "Charles Bridge is a famous medieval bridge that spans the Vltava River. It's adorned with statues and offers breathtaking views of Prague's skyline.",
          rating: 4.7,
          tips: "Visit early in the morning or late at night to avoid crowds.",
          location: "Karlův most, 110 00 Prague 1, Czechia",
        },
        "Old Town Square": {
          workingHours: "Open 24 hours",
          price: "Free",
          description:
            "Old Town Square is the heart of Prague's historic center. It features stunning architecture, including the Astronomical Clock and the Church of Our Lady before Týn.",
          rating: 4.6,
          tips: "Enjoy the vibrant atmosphere and street performances. Don't forget to try a trdelník from a local vendor.",
          location: "Staroměstské nám., 110 00 Prague 1, Czechia",
        },
      },
      localCuisine: {
        Trdelník: {
          ingredients: ["Dough", "Sugar", "Cinnamon"],
          price: "$4",
          description:
            "Trdelník is a traditional Czech sweet pastry. It's made from rolled dough, coated with sugar and cinnamon, and grilled until golden and crispy.",
          recommendedPlaces: ["Good Food Coffee and Bakery", "Trdelník-land"],
        },
        Goulash: {
          ingredients: ["Beef", "Onions", "Paprika", "Caraway seeds"],
          price: "$8",
          description:
            "Goulash is a hearty Czech stew made with tender beef, onions, and a flavorful combination of paprika and caraway seeds. It's typically served with bread or dumplings.",
          recommendedPlaces: ["Lokál", "Café Imperial"],
        },
        Svíčková: {
          ingredients: [
            "Beef sirloin",
            "Root vegetables",
            "Cream",
            "Lemon",
            "Cranberries",
          ],
          price: "$10",
          description:
            "Svíčková is a traditional Czech dish consisting of marinated beef sirloin served with a creamy sauce made from root vegetables, cream, lemon, and garnished with cranberries.",
          recommendedPlaces: ["U Vejvodů", "Restaurace Mlejnice"],
        },
      },
      
      activities: {
        "River Cruise": {
          itemsNeeded: ["Boat ticket"],
          price: "$20",
          description:
            "Take a scenic river cruise along the Vltava River and admire the stunning views of Prague's landmarks, including Charles Bridge and Prague Castle.",
          rating: 4.5,
          tips: "Opt for a dinner cruise to enjoy a delicious meal while cruising along the river.",
        },
        "Visit Astronomical Clock": {
          itemsNeeded: ["Camera"],
          price: "Free",
          description:
            "Visit the famous Astronomical Clock located in the Old Town Square. Witness the hourly show and marvel at the intricate craftsmanship of this medieval timepiece.",
          rating: 4.6,
          tips: "Arrive a few minutes before the hour to secure a good spot to watch the clock's performance.",
        },
        "Explore Prague Castle": {
          itemsNeeded: ["Comfortable shoes", "Entrance ticket"],
          price: "$15",
          description:
            "Explore the grandeur of Prague Castle, a complex of historical buildings that includes St. Vitus Cathedral, the Royal Palace, and various museums and gardens.",
          rating: 4.7,
          tips: "Consider taking a guided tour to fully appreciate the castle's rich history and architectural wonders.",
        },
      },
    },
    Warsaw: {
      localAttractions: {
        "Royal Castle": {
          workingHours: "10:00 AM - 6:00 PM",
          price: "$8",
          description:
            "The Royal Castle is a historic residence of Polish monarchs and a symbol of Warsaw's rich history. It houses impressive architecture, works of art, and historical artifacts.",
          rating: 4.6,
          tips: "Join a guided tour to learn more about the castle's history and significance.",
          location: "Plac Zamkowy 4, 00-277 Warsaw, Poland",
        },
        "Wilanów Palace": {
          workingHours: "9:30 AM - 5:00 PM",
          price: "$10",
          description:
            "Wilanów Palace is a magnificent Baroque palace and a testament to Poland's royal heritage. It features beautifully landscaped gardens and a rich collection of art and furniture.",
          rating: 4.7,
          tips: "Explore the stunning gardens and don't miss the chance to visit the palace's interior.",
          location: "St. Kostki Potockiego 10/16, 02-958 Warsaw, Poland",
        },
        "Łazienki Park": {
          workingHours: "6:00 AM - 9:00 PM",
          price: "Free",
          description:
            "Łazienki Park is a sprawling park and palace complex, often referred to as the Royal Baths Park. It's known for its tranquil atmosphere, lush gardens, and iconic landmarks.",
          rating: 4.8,
          tips: "Visit the iconic Palace on the Isle and enjoy open-air concerts during the summer months.",
          location: "Agrykola 1, 00-460 Warsaw, Poland",
        },
      },
      localCuisine: {
        Pierogi: {
          ingredients: ["Dough", "Meat or vegetable filling", "Onions"],
          price: "$6",
          description:
            "Pierogi are traditional Polish dumplings made from dough and filled with various ingredients, such as meat, potatoes, cheese, or vegetables. They are typically boiled or fried and served with onions.",
          recommendedPlaces: ["Zapiecek", "Pierogarnia Mandu"],
        },
        Bigos: {
          ingredients: ["Sauerkraut", "Cabbage", "Meat", "Sausage"],
          price: "$8",
          description:
            "Bigos, also known as hunter's stew, is a traditional Polish dish made with sauerkraut, cabbage, various meats, and sausage. It's a hearty and flavorful dish often served with bread.",
          recommendedPlaces: ["U Babci Maliny", "Restauracja Polska Rozana"],
        },
        Zapiekanka: {
          ingredients: ["Baguette", "Mushrooms", "Cheese", "Ketchup"],
          price: "$5",
          description:
            "Zapiekanka is a popular Polish street food snack. It's an open-faced baguette topped with sautéed mushrooms, cheese, and ketchup. It's a tasty and affordable option.",
          recommendedPlaces: ["Plac Zabaw Zapiekanki", "Endzior"],
        },
      },
      
      activities: {
        "Explore Old Town": {
          itemsNeeded: ["Comfortable shoes", "Camera"],
          price: "Free",
          description:
            "Explore Warsaw's charming Old Town, a UNESCO World Heritage site. Wander through its cobblestone streets, admire the colorful buildings, and visit historical landmarks like St. John's Cathedral.",
          rating: 4.7,
          tips: "Join a guided walking tour to learn about the area's history and architecture.",
        },
        "Visit Museums": {
          itemsNeeded: ["Museum ticket"],
          price: "$12",
          description:
            "Discover Warsaw's rich cultural heritage by visiting its museums. Options include the Warsaw Uprising Museum, POLIN Museum of the History of Polish Jews, and the National Museum.",
          rating: 4.6,
          tips: "Check for any temporary exhibitions or special events happening at the museums.",
        },
        "Walking Tour of Historic Sites": {
          itemsNeeded: ["Comfortable shoes", "Guidebook"],
          price: "$15",
          description:
            "Embark on a walking tour of Warsaw's historic sites, including the Royal Castle, Warsaw Barbican, and the Tomb of the Unknown Soldier. Learn about the city's tumultuous past and architectural gems.",
          rating: 4.5,
          tips: "Choose a knowledgeable guide or use a reliable guidebook to enhance your experience.",
        },
      },
    },
  };
  
  module.exports = {
    database,
  };
  