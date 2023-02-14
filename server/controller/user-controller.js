import User from '../schema/user-schema.js'

export const addUser = async (req, res) => {
     const user = req.body
     const newuser = new User(user)
     try {
          await newuser.save()
          res.status(201).json(newuser)
     } catch (error) {
          res.status(409).json({ message: error.message })
     }
}

export const getUsers = async (req, res) => {
     try {
          const users = await User.find({})
          res.status(200).json(users)
     } catch (error) {
          res.status(409).json({ message: error.message })
     }
}


export const getUser = async (req, res) => {
     console.log(req.params.id)
     try {
          // const user = await User.find({_id:req.params.id})

          const user = await User.findById(req.params.id)
          res.status(200).json(user)
     } catch (error) {
          res.status(409).json({ message: error.message })
     }

}



export const editUser = async (req, res) => {
     const user = req.body;
     const edituser = new User(user)
     try {
          // const user = await User.find({_id:req.params.id})
          await User.updateOne({ _id: req.params.id }, edituser)
          res.status(200).json(edituser)
     } catch (error) {
          res.status(409).json({ message: error.message })
     }
}




export const deleteUser=async(req,res)=>{
     try{
          await User.deleteOne({_id:req.params.id})
          res.status(200).json({message:"User Deleted Success"})


     }catch(error){
          res.status(409).json({ message: error.message })


     }
}