import React from 'react';
import { useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import aboutImage from '../images/banner.png';
import { selectArabic } from '../slices/infoSlice';



function AboutDp() {



    const arabic = useSelector(selectArabic);

    const idText = arabic ? "معالج ماسي لتكنولوجيا المعلومات" : "IT Diamond processor";

    // const abIdpText = arabic ? "لقد تطور العالم الرقمي بشكل سريع وطغى على جميع جوانب الحياة ، وأصبحت التكنولوجيا شريانًا أساسيًا في عصرنا ، ونحن في مؤسسة معالج الألماس لتكنولوجيا المعلومات ، نسعى إلى تحقيق طموحاتك الرقمية باحترافية عالية وبيد سعودية قادرة ، لنخلق لك من طموحات التكنولوجيا التي تحتضن السماء" : "The digital world has developed rapidly and has overwhelmed all aspects of life and technology has become a fundamental artery in our time, and we at the Diamond Processor Foundation for Information Technology, seek to achieve your digital ambitions with high professionalism and with a capable Saudi hand, to create for you from technology ambitions that embrace the sky"

    const MissionTitle = arabic ? "بعثة" : "Mission";

    const VissionTitle = arabic ? "رؤية" : "Vission";

    // const MissionText = arabic ? "نسعى جاهدين لأن نكون مصدر إلهام في العالم الرقمي لتحقيق أهدافك ونطمح لأن نكون متميزين في العالم العربي." : "We strive to be inspiring in the digital world by achieving your goals and looking forward to be unique in the Arab world";
   
    const { info } = Info()

    const dp = info.data;

    return (
        <div>
            {/* Mision AND vission section */}

            <div className="relative z-10 bg-gray-50 text-gray-700 mt-10 dark:bg-gray-900/100 dark:text-gray-200 1s ease-in-out">
                <div className="w-full px-5 mt-20 flex justify-center item-center flex-column">
                    <div className="md:w-1/2 block justify-center item-center">
                        <h2 className="md:text-4xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center  arabic-text" >{idText}</h2>

                        <p className="sm:text-sm  lg:text-xl md:text-xl w-full flex justify-center text-center item-center ease-in-out transition-shadow arabic-text">{dp.description}</p>
                    </div>

                </div>

                <div className="w-full md:flex md:flex-row justify-between">

                    <div className="md:w-1/2  justify-center item-center px-20 mt-5">
                        <h2 className="md:text-5xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center arabic-text" >{MissionTitle}</h2>
                        <p className="sm:text-sm  lg:text-xl md:text-xl w-full flex justify-center text-center item-center ease-in-out transition-shadow arabic-text">{dp.mission}</p>
                    </div>

                    <div className="md:w-1/2  justify-center item-center px-20 mt-5">
                        <h2 className="md:text-5xl font-bold ease-out transition-transform w-full flex py-5 justify-center item-center arabic-text">{VissionTitle}</h2>
                        <p className="sm:text-sm  lg:text-xl md:text-xl w-full flex justify-center text-center item-center ease-in-out transition-shadow arabic-text">{dp.vission}</p>
                    </div>
                </div>

                <div className="w-full flex justify-center item-center md:-mt-10">
                    <div className="md:w-1/2 flex justify-center items-center">

                        <img src={aboutImage} alt="about dp" className='md:w-1/2 object-cover animate-pulse' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDp