import Headtitle from "../components/Headtitle";
import { cvTextEn, cvTextNo } from "./api/data/cv";

const CV = () => {
  // If you want to use Norwegian text instead of English, change the following line to cvTextNo
  // Should in the future be able to change language selector/ switcher
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
            <p>
              Phone: <a href={"tel:" + cv.Phone}>{cv.Phone}</a>
            </p>
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
        {cvText[0].Languages.map((languages) => (
          <section key={languages.id}>
            <h1>{languages.title}</h1>
            <p>{languages.text}</p>
          </section>
        ))}
      </section>

      <section>
        {cvText[0].Platforms.map((platforms) => (
          <section key={platforms.id}>
            <h1>{platforms.title}</h1>
            <p>{platforms.text}</p>
          </section>
        ))}
      </section>

      <section>
        {cvText[0].Tools.map((tools) => (
          <section key={tools.id}>
            <h1>{tools.title}</h1>
            <p>{tools.text}</p>
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
        {cvText[0].Intrests.map((intrests) => (
          <section key={intrests.id}>
            <h1>{intrests.title}</h1>
            <p>{intrests.text}</p>
          </section>
        ))}
      </section>
      <section>
        <h1>Driving Licenses</h1>
        {cvText[0].DrivingLicense.map((drivingLicense) => (
          <section key={drivingLicense.id}>
            <h1>{drivingLicense.title}</h1>
            <p>{drivingLicense.text}</p>
          </section>
        ))}
      </section>
      <section>
        {cvText[0].AdditionalInformation.map((additionalInformation) => (
          <section key={additionalInformation.id}>
            <h1>{additionalInformation.title}</h1>
            <p>{additionalInformation.text}</p>
          </section>
        ))}
      </section>

      <section>
        <h1>Download my Resume</h1>
        <a
          href="downloads/CV_Kristoffer_Snopestad_Søderkvist.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button>Download CV</button>
        </a>
      </section>
    </>
  );
};

export default CV;
