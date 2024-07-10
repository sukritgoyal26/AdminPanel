import React from 'react'

function MenuCard({ img, name, price }) {
    console.log("i am called");
    return (
        <tr>
            <td><img className="MenuCardImg " src={img}></img></td>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default MenuCard