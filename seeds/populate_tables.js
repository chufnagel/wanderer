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
        bio: "I am a placeholder bio",
        idToken: "test-token"
      },
      {
        user_id: 2,
        username: "McMandy",
        password: "mandymandy",
        name: "makster",
        email: "McMandy@gmail.com",
        bio: "I am so awsome",
        idToken: "test-token"
      },
      {
        user_id: 3,
        username: "Charlie",
        password: "Sakafunagel",
        name: "knowsitall",
        email: "huffy@gmail.com",
        bio: "Former data scientist",
        idToken: "test-token"
      },
      {
        user_id: 4,
        username: "Lina",
        password: "Luna",
        name: "Lina Luna Lei",
        email: "sarusaru@gmail.com",
        bio: "I love anime, dos toros, pokemon",
        idToken: "test-token"
      },
      {
        user_id: 5,
        username: "MJDawg",
        password: "moseph",
        name: "Moseph Jartin",
        email: "mjdawg@gmail.com",
        bio: "I love to code in my sleep too.",
        idToken: "test-token"
      },
      {
        user_id: 6,
        username: "HanyHulk",
        password: "woktowalk",
        name: "Hany Hulk",
        email: "hanyhulk@gmail.com",
        bio: "I go to Wok To Walk for breakfast, lunch, and dinner :)",
        idToken: "test-token"
      },
      {
        user_id: 7,
        username: "HawaiiMike",
        password: "iluv2surf",
        name: "Michaela",
        email: "hawaiimike@gmail.com",
        bio:
          "My hobbies include surfing, playing the ukelele, and watching videos of girls.",
        idToken: "test-token"
      },
      {
        user_id: 8,
        username: "SingerJohn",
        password: "johnjohn",
        name: "John Cynn",
        email: "johncynn@gmail.com",
        bio: "I love to sing!! Ask me to sing A Whole New World!",
        idToken: "test-token"
      },
      {
        user_id: 9,
        username: "NickOfBoylanSoda",
        password: "espanol",
        name: "Nick Boylan-Soda",
        email: "nickb@gmail.com",
        bio:
          "I lived in Argentina for a year and would love to go back there someday!",
        idToken: "test-token"
      }
    ]),
    knex("blogs").insert([
      {
        blog_id: 1,
        title: "WELCOME TO NIHON",
        content:
          "I LOVE JAPAN! I love to talk about and share anything Japan-related with my friends! I have introduced many Japanese food places around school to my classmates and gotten them hooked on Japanese food! Especially Nick Rogers...red bean mochi fanatic!",
        user_id: 1,
        country_id: 97
      },
      {
        blog_id: 2,
        title: "When to Travel to Japan",
        content:
          "If you have a flexible travel schedule, aim for traveling to Japan in the spring or autumn! \n  Spring is one of the best times of year to be in Japan. The temperatures are warm but not hot, there's not too much rain, and March-April brings the justly famous cherry blossoms (sakura) and is a time of revelry and festivals.\n  Summer starts with a dreary rainy season (known as tsuyu or baiu) in June and turns into a steambath in July-August, with extreme humidity and the temperature heading as high as 35°C. Avoid, or head to northern Hokkaido or the mountains of Chubu and Tohoku to escape. The upside, though, is a slew of fireworks shows (hanabi taikai) and festivals big and small.\n  Autumn, starting in September, is also an excellent time to be in Japan. Temperatures and humidity become more tolerable, fair days are common and fall colors can be just as impressive as cherry blossoms. However, in early autumn typhoons often hit the southern parts of Japan and bring everything to a standstill.\n  Winter is a good time to go skiing or hot-spring hopping, but as some buildings lack central heating, it's often miserably cold indoors. Heading south to Okinawa provides some relief. There is usually heavy snow in Hokkaido and northeast Japan due to the cold wind blasts from Siberia. Note that the Pacific coast of Honshu (where most major cities are located) has milder winters than the Sea of Japan coast: it may be snowing in Kyoto while it is cloudy or sprinkling rain in Osaka, an hour away.",
        user_id: 1,
        country_id: 97
      },
      {
        blog_id: 3,
        title: "Japan's Awesome Transport System!",
        content:
          "Japan has one of the world's best transport systems, and getting around is usually a breeze, with the train being the favored for most locations. Although travelling around Japan is expensive, there are a variety of passes for foreigner visits that can make travel more affordable. \nFor sorting through transport schedules and fares, Hitachi's Hyperdia is an invaluable companion; it computes directions including all the various connecting train options. While most useful for advanced planning of longer routes, it is also quite useful for navigating the complex networks of the major cities. You’ll also tend to get better results with this tool than ticket officers will find for you if you simply rely on them to choose your route.  \nGoogle Maps is also great for navigating, but not all transit systems have schedules in the app.  \nJorudan is a similar service, but with fewer options for exploring alternate routes. The paper version of these is the Daijikokuhyo, a phonebook-sized tome available for browsing in every train station and most hotels, but it's a little challenging to use as the content is entirely in microscopic Japanese. A lighter version that just includes limited express, sleeper and bullet trains (shinkansen) is available from the Japan National Tourist Organization's overseas offices. English timetables are available on the websites of JR Hokkaido, JR East, JR Central and JR Kyushu. Timetables for the Tokaido, Sanyo and Kyushu shinkansen can also be viewed in English at Macoto's Tabi-o-ji timetable site. Both Hyperdia and Tabi-o-ji offer schedule searches that exclude Nozomi and Mizuho services, which will benefit holders of the Japan Rail Pass.  \nWhile the search tools find the best connections, having the timetable for an infrequently served station handy can make for a pleasant trip when going to more scenic destinations. Also note that as a tourist unfamiliar with the stations, the best connection might be tough to make. Especially for larger stations, figuring out where you are and where you need to go with luggage can take longer than the best connection time. If you have the JR Pass, there is no need to run for your train, you can always take the next one. You should also note that, in smaller stations, there is usually a large sign or poster with the timetable near the gate which you can quickly take a photo of with your phone or digital camera for easy reference later.   \nJapan is well known for the punctuality of its transportation system so you can plan your itineraries with ease! :)",
        user_id: 4,
        country_id: 97
      },
      {
        blog_id: 4,
        title: "Language in Japan",
        content:
          "The National language of Japan is Japanese, although Japan has no Official Language. Most Japanese under 40 have studied English for at least 6 years, but the instruction tends to focus on formal grammar and writing rather than actual conversation. As a result, outside of major tourist attractions and establishments that cater specifically to foreigners, it is rare to find people who are conversant in English. Reading and writing tends to come much better though, and many younger Japanese are able to understand a great deal of written English despite not being able to speak it. English and Chinese are often spoken by a some clerks in establishments such as major stores.  \nIf lost, it can be practical to write out a question on paper in simple words and give it to someone young, preferably high school or college students, who will likely be able to point you in the right direction. It can also be helpful to carry a hotel business card or matchbook with you, to show a taxi driver or someone if you lose your way. Take comfort in the fact that many Japanese will go to extraordinary lengths to understand what you want and to help you, and try to pick up at least basic greetings and thank yous to put people at ease. Google Translate isn't perfect, but it can definitely help you if you are stuck in a situation where there is not enough to communicate. The app isn't great at reading text using the camera, but typing in a simple message can work.  \nJapanese is a language with several distinct dialects, although standard Japanese, which is based on the Tokyo dialect, is taught in schools and known by most people throughout the country. The slang-heavy dialect of the Kansai region is particularly famous in Japanese pop culture. On the southern islands of Okinawa, many dialects of the closely related Ryukyuan languages are spoken, mostly by the elderly, while in northern Hokkaido a rare few still speak Ainu.  \nJapanese is written using a convoluted mix of three different scripts: kanji or Chinese characters, together with native hiragana and katakana syllabaries, which were in fact derived from Chinese characters more than one thousand years ago. However, hiragana and katakana do not carry the meaning of the original Chinese characters they were derived from and are simply phonetic characters. There are thousands of kanji in everyday use and even the Japanese spend years learning them, but the kana have only 50 syllables each and can be learned with a reasonable amount of effort. Of the two, katakana are probably more useful for the visitor as they are used to write words of foreign origin other than Chinese, and thus can be used to figure out words like basu (bus), kamera (camera) or konpyuta (computer). However, some words like terebi (television), depato (department store), wapuro (word processor) and supa (supermarket) may be harder to figure out. Knowing Chinese will also be a great head start for tackling kanji, but not all words mean what they seem so pay attention!",
        user_id: 4,
        country_id: 97
      },
      {
        blog_id: 5,
        title: "Japanese Onsens Are A Must Go!",
        content:
          "Onsen, quite literally 'hot springs', are the pinnacle of the Japanese bathing experience. Clusters of hot spring inns pop up wherever there's a suitable source of hot water, and in volcanic Japan, they're everywhere. The most memorable onsen experience is often the rotenburo: outdoor baths with views of the surrounding natural scenery. While baths are usually large and shared, some swankier accommodations offer, often for an additional fee, reservable baths for you and yours alone, known as family baths, racier 'romance baths' or just plain old reserved baths (kashikiri-furo). Onsen baths can be either in standalone buildings available for anybody (sotoyu), or private guest-only baths inside your lodgings (uchiyu). \nWhile most onsen are run commercially and charge fees for entry (500-1000 yen is typical), especially in remote areas there are free publicly maintained baths that offer minimal facilities but, more often than not, stunning views to make up for it. Many of these are mixed (konyoku), but while men still happily traipse into these naked, if holding a towel in front of their dangly bits, it's a rare woman who'll enter one without a bathing suit these days. Commercial operations with kon'yoku baths tend to enforce bathing suits for both sexes.",
        user_id: 8,
        country_id: 97
      },
      {
        blog_id: 6,
        title: "Languages in Cambodia",
        content:
          "The official language of Cambodia is Khmer. Unlike its Thai, Laotian and Vietnamese neighbors, Khmer is not a tonal language, though its multitude of vowels, dip- and tripthongs make it difficult for the European-trained ear to discern. Despite this, most Cambodians are charmed by any attempt you do make, so pick up a phrasebook and give it a go. There is no universal system of Latinized transcription for Khmer characters, so don't be surprised if you see three different spellings for the same word. Language schools and private language tutors can be found in all larger Cambodian cities for as little as $5/hour. \nIn the west, dialects of Thai that are largely incomprehensible to speakers of standard Thai are spoken. Various dialects of Chinese are spoken by the ethnic Chinese community, with Teochew being the dominant dialect in Phnom Penh, and Cantonese speakers also forming a sizeable minority among the Chinese community. Public signage in major cities is generally bilingual in Khmer and English. There is also some prevalance of Chinese signs, as well. \nMost Cambodian youths study English in school, so many young people have a stock of several rote English phrases ready to fire at any foreigner they see, though few outside of major cities can actually use the language to communicate. Most people who work in the tourist or hospitality industry speak basic, functional English, though they may panic if the conversation wanders too far from the script. It is generally advisable when meeting someone whose English seems shaky to always speak slowly, simply and straight-forwardly, be prepared to repeat or rephrase your question and try not to get impatient. If you're in doubt, watch closely to make sure you are understood - Cambodians will often nod curtly, smile and look away when they don't understand, rather than embarrass you and themselves by asking for clarification. \nSome Cambodians, particularly older generations, may have studied French, and use of Thai, Vietnamese, or Chinese as a home language is relatively common, as well. It's also popular for Cambodians to study Korean and Chinese.",
        user_id: 1,
        country_id: 33
      },
      {
        blog_id: 7,
        title: "Lucky Numbers in China",
        content:
          "In general, 3, 6, 8, and 9 are lucky numbers for most of the Chinese. Three means 'high above shine the three stars' while the three stars include gods of fortune, prosperity and longevity. Six represents smoothness or success. Many young people choose the dates with six as their wedding days, such as the 6th, 16th and 26th. Eight sounds so close to the word for wealth that many people believe eight is a number that is linked to prosperity. So it is no surprise that the opening ceremony for the Olympics started at 8:08:08 on 08/08/2008. Nine is also regarded as a lucky number with the meaning of everlasting. \nFour is a taboo for most Chinese because the pronunciation in Mandarin is close to death. Some hotels will have their floor numbers go straight from three to five much like some American hotels have their floor numbers go from twelve to fourteen, skipping the 'unlucky' number 13.",
        user_id: 2,
        country_id: 40
      },
      {
        blog_id: 8,
        title: "Things To Do In Iceland",
        content:
          "Here are some things to do on your travels to Iceland: \n1. Iceland offers many hiking opportunities. Hiking in Iceland is no easy business, strong walking boots which support your ankles are recommended as the terrain is usually craggy lava rock or springy moss with hidden holes! Likewise, you'll need to be prepared for strong bursts of sideways rain and sleet, especially in winter and shoulder seasons, and particularly in the mountains. Don't stray into unknown terrain without proper equipment, read up more on hiking in Iceland.  \n2. Iceland is not well known for skiing or big ski areas but the town of Akureyri in the north has a great little ski area and the mountains of the Troll Peninsula offer world class terrain for ski touring, ski mountaineering and heli skiing.  \n3. Ice climbing is great with world class frozen waterfalls and plenty of glaciers.   \n4. Glacier hiking is one of Iceland´s most popular tourist things to do with the area of Skaftafell in the SE being the center of activity.  \n5. Whale watching available all year from Reykjavik and during the summer from Husavik, but sightings are most common in summer in either place.  \n6. There are some good opportunities to go snowmobiling and this can provide access to otherwise inaccessable areas.  \n7. Whitewater rafting is popular. In south you can raft on the big Hvita river. North Iceland has some of the best rivers for rafting, Vestari and Austari Jokulsa. The companies offering rafting are located in Varmahlid. One of them is Bakkaflot with really good facilities (hot pools, accommodation restaurant & drinks) to use after your adventure.",
        user_id: 2,
        country_id: 87
      },
      {
        blog_id: 9,
        title: "Getting Around Mongolia!",
        content:
          "If you plan to travel around the countryside without a guide, take a GPS and get some maps. The Mongolia Road Atlas is available in many bookstores, it is over 60 pages and covers the whole country: note there is a latin character version and cyrillic character version, in the countryside most people won't understand the latin version. More detailed maps are available at the Mongolian Government Map Store. These maps are 1:500,000. Also some other special purpose maps and a very good map of downtown Ulaanbaatar. The map store is on Ih Toiruu St. Go west from the State Department store on the main street, called Peace Avenue, two blocks to the large intersection with traffic lights, Turn right (North) and the map store is about half way along the block. There is an Elba electronic appliance store set back from the street, a yellow and blue building, the next building is a large Russian style office building 4 floors in height, the map store entrance is on the west side, toward the south end of the building, it lines up with the North wall of the Elba building.  \nWhichever method of long-distance travel is chosen, keep in mind that everything in Mongolia has a tendency to break down. Don't be shocked if part of the suspension breaks and the driver jimmy-rigs a carved wooden block in the place of a mount. For more serious breakdowns, it can easily take an entire day or longer for somebody to come along and help, so leave plenty of slack in itineraries. Finally, Mongolians are rather notorious for being late. A bus that is scheduled to leave at 08:00 will probably not be out of the city till almost 11:00.  \nHave fun exploring Mongolia! :D",
        user_id: 3,
        country_id: 126
      },
      {
        blog_id: 10,
        title: "What's Spoken in Mongolia?",
        content:
          "With the exception of the westernmost province where Kazakh is spoken, everybody in the country speaks Mongolian. The language is extremely difficult for Westerners to learn and speak, even after multiple months of being immersed in the culture. Westerners typically take a minimum of 9-18 months of full time Mongolian language study to be conversant. Most locals will appreciate attempts to speak phrases in Mongolian, although the traveller will inevitably pronounce them wrong (be careful when ordering water in a restaurant - the word for water [pronounced 'oos'] is indistinguishable from that for 'hair' to the English ear! Makes for a good laugh over and over ...). Picking up a phrasebook and practising a few phrases will help. The numbering system is regular, and fairly easy to learn. Despite the government's efforts to promote the Mongolian writing system, the Cyrillic system is still the standard and being able to read it might help you.  \nIf you can speak Russian you should not have any major problems communicating. Mongolia has had a long history of alliance with the Soviet Union, and Russia after the break up of the Soviet Union, so Russian is compulsory in all Mongolian schools and widely spoken in urban areas. English is not widely spoken, although it's been getting more popular lately.  \nForeigners able to speak German should give it a try, as especially in the older generations there are folks that do speak it due to Mongolia's ties to the G.D.R. that caused many Mongolians to work and study in East Berlin.",
        user_id: 3,
        country_id: 126
      },
      {
        blog_id: 11,
        title: "Australian Wildlife",
        content:
          "Australian flora and fauna is unique to the island, the result of having been isolated from the rest of the world for millions of years. Amongst Australian animals are a large group of marsupials (mammals with a pouch) and monotremes (mammals that lay eggs). Some of the animal icons of Australia are the kangaroo (national symbol) and the koala. A visit to Australia would not be complete without taking the chance to see some of these animals in their natural environment!  \n1. Kangaroos and wallabies reside in national parks all around the country. You won't see any kangaroos hopping down the street in Central Sydney, but they are common on the outskirts of most urban areas. There is also a famous group which make their home on the of grounds of the University of the Sunshine Coast, in Queensland.  \n2. Wombats and echidna are also common, but harder to find due to their camouflage and tunnelling. See lots of echidnas on Kangaroo Island.  \n3.  Koalas are present in forests around Australia, but are very notoriously hard to spot, and walking around looking upwards into the boughs of trees will usually send you sprawling over a tree root. Best seen during the day, there is a thriving and friendly population on Raymond Island near Paynesville in Victoria. You have a good chance on Otway Coast, on the Great Ocean Road, or even in the National Park walk near Noosa on the Sunshine Coast.  \n4. Emu are more common in central Australia. You will certainly see some if you venture to the outback national park at Currawinya  \n5. Platypus are found in reedy flowing creeks with soft river banks in Victoria, Southern New South Wales, and the very southern region of Queensland - seen at dusk and dawn - you have to have a bit of luck to see one. Try the platypus reserves in Bombala or Delegate in New South Wales, or in Emu Creek at Skipton just out of Ballarat.",
        user_id: 5,
        country_id: 11
      },
      {
        blog_id: 12,
        title: "Breakfast in France",
        content:
          "Breakfast in France isn't the most important meal of the day and is usually very light. The most typical breakfast consists of a coffee and a croissant or some other viennoiserie (pastry), but since it implies going to the patisserie early in the morning to buy a fresh croissant, it's typically reserved for somewhat special occasions. On normal days most people have a drink (coffee, tea, hot chocolate, orange juice) and either toast (tartines made of baguette or toast bread with butter and jam/honey/Nutella) that can be dipped in the hot drink, or cereal with milk. People who eat healthy may go for fruits and yoghurt. As a general rule, the French breakfast is mostly sweet, but everything changes and an increasing number of places are starting to serve savoury breakfasts.",
        user_id: 5,
        country_id: 65
      },
      {
        blog_id: 13,
        title: "Winter Storms in Canada",
        content:
          "Canada is very prone to winter storms (including ice storms and blizzards). Reduce speed, be conscious of other drivers, and pay attention. It's probably a good idea to carry an emergency kit in your car, in case you have no choice but to spend the night stuck in snow on the highway (yes, this does happen occasionally, especially in more isolated areas). If you are unfamiliar with winter driving and choose to visit Canada during the winter months, consider using another mode of transportation to travel within the country. Make note that while the vast majority of winter weather occurs, naturally, during the winter months, some parts of Canada such as the prairie provinces and north and mountain regions may experience severe, if brief, winter-like conditions at any time during the year.  \nIf you are touring on foot, it is best to bundle up as much as possible in layers with heavy socks, thermal underwear and gloves; winter storms can bring with them extreme winds alongside frigid temperatures and frostbite can occur in a matter of minutes. Be careful!",
        user_id: 6,
        country_id: 35
      },
      {
        blog_id: 14,
        title: "Eats in Canada!",
        content:
          "English Canadians may be mystified if you ask where you can get Canadian food. English Canadian cuisine varies from region to region. Some specialties include maple syrup, Nanaimo bars (chocolate-topped no-bake squares with custard or vanilla butter filling and crumb base), butter tarts (tarts made with butter, sugar, and eggs), beaver tails (fried dough topped with icing sugar), fiddleheads (curled heads of young ferns), peameal bacon (a type of back bacon made from lean boneless pork loin, trimmed fine, wet cured, and rolled in cornmeal; eaten at breakfast with eggs or for lunch as a sandwich), and Halifax donairs (sliced beef meatloaf wrapped in pitas and garnished with onions, tomatoes, and a sweet condensed milk sauce). They are an important, if somewhat humble, part of the Canadian culinary landscape. In other respects, English Canadian cuisine is similar to that of the northern United States. Canadians may be unaware that they even have national dishes, especially in the more urbanized areas; that said, there is a rising trend among Canadian chefs and restaurateurs to offer locally produced ingredients, and most major cities have bistros that specialize in local and national cuisine. These specialties may even include game meat dishes, such as caribou, grouse, moose, venison, or wild turkey prepared in a variety of European styles.  \n To many Canadians and non-Canadians, Maple syrup is the prominent element of Canadian cuisine. It is most often used on breakfasts (e.g. pancakes or crèpes), but can also be used as a sweetener for baked goods, warm milk for coffee, mixed with mustards or other sauces, etc. However, a lesser known tree syrup that is produced in the more northerly parts of Canada, closer to the boreal forests, is Birch syrup (which some from parts of Scandinavia may also recognize). It is usually not commercially produced to the same extent as maple syrup, but can be found in certain specialized stores in the southern cities, although typically at a higher price point than it's maple counterpart. It is almost always darker and has a more intense, molasses-y flavour than maple syrup.",
        user_id: 6,
        country_id: 35
      },
      {
        blog_id: 15,
        title: "Brazil's Climate",
        content:
          "Brazil is a huge country with different climate zones. In the North, near the equator there is a wet and a dry season; from about São Paulo down to the south there is spring/summer/fall/winter. The weather constantly changes and is sometimes a surprise. It can be scorching hot, then simmer down, and get very cold. It could be sunny 1 minute, and start raining the second minute. The warm climate is perfect for the beach and playing outside.",
        user_id: 7,
        country_id: 27
      },
      {
        blog_id: 16,
        title: "Languages of Brazil",
        content:
          "The official language of Brazil is Portuguese, spoken by the entire population (except for a few, very remotely located tribes). Indeed, Brazil has had immigrants from all parts of the world for centuries, whose descendants now speak Portuguese as their mother tongue.  \nBrazilian Portuguese has a number of pronunciation differences with that spoken in Portugal (and within, between the regions there are some quite extreme accent and slang differences), but speakers of either can understand each other. However, European Portuguese (Luso) is more difficult for Brazilians to understand than the reverse, as many Brazilian television programs are shown in Portugal. Notice that a few words can have a totally different meaning in Brazil and Portugal, usually slang words. An example of this is 'Rapariga' which in Portugal means young girl, and in Brazil means a prostitute.  \nEnglish is not widely spoken except in some touristy areas. Don't expect bus or taxi drivers to understand English, so it may be a good idea to write down the address you are heading to before getting the cab. In most big and luxurious hotels, it is very likely that the taxi fleet will speak some English.  \nSpanish has some similarity with Portuguese. Brazilian tourists are able to make basic questions and give basic answers when visiting Spain or other Latin American countries and vice-versa. Of course such communication is quite awkward (mainly due to tilded vowels and semivowelization of 'e' and 'o' when being the last vowel of a Portuguese word), so take a phrase book and be prepared for slow communication with a lot of interpretive gestures.",
        user_id: 7,
        country_id: 27
      },
      {
        blog_id: 17,
        title: "A Short Intro to Japan's Beautiful Kyoto",
        content:
          "Nestled among the mountains of Western Honshu, Kyoto was the capital of Japan and the residence of the Emperor from 794 until the Meiji Restoration of 1868, when the capital was moved to Tokyo. During its millennium at the center of Japanese power, culture, tradition, and religion, it accumulated an unparalleled collection of palaces, temples and shrines, built for emperors, shoguns, and monks. Kyoto was among the few Japanese cities that escaped the allied bombings of World War II and as a result, Kyoto still has an abundance of prewar buildings, such as the traditional townhouses known as machiya. However the city is continuously undergoing modernization with some of the traditional Kyoto buildings being replaced by newer architecture, such as the Kyoto Station complex.",
        user_id: 9,
        country_id: 27
      },
      {
        blog_id: 18,
        title: "Some Information on Studying in Australia",
        content:
          "If you are intending to study in Australia, you may need to be on a visa class that allows this, rather than a tourist visa. Students and academics invited to visit Australian universities will generally also need an appropriate visa, even if their visit is of a short enough period to be covered by a tourist electronic visa. For extremely short term or part time courses, check with your Australian consulate or embassy.  \nAustralian students attend high school for six years, and enter university at seventeen or eighteen years of age. (In Australia, neither school nor college are used to refer to tertiary institutions; they are referred to only as universities - in fact, some primary and secondary educational institutions are referred to as 'colleges'). Australian undergraduate programs are usually three to four years in length. A fifth year is compulsory in some professional undergraduate programs such as engineering, law, medicine and dentistry. Students in three-year degree programs can take an optional fourth year known as honours if they want to proceed into a postgraduate research program, whereas students enrolled in four year programs can typically incorporate their honours thesis into their fourth year.  \nAll tuition at university level is in English, save for courses that specifically focus on other languages. Students who have not previously earned a qualification in an English speaking program (or passed high school English) will have to take one of a number of English competency tests before being allowed to enroll. \nPostgraduate studies in Australia fall into two classes: coursework and research. Coursework degrees are generally at the Masters level. Research degrees are at the Masters and Doctoral level.",
        user_id: 9,
        country_id: 27
      }
    ]),
    knex("tags").insert([
      {
        tag_id: 1,
        tag_name: "Iceland"
      },
      {
        tag_id: 2,
        tag_name: "Japan"
      }
    ]),
    knex("blogs_tags").insert([
      { blog_tags_id: 1, tag_id: 2, blog_id: 1 },
      { blog_tags_id: 2, tag_id: 2, blog_id: 2 },
      { blog_tags_id: 3, tag_id: 2, blog_id: 3 },
      { blog_tags_id: 4, tag_id: 2, blog_id: 4 },
      { blog_tags_id: 5, tag_id: 2, blog_id: 5 }
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
      { favorite_destination_id: 1, destination_id: 27, user_id: 1 },
      { favorite_destination_id: 2, destination_id: 41, user_id: 1 },
      { favorite_destination_id: 3, destination_id: 126, user_id: 1 },
      { favorite_destination_id: 4, destination_id: 181, user_id: 1 },
      { favorite_destination_id: 5, destination_id: 11, user_id: 2 },
      { favorite_destination_id: 6, destination_id: 50, user_id: 2 },
      { favorite_destination_id: 7, destination_id: 70, user_id: 2 },
      { favorite_destination_id: 8, destination_id: 71, user_id: 2 },
      { favorite_destination_id: 9, destination_id: 86, user_id: 2 },
      { favorite_destination_id: 10, destination_id: 88, user_id: 2 },
      { favorite_destination_id: 11, destination_id: 140, user_id: 2 },
      { favorite_destination_id: 12, destination_id: 186, user_id: 2 },
      { favorite_destination_id: 13, destination_id: 196, user_id: 2 },
      { favorite_destination_id: 14, destination_id: 40, user_id: 3 },
      { favorite_destination_id: 15, destination_id: 101, user_id: 3 },
      { favorite_destination_id: 16, destination_id: 150, user_id: 3 },
      { favorite_destination_id: 17, destination_id: 71, user_id: 4 },
      { favorite_destination_id: 18, destination_id: 87, user_id: 4 },
      { favorite_destination_id: 19, destination_id: 136, user_id: 4 },
      { favorite_destination_id: 20, destination_id: 183, user_id: 4 },
      { favorite_destination_id: 21, destination_id: 57, user_id: 5 },
      { favorite_destination_id: 22, destination_id: 64, user_id: 5 },
      { favorite_destination_id: 23, destination_id: 97, user_id: 5 },
      { favorite_destination_id: 24, destination_id: 147, user_id: 5 },
      { favorite_destination_id: 25, destination_id: 27, user_id: 6 },
      { favorite_destination_id: 26, destination_id: 85, user_id: 6 },
      { favorite_destination_id: 27, destination_id: 97, user_id: 6 },
      { favorite_destination_id: 28, destination_id: 183, user_id: 6 },
      { favorite_destination_id: 29, destination_id: 11, user_id: 7 },
      { favorite_destination_id: 30, destination_id: 27, user_id: 7 },
      { favorite_destination_id: 31, destination_id: 78, user_id: 7 },
      { favorite_destination_id: 32, destination_id: 97, user_id: 7 },
      { favorite_destination_id: 33, destination_id: 27, user_id: 8 },
      { favorite_destination_id: 34, destination_id: 85, user_id: 8 },
      { favorite_destination_id: 35, destination_id: 123, user_id: 8 },
      { favorite_destination_id: 36, destination_id: 181, user_id: 8 },
      { favorite_destination_id: 37, destination_id: 97, user_id: 9 },
      { favorite_destination_id: 38, destination_id: 181, user_id: 9 }
    ]),
    knex("visited_destinations").insert([
      { visited_destination_id: 1, destination_id: 33, user_id: 1 },
      { visited_destination_id: 2, destination_id: 65, user_id: 1 },
      { visited_destination_id: 3, destination_id: 97, user_id: 1 },
      { visited_destination_id: 4, destination_id: 147, user_id: 1 },
      { visited_destination_id: 5, destination_id: 199, user_id: 1 },
      { visited_destination_id: 6, destination_id: 35, user_id: 2 },
      { visited_destination_id: 7, destination_id: 40, user_id: 2 },
      { visited_destination_id: 8, destination_id: 41, user_id: 2 },
      { visited_destination_id: 9, destination_id: 85, user_id: 2 },
      { visited_destination_id: 10, destination_id: 87, user_id: 2 },
      { visited_destination_id: 11, destination_id: 129, user_id: 2 },
      { visited_destination_id: 12, destination_id: 144, user_id: 2 },
      { visited_destination_id: 13, destination_id: 171, user_id: 2 },
      { visited_destination_id: 14, destination_id: 198, user_id: 2 },
      { visited_destination_id: 15, destination_id: 199, user_id: 2 },
      { visited_destination_id: 16, destination_id: 46, user_id: 3 },
      { visited_destination_id: 17, destination_id: 126, user_id: 3 },
      { visited_destination_id: 18, destination_id: 171, user_id: 3 },
      { visited_destination_id: 19, destination_id: 199, user_id: 3 },
      { visited_destination_id: 20, destination_id: 35, user_id: 4 },
      { visited_destination_id: 21, destination_id: 40, user_id: 4 },
      { visited_destination_id: 22, destination_id: 85, user_id: 4 },
      { visited_destination_id: 23, destination_id: 97, user_id: 4 },
      { visited_destination_id: 24, destination_id: 199, user_id: 4 },
      { visited_destination_id: 25, destination_id: 11, user_id: 5 },
      { visited_destination_id: 26, destination_id: 65, user_id: 5 },
      { visited_destination_id: 27, destination_id: 96, user_id: 5 },
      { visited_destination_id: 28, destination_id: 123, user_id: 5 },
      { visited_destination_id: 29, destination_id: 199, user_id: 5 },
      { visited_destination_id: 30, destination_id: 8, user_id: 6 },
      { visited_destination_id: 31, destination_id: 35, user_id: 6 },
      { visited_destination_id: 32, destination_id: 56, user_id: 6 },
      { visited_destination_id: 33, destination_id: 199, user_id: 6 },
      { visited_destination_id: 34, destination_id: 148, user_id: 7 },
      { visited_destination_id: 35, destination_id: 151, user_id: 7 },
      { visited_destination_id: 36, destination_id: 199, user_id: 7 },
      { visited_destination_id: 37, destination_id: 35, user_id: 8 },
      { visited_destination_id: 38, destination_id: 97, user_id: 8 },
      { visited_destination_id: 39, destination_id: 170, user_id: 8 },
      { visited_destination_id: 40, destination_id: 199, user_id: 8 },
      { visited_destination_id: 41, destination_id: 8, user_id: 9 },
      { visited_destination_id: 42, destination_id: 11, user_id: 9 },
      { visited_destination_id: 43, destination_id: 27, user_id: 9 },
      { visited_destination_id: 44, destination_id: 199, user_id: 9 }
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
