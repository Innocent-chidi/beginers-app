import "../css/About.css"
import aboutimage from "../images/about.jpg"
const About = () => {
  return (
    <div className="about">
      <div className="about-text">
          <p>Metals for modern life
             For a century, Boliden has been exploring, 
             extracting and processing base metals and 
             precious metals. Our production is based on 
             experience, innovation and modern technology,
             developed in collaboration with Nordic
             technology and engineering companies. Today,
             we are an industry leader in terms of 
             sustainable metal production from deposits to recycling used metals.</p>
          <p>The best things about working here are the
             personal development and earning the trust 
             to take on major challenges, and that
             Boliden's and our contractors' expertise can
             all be found in one place. Best of all are the 
             positive, problem-solving atmosphere within the 
             project group and meeting all the different
             people from inside and outside the company.</p>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="about" />
      </div>
    </div>
  )
}

export default About