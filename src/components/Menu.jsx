import React from 'react'
import MenuCard from './MenuCard'
import data from '../Menu.json'

function Menu() {

    return (
        <>
            <div className='round MenuHeading'><h1>Products</h1></div>
            <table className='round MenuTable'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, key) => {
                        return (
                            <tr key={key} id={data.id}>
                                <td><img src={data.image} className="MenuCardImg" ></img></td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>

                            </tr>);
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Menu