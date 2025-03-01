import style from "../Prescription.module.css";
import Accordion from "react-bootstrap/Accordion";

const MedicineAccordion = ({ medicine, index }) => {
  return (
    <Accordion.Item
      eventKey={index}
      className={style["div-articles-accordion-item"]}
    >
      <Accordion.Header>
        <span className={style["div-articles-accordion-item-span"]}>
          Rp/
        </span>
        {medicine.medicineName}  {medicine.dosage}  {medicine.dosageType}
      </Accordion.Header>
      <Accordion.Body className={style["div-articles-accordion-item-content"]}>
        Usage method? {medicine.instructions}
      </Accordion.Body>
      <Accordion.Body className={style["div-articles-accordion-item-content"]}>
        Intake? {medicine.admission}  {medicine.admissionType}
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default MedicineAccordion;