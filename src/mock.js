import { setupWorker, rest } from "msw";

export const posts = {
  post_1: {
    id: "post_1",
    title: "Post 1",
    content:
      "Post 1 Do do ea minim non ut fugiat laborum eiusmod esse cupidatat aliquip. Elit qui magna laboris sit pariatur aute ea sunt qui incididunt culpa aute exercitation ea. Anim ad reprehenderit cupidatat veniam ex aute id dolore proident Lorem ea eiusmod eu. Do fugiat reprehenderit non consequat consectetur laborum adipisicing adipisicing in sint ullamco.",
    author: "author_1",
    likes: 4
  },

  post_2: {
    id: "post_2",
    title: "Post 2",
    content:
      "Post 2 Do do ea minim non ut fugiat laborum eiusmod esse cupidatat aliquip. Elit qui magna laboris sit pariatur aute ea sunt qui incididunt culpa aute exercitation ea. Anim ad reprehenderit cupidatat veniam ex aute id dolore proident Lorem ea eiusmod eu. Do fugiat reprehenderit non consequat consectetur laborum adipisicing adipisicing in sint ullamco.",
    author: "author_1",
    likes: 8
  },

  post_3: {
    id: "post_3",
    title: "Post 3",
    content:
      "Post 3 Do do ea minim non ut fugiat laborum eiusmod esse cupidatat aliquip. Elit qui magna laboris sit pariatur aute ea sunt qui incididunt culpa aute exercitation ea. Anim ad reprehenderit cupidatat veniam ex aute id dolore proident Lorem ea eiusmod eu. Do fugiat reprehenderit non consequat consectetur laborum adipisicing adipisicing in sint ullamco.",
    author: "author_2",
    likes: 4
  },

  post_4: {
    id: "post_4",
    title: "Post 4",
    content:
      "Post 4 Do do ea minim non ut fugiat laborum eiusmod esse cupidatat aliquip. Elit qui magna laboris sit pariatur aute ea sunt qui incididunt culpa aute exercitation ea. Anim ad reprehenderit cupidatat veniam ex aute id dolore proident Lorem ea eiusmod eu. Do fugiat reprehenderit non consequat consectetur laborum adipisicing adipisicing in sint ullamco.",
    author: "author_1",
    likes: 19
  },
  post_5: {
    id: "post_5",
    title: "Post 5",
    content:
      "Post 5 Do do ea minim non ut fugiat laborum eiusmod esse cupidatat aliquip. Elit qui magna laboris sit pariatur aute ea sunt qui incididunt culpa aute exercitation ea. Anim ad reprehenderit cupidatat veniam ex aute id dolore proident Lorem ea eiusmod eu. Do fugiat reprehenderit non consequat consectetur laborum adipisicing adipisicing in sint ullamco.",
    author: "author_2",
    likes: 14
  }
};

export const authors = {
  author_1: {
    id: "author_1",
    name: "Asvny 1"
  },

  author_2: {
    id: "author_2",
    name: "Asvny 2"
  }
};

export const worker = setupWorker(
  rest.get("/posts", (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, "Mocked status"),
      ctx.json({
        posts: {
          ...posts
        }
      })
    );
  })
);
