import '../css/tracks.css'
import { useNavigate } from "react-router-dom";

export default function Tracks(){
    const navigate = useNavigate();
    var tracks = [{
        skill:"Backend",
        img:'',
    },{
        skill:"Frontend",
        img:''
    }]
    return(
        <div className="app">
        <div className="card" onClick={()=> navigate("/backend")}>
          {/* <img src="backend_image.jpg" alt="Backend" /> */}
          <h2>Backend</h2>
          <p>Explore the world of backend development.</p>
        </div>
        <div className="card">
          {/* <img src="frontend_image.jpg" alt="Frontend" /> */}
          <h2>Frontend</h2>
          <p>Create beautiful and responsive user interfaces.</p>
        </div>
      </div>
    )
    
}