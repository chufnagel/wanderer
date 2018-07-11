exports.seed = (knex, Promise) => {
  return Promise.join(
    knex("users", "blogs", "tags", "blogs_tags", "media", "media_tags").del(),
    knex("users").insert([
      {
        user_id: 1,
        username: "BROICHI",
        password: "gangbusters",
        name: "Broichi Slope-Roll",
        email: "s.koichi@gmail.com",
        bio: "I am a placeholder bio"
      },
      {
        user_id: 2,
        username: "McMandy",
        password: "mandymandy",
        name: "makster",
        email: "McMandy@gmail.com",
        bio: "I am so awsome"
      },
      {
        user_id: 3,
        username: "Charlie",
        password: "Sakafunagel",
        name: "knowsitall",
        email: "huffy@gmail.com",
        bio: "Former data scientist"
      },
      {
        user_id: 4,
        username: "Lina",
        password: "Luna",
        name: "Lina Luna Lei",
        email: "sarusaru@gmail.com",
        bio: "I love anime, dos toros, pokemon"
      },
      {
        user_id: 5,
        username: "MJDawg",
        password: "moseph",
        name: "Moseph Jartin",
        email: "mjdawg@gmail.com",
        bio: "I love to code in my sleep too."
      },
      {
        user_id: 6,
        username: "HanyHulk",
        password: "woktowalk",
        name: "Hany Hulk",
        email: "hanyhulk@gmail.com",
        bio: "I go to Wok To Walk for breakfast, lunch, and dinner :)"
      },
      {
        user_id: 7,
        username: "HawaiiMike",
        password: "iluv2surf",
        name: "Michaela",
        email: "hawaiimike@gmail.com",
        bio:
          "My hobbies include surfing, playing the ukelele, and watching videos of girls."
      },
      {
        user_id: 8,
        username: "SingerJohn",
        password: "johnjohn",
        name: "John Cynn",
        email: "johncynn@gmail.com",
        bio: "I love to sing!! Ask me to sing A Whole New World!"
      },
      {
        user_id: 9,
        username: "NickOfBoylanSoda",
        password: "espanol",
        name: "Nick Boylan-Soda",
        email: "nickb@gmail.com",
        bio:
          "I lived in Argentina for a year and would love to go back there someday!"
      }
    ]),
    knex("blogs").insert([
      {
        blog_id: 1,
        title: "WELCOME TO NIHON",
        content:
          "I LOVE JAPAN! I love to talk about and share anything Japan-related with my friends! I have introduced many Japanese food places around school to my classmates and gotten them hooked on Japanese food! Especially Nick Rogers...red bean mochi fanatic!",
        user_id: 1
      },
      {
        blog_id: 2,
        title: "When to Travel to Japan",
        content:
          "If you have a flexible travel schedule, aim for traveling to Japan in the spring or autumn! \n  Spring is one of the best times of year to be in Japan. The temperatures are warm but not hot, there's not too much rain, and March-April brings the justly famous cherry blossoms (sakura) and is a time of revelry and festivals.\n  Summer starts with a dreary rainy season (known as tsuyu or baiu) in June and turns into a steambath in July-August, with extreme humidity and the temperature heading as high as 35°C. Avoid, or head to northern Hokkaido or the mountains of Chubu and Tohoku to escape. The upside, though, is a slew of fireworks shows (hanabi taikai) and festivals big and small.\n  Autumn, starting in September, is also an excellent time to be in Japan. Temperatures and humidity become more tolerable, fair days are common and fall colors can be just as impressive as cherry blossoms. However, in early autumn typhoons often hit the southern parts of Japan and bring everything to a standstill.\n  Winter is a good time to go skiing or hot-spring hopping, but as some buildings lack central heating, it's often miserably cold indoors. Heading south to Okinawa provides some relief. There is usually heavy snow in Hokkaido and northeast Japan due to the cold wind blasts from Siberia. Note that the Pacific coast of Honshu (where most major cities are located) has milder winters than the Sea of Japan coast: it may be snowing in Kyoto while it is cloudy or sprinkling rain in Osaka, an hour away.",
        user_id: 2
      },
      {
        blog_id: 3,
        title: "Japan's Awesome Transport System!",
        content:
          "Japan has one of the world's best transport systems, and getting around is usually a breeze, with the train being the favored for most locations. Although travelling around Japan is expensive, there are a variety of passes for foreigner visits that can make travel more affordable. \nFor sorting through transport schedules and fares, Hitachi's Hyperdia is an invaluable companion; it computes directions including all the various connecting train options. While most useful for advanced planning of longer routes, it is also quite useful for navigating the complex networks of the major cities. You’ll also tend to get better results with this tool than ticket officers will find for you if you simply rely on them to choose your route.  \nGoogle Maps is also great for navigating, but not all transit systems have schedules in the app.  \nJorudan is a similar service, but with fewer options for exploring alternate routes. The paper version of these is the Daijikokuhyō, a phonebook-sized tome available for browsing in every train station and most hotels, but it's a little challenging to use as the content is entirely in microscopic Japanese. A lighter version that just includes limited express, sleeper and bullet trains (shinkansen) is available from the Japan National Tourist Organization's overseas offices. English timetables are available on the websites of JR Hokkaido, JR East, JR Central and JR Kyushu. Timetables for the Tokaido, Sanyo and Kyushu shinkansen can also be viewed in English at Macoto's Tabi-o-ji timetable site. Both Hyperdia and Tabi-o-ji offer schedule searches that exclude Nozomi and Mizuho services, which will benefit holders of the Japan Rail Pass.  \nWhile the search tools find the best connections, having the timetable for an infrequently served station handy can make for a pleasant trip when going to more scenic destinations. Also note that as a tourist unfamiliar with the stations, the best connection might be tough to make. Especially for larger stations, figuring out where you are and where you need to go with luggage can take longer than the best connection time. If you have the JR Pass, there is no need to run for your train, you can always take the next one. You should also note that, in smaller stations, there is usually a large sign or poster with the timetable near the gate which you can quickly take a photo of with your phone or digital camera for easy reference later.   \nJapan is well known for the punctuality of its transportation system so you can plan your itineraries with ease! :)",
        user_id: 3
      },
      {
        blog_id: 4,
        title: "Language in Japan",
        content:
          "The National language of Japan is Japanese, although Japan has no Official Language. Most Japanese under 40 have studied English for at least 6 years, but the instruction tends to focus on formal grammar and writing rather than actual conversation. As a result, outside of major tourist attractions and establishments that cater specifically to foreigners, it is rare to find people who are conversant in English. Reading and writing tends to come much better though, and many younger Japanese are able to understand a great deal of written English despite not being able to speak it. English and Chinese are often spoken by a some clerks in establishments such as major stores.  \nIf lost, it can be practical to write out a question on paper in simple words and give it to someone young, preferably high school or college students, who will likely be able to point you in the right direction. It can also be helpful to carry a hotel business card or matchbook with you, to show a taxi driver or someone if you lose your way. Take comfort in the fact that many Japanese will go to extraordinary lengths to understand what you want and to help you, and try to pick up at least basic greetings and thank yous to put people at ease. Google Translate isn't perfect, but it can definitely help you if you are stuck in a situation where there is not enough to communicate. The app isn't great at reading text using the camera, but typing in a simple message can work.  \nJapanese is a language with several distinct dialects, although standard Japanese, which is based on the Tokyo dialect, is taught in schools and known by most people throughout the country. The slang-heavy dialect of the Kansai region is particularly famous in Japanese pop culture. On the southern islands of Okinawa, many dialects of the closely related Ryukyuan languages are spoken, mostly by the elderly, while in northern Hokkaido a rare few still speak Ainu.  \nJapanese is written using a convoluted mix of three different scripts: kanji or Chinese characters, together with native hiragana and katakana syllabaries, which were in fact derived from Chinese characters more than one thousand years ago. However, hiragana and katakana do not carry the meaning of the original Chinese characters they were derived from and are simply phonetic characters. There are thousands of kanji in everyday use and even the Japanese spend years learning them, but the kana have only 50 syllables each and can be learned with a reasonable amount of effort. Of the two, katakana are probably more useful for the visitor as they are used to write words of foreign origin other than Chinese, and thus can be used to figure out words like basu (bus), kamera (camera) or konpyūtā (computer). However, some words like terebi (television), depāto (department store), wāpuro (word processor) and sūpā (supermarket) may be harder to figure out. Knowing Chinese will also be a great head start for tackling kanji, but not all words mean what they seem so pay attention!",
        user_id: 4
      }
    ]),
    knex("tags").insert([
      {
        tag_id: 1,
        tag_name: "Tokyo"
      },
      {
        tag_id: 2,
        tag_name: "Japan"
      }
    ]),
    knex("blogs_tags").insert([
      { blog_tags_id: 1, tag_id: 1, blog_id: 1 },
      { blog_tags_id: 2, tag_id: 2, blog_id: 1 }
    ]),
    knex("countries").insert([
      { country_id: 1, country: "Afghanistan" },
      { country_id: 2, country: "Albania" },
      { country_id: 3, country: "Algeria" },
      { country_id: 4, country: "Andorra" },
      { country_id: 5, country: "Angola" },
      { country_id: 6, country: "Anguilla" },
      { country_id: 7, country: "Antigua & Barbuda" },
      { country_id: 8, country: "Argentina" },
      { country_id: 9, country: "Armenia" },
      { country_id: 10, country: "Aruba" },
      { country_id: 11, country: "Australia" },
      { country_id: 12, country: "Austria" },
      { country_id: 13, country: "Azerbaijan" },
      { country_id: 14, country: "Bahamas" },
      { country_id: 15, country: "Bahrain" },
      { country_id: 16, country: "Bangladesh" },
      { country_id: 17, country: "Barbados" },
      { country_id: 18, country: "Belarus" },
      { country_id: 19, country: "Belgium" },
      { country_id: 20, country: "Belize" },
      { country_id: 21, country: "Benin" },
      { country_id: 22, country: "Bermuda" },
      { country_id: 23, country: "Bhutan" },
      { country_id: 24, country: "Bolivia" },
      { country_id: 25, country: "Bosnia & Herzegovina" },
      { country_id: 26, country: "Botswana" },
      { country_id: 27, country: "Brazil" },
      { country_id: 28, country: "British Virgin Islands" },
      { country_id: 29, country: "Brunei" },
      { country_id: 30, country: "Bulgaria" },
      { country_id: 31, country: "Burkina Faso" },
      { country_id: 32, country: "Burundi" },
      { country_id: 33, country: "Cambodia" },
      { country_id: 34, country: "Cameroon" },
      { country_id: 35, country: "Canada" },
      { country_id: 36, country: "Cape Verde" },
      { country_id: 37, country: "Cayman Islands" },
      { country_id: 38, country: "Chad" },
      { country_id: 39, country: "Chile" },
      { country_id: 40, country: "China" },
      { country_id: 41, country: "Colombia" },
      { country_id: 42, country: "Congo" },
      { country_id: 43, country: "Cook Islands" },
      { country_id: 44, country: "Costa Rica" },
      { country_id: 45, country: "Cote D Ivoire" },
      { country_id: 46, country: "Croatia" },
      { country_id: 47, country: "Cruise Ship" },
      { country_id: 48, country: "Cuba" },
      { country_id: 49, country: "Cyprus" },
      { country_id: 50, country: "Czech Republic" },
      { country_id: 51, country: "Denmark" },
      { country_id: 52, country: "Djibouti" },
      { country_id: 53, country: "Dominica" },
      { country_id: 54, country: "Dominican Republic" },
      { country_id: 55, country: "Ecuador" },
      { country_id: 56, country: "Egypt" },
      { country_id: 57, country: "El Salvador" },
      { country_id: 58, country: "Equatorial Guinea" },
      { country_id: 59, country: "Estonia" },
      { country_id: 60, country: "Ethiopia" },
      { country_id: 61, country: "Falkland Islands" },
      { country_id: 62, country: "Faroe Islands" },
      { country_id: 63, country: "Fiji" },
      { country_id: 64, country: "Finland" },
      { country_id: 65, country: "France" },
      { country_id: 66, country: "French Polynesia" },
      { country_id: 67, country: "French West Indies" },
      { country_id: 68, country: "Gabon" },
      { country_id: 69, country: "Gambia" },
      { country_id: 70, country: "Georgia" },
      { country_id: 71, country: "Germany" },
      { country_id: 72, country: "Ghana" },
      { country_id: 73, country: "Gibraltar" },
      { country_id: 74, country: "Greece" },
      { country_id: 75, country: "Greenland" },
      { country_id: 76, country: "Grenada" },
      { country_id: 77, country: "Guam" },
      { country_id: 78, country: "Guatemala" },
      { country_id: 79, country: "Guernsey" },
      { country_id: 80, country: "Guinea" },
      { country_id: 81, country: "Guinea Bissau" },
      { country_id: 82, country: "Guyana" },
      { country_id: 83, country: "Haiti" },
      { country_id: 84, country: "Honduras" },
      { country_id: 85, country: "Hong Kong" },
      { country_id: 86, country: "Hungary" },
      { country_id: 87, country: "Iceland" },
      { country_id: 88, country: "India" },
      { country_id: 89, country: "Indonesia" },
      { country_id: 90, country: "Iran" },
      { country_id: 91, country: "Iraq" },
      { country_id: 92, country: "Ireland" },
      { country_id: 93, country: "Isle of Man" },
      { country_id: 94, country: "Israel" },
      { country_id: 95, country: "Italy" },
      { country_id: 96, country: "Jamaica" },
      { country_id: 97, country: "Japan" },
      { country_id: 98, country: "Jersey" },
      { country_id: 99, country: "Jordan" },
      { country_id: 100, country: "Kazakhstan" },
      { country_id: 101, country: "Kenya" },
      { country_id: 102, country: "Kuwait" },
      { country_id: 103, country: "Kyrgyz Republic" },
      { country_id: 104, country: "Laos" },
      { country_id: 105, country: "Latvia" },
      { country_id: 106, country: "Lebanon" },
      { country_id: 107, country: "Lesotho" },
      { country_id: 108, country: "Liberia" },
      { country_id: 109, country: "Libya" },
      { country_id: 110, country: "Liechtenstein" },
      { country_id: 111, country: "Lithuania" },
      { country_id: 112, country: "Luxembourg" },
      { country_id: 113, country: "Macau" },
      { country_id: 114, country: "Macedonia" },
      { country_id: 115, country: "Madagascar" },
      { country_id: 116, country: "Malawi" },
      { country_id: 117, country: "Malaysia" },
      { country_id: 118, country: "Maldives" },
      { country_id: 119, country: "Mali" },
      { country_id: 120, country: "Malta" },
      { country_id: 121, country: "Mauritania" },
      { country_id: 122, country: "Mauritius" },
      { country_id: 123, country: "Mexico" },
      { country_id: 124, country: "Moldova" },
      { country_id: 125, country: "Monaco" },
      { country_id: 126, country: "Mongolia" },
      { country_id: 127, country: "Montenegro" },
      { country_id: 128, country: "Montserrat" },
      { country_id: 129, country: "Morocco" },
      { country_id: 130, country: "Mozambique" },
      { country_id: 131, country: "Namibia" },
      { country_id: 132, country: "Nepal" },
      { country_id: 133, country: "Netherlands" },
      { country_id: 134, country: "Netherlands Antilles" },
      { country_id: 135, country: "New Caledonia" },
      { country_id: 136, country: "New Zealand" },
      { country_id: 137, country: "Nicaragua" },
      { country_id: 138, country: "Niger" },
      { country_id: 139, country: "Nigeria" },
      { country_id: 140, country: "Norway" },
      { country_id: 141, country: "Oman" },
      { country_id: 142, country: "Pakistan" },
      { country_id: 143, country: "Palestine" },
      { country_id: 144, country: "Panama" },
      { country_id: 145, country: "Papua New Guinea" },
      { country_id: 146, country: "Paraguay" },
      { country_id: 147, country: "Peru" },
      { country_id: 148, country: "Philippines" },
      { country_id: 149, country: "Poland" },
      { country_id: 150, country: "Portugal" },
      { country_id: 151, country: "Puerto Rico" },
      { country_id: 152, country: "Qatar" },
      { country_id: 153, country: "Reunion" },
      { country_id: 154, country: "Romania" },
      { country_id: 155, country: "Russia" },
      { country_id: 156, country: "Rwanda" },
      { country_id: 157, country: "Saint Pierre & Miquelon" },
      { country_id: 158, country: "Samoa" },
      { country_id: 159, country: "San Marino" },
      { country_id: 160, country: "Satellite" },
      { country_id: 161, country: "Saudi Arabia" },
      { country_id: 162, country: "Senegal" },
      { country_id: 163, country: "Serbia" },
      { country_id: 164, country: "Seychelles" },
      { country_id: 165, country: "Sierra Leone" },
      { country_id: 166, country: "Singapore" },
      { country_id: 167, country: "Slovakia" },
      { country_id: 168, country: "Slovenia" },
      { country_id: 169, country: "South Africa" },
      { country_id: 170, country: "South Korea" },
      { country_id: 171, country: "Spain" },
      { country_id: 172, country: "Sri Lanka" },
      { country_id: 173, country: "St Kitts & Nevis" },
      { country_id: 174, country: "St Lucia" },
      { country_id: 175, country: "St Vincent" },
      { country_id: 176, country: "St. Lucia" },
      { country_id: 177, country: "Sudan" },
      { country_id: 178, country: "Suriname" },
      { country_id: 179, country: "Swaziland" },
      { country_id: 180, country: "Sweden" },
      { country_id: 181, country: "Switzerland" },
      { country_id: 182, country: "Syria" },
      { country_id: 183, country: "Taiwan" },
      { country_id: 184, country: "Tajikistan" },
      { country_id: 185, country: "Tanzania" },
      { country_id: 186, country: "Thailand" },
      { country_id: 187, country: "Timor L'Este" },
      { country_id: 188, country: "Togo" },
      { country_id: 189, country: "Tonga" },
      { country_id: 190, country: "Trinidad & Tobago" },
      { country_id: 191, country: "Tunisia" },
      { country_id: 192, country: "Turkey" },
      { country_id: 193, country: "Turkmenistan" },
      { country_id: 194, country: "Turks & Caicos" },
      { country_id: 195, country: "Uganda" },
      { country_id: 196, country: "Ukraine" },
      { country_id: 197, country: "United Arab Emirates" },
      { country_id: 198, country: "United Kingdom" },
      { country_id: 199, country: "United States" },
      { country_id: 200, country: "United States Minor Outlying Islands" },
      { country_id: 201, country: "Uruguay" },
      { country_id: 202, country: "Uzbekistan" },
      { country_id: 203, country: "Venezuela" },
      { country_id: 204, country: "Vietnam" },
      { country_id: 205, country: "Virgin Islands (US)" },
      { country_id: 206, country: "Yemen" },
      { country_id: 207, country: "Zambia" },
      { country_id: 208, country: "Zimbabwe" }
    ]),
    knex("favorite_destinations").insert([
      { favorite_destination_id: 1, destination_id: 1, user_id: 1 },
      { favorite_destination_id: 2, destination_id: 2, user_id: 1 },
      { favorite_destination_id: 3, destination_id: 3, user_id: 2 },
      { favorite_destination_id: 4, destination_id: 4, user_id: 2 }
    ]),
    knex("visited_destinations").insert([
      { visited_destination_id: 1, destination_id: 5, user_id: 1 },
      { visited_destination_id: 2, destination_id: 6, user_id: 1 },
      { visited_destination_id: 3, destination_id: 7, user_id: 2 },
      { visited_destination_id: 4, destination_id: 8, user_id: 2 }
    ]),
    knex("user_friends").insert([
      { user_friend_id: 1, friend_id: 2, user_id: 1 },
      { user_friend_id: 2, friend_id: 3, user_id: 1 },
      { user_friend_id: 3, friend_id: 4, user_id: 1 }
    ]),
    knex("media").insert([
      {
        user_id: 1,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/demand-response-Japan.jpg"
      },
      {
        user_id: 1,
        country_id: 97,
        image_url: "https://s3.amazonaws.com/griffyndor/download.jpeg"
      },
      {
        user_id: 1,
        country_id: 97,
        image_url: "https://s3.amazonaws.com/griffyndor/japan_rail_pass_03.jpg"
      },
      {
        user_id: 1,
        country_id: 97,
        image_url: "https://s3.amazonaws.com/griffyndor/images.jpeg"
      },
      {
        user_id: 2,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Japan-McMandy/Doraemon-.jpg"
      },
      {
        user_id: 2,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Japan-McMandy/girls_in_japan.jpg"
      },
      {
        user_id: 2,
        country_id: 97,
        image_url: "https://s3.amazonaws.com/griffyndor/Japan-McMandy/ramen.jpg"
      },
      {
        user_id: 2,
        country_id: 155,
        image_url: "https://s3.amazonaws.com/griffyndor/Russia/Russia1.jpg"
      },
      {
        user_id: 2,
        country_id: 155,
        image_url: "https://s3.amazonaws.com/griffyndor/Russia/Russia2.jpg"
      },

      {
        user_id: 2,
        country_id: 155,
        image_url: "https://s3.amazonaws.com/griffyndor/Russia/Russia3.jpg"
      },

      {
        user_id: 2,
        country_id: 155,
        image_url: "https://s3.amazonaws.com/griffyndor/Russia/Russia4.jpeg"
      }
    ])
  );
};
