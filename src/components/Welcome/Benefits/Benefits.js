import {
  faAnchor,
  faCommentMedical,
  faDatabase,
  faGlobe,
  faHandHoldingHeart,
  faUpload,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BenefitCard from "./BenefitCard"
import style from "./Benefits.module.css"

const cardList = [
  {
    title: "Experts",
    info: "All doctors registered with the Bulgarian Medical Council, providing convenient and confidential healthcare.",
    icon: <FontAwesomeIcon icon={faGlobe} />,
  },
  {
    title: "Confidentiality",
    info: "The same confidentiality between doctor and patient as in a regular face-to-face consultation, you will be in good hands.",
    icon: <FontAwesomeIcon icon={faAnchor} />,
  },
  {
    title: "Care",
    info: "Website created and managed by medical professionals, patient safety is always our priority.",
    icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
  },
  {
    title: "Dosages",
    info: "Each prescription provides clear and accurate instructions for dosage, method of administration, and possible side effects.",
    icon: <FontAwesomeIcon icon={faDatabase} />,
  },
  {
    title: "Advice",
    info: "The site provides educational materials and articles on health to encourage users to better understand their health needs.",
    icon: <FontAwesomeIcon icon={faCommentMedical} />,
  },
  {
    title: "Electronic Exchange",
    info: "Possibility for electronic sharing of medical prescriptions with doctors and pharmacies, for faster and more efficient service.",
    icon: <FontAwesomeIcon icon={faUpload} />,
  },
]

const Benefits = () => {
  return (
    <section>
      <div className={["feat bg-gray pt-5 pb-5"]}>
        <div className={["container"]}>
          <div className={["row"]}>
            <div className={style["section-head"] + [" col-sm-12"]}>
              <h4>
                <span>Why choose</span> us?
              </h4>
              <p>
                Choose our e-prescription platform for an optimized and secure healthcare experience. 
                Take advantage of our expertise, ensuring accuracy in prescriptions, while enjoying 
                the convenience of efficient processes and unlimited accessibility anywhere and anytime. 
                Improve your well-being through a caring and compassionate approach to prescription management.
              </p>
            </div>
            {cardList.map((data) => (
              <BenefitCard data={data} key={data.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits