import taskServices from "../services/task.services.js";

const getTasks = (req, res, next) => {
    try{
        const allTasks = db;
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
}

const addTask = (req, res, next) => {
    try{
        const params = req.body;
        const newTask = {
            id: Math.max(...db.map( (user) => user.id )) + 1, 
            title: params.title.trim(),
            completed: false
          };
        db.push(newTask); 

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
}

const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

export default {
    getTasks,
    addTask,
    errorHandler
}