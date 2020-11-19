const Restaurant = require('../models/Jobs')

exports.viewCreateJob = (req, res) => res.render('job/createJob')

exports.createJob = async(req, res) => {

   
}

exports.jobsUser = (req, res) => res.render('job/jobs-user')

const App = async () => {
    
    try {

       const { jobTitle, jobDescription, skill } = req.body
       //const logo = req.file.path
       await Jobs.create({ jobTitle, jobDescription, skill })
       res.render('job/jobs-user')
       
       const job = await Job.create({
        title: "Hawaiian pizza",
        level: "Amateur Chef",
        ingredients: ["pineapple", "ham", "tomato sauce", "cheese"],
        cuisine: "American",
        dishType: "snack",
        creator: "PizzaMan",
        duration: 25,
      });
      console.log(
        `Added a new recipe called: ${recipe.title}, from the ${recipe.cuisine} cuisine.`
      );
      const manyRecipes = await Recipe.insertMany(data);
      console.log(`We added all new recipes ${manyRecipes}`);
    } catch (error) {
      console.log(error);
    }
    // this will update the first object with title
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" }, // Dónde cambiamos algo
      {
        duration: 100, // Qué cambiamos (de 220 a 100)
      },
      { new: true } // Obligatorio para que imprima el nuevo objeto
    );
  
    const deleteOne = await Recipe.deleteOne({ title: "Carrot Cake" });
  
    db.connection.close(() => {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
    });
  };
  
  App();