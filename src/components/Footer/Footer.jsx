import logo from "../../assets/logo/Group 1.svg"
import "./style.css"


const Footer = () => {
    return (
        <div className="foot">
<footer>
            <div className="all">
                <div className="small">
                <div className="little">
                    <img src={logo} alt="" />
                    <h2 className="with"><b>HKinvision</b> </h2>
                </div>
                <div className="word">
                    <h3 className="word1">The World's Best Luxury</h3>
                    <h3 className="word1">Car's Dealing Platform</h3>
                </div>
                </div>
                <div className="big">
                    <div className="one">
                        <h2 className="support">Company</h2>
                        <h3 className="faq">Abaut Us</h3>
                        <h3 className="faq">Product</h3>
                        <h3 className="faq">Testimonial</h3>
                    </div>
                    <div className="one">
                        <h2 className="support">Support</h2>
                        <h3 className="faq">FAQ</h3>
                        <h3 className="faq">Privacy Policy</h3>
                        <h3 className="faq">Terms of Services</h3>
                    </div>
                    <div className="one">
                        <h2 className="support">Category</h2>
                        <h3 className="faq">Super Cars</h3>
                        <h3 className="faq">Sport Cars</h3>
                        <h3 className="faq">More Cars</h3>
                    </div>
                    <div className="one">
                        <h2 className="insta1"><b>Facebook</b></h2>
                        <h3 className="insta"><b>Instagram</b></h3>
                        <h3 className="insta"><b>You Tube</b></h3>
                    </div>
                </div>
            </div>
           
        </footer>
 <div className="ending">

 <p>©2022 HKInvestor. All right reserved</p>
</div>
        </div>
        

    )
}

export default Footer