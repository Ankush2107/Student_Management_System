import Students from "../models/current.model.js"

const getStudents = async (req, res) => {
    try {
      const students = await Students.find({}).sort({createdAt: -1});
      res.status(200).json(students);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Something went wrong'})
    }
      
}

const getStudent = async (req, res) => {
    const {id} = req.params

    // if id is not correct
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such id incorrect id"})
    }

    const student = await Students.findById(id);
    if(!student) {
        return res.status(404).json({error: "No such student"})
    }
    res.status(200).json(student);
}

// create new student
const createStudent = async (req, res) => {
    const {name, currentClass, currentSession, currentFees} = req.body;
    // add doc to db
    try{
        const student = await Students.create({ name, currentClass, currentSession, currentFees})
        res.status(200).json(student)
    } catch(error) {
        res.status(400).json({error: error.message})
    };
};

// delete a student
const deleteStudent = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such student incorrect Id'})
    }

    const student = await Students.findOneAndDelete({_id: id});

    if(!student) {
        return res.status(400).json({error: "No such student"})
    }

    res.status(200).json(student);
}

const updateStudents = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such student incorrect Id'})
    }

    const student = await Students.findOneAndUpdate({_id: id}, {...req.body})

    if(!student) {
        return res.status(400).json({error: "No such student"})
    }

    res.status(200).json(student);
}

export {
    getStudents,
    getStudent,
    createStudent,
    deleteStudent,
    updateStudents
}