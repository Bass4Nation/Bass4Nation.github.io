

const Card = (props) => {
  const { title, text, image } = props;
  return (
    <div className="card">
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={image} alt="image" />
    </div>
    );
}

export default Card;