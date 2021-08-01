import React, {useState} from 'react';
import "../Basics/style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import MenuCardCopy from './MenuCardCopy';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
];


const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

const filterItem = (category) => {
    const updatedList = Menu.filter((curElem)=> {
        return curElem.category === category;
        })
        setMenuData(updatedList);
}

    return ( 
    <>

    <Navbar filterItem = {filterItem} menuList={menuList}/>
    <MenuCard menuData = {menuData} />

        {/* <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick = {() => filterItem("breakfast")}>Breakfast</button>
                <button className="btn-group__item" onClick = {() => filterItem("lunch")}>Lunch</button>
                <button className="btn-group__item" onClick = {() => filterItem("evening")}>Evening</button>
                <button className="btn-group__item" onClick = {() => filterItem("dinner")}>Dinner</button>
                <button className="btn-group__item" onClick = {() => setMenuData(Menu)}>All</button>

            </div>
        </nav> */}

    </>
    );
}
export default Resturant; 