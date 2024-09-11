import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import '../sass/pages/_error.scss';

const Error = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/', { replace: true });
    }
    const routeVariants = {
        initial: {
            opacity: 0,
            scaleX: .8
        },
        final: {
            opacity: 1,
            scaleX: 1,
            transition: {
                duration: .3,
            }
        }
    }
    return (
        <>
            <Header />
            <motion.main
                variants={routeVariants}
                initial="initial"
                animate="final"
                className='error'
            >
                <h1>404</h1>
                <p>
                    Oups! This is not the web page you are looking for.
                </p>
                <Link to='/' onClick={handleClick}>
                    <span className='btn-error'> Please return to Home page</span>
                </Link>
            </motion.main>
    
        </>
    )
}

export default Error;