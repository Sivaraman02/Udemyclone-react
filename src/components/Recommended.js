import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"


function Recommended(){
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recommended-container">
            <div class="coursecard">
                <img src={c1} alt="image1"></img>
                <h3>Python Data Visualisation Masterclass</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="coursecard">
                <img src={c2} alt="image2"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="coursecard">
                <img src={c3} alt="image3"></img>
                <h3>Web Development Bootcamp 2023</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="coursecard">
                <img src={c4} alt="image4"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>


    </div>
    )
}
export default Recommended