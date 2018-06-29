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
        post_id: 1,
        title: "WELCOME TO NIHON",
        contents: "YOLO SWAG",
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
    knex("posts_tags").insert([
      { posts_tags_id: 1, tags_id: 1, post_id: 1 },
      { posts_tags_id: 1, tags_id: 2, post_id: 1 }
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
      { media_tags_id: 1, tags_id: 1, media_id: 1 },
      { media_tags_id: 1, tags_id: 2, media_id: 1 }
    ]),
    knex("countries").insert([
      { country_id: 1, country: "Japan", acronym: "JPN"},
      { country_id: 2, country: "Hong Kong", acronym: "HKG"},
      { country_id: 3, country: "Panama", acronym: "PAN"},
      { country_id: 3, country: "Singapore", acronym: "SGP"},
    ]),
  );
};
