import Accordion from 'react-bootstrap/Accordion';
import style from "./CreatePrescriptionTemplate.module.css";
import Button from 'react-bootstrap/Button';

const CreatePrescriptionTemplateItem = (
    {medicineName, dosage, dosageType, admission, admissionType, instructions, index, onDeleteMedicineItemHandler, onEditItemHandler}
) => {
    return (
        <Accordion.Item eventKey={index}>
              <Accordion.Header><span className={style["div-articels-accordion-item-span"]}>Rx/</span> <span className={style['ingredients']}>{medicineName} {dosage}{dosageType}.</span></Accordion.Header>
                   <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                        How many times daily?  {admission}{admissionType}.
                            </Accordion.Body>
                            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                                <span>Instructions for use? {instructions}.</span>
                             
                              <br/>
                               <Button variant="outline-success" onClick={() => onEditItemHandler(index)}>Edit</Button>
                               <Button variant="outline-danger" onClick={() => onDeleteMedicineItemHandler(index)}>Delete</Button>
                            </Accordion.Body>
        </Accordion.Item>
    )
}

export default CreatePrescriptionTemplateItem;