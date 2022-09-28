const randomID = () => Math.random().toString(36).substr(2, 9);

export const cardsArr = [
    {
        id: randomID(),
        question: "What is the capital of Botswana",
        answers: ["Gaborone", "Windhoek", "Lusaka", "Harare"],
        correctAnswer: "Gaborone",
        tags: ["Africa", "Geography", "Cities"],
        groups: { continent: "Africa", country: "Botswana", category: "Geography", subcategory: "Cities", difficulty: "hard", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Gaborone"
    },
    {
        id: randomID(),
        question: "What is the capital of Mexico",
        answers: ["Mexico City", "Buenos Aires", "Santiago", "Lima"],
        correctAnswer: "Mexico City",
        tags: ["America", "Mexico", "Geography", "Cities"],
        groups: { continent: "North America", country: "Mexico", category: "Geography", subcategory: "Cities", difficulty: "easy", period: "any" },
        bookmarked: true,
        link: "https://en.wikipedia.org/wiki/Mexico_City"
    },
    {
        id: randomID(),
        question: "What is the capital of Croatia",
        answers: ["Zagreb", "Sarajevo", "Ljubljana", "Skopje"],
        correctAnswer: "Zagreb",
        tags: ["Europe", "Croatia", "Geography", "Cities"],
        groups: { continent: "Europe", country: "Croatia", category: "Geography", subcategory: "Cities", difficulty: "medium", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Zagreb"
    }, {
        id: randomID(),
        question: "What is the capital of Germany",
        answers: ["Berlin", "Hamburg", "Munich", "Cologne"],
        correctAnswer: "Berlin",
        tags: ["Europe", "Germany", "Geography", "Cities"],
        groups: { continent: "Europe", country: "Germany", category: "Geography", subcategory: "Cities", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Berlin"
    }, {
        id: randomID(),
        question: "Who was first president of the USA",
        answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John F. Kennedy"],
        correctAnswer: "George Washington",
        tags: ["USA", "History", "Politics"],
        groups: { continent: "North America", country: "USA", category: "History", subcategory: "Politics", difficulty: "easy", period: "18th century" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/George_Washington"
    },
    {
        id: randomID(),
        question: "Who was first roman emperor",
        answers: ["Augustus", "Tiberius", "Caligula", "Claudius"],
        correctAnswer: "Augustus",
        tags: ["History", "Rome"],
        groups: { continent: "Europe", country: "Rome", category: "History", subcategory: "Politics", difficulty: "medium", period: "1st century BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Augustus"
    },
    {
        id: randomID(),
        question: "Who was first chinese emperor",
        answers: ["Qin Shi Huang", "Shi Huangdi", "Wu Zetian", "Ying Zheng"],
        correctAnswer: "Qin Shi Huang",
        tags: ["History", "China"],
        groups: { continent: "Asia", country: "China", category: "History", subcategory: "Politics", difficulty: "hard", period: "3rd century BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Qin_Shi_Huang"
    },
    {
        id: randomID(),
        question: "Who was first egyptian pharaoh",
        answers: ["Menes", "Narmer", "Khufu", "Thutmose III"],
        correctAnswer: "Menes",
        tags: ["History", "Egypt"],
        groups: { continent: "Africa", country: "Egypt", category: "History", subcategory: "Politics", difficulty: "medium", period: "3rd millennium BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Menes"
    },
    {
        id: randomID(),
        question: "Who was first greek king",
        answers: ["Agamemnon", "Aristodemus", "Aristomenes", "Ariston"],
        correctAnswer: "Agamemnon",
        tags: ["History", "Greece"],
        groups: { continent: "Europe", country: "Greece", category: "History", subcategory: "Politics", difficulty: "medium", period: "13th century BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Agamemnon"
    },
    {
        id: randomID(),
        question: "What is biggest lake in USA",
        answers: ["Lake Superior", "Lake Michigan", "Lake Huron", "Lake Ontario"],
        correctAnswer: "Lake Superior",
        tags: ["USA", "Geography", "Lakes"],
        groups: { continent: "North America", country: "USA", category: "Geography", subcategory: "Lakes", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Lake_Superior"
    },


    {
        id: randomID(),
        question: "What is tallest building in the world",
        answers: ["Burj Khalifa", "Shanghai Tower", "Abraj Al-Bait Clock Tower", "Ping An Finance Center"],
        correctAnswer: "Burj Khalifa",
        tags: ["Architecture", "Dubai"],
        groups: { continent: "Asia", country: "Dubai", category: "Art", subcategory: "Architecture", difficulty: "hard", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Burj_Khalifa"
    },
    {
        id: randomID(),
        question: "Who was winner of 2018 FIFA World Cup",
        answers: ["France", "Croatia", "Belgium", "England"],
        correctAnswer: "France",
        tags: ["Sports", "France"],
        groups: { continent: "Europe", country: "France", category: "Sports", subcategory: "Football", difficulty: "easy", period: "2018" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/2018_FIFA_World_Cup"
    },
    {
        id: randomID(),
        question: "Who was winner of 2021 F1 World Championship",
        answers: ["Lewis Hamilton", "Max Verstappen", "Valtteri Bottas", "Charles Leclerc"],
        correctAnswer: "Lewis Hamilton",
        tags: ["Sports", "England"],
        groups: { continent: "Europe", country: "England", category: "Sports", subcategory: "Formula 1", difficulty: "easy", period: "2021" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship"
    },
    {
        id: randomID(),
        question: "Who was winner of 2018 UEFA Champions League",
        answers: ["Real Madrid", "Liverpool", "Bayern Munich", "Juventus"],
        correctAnswer: "Real Madrid",
        tags: ["Sports", "Spain"],
        groups: { continent: "Europe", country: "Spain", category: "Sports", subcategory: "Football", difficulty: "easy", period: "2018" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/2018_UEFA_Champions_League_Final"
    },
    {
        id: randomID(),
        question: "Who won the battle of Hastings",
        answers: ["William the Conqueror", "Harold Godwinson", "Harold II", "Edward the Confessor"],
        correctAnswer: "William the Conqueror",
        tags: ["History", "England"],
        groups: { continent: "Europe", country: "England", category: "History", subcategory: "Military", difficulty: "medium", period: "1066" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Battle_of_Hastings"

    },
    {
        id: randomID(),
        question: "Who won the battle of Marathon",
        answers: ["Persians", "Greeks", "Spartans", "Athenians"],
        correctAnswer: "Greeks",
        tags: ["History", "Greece"],
        groups: { continent: "Europe", country: "Greece", category: "History", subcategory: "Military", difficulty: "easy", period: "490 BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Battle_of_Marathon"
    },
    {
        id: randomID(),
        question: "Who won the battle of Thermopylae",
        answers: ["Persians", "Greeks", "Spartans", "Athenians"],
        correctAnswer: "Persians",
        tags: ["History", "Greece"],
        groups: { continent: "Europe", country: "Greece", category: "History", subcategory: "Military", difficulty: "medium", period: "480 BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Battle_of_Thermopylae"
    },
    {
        id: randomID(),
        question: "What was name of first catapult,used by Romans",
        answers: ["Onager", "Trebuchet", "Ballista", "Scorpion"],
        correctAnswer: "Onager",
        tags: ["History", "Greece"],
        groups: { continent: "Europe", country: "Rome", category: "History", subcategory: "Military", difficulty: "medium", period: "4th century BC" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Onager_(catapult)"
    },
    {
        id: randomID(),
        question: "What was name of commander of Roman army in battle of Cannae",
        answers: ["Scipio Africanus", "Gaius Marius", "Gaius Julius Caesar", "Publius Cornelius Scipio"],
        correctAnswer: "Gaius Marius",
        tags: ["History", "Rome"],
        groups: { continent: "Europe", country: "Rome", category: "History", subcategory: "Military", difficulty: "medium", period: "216 BC" },
    },


    {
        id: randomID(),
        question: "Who was first king of England",
        answers: ["Aethelred the Unready", "Aethelstan", "Edmund Ironside", "Edward the Confessor"],
        correctAnswer: "Aethelred the Unready",
        tags: ["History", "England"],
        groups: { continent: "Europe", country: "England", category: "History", subcategory: "Politics", difficulty: "medium", period: "871" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Aethelred_the_Unready"
    },
    {
        id: randomID(),
        question: "What is biggest country in South America",
        answers: ["Brazil", "Argentina", "Colombia", "Peru"],
        correctAnswer: "Brazil",
        tags: ["South America", "Geography", "Countries"],
        groups: { continent: "South America", country: "Brazil", category: "Geography", subcategory: "Countries", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Brazil"

    },
    {
        id: randomID(),
        question: "What is biggest country in Africa",
        answers: ["Algeria", "Nigeria", "Egypt", "Sudan"],
        correctAnswer: "Algeria",
        tags: ["Africa", "Geography", "Countries"],
        groups: { continent: "Africa", country: "Algeria", category: "Geography", subcategory: "Countries", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Algeria"
    },
    {
        id: randomID(),
        question: "What is largest country in Europe",
        answers: ["Russia", "France", "Germany", "Ukraine"],
        correctAnswer: "Russia",
        tags: ["Europe", "Geography", "Countries"],
        groups: { continent: "Europe", country: "Russia", category: "Geography", subcategory: "Countries", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Russia"
    },
    {
        id: randomID(),
        question: "What is largest country in Asia",
        answers: ["Russia", "China", "India", "Indonesia"],
        correctAnswer: "Russia",
        tags: ["Asia", "Geography", "Countries"],
        groups: { continent: "Asia", country: "Russia", category: "Geography", subcategory: "Countries", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Russia"
    },
    {
        id: randomID(),
        question: "Which city is capital of Australia",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: "Canberra",
        tags: ["Australia", "Geography", "Cities"],
        groups: { continent: "Australia", country: "Australia", category: "Geography", subcategory: "Cities", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Canberra"
    },
    {
        id: randomID(),
        question: "Which city is capital of Canada",
        answers: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
        correctAnswer: "Ottawa",
        tags: ["Canada", "Geography", "Cities"],
        groups: { continent: "North America", country: "Canada", category: "Geography", subcategory: "Cities", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Ottawa"
    },
    {
        id: randomID(),
        question: "Which city is capital of USA",
        answers: ["Washington", "New York", "Los Angeles", "Chicago"],
        correctAnswer: "Washington",
        tags: ["USA", "Geography", "Cities"],
        groups: { continent: "North America", country: "USA", category: "Geography", subcategory: "Cities", difficulty: "easy", period: "any" },
        bookmarked: false,
        link: "https://en.wikipedia.org/wiki/Washington,_D.C."
    },




];



