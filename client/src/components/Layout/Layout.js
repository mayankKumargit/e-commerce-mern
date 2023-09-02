import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from 'react-helmet'
import {Toaster} from 'react-hot-toast'

const Layout = ({children,title,description,keywords,author}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header></Header>
            <main style={{minHeight:'75vh'}}>
                <Toaster></Toaster>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout

Layout.defaultProps={
    title:"E-commerce app shop now",
    description:"mern stack project",
    keywords:"mern,react,nodejs,mongodb",
    author:"mayank"
}