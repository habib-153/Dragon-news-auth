import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSidedNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="p-4 text-xl font-semibold">
            <h2 className="">All Category</h2>
            {
                categories.map(category => <NavLink
                    to={`/category/${category.id}`}
                    className='block  py-4 px-12 text-[#9F9F9F]' 
                    key={category.id}
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSidedNav;