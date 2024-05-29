const products = [
  {
    name: "A Dancing Lady",
    image: "/images/2.jpg",
    description:
      "The figurine is a naturalistic free-standing , sculpture of a woman dancing in her evening dress.A sculpture of a dancing lady showcases a poised female figure in dynamic motion. Crafted with meticulous detail, it captures her graceful posture, often with one leg raised or in mid-twirl, exuding a sense of rhythm. The sculpture's attire, whether flowing gown or contemporary dance costume, adds to its charm. The lady's serene, joyful facial expression reflects the passion of dance. Typically fashioned from marble, bronze, or other materials, it's a timeless celebration of movement and elegance.",
    category: "Art & Sculpture",
    price: 6999,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Vintage Goblet",
    image: "/images/3.jpg",
    description:
      "This vintage ceremonial chalice featuring beautiful engraving.In medieval London, the chalice was a significant part of ecclesiastical life. It functioned to serve or hold consecrated wine in a church or chapel for the Christian tradition of communion, during which it was believed that the Eucharist and wine became the body and blood of Christ. Pewter goblets are an ideal gift for any celebration. What better way to celebrate than to rise a goblet to say thanks and then have a gift to be retained as a long lasting memory and a potential heirloom for future generations.",
    category: "Art & Sculpture",
    price: 4999,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Imperial Horse Sculpture",
    image: "/images/4.jpg",
    description:
      "The imperial horse sculpture is a majestic depiction of a noble steed, sculpted with great precision. This artwork exudes power and grace, portraying the horse in a regal stance, often with arched neck and flowing mane. Crafted from materials like bronze or stone, its lifelike details, such as muscular physique and expressive eyes, showcase the artist's skill. The imperial horse sculpture symbolizes strength, beauty, and a testament to the bond between humans and these magnificent animals.",
    category: "Art & Sculpture",
    price: 7499,
    countInStock: 11,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Blue & White Hand Painted Ceramic Vase",
    image: "/images/1.jpg",
    description:
      "Decorative accents are perfect for filling in the gaps on shelves, tables, and walls, while also anchoring the space and drawing the eye to a whimsical pattern, playful pop of color, or an imaginative abstraction of art. Take this decorative urn, for example, it showcases a curved body, with a blue and white design, and is perfect to keep near the fireplace mantel, on the dining table as table decor, on a deep window sill, or as a bookcase and mantle accent. Crafted from ceramic, this piece includes a lid. To clean, we recommend wiping with a dry cloth.",
    category: "Ceramics & Pottery",
    price: 20000,
    countInStock: 7,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Vintage Kashmiri Art Bowl",
    image: "/images/5.jpg",
    description:
      "With antiques like this Vintage Kashmiri art bowl with fine utensil work used, your home always has a unique style and story to tell. Furnishing the house or business spaces with stunning antiques like the Vintage Kashmiri art bowl with fine utensil work used brings in a statement item that sparks attention and conversation around you.",
    category: "Ceramics & Pottery",
    price: 2999,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "1 Rupee 1947 King George VI, British India Rare Coin",
    image: "/images/6.jpg",
    description:
      "The last coin issued by British India before India's independence on August 15, 1947. The obverse side of the coin has a portrait of King George VI facing left, with the inscription 'GEORGE VI KING EMPEROR' surrounding the image. The reverse side of the coin features the denomination '1 Rupee' written in both English and Hindi, surrounded by a wreath and the year of minting '1947'. The coin was minted in Nickel and weighed approximately 11.8 grams. The coin is considered a collectible item due to its historical significance as the last British Indian coin and the end of British colonial rule in India.",
    category: "Coins & Currency",
    price: 1500,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Ancient Mesoamerican Aztec Maya Calendar Antique Coin",
    image: "/images/7.jpg",
    description:
      "Ancient Mayan, Inca, Aztec, Pre-Columbian Calendar Coin. Now you can calculate when the End of the World will arrive. Mayan Calendar Coin is Double Sided with same Calendar on both sides. This item is a Ancient Mystery. It is an Artists Rendering created from various photographs from books and Museums.",
    category: "Coins & Currency",
    price: 5999,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Multi-Colored Resin Antique Telephone Tabletop Clock",
    image: "/images/8.jpg",
    description:
      "This charming, handcrafted, resin decorative rustic telephone clock accent adds a unique and elegant touch to your home tabletop counter or desk at work. The stunning vintage look and artistic finishing will have you staring in awe at every glance.",
    category: "Antique Instruments",
    price: 1299,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Antique Vintage Old Silver Design Gramophone Player",
    image: "/images/9.jpg",
    description:
      "An antique, vintage, old silver gramophone player exudes nostalgic charm. This classic device, constructed with ornate silver design, evokes the elegance of a bygone era. Its iconic horn speaker and intricate silverwork create a stunning visual centerpiece. With a rich history, it symbolizes the early days of recorded music, offering a glimpse into the past. This vintage gramophone player is a timeless collector's item, celebrating the enduring allure of early 20th-century audio technology.",
    category: "Antique Instruments",
    price: 4599,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Japanese Bioscope",
    image: "/images/12.jpg",
    description:
      "This Japanese bioscope is an exciting collectible in working order. A compatible film strip can be cranked into the bioscope while the show is viewed from the sides, through the three contrasting viewers in red. In its time, the bioscope would have been carried to fairs and street shows for children to watch film strips. Radiating its rich nostalgic history, the bioscope fills the room in memories from the past.",
    category: "Antique Instruments",
    price: 165000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "The Sportsman's Book for India; 1904, First Ed.",
    image: "/images/10.jpg",
    description:
      "First edition of “The Sportsman's Book for India” edited by F.G., Aflalo. Published by Horace Marshall & Son, London, in 1904. Contains fine folding colour map as frontispiece, 41 b/w photo plates, 3 other b/w maps. Part 1 - Shooting. Part II - Fishing. Part III - Sports and Games with Horses. Part IV - Some Minor Sports and Games. With contributions by noted hunters including Gerard, Kinloch, Bairnsfather, Taylor, Arbuthnot and more. “Cheetah Hunting to Pig-Sticking, Rhinoceros Shooting to Polo, it's all here, a fascinating insight into relaxation in The Raj!.”",
    category: "Rare Books",
    price: 20000,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bishop Heber's Narrative, Vol. 1 and 2; First Ed.",
    image: "/images/11.jpg",
    description:
      "First edition in two volumes of the “Narrative of a Journey through the upper provinces of India, from Calcutta to Bombay, 1824-1825.” (With notes upon Ceylon). An account of a journey to Madras and the southern provinces, 1826, and letters written in India by Right Rev. Reginald Heber, Lord Bishop of Calcutta. Published posthumously in London by John Murray, in 1828. Contains 10 steel engraved plates, 25 wood engravings, and an engraved map with coloured route. Heber details his journey from Calcutta to Bombay between 1824 and 1825, shortly after being consecrated as Bishop of Calcutta. Also present are his remarks upon Ceylon, and an account of a shorter journey to Madras and the Southern provinces of India in 1826, alongside letters written in this period. Heber's main interest is in descriptions of the people and their culture, and in his observation of the great natural beauty of India's rivers and mountains.",
    category: "Rare Books",
    price: 145000,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
