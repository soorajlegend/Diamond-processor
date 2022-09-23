import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import { selectArabic } from '../slices/infoSlice';
import List from './subComponent/ServicesList';

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


    const { Services } = Info()

    useEffect(() => {
    }, [Services.loading]);


    const data = [
        {id: 1, title: "best", description: "wowowowowowowowo"},
        {id: 2, title: "best", description: "wowowowowowowowo"},
        {id: 3, title: "best", description: "wowowowowowowowo"},
        {id: 4, title: "best", description: "wowowowowowowowo"},
    ]

    return (
    <>
    <section className={arabic ? "arabic-text max-w-screen-xl relative z-20 mx-auto my-10 bg-white dark:bg-gray-900" : "max-w-[80%] mx-auto my-10 relative z-20 bg-white dark:bg-gray-900"}>
    <div className="container px-6 py-10 mx-auto">
        <h1 className={arabic ? "arabic-text text-3xl text-right font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white" : "text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white"}>{ourServicesTitle}</h1>

        <div className={arabic ? "arabic-text mt-2 text-right flex flex-row-reverse" : "mt-2"}>
            <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
            <span className={arabic ? "arabic-text inline-block w-3 h-1 mr-1 bg-green-500 rounded-full" : "inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"}></span>
            <span className={arabic ? "arabic-text inline-block w-1 h-1 mr-1 bg-green-500 rounded-full" : "inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"}></span>
        </div>


        <div className={arabic ? "arabic-text mt-8 xl:mt-12 lg:flex md:flex md:flex-row-reverse lg:items-center" : "mt-8 xl:mt-12 lg:flex md:flex lg:items-center"}>
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">

          
                

     { Services.data != null && <List data={data} />}
                
               

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