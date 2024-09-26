import React, { useEffect } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './views/Home'
import Contact from "./views/Contact"
import Games from "./views/Games"
import Partners from "./views/Partners"
import Privacy from "./views/Privacy"
import ResponsibleGaming from "./views/ResponsibleGaming"
import News from "./views/News"
import Outlet from "./views/Outlet"
import PageNotFound from "./components/404"

const Routes = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        }, [])
    })
    return(
        <>
            <Router>
                <Switch>
                    <Route
                        path = "/"
                        component = {Home}
                        exact
                    />
                    <Route
                        path = "/games"
                        component = {Games}
                        exact
                    />
                    <Route
                        path = "/game-provider"
                        component = {Partners}
                        exact
                    />
                    <Route
                        path = "/outlets"
                        component = {Outlet}
                        exact
                    />
                    <Route
                        path = "/news"
                        component = {News}
                        exact
                    />
                    <Route
                        path = "/contact"
                        component = {Contact}
                        exact
                    />
                    <Route
                        path = "/privacy"
                        component = {Privacy}
                        exact
                    />
                    <Route
                        path = "/responsible-gaming"
                        component = {ResponsibleGaming}
                        exact
                    />
                    <Route
                        path = "*"
                        component = {PageNotFound}
                        exact
                    />
                </Switch>
            </Router>
        </>
    )
}

export default Routes