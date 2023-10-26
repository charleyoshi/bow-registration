import { React, useState } from 'react'
import AdminLoginForm from '../../components/input/form/AdminLoginForm'
import { checkCredentials } from '../../utilities/helper'
import { TopNavbar } from '../../components/layout/TopNavbar'

export default function AdminSignIn() {
    var adminCredentials = [{ username: "adminJerry", password: "adM1n" }, { username: "adminBadboy", password: "adM!n" }]

    return (
        <>
            <TopNavbar navs={["Home", "Login", "Admin"]} />
            <AdminLoginForm onSubmit={checkCredentials} credentials={adminCredentials} />
        </>


    )
}
