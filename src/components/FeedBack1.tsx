import Header from "./Header";
import LogoIcon from "../../public/Images/Header/Logo.png";
import ServiceCategories from "./Categories";
export default function FeedBack1(){
    return(
        <div>
            <Header logo={LogoIcon} />
            
            <div className="mx-4 my-12">
                <ServiceCategories />
                </div>
        </div>
    )
}
