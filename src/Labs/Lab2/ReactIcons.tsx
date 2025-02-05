import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4">
      <h3>React Icons Sampler</h3>
      <div className="d-flex">
        <span className="fs-3 text-dark"><VscAccount /></span>
        <span className="fs-3 text-dark"><AiOutlineDashboard /></span>
        <span className="fs-3 text-dark"><FaBookBible /></span>
        <span className="fs-3 text-dark"><FaCalendar /></span>
        <span className="fs-3 text-dark"><FaEnvelopeOpenText /></span>
        <span className="fs-3 text-dark"><FaRegClock /></span>
      </div>
    </div>
  );
}
