import React,{useState} from "react";
import plusSign from "../../assets/plus.svg";
import { Link } from "react-router-dom";
import "../../styles/EmployeeLeaveBoard.css";
import { employeeLeaveLenght } from "../../db";
import EmployeeLeaveTable from "../../componenets/employee-component/EmployeeLeaveTable";
import LeaveModal from "../../componenets/employee-component/LeaveModal";

const EmployeeLeaveBoard = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <main className="pt-5  employee-leave-board-wrapper">
        <section className=" employee-leave-board-section-1 pt-1 ">
          <div className="d-flex justify-content-between flex-wrap align-items-center">
            <h2 className=" employee-leave-board-section-1-header">
              Leaveboard
            </h2>
            <button onClick={() => setModalShow(true)} className="request-leave-btn d-flex gap-2 justify-content-center align-items-center">
              <img src={plusSign} alt="" />
              <Link className="request-leave-link">Request Leave</Link>
            </button>
          </div>
          <div className="employee-leave-section-1-div justify-content-between align-items-center pt-5">
            {employeeLeaveLenght?.map((event) => {
              const {id,title,count,img} = event
              return (
                <div className="employee-leave-event-wrapper" key={id}>
                  <div className="employee-leave-event-wrapper-inner d-flex justify-content-between align-items-center">
                    <div className="text-center">
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
          <LeaveModal show={modalShow} onHide={() => setModalShow(false)} />
        </section>
        <section className="employee-leave-board-section-2">
                        <h2 className="py-4">Leave History</h2>
          <EmployeeLeaveTable/>
        </section>
      </main>
    </>
  );
};

export default EmployeeLeaveBoard;
