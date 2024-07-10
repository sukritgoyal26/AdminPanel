import React from 'react';
import './SideNav.css';
function SideNav() {
    return (
        <div className='SideNav '>
            <div className='logo flex'><h1>DineHub</h1><h6>Orchid</h6></div>
            <div className="optionList">
                <div className="option flex">
                    <img src="Assets/products.svg" />
                    <h5>Products</h5>
                </div>
                <div className="option flex">
                    <img src="Assets/promotion.svg" alt="" />
                    <h5>Promocodes</h5>
                </div>
                <div className="option flex">
                    <img src="Assets/category.svg" alt="" />
                    <h5>Categories</h5>
                </div>
                <div className="option flex">
                    <img src="Assets/tag.svg" alt="" />
                    <h5>Tags</h5>
                </div>
                <div className="option flex">
                    <img src="Assets/order.svg" alt="" />
                    <h5>Order</h5>
                </div>
                <div className="option flex">
                    <img src="Assets/Carousel.svg" alt="" />
                    <h5>Carousel</h5>
                </div>
            </div>
            <div className="AcessControl">
                <h6 className='heading'>Acess Control</h6>
                <div className="option flex">
                    <img src="Assets/Role.svg" alt="" />
                    <h5>Roles</h5>
                </div>

            </div>
            <div className="Docs">
                <h6 className='heading'>Docs</h6>
                <div className="option flex">
                    <img src="Assets/doc.svg" alt="" />
                    <h5>Documentation</h5>
                </div>
                <div className="option flex">
                    <img src="Assets/doc.svg" alt="" />
                    <h5>ChangeLog</h5>
                </div>

            </div>
            <div className="user flex">
                <div className="username flex">
                    <img src="Assets/User.svg" alt="" />
                    <div className="name">
                        <h5>Admin</h5>
                        <h5 className='dark'>Regular User</h5>
                    </div>
                </div>
                <img src="Assets/notifications.svg" alt="" />
            </div>
        </div>
    )
}

export default SideNav