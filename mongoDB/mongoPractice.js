// db.movies.aggregate([
//   {
//     $project: {
//       titleFiltered: {
//         $split: ["$title", " "],
//       },
//       titleCount: {
//         $cond: {
//           if: {
//             $isArray: "$titleFiltered",
//           },
//           then: {
//             $size: "$titleFiltered",
//           },
//           else: "NA",
//         },
//       },
//     },
//   },
// ]);

db.movies.aggregate([
  {
    $project: {
      titleFiltered: {
        $size: {
          $split: ["$title", " "],
        },
      },
    },
  },
]);

db.movies.aggregate([
  { $project: { _id: 1, titlecount: { $size: { $split: ["$title", " "] } } } },
  { $match: { titlecount: 1 } },
]);

db.movies.aggregate([
  {
    $project: { _id: 0, titlecount: { $size: { $split: ["$title", " "] } } },
    $match: {
      titleCount: 1,
    },
  },
]);

db.movies.aggregate([
  { $project: { titleFiltered: { $split: ["$title", " "] } } },
  { $match: { titleFiltered: { $size: 1 } } },
]);

db.movies.aggregate([
  { $project: { titleFiltered: { $split: ["$title", " "] } } },
  { $match: { $size: 1 } },
]);

db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $nin: ["Crime", "Horror"] },
      $or: [{ rated: "PG" }, { rated: "G" }],
      $and: [{ languages: "English" }, { languages: "Japanese" }],
    },
  },
  { $project: { _id: 0, title: 1, rated: 1 } },
]);

// db.movies.aggregate([
//   {
//     $project: {
//       titleFiltered: {
//         $split: ["$title", " "],
//       },
//       titleCount: {
//         $size: "$titleFiltered",
//       },
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $project: {
//       titleFiltered: {
//         $split: ["$title", " "],
//       },
//     },
//   },
// ]);

// db.inventory.aggregate([
//   {
//     $project: {
//       item: 1,
//       numberOfColors: {
//         $cond: {
//           if: { $isArray: "$colors" },
//           then: { $size: "$colors" },
//           else: "NA",
//         },
//       },
//     },
//   },
// ]);

db.movies.aggregate([
  {
    $match: {
      cast: {
        $elemMatch: {
          $exists: true,
        },
      },
      directors: {
        $elemMatch: {
          $exists: true,
        },
      },
      writers: {
        $elemMatch: {
          $exists: true,
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      cast: 1,
      directors: 1,
      writers: {
        $map: {
          input: "writers",
          as: "writer",
          in: {},
        },
      },
    },
  },
]);

db.movies.aggregate([
  {
    $match: {
      cast: { $elemMatch: { $exists: true } },
      directors: { $elemMatch: { $exists: true } },
      writers: { $elemMatch: { $exists: true } },
    },
  },
  {
    $project: {
      _id: 0,
      cast: 1,
      directors: 1,
      writers: {
        $map: {
          input: "$writers",
          as: "writer",
          in: { $arrayElemAt: [{ $split: ["$$writer", " ("] }, 0] },
        },
      },
    },
  },
  {
    $project: {
      labor_of_love: {
        $gt: [
          { $size: { $setIntersection: ["$cast", "$directors", "$writers"] } },
          0,
        ],
      },
    },
  },
  { $match: { labor_of_love: true } },
  { $count: "labors of love" },
]);
