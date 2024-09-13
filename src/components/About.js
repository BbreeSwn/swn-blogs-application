import about from "../images/about.svg"
export default function About() {
  return (
    <div className="container">
      <h1 className="title">About me</h1>
      <img src={about} alt="about" />
    </div>
  );
}
