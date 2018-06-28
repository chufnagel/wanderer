exports.seed = (knex, Promise) => {
  return Promise.join(
    knex("users", "posts", "tags", "posts_tags", "media", "media_tags").del(),
    knex("users").insert([
      {
        user_id: 1,
        username: "BROICHI",
        password: "gangbusters",
        name: "Broichi Slope-Roll",
        email: "s.koichi@gmail.com"
      }
    ]),
    knex("posts").insert([
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
    ])
  );
};
