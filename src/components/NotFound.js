import notFound from "../images/notfound.svg"


export default function NotFound() {
  return (
    <div className="container">
    <h3 className="title">404 Not Found Page</h3>
    <img src={notFound} alt="notFound" />
    </div>
  )
}
