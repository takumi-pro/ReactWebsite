import { VFC } from 'react'
import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { Navbar } from './component/index'
import GlobalStyle from './globalStyles'
import { Home } from './component/Pages/HomePage/Home'
import { Footer } from './component/index'

export const App: VFC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Navbar></Navbar>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}
