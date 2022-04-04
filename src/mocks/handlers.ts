import { rest } from "msw";
import { categoriesFixture, quizFixture } from "./fixture";

const mocks = [
  rest.get("https://opentdb.com/api.php", (req, res, ctx) => {
    return res(ctx.json(quizFixture));
  }),
  rest.get("https://opentdb.com/api_category.php", (req, res, ctx) => {
    return res(ctx.json(categoriesFixture));
  }),
];

export const handlers = [...mocks];
