import mongoose from "mongoose"


const Connection = (Dbname) => {
     const URL = `mongodb://127.0.0.1:27017/${Dbname}`
     try {
          mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
          console.log("Database Connected")
     } catch (error) {
          console.log("something error", error)
     }
}

export default Connection