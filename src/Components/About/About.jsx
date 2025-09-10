import { Image } from "@chakra-ui/react";
import aboutImage from "../../assets/aboutme.png";
import './About.css'
function AboutMe() {
    return (
        <div className="About">
            <div className="CardContainer">
                <h2 className="tituloContainer">Por que Carol Artesanias</h2>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum reprehenderit sint sed praesentium perspiciatis deleniti? Commodi error eveniet, soluta obcaecati quo ipsum vitae voluptates pariatur iusto, eaque eos. Laborum, nemo inventore quia consectetur voluptate neque facere atque distinctio blanditiis fugit velit sed possimus unde, dicta reiciendis qui. Harum laudantium amet consectetur praesentium hic dolorum expedita possimus, ipsum iste temporibus? Atque sed aspernatur quisquam enim autem delectus consequuntur voluptate voluptatibus labore? Veritatis eaque amet nesciunt reiciendis odio, expedita accusamus, et itaque quos magnam eos quaerat ex ea numquam quam. Unde, temporibus! Exercitationem porro possimus accusantium nobis culpa, illum explicabo ex tempore.</p>
            </div>
            <div className="imagenContainer">
                <Image src={aboutImage} className="imgAbout"></Image>
            </div>
        </div>
    )
}
export default AboutMe;