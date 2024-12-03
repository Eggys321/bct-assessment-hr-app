import React from 'react';
import "../../styles/EmployeeTaskBoard.css";
import { employeeTaskLenght } from '../../db';
import EmployeeTaskTable from '../../componenets/employee-component/EmployeeTaskTable';
const EmployeeTaskBoard = () => {
  return (
    <>
      <main className="pt-5  employee-task-board-wrapper">
        <section className=" employee-task-board-section-1 pt-1 ">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2 className=" employee-task-board-section-1-header">Taskboard</h2>
            </div>
          </div>
          <div className="employee-task-section-1-div justify-content-between align-items-center pt-5">
            {employeeTaskLenght?.map((event) => {
              const {id,title,count,img} = event
              return (
                <div className="employee-task-event-wrapper" key={id}>
                  <div className="employee-task-event-wrapper-inner d-flex justify-content-between align-items-center">
                    <div>
                      <h5> {title} </h5>
                      <h1> {count} </h1>
                    </div>
                    <div>
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <EmployeeTaskTable/>
        </section>
      </main>
    </>
  )
}

export default EmployeeTaskBoard