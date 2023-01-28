import Headtitle from "../components/Headtitle";
import { cvTextEn, cvTextNo } from "./api/data/cv";

const CV = () => {
  // If you want to use Norwegian text instead of English, change the following line to cvTextNo
  // Should in the future be changed to a language selector/ switcher
  const cvText = cvTextEn;


  return (
    <>
      <Headtitle title="CV" />
      <section>
        <h1>Here is my resume</h1>
        {cvText.map((cv) => (
          <section key={cv.Name}>
            <p>Name: {cv.Name}</p>
            <p>Address: {cv.Address}</p>
            <p>Phone: <a href={"tel:"+ cv.Phone}>{cv.Phone}</a></p>
            <p>
              Email:
              <a href={"mailTo:" + cv.Email}>{cv.Email}</a>
            </p>
            <p>
              LinkedIn:
              <a href={cv.LinkedIn} target="_blank" rel="noopener noreferrer">
                {cv.Name}
              </a>
            </p>
            <p>
              Github:
              <a href={cv.Github} target="_blank" rel="noopener noreferrer">
                {cv.Username}
              </a>
            </p>
            <p>
              Portfolio:
              <a href={cv.Portfolio} target="_blank" rel="noopener noreferrer">
                {cv.Portfolio}
              </a>
            </p>
          </section>
        ))}
      </section>

      <section>
        <h1>Education</h1>
        {cvText[0].Education.map((education) => (
          <section key={education.id}>
            <h1>{education.title}</h1>
            <p>{education.year}</p>
            <p>{education.text}</p>
          </section>
        ))}
      </section>

      <section>
        <h1>Work Experience</h1>
        {cvText[0].WorkExperience.map((workExperience) => (
          <section key={workExperience.id}>
            <h1>{workExperience.title}</h1>
            <p>{workExperience.year}</p>
            <p>{workExperience.content}</p>
          </section>
        ))}
      </section>
      <section>
        <h1>Skills</h1>
        {cvText[0].Skills.map((skills) => (
          <section key={skills.id}>
            <h1>{skills.title}</h1>
            <p>{skills.year}</p>
            <p>{skills.content}</p>
          </section>
        ))}
      </section>


      <section>
        <h1>Download my Resume</h1>
        <a
          href="downloads/CV_Kristoffer_S_Soderkvist.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button>Download CV</button>
        </a>
        <embed
          src="downloads/CV_Kristoffer_S_Soderkvist.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </section>
    </>
  );
};

export default CV;
