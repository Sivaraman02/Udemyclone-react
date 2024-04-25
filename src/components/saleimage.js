
import sale from "../assets/sale-image.jpg"

function Saleimage(){
    return(
        <div class="sale-image">
        <img class="sale-image__img" src={sale} alt="img"></img>
        <div class="sale-image__offer">
            <h1 class="sale-image__offer-1">Udemy Flash Sale! 24hrs to save</h1>
            <p class="sale-image__offer-2">Get the Top Courses for just 499. Just One day to save but lifetime to learn
            </p>
        </div>
    </div>
    )
}
export default Saleimage