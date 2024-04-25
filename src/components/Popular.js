import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"
import c8 from "../assets/c8.jpg"






function Popular(){
    return(
        <div class="popular">

        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
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


            <div class="coursecard">
                <img src={c5} alt="image1"></img>
                <h3>The Complete Python Bootcamp From Zero to Hero</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="coursecard">
                <img src={c6} alt="image2"></img>
                <h3>Automate the Boring Stuff with Python Programming</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="coursecard">
                <img src={c7} alt="image3"></img>
                <h3>100 Days of Code:The Complete Python Programming</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="coursecard">
                <img src={c8} alt="image4"></img>
                <h3>Machine Learning</h3>
                <p>col steelie</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>


    </div>


    )
}
export default Popular