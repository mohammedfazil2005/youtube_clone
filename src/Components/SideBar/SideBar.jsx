import React from 'react'
import './SideBar.css'

const SideBar = ({category,setCategory}) => {
    const allCategories = [
        { idNo: 0, catName: "Home", catImg: "fa-solid fa-house" },
        { idNo: 20, catName: "Gaming", catImg: "fa-solid fa-gamepad" },
        { idNo: 2, catName: "Automobiles", catImg: "fa-solid fa-car" },
        { idNo: 17, catName: "Sports", catImg: "fa-solid fa-football" }, 
        { idNo: 24, catName: "Entertainment", catImg: "fa-solid fa-film" },
        { idNo: 28, catName: "Technology", catImg: "fa-solid fa-microchip" },
        { idNo: 10, catName: "Music", catImg: "fa-solid fa-music" },
        { idNo: 15, catName: "Blogs", catImg: "fa-solid fa-pen" }, 
        { idNo: 25, catName: "News", catImg: "fa-solid fa-newspaper" }
    ];
    
    
  return (
    <div className='side-main'>
        <div className="sidebar-parent">
             {allCategories.map((eachcategory)=>(
                <div onClick={()=>setCategory(eachcategory.idNo)} key={eachcategory.idNo} style={category==eachcategory.idNo?{backgroundColor:'rgba(192, 185, 185, 0.26)'}:{border:'none'}}>
                <h3> <i className={eachcategory.catImg}></i>{eachcategory.catName}</h3>
            </div>
             ))}
        </div>
    </div>
  )
}

export default SideBar
