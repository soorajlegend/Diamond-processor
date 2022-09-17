import React from 'react'
import Card from './subComponent/Card'



const Menu = [
    { id: 1, title: "Employee", number: 523, link: "employee" },
    { id: 1, title: "Project", number: 12123, link: "Projects" },
    { id: 1, title: "Clients", number: 58, link: "Clients" },
    { id: 1, title: "Total Messages", number: 57803, link: "Subscription" },
]


function Body() {
    return (


        <div className='block md:flex w-full md:flex-row md:px-20 py-20 item-center justify-center'>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <Card content={Menu} />
            </div>

        </div>
    )
}

export default Body