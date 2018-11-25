/* global describe, afterEach, test, expect */
// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import fetchMock from "fetch-mock";
// import * as actions from "../../actions";
// import * as types from "../../actions/types";

// const middleware = [thunk];
// const mockStore = configureMockStore(middleware);

// describe("async actions", () => {
//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });
//   test("creates GET_BLOGS_SUCCESS when fetching has been done", () => {
//     fetchMock.getOnce("/blogs", {
//       blogs: [
//         {
//           blog_id: 1,
//           content: "YOLO SWAG",
//           timestamp: "2018-06-30T23:46:49.000Z",
//           title: "WELCOME TO NIHON",
//           user_id: 1,
//         },
//       ],
//       headers: { "content-type": "application/json" },
//     });
//     const expectedActions = [
//       { type: types.GET_BLOGS_REQUEST },
//       {
//         type: types.GET_BLOGS_SUCCESS,
//         blogs: [
//           {
//             blog_id: 1,
//             content: "YOLO SWAG",
//             timestamp: "2018-06-30T23:46:49.000Z",
//             title: "WELCOME TO NIHON",
//             user_id: 1,
//           },
//         ],
//       },
//     ];
//     const store = mockStore({ blogs: [] });

//     return store.dispatch(actions.getBlogs()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });

// -     "body": Object {
//   -       "blogs": Array [
//   +     "payload": Array [
//           Object {
//   -           "blogAuthor": "BROICHI",
//   -           "blogContents": "YOLO SWAG",
//   -           "blogId": "1",
//   -           "blogTitle": "WELCOME TO NIHON",

//           },
//         ],
//   -     },
//         "type": "GET_BLOG
