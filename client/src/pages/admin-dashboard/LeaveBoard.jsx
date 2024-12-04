import React,{useState} from "react";
import "../../styles/LeaveBoard.css";
import { leaveLenght } from "../../db";
import LeaveTable from "../../componenets/LeaveTable";
import plusSign from "../../assets/plus.svg";
import { Link } from "react-router-dom";
import LeaveModal from "../../componenets/employee-component/LeaveModal";

const LeaveBoard = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <main className="pt-5 leave-board-wrapper">
        <section className="leave-board-section-1 pt-1">
          <div className="d-md-flex justify-content-between align-items-center">
            <div>
              <h2 className="task-board-section-1-header">Leaveboard</h2>
              <h5>Dashboard/Leaveboard</h5>
            </div>
            <button onClick={() => setModalShow(true)}  className="request-leave-btn d-flex gap-2 justify-content-center align-items-center">
              <img src={plusSign} alt="" />
              <Link className="request-leave-link">Request Leave</Link>
            </button>
          </div>
          <div className="leave-board-section-1-div  pt-5">
            {leaveLenght.map((leave) => {
              const { id, title, count, img } = leave;

              return (
                <div className="leave-board-wrapper" key={id}>
                  <div className="leave-board-wrapper-inner d-flex justify-content-center">
                    <div className="text-center d-flex gap-5 align-items-center">
                      <div>
                        <h5>{title} </h5>
                        <h1> {count} </h1>
                      </div>
                      <div>
                        <img src={img} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <LeaveModal show={modalShow} onHide={() => setModalShow(false)} />

        </section>
        <section>
          <LeaveTable />
        </section>
      </main>
    </>
  );
};

export default LeaveBoard;
