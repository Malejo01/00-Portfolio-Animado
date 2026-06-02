import React from "react"
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "./hoc"
import { certificates } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { useLanguage } from "../context/LanguageContext"

const CertificateCard = ({ index, title, provider, year, icon, pdf }) => {
  const { t } = useLanguage();
  const isPdf = pdf.toLowerCase().endsWith('.pdf');

  const getCertKey = (title) => {
    if (title.includes("SQL")) return "sql";
    if (title.includes("Vue")) return "vue";
    if (title.includes("C#") || title.includes("NET")) return "dotnet";
    if (title.includes("React")) return "react";
    return "";
  };

  const certKey = getCertKey(title);
  const translatedTitle = certKey ? t(`certificates.certs.${certKey}`) : title;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[280px] w-full flex flex-col justify-between min-h-[340px]"
      >
        <div>
          <div 
            onClick={() => window.open(pdf, "_blank")}
            className="relative w-full h-[150px] cursor-pointer overflow-hidden rounded-2xl bg-black/25"
          >
            {isPdf ? (
              <iframe
                src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full pointer-events-none border-none"
                title={title}
              />
            ) : (
              <img
                src={pdf}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}

            {/* Floating platform icon on top-right */}
            <div className="absolute top-3 right-3 z-10 pointer-events-none">
              <div className="bg-black/75 backdrop-blur-sm w-9 h-9 rounded-full flex justify-center items-center shadow-lg border border-white/10">
                <img
                  src={icon}
                  alt={provider}
                  className="w-5.5 h-5.5 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[18px] leading-[22px]">{translatedTitle}</h3>
            <p className="mt-2 text-secondary text-[14px]">{provider}</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-[12px] text-secondary font-semibold bg-black/20 py-1 px-2.5 rounded-md">
            {year}
          </span>
          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915eff] hover:text-[#7c4dff] text-[14px] font-semibold flex items-center gap-1 transition duration-300 cursor-pointer"
            >
              {t('certificates.verCredencial')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Certificates = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('certificates.subtext')}</p>
        <h2 className={styles.sectionHeadText}>{t('certificates.title')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Certificates, "certificates")
