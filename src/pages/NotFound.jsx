import { FaHome, FaExclamationCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='hero'>
            <div className='text-center hero-content'>
                <div className='max-w-lg'>
                    <div className="flex items-center justify-center">
                        <FaExclamationCircle className='text-8xl mb-8 text-center' />
                    </div>
                    <h1 className='text-4xl font-bold mb-8'>Oops!</h1>
                    <p className='text-2xl mb-8'>404 - Page Not Found!</p>
                    <Link className='btn btn-primary' to='/'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound