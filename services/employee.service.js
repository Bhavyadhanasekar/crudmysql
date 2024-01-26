const db=require('../db')

module.exports.getAllEmployes = async ()=>{
    const [rows]=  await db.query("SELECT * FROM employe_db.employes")
    //.catch(err => console.log(err))
    return rows;
}

module.exports.getEmployeById = async (id)=>{
    const [rows]=  await db.query("SELECT * FROM employe_db.employes where id = " + id)
    //.catch(err => console.log(err))
    return rows;
}

module.exports.DeleteEmployeeBYID = async(id)=>{
    const [rows]= await db.query("DELETE  FROM employe_db.employes where id = "+ id)
    return rows;
}

module.exports.addoreditEmployee = async(obj,emp_id=0)=>{
    const [data]= await db.query("call usp_employeedata_add_or_edit (?,?,?,?)",
    [emp_id,obj.empname, obj.employecode, obj.empsalary])
    return data;
}