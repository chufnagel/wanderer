/* global describe, afterEach, test, expect */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "../../actions/async_blogs";
import * as types from "../../actions/types";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  test("creates GET_BLOGS_SUCCESS when fetching has been done", () => {
    fetchMock.getOnce("/blogs", {
      body: {
        blogs: [
          {
            blogId: "1",
            blogTitle: "WELCOME TO NIHON",
            blogAuthor: "BROICHI",
            blogContents: "YOLO SWAG"
          }
        ]
      },
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: types.GET_BLOGS_REQUEST },
      {
        type: types.GET_BLOGS_SUCCESS,
        body: {
          blogs: [
            {
              blogId: "1",
              blogTitle: "WELCOME TO NIHON",
              blogAuthor: "BROICHI",
              blogContents: "YOLO SWAG"
            }
          ]
        }
      }
    ];
    const store = mockStore({ blogs: [] });

    return store.dispatch(actions.getBlogs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
