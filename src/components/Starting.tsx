import { cva } from 'class-variance-authority';
import Image from 'next/image';
import StartImage from '../../public/Images/Icons/happy.png';
import Header from "./Header";
import LogoIcon from "../../public/Images/Header/Logo.png";
import Button, { ButtonExtendedProps } from './Button';
const StartingButtonStyle = cva(' flex flex-col items-center justify-center  bg-white w-screen h-screen py-5 px-5');

interface StartingProps {
  text: string;
}
const buttonProps: ButtonExtendedProps = {
  intent: 'primary',
 width:35,
};


const Starting: React.FC<Starting> = ({ text }) => {
  return (
    <center>
       <div className="w-screen">
    <Header logo={LogoIcon} />
  
   <button className={StartingButtonStyle()}>
    <Image src={StartImage} alt="starting page" width={204} height={204} />
     <div className="flex items-center justify-center">
    
      <div className="mt-2 text-center font-bold text-black ">{text}</div>
      WE WORK TO MAKE YOU HAPPY

        
      </div>
      
      <Button {...buttonProps}>GET STARTED </Button>
    </button>
    </div>
   

    
    </center>
  );
};

export default Starting;