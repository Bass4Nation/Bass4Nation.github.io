import Image from 'next/image';

const infoList = [
    {
        title: 'School',
        content: 'I am currently studying at the University of Østfold in Halden, Norway. I am studying to become a software developer.',
        images: [
            {
                src: '/images/uo.png',
                alt: 'University of Østfold logo',
                width: 200,
                height: 200,
                key: 'uo'
            }
        ]
    },
    {
        title: 'Work',
        content: 'I am currently working as a student assistant at the University of Østfold in Halden, Norway. I am working as a student assistant in the department of computer science.',
        images: [
            {
                src: '/images/uo.png',
                alt: 'University of Østfold logo',
                width: 200,
                height: 200,
                key: 'uo'
            }
        ]
    },
    {
        title: 'Interests',
        content: 'I am a gamer, and I am also interested in programming, and I am also interested in music.',
        images: [
            {
                src: '/images/uo.png',
                alt: 'University of Østfold logo',
                width: 200,
                height: 200,
                key: 'uo'
            }
        ]
    }
];


const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>

      <section>
        {infoList.map((item) => (
            <section key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                {item.images.map((image) => (
                    <Image key={image.key} src={image.src} alt={image.alt} width={image.width} height={image.height} />
                ))}
            </section>
        ))}
      </section>
    </div>
  );
};

export default AboutMe;
