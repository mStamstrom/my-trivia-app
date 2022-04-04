import { ApiQuizResponse } from "../common/requests/quizRequest";

export const categoriesFixture = {
  trivia_categories: [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" },
  ],
};

export const quizFixture: ApiQuizResponse = {
  responseCode: 0,
  results: [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which Formula One driver was nicknamed &#039;The Professor&#039;?",
      correct_answer: "Alain Prost",
      incorrect_answers: ["Ayrton Senna", "Niki Lauda", "Emerson Fittipaldi"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "easy",
      question:
        "The derisive acronym &quot;PIIGS&quot; refers to which of the following European countries and their economic statuses?",
      correct_answer: "Portugal, Ireland, Italy, Greece, Spain",
      incorrect_answers: [
        "Poland, Iceland, Italy, Greece, Serbia",
        "Poland, Iceland, Italy, Greenland, Spain",
        "Portugal, Iceland, Ireland, Greece, Serbia",
      ],
    },
    {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "hard",
      question: "Which horizon in a soil profile consists of bedrock?",
      correct_answer: "R",
      incorrect_answers: ["O", "B", "D"],
    },
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "easy",
      question:
        "&quot;Ananas&quot; is mostly used as the word for Pineapple in other languages.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the capital of Senegal?",
      correct_answer: "Dakar",
      incorrect_answers: ["Nouakchott", "Conakry", "Monrovia"],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question:
        "How many games are there in the &quot;Colony Wars&quot; series for the PlayStation?",
      correct_answer: "3",
      incorrect_answers: ["2", "4", "5"],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which boxer was famous for striking the gong in the introduction to J. Arthur Rank films?",
      correct_answer: "Bombardier Billy Wells",
      incorrect_answers: ["Freddie Mills", "Terry Spinks", "Don Cockell"],
    },
    {
      category: "History",
      type: "multiple",
      difficulty: "medium",
      question: "When did the Crisis of the Third Century begin?",
      correct_answer: "235 AD",
      incorrect_answers: ["235 BC", "242 AD", "210 AD"],
    },
    {
      category: "Entertainment: Musicals & Theatres",
      type: "multiple",
      difficulty: "medium",
      question:
        "Who played Marquis de Lafayette and Thomas Jefferson in the original Broadway run of Hamilton?",
      correct_answer: "Daveed Diggs",
      incorrect_answers: [
        "Lin-Manuel Miranda",
        "Javier Mu&ntilde;oz",
        "Wayne Brady",
      ],
    },
    {
      category: "Science & Nature",
      type: "multiple",
      difficulty: "medium",
      question:
        "What is the molecular formula of the active component of chili peppers(Capsaicin)?",
      correct_answer: "C18H27NO3",
      incorrect_answers: ["C21H23NO3", "C6H4Cl2", "C13H25NO4"],
    },
  ],
};
