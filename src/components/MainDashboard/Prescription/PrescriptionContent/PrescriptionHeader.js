import { useReduxState } from "../../../../hooks/useReduxState";
import style from "../Prescription.module.css";

const PrescriptionHeader = () => {
  const currentPrescription = useReduxState(
    (state) => state.prescriptions.prescription
  );

  return (
    <div className={style["div-header"]}>
      <h2 className={style["div-header-main-title"]}>Prescription Form</h2>
      <h3 className={style["div-header-title"]}>
        Ministry of Health
      </h3>
      <p>
        Dr: {currentPrescription.prescribedBy.name}{" "}
        {currentPrescription.prescribedBy.lastName}
      </p>
      <p>UIN: {currentPrescription.prescribedBy.doctorId}</p>
      <p>
        &#8470; Medical Practice: {currentPrescription.prescribedBy.hospitalName}
      </p>
      <p>Email: {currentPrescription.prescribedBy.email}</p>
    </div>
  );
};

export default PrescriptionHeader;