import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Info } from '../Context/InfoContext';
import { selectArabic } from '../slices/infoSlice';

function Concept({ image }) {

  const arabic = useSelector(selectArabic); 


  const ourConcept = arabic ? "اكتشف مفهومنا" : "explore our Services";

  const ProgrammingTitle = arabic ? "برمجة" : "Programming";

  const DmarkettingTitle  = arabic ? "التسويق الرقمي" : "Digital Marketing";

  const MgraphicTitle  = arabic ? "السوم المتحركة" : "Motion Graphic";

  const BrandingTitle = arabic  ? "العلامة التجارية" : "Branding";

  const  programmingText = arabic  ? "فرق مشروعنا مع مطورين من المستوى الأعلى يقدمون بنجاح حلولًا لأي تعقيد تتطلب معرفة ممتازة بجافا والواجهة الأمامية والجوال بالإضافة إلى الخبرة في تطوير التطبيقات السحابية الأصلية وهندسة البيانات والذكاء الاصطناعي. نحن نقدم دورة تطوير كاملة من الألف إلى الياء" : "Our project teams with higher level developers who successfully deliver solutions of any complexity that require outstanding knowledge of  Java, front end and mobile as well as the expertise in cloud-native app development, data engineering, and artificial intelligence. We offer a full development cycle from A to Z";
  
  const  DmarkettingText = arabic  ? "يتضمن التسويق عبر الإنترنت مجموعة متنوعة من القنوات مثل التسويق عبر البريد الإلكتروني ، وإعلانات الفيديو ، والتسويق المؤثر ، وإعلانات الدفع لكل نقرة ، والتسويق عبر وسائل التواصل الاجتماعي ، والمزيد. قد يكون اختيار القناة التسويقية التي تناسب عملك بشكل أفضل أمرًا صعبًا" : "Our online marketing includes a variety of channels such as email marketing, video advertising, influencer marketing, PPC advertising, social media marketing, and more. Choosing the marketing channel that fits your business the best can be tricky. ";
  
  const MgraphicsText  = arabic ? "نحن وكالة فيديو رائدة تربط العلامات التجارية والأشخاص من خلال محتوى فيديو مخصص" : "We are a leader Video Agency that connects brands and people through customized video content.";

  const { Services } = Info();
 
useEffect(() => {

}, [Services.loading])

  return (
    <>
      <section className="max-w-screen-xl mx-auto my-10 bg-white dark:bg-gray-900">
        <div className="container  px-6 py-10 mx-auto">

          <div className="relative block w-full">
            <h1 className={arabic ? "arabic-text text-3xl font-semibold mr-[50%] text-right text-gray-800 capitalize lg:text-4xl dark:text-white" : "text-3xl font-semibold ml-[50%] text-gray-800 capitalize lg:text-4xl dark:text-white"}>{ourConcept}</h1>

            <div className={arabic ? "arabic-text mt-2 text-right flex flex-row-reverse mr-[50%]" : "ml-[50%] mt-2"}>
            <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
            <span className={arabic ? "arabic-text inline-block w-3 h-1 mr-1 bg-green-500 rounded-full" : "inline-block w-3 h-1 ml-1 bg-green-500 rounded-full"}></span>
            <span className={arabic ? "arabic-text inline-block w-1 h-1 mr-1 bg-green-500 rounded-full" : "inline-block w-1 h-1 ml-1 bg-green-500 rounded-full"}></span>
        </div>

          </div>
          <div className={arabic ? "arabic-text mt-8 xl:mt-12 lg:flex flex flex-row lg:items-center" : "mt-8 xl:mt-12 lg:flex flex flex-row-reverse lg:items-center"}>

            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            {Services.data != null && Services.data.map((row) => 
             <div key={row.id} className={arabic ? "arabic-text space-y-3 text-right" : "space-y-3"}>
                <span className="inline-block p-3 text-green-500 bg-green-100 rounded-xl dark:text-white dark:bg-gradient-to-b from-green-400 to-green-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{row.title}</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  { row.description }
                </p>
              </div>
            )}
             
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Concept