import React, { useState } from "react";
import Employees from "./Employees";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import Edit from "./Edit";

export default function Home() {
 const [employees, setEmployees] = useState(Employees);
 const [editingEmployee, setEditingEmployee] = useState(null);
 const [showEdit, setShowEdit] = useState(false);

  const handleSave = (updatedData) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === editingEmployee.id
        ? { ...employee, ...updatedData }
        : employee
    );
    setEmployees(updatedEmployees);
    setEditingEmployee(null);
    setShowEdit(false);
  };

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDeleteId, setEmployeeToDeleteId] = useState(null);


  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setShowEdit(true);
  };

const handleDelete = (id) => {
    setEmployeeToDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeToDeleteId
    );
    setEmployees(updatedEmployees);
    setShowDeleteModal(false);
  };



  const sortedEmployees = [...employees].sort((a, b) => a.id - b.id);

  return (
    <div className="container">
      <h1>The Table is given Below</h1>
      <br />
      <Table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {sortedEmployees && sortedEmployees.length > 0 ? (
            sortedEmployees.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => handleEdit(item)}
                    >
                      EDIT
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">No Record Found</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Link to={"/create"}>
        <button type="button" className="btn btn-outline-success">
          CREATE
        </button>
      </Link>

      <Edit
        show={showEdit}
        handleClose={() => setShowEdit(false)}
        handleSave={handleSave}
        editingEmployee={editingEmployee}
        setEditingEmployee={setEditingEmployee}
      />

      <DeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={confirmDelete}
      />
    </div>
  );
}
