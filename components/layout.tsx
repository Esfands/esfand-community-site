import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { InfoBanner } from "./infobanner"

export const Layout = ({ children }) => {
    return (
        <>
            <div className="min-h-full">
                <InfoBanner />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
            
        </>
    )
}