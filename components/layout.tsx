import { Footer } from './footer';
import { Navbar } from './navbar';

export const Layout = ({ children }) => {
    return (
        <>
            <div className="min-h-full">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
            
        </>
    )
}