import { TitleSection } from "../../partials/TitleSection";
import { ContactContainer } from "./styles";

import { IoLocationOutline } from "react-icons/io5"; /* Location icon */
import { IoMailOutline } from "react-icons/io5"; /* Email icon */
import { BsWhatsapp } from "react-icons/bs"; /*Whatsapp icon */
import Link from "next/link";
import { useContext } from "react";
import { usePageContext } from "../../../contexts/PageContext";
import { useTranslation } from "next-i18next";

export const Contact = () => {
  const { contactRef } = usePageContext();
  const { t } = useTranslation();

  return (
    <ContactContainer ref={contactRef}>
      <div className="content">
        <div className="title-contact">
          <p>{t("letStart")}</p>
          <TitleSection>{t("contact")}</TitleSection>
        </div>
        <div className="content-contact">
          <Link
            href={
              "https://www.google.com.br/maps/place/Salvador,+BA/@-12.9438014,-38.5111593,13.17z/data=!4m6!3m5!1s0x716112050422ebd:0xf71c84369573db9d!8m2!3d-12.9777378!4d-38.5016363!16s%2Fg%2F1ymsvkdl1?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <a className="card-contact" title={t("locationTitle")}>
              <IoLocationOutline size={40} className="icon-cardContact" />
              <h4>{t("location")}</h4>
              <p>Salvador, BA</p>
              <p>Brasil</p>
            </a>
          </Link>
          <Link
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCXCSJjHSxsTZscRMmmKHvRzcrDTpQjptVxVsCtFRcxVVSmkNDvWrhcmNhrLCkQVzSGbc"
            }
          >
            <a className="card-contact" title={t("sendEmailTitle")}>
              <IoMailOutline size={40} className="icon-cardContact" />
              <h4>E-mail</h4>
              <p>wesleyguerra9@gmail.com</p>
            </a>
          </Link>
          <Link href={"https://wa.me/5571992538054"}>
            <a className="card-contact" title={t("contactTitle")}>
              <BsWhatsapp size={40} className="icon-cardContact" />
              <h4>Whatsapp</h4>
              <p>(+55) 71 99253-8054</p>
            </a>
          </Link>
        </div>
      </div>
    </ContactContainer>
  );
};
