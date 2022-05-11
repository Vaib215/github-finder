import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import { AlertProvider } from './context/alert/AlertContext'
import { GithubProvider } from './context/github/GithubContext'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import User from './pages/User'
function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar />
                        <main className='container mx-auto px-3 pb-12'>
                            <Routes>
                                <Route path='/user/:login' element={<User/>}/>
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/*' element={<NotFound />} />
                                <Route path='/NotFound' element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    )
}

export default App