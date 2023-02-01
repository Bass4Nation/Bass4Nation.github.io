import Image from 'next/image';
import Headtitle from '../components/Headtitle';
import { aboutmeText } from './api/data/aboutme';


const AboutMe = () => {
  return (
    <div>
        <Headtitle title="About Me" />
      <section>
        {aboutmeText.map((item) => (
            <section key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                {item?.images?.map((image) => (
                    <Image key={image.key} src={image.src} alt={image.alt} width={image.width} height={image.height} />
                ))}
            </section>
        ))}
      </section>
    </div>
  );
};

export default AboutMe;
