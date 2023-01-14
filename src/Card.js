import './Card.css';

export default function Card({ image, text }) {
  return (
    <div className="imageButton">
      <img height="80" src={image} alt={text}></img>
      <p class="imageName">{text}</p>
    </div>
  );
}
