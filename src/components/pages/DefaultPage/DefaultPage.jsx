import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import './DefaultPage.css'
import Shop from '../Shop/Shop.jsx';

const DefaultPage = (props) => {

    const [page, setPage] = useState(false)

    function view() {
        if(page == '1') {
            return <Shop/>
        } else if(page == '2') {
            return <h1>Здесь должны быть курсы</h1>
        } else {
            return <h1>О проекте</h1>
        }
    }

    return (
        <>
            <Head
                name = {props.name}
                onClick={props.onClick}
                shop = {() => setPage(1)}
                courses = {() => setPage(2)}
                about = {() => setPage(3)}
            />
            {view()}
            <Footer/>
        </>
    );
};

export default DefaultPage;