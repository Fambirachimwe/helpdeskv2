import React from 'react'

const AdminPage = () => {
    return (
        <div className="body-wrapper">

            <SideNav />

            <div className="main-wrapper mdc-drawer-app-content">

                {/* top header navbar */}
                <TopHeader click={click} handleClick={handleClick} />

                <div className="page-wrapper mdc-toolbar-fixed-adjust">

                    {/* main content wrapper component here */}

                    <MainContent isAuth={isAuth} />


                </div>
            </div>
        </div>
    )
}

export default AdminPage
