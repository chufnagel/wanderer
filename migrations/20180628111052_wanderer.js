/* What's the dealio with foreign keys and knex?
I'm wondering whether we should add a foreign key constraint,
or whether we should manually create these associations. */

/* TABLES */
/* users
 * posts
 * tags
 * posts_tags
 * media
 * media_tags
*/

exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable("users", table => {
      table.increments("user_id").primary();
      table.string("username");
      table.string("password");
      table.string("name");
      table.string("email");
    }),
    knex.schema.createTable("posts", table => {
      table.increments("post_id").primary();
      table.string("title");
      table.string("content");
      table.timestamp("timestamp");
      table.integer("user_id");
    }),
    knex.schema.createTable("tags", table => {
      table.increments("tag_id").primary();
      table.string("name");
    }),
    knex.schema.createTable("posts_tags", table => {
      table.increments("posts_tags_id").primary();
      table.integer("tag_id");
      table.integer("post_id");
    }),
    knex.schema.createTable("media", table => {
      table.increments("media_id").primary();
      table.string("link");
      table.integer("user_id");
    }),
    knex.schema.createTable("media_tags", table => {
      table.increments("media_tags_id").primary();
      table.integer("tag_id");
      table.integer("media_id");
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTableIfExists("users"),
    knex.schema.dropTableIfExists("posts"),
    knex.schema.dropTableIfExists("tags"),
    knex.schema.dropTableIfExists("posts_tags"),
    knex.schema.dropTableIfExists("media"),
    knex.schema.dropTableIfExists("media_tags")
  ]);
