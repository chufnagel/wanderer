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
      }
    ]),
    knex("blogs").insert([
      {
        blog_id: 1,
        title: "WELCOME TO NIHON",
        content: "YOLO SWAG",
        user_id: 1
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
    knex("media").insert([
      {
        media_id: 1,
        link:
          "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzVhYmUzNTk5ZDU0MjNiNjM0MF9yb2JvdC1yZXN0YXVyYW50LXZzLmpwZyJdLFsicCIsInRodW1iIiwiNjAweDQwMCsxNSswIl0sWyJwIiwiY29udmVydCIsIi1xdWFsaXR5IDgxIC1hdXRvLW9yaWVudCJdLFsicCIsInRodW1iIiwiMzcyeDI0OCMiXV0",
        user_id: 1
      }
    ]),
    knex("media_tags").insert([
      { media_tags_id: 1, tag_id: 1, media_id: 1 },
      { media_tags_id: 2, tag_id: 2, media_id: 1 }
    ]),
    knex("countries").insert([
      { country_id: 1, country: "Japan", acronym: "JPN"},
      { country_id: 2, country: "Hong Kong", acronym: "HKG"},
      { country_id: 3, country: "Panama", acronym: "PAN"},
      { country_id: 4, country: "Singapore", acronym: "SGP"},
<<<<<<< HEAD
      { country_id: 5, country: "England", acronym: "ENG"}, 
      { country_id: 6, country: "France", acronym: "FRA"},
      { country_id: 7, country: "Germany", acronym: "GER"},
      { country_id: 8, country: "Russia", acronym: "RUS"},
=======
>>>>>>> 3820178163d674a28af269b779e9437b29573603
    ]),
    knex("favorite_destinations").insert([
      { favorite_destination_id: 1, destination_id: 1, user_id: 1},
      { favorite_destination_id: 2, destination_id: 2, user_id: 1},
      { favorite_destination_id: 3, destination_id: 3, user_id: 2},
      { favorite_destination_id: 4, destination_id: 4, user_id: 2},
<<<<<<< HEAD
    ]),
    knex("visited_destinations").insert([
      { visited_destination_id: 1, destination_id: 5, user_id: 1},
      { visited_destination_id: 2, destination_id: 6, user_id: 1},
      { visited_destination_id: 3, destination_id: 7, user_id: 2},
      { visited_destination_id: 4, destination_id: 8, user_id: 2},
    ]),
    knex("user_friends").insert([
      { user_friend_id: 1, friend_id: 2, user_id: 1},
      { user_friend_id: 2, friend_id: 3, user_id: 1},
      { user_friend_id: 3, friend_id: 4, user_id: 1},
=======
>>>>>>> 3820178163d674a28af269b779e9437b29573603
    ])
  )
};
