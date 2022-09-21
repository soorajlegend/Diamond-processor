import React from 'react';
import SideBar from '../../components/SideBar';
import Card from '../../components/subComponent/Card';
import AnimatedPage from '../../animation.js';

function Dashboard() {

    const Menu = [
        { id: 1, title: "Employee", number: 523, link: "employee" },
        { id: 2, title: "Project", number: 12123, link: "Projects" },
        { id: 3, title: "Clients", number: 58, link: "Clients" },
        { id: 4, title: "Total Messages", number: 57803, link: "Subscription" },
    ]

    


        return (
            <div className='flex flex-row'>
                <SideBar />
                <div className='block md:flex w-full md:flex-row md:px-20 py-20 item-center justify-center'>
                    <AnimatedPage>
                        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            <Card content={Menu} />
                        </div>
                    </AnimatedPage>


                </div>
            </div>
        )
    }
// }

export default Dashboard