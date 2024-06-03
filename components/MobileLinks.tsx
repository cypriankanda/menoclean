import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { links } from "../utils/utils";
const MobileLinks = () => {
  return (
    <div className="flex md:hidden w-full z-50 justify-around items-center">
      <a href={` https://wa.me/${links.phone}`} target="_blank">
        <FaWhatsapp color="#008000" size={24} />
      </a>
      <a href={`mailto:${links.email}`} target="_blank">
        <MdOutlineMailOutline color="#008000" size={24} />
      </a>
      <a href={`tel:${links.phone}`} target="_blank">
        <FaPhone color="#008000" size={24} />
      </a>
    </div>
  );
};

export default MobileLinks;
