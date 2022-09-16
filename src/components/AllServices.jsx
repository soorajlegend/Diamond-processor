import React from 'react'
import { useSelector } from 'react-redux';
import { selectArabic } from '../slices/infoSlice';

function AllServices({ image }) {

    const arabic = useSelector(selectArabic); 

    const ourServicesTitle = arabic ? "اكتشف خدماتنا" : "explore our Services";

    const ProgrammingTitle = arabic ? "برمجة" : "Programming";

    const DmarkettingTitle  = arabic ? "التسويق الرقمي" : "Digital Marketing";

    const MgraphicTitle  = arabic ? "السوم المتحركة" : "Motion Graphic";

    const BrandingTitle = arabic  ? "العلامة التجارية" : "Branding";

    const  programmingText = arabic  ? "فرق مشروعنا مع مطورين من المستوى الأعلى يقدمون بنجاح حلولًا لأي تعقيد تتطلب معرفة ممتازة بجافا والواجهة الأمامية والجوال بالإضافة إلى الخبرة في تطوير التطبيقات السحابية الأصلية وهندسة البيانات والذكاء الاصطناعي. نحن نقدم دورة تطوير كاملة من الألف إلى الياء" : "Our project teams with higher level developers who successfully deliver solutions of any complexity that require outstanding knowledge of  Java, front end and mobile as well as the expertise in cloud-native app development, data engineering, and artificial intelligence. We offer a full development cycle from A to Z";
    
    const  DmarkettingText = arabic  ? "يتضمن التسويق عبر الإنترنت مجموعة متنوعة من القنوات مثل التسويق عبر البريد الإلكتروني ، وإعلانات الفيديو ، والتسويق المؤثر ، وإعلانات الدفع لكل نقرة ، والتسويق عبر وسائل التواصل الاجتماعي ، والمزيد. قد يكون اختيار القناة التسويقية التي تناسب عملك بشكل أفضل أمرًا صعبًا" : "Our online marketing includes a variety of channels such as email marketing, video advertising, influencer marketing, PPC advertising, social media marketing, and more. Choosing the marketing channel that fits your business the best can be tricky. ";
    
    const MgraphicsText  = arabic ? "نحن وكالة فيديو رائدة تربط العلامات التجارية والأشخاص من خلال محتوى فيديو مخصص" : "We are a leader Video Agency that connects brands and people through customized video content.";

    const BrandingText = arabic  ? "مهما كان حجم شركتك ، نقوم بإنشاء علامات تجارية تنقل عروضك بشكل مثالي وتعزز مكانتك في السوق من خلال الدمج المثالي للعناصر المرئية والنسخ" : "Whatever the size of your company, we create brands that perfectly communicate your offering and solidify your position in the market through a pitch perfect amalgamation of visuals and copy.";


    return (
    <>
    <section className={arabic ? "max-w-screen-xl relative z-20 mx-auto my-10 bg-white dark:bg-gray-900" : "max-w-[80%] mx-auto my-10 relative z-20 bg-white dark:bg-gray-900"}>
    <div className="container px-6 py-10 mx-auto">
        <h1 className={arabic ? "text-3xl text-right font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white" : "text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"}>{ourServicesTitle}</h1>

        <div className={arabic ? "mt-2 text-right flex flex-row-reverse" : "mt-2"}>
            <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
            <span className={arabic ? "inline-block w-3 h-1 mr-1 bg-green-500 rounded-full" : "inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"}></span>
            <span className={arabic ? "inline-block w-1 h-1 mr-1 bg-green-500 rounded-full" : "inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"}></span>
        </div>

        <div className={arabic ? "mt-8 xl:mt-12 lg:flex md:flex md:flex-row-reverse lg:items-center" : "mt-8 xl:mt-12 lg:flex md:flex lg:items-center"}>
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <div className={arabic ? "space-y-3 text-right" : "space-y-3 text-left"}>
                    <span className="inline-block  p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-gradient-to-b from-green-400 to-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold  text-gray-700 capitalize dark:text-white">{DmarkettingTitle}</h1>

                    <p className="text-gray-500  dark:text-gray-300">
                        {DmarkettingText}
                    </p>
                </div>

                <div className={arabic ? "space-y-3 text-right" : "space-y-3 text-left"}>
                    <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-gradient-to-b from-green-400 to-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{ProgrammingTitle}</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                        {programmingText}
                    </p>
                </div>

                <div className={arabic ? "space-y-3 text-right" : "space-y-3 text-left"}>
                    <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-gradient-to-b from-green-400 to-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{MgraphicTitle}</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                        {MgraphicsText}
                    </p>
                </div>

                <div className={arabic ? "space-y-3 text-right" : "space-y-3 text-left"}>
                    <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-gradient-to-b from-green-400 to-green-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </span>

                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{BrandingTitle}</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                        {BrandingText}
                    </p>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img className="relative z-20 w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={image} alt="" />
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default AllServices