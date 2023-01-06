import Image from "next/image";

const Card = (props) => {
  const { title, text, image } = props;
  return (
    <div className="card">
        <h3>{title}</h3>
        <p>{text}</p>
        <Image src={image} alt="image" 
        width="100" 
        height={100}/>
    </div>
    );
}

export default Card;