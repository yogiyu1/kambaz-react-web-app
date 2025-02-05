import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="position-relative me-1">
      <span className="text-success position-center fs-5">
        <FaCheckCircle />
      </span>
      <span className="text-white fs-6">
        <FaCircle />
      </span>
    </span>
  );
}
