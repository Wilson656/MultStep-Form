import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import "./Steps.css";

const Steps = ({ currentSteps }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Indentificação</p>
      </div>
      <div className={`step ${currentSteps >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentSteps >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
