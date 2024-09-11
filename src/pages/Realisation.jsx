import React, { useState, useEffect } from 'react';
import ImageRalisation from '../data/RealisationImages';
import { ErrorBoundary } from 'react-error-boundary';
import { ColorRing } from 'react-loader-spinner';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Header from '../components/Header';
import '../sass/pages/_realisations.scss';

const Realisation = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setData(ImageRalisation)
        setIsLoading(false)
    }, [])

    const images = Object.values(data)

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
                className="realisation"
            >
                <div className="realisation__el">
                    <h2>Realisations</h2>
                    <p>Nos réalisations parlent d'elles-mêmes. Nous avons eu le privilège de travailler sur une large gamme de véhicules, allant des citadines aux berlines de luxe, en passant par les SUV et les véhicules de collection.
                        Chaque voiture qui passe entre nos mains est traitée avec le plus grand soin et une attention méticuleuse aux détails. Nos clients nous font confiance pour redonner à leurs véhicules leur éclat d'origine, et les résultats sont toujours à la hauteur de leurs attentes.
                        Qu'il s'agisse d'un simple lavage ou d'une rénovation complète de la carrosserie, nos réalisations témoignent de notre engagement envers la qualité.
                    </p>
                </div>
                <ErrorBoundary FallbackComponent={Error}>

                    {
                        isLoading ?
                            <div className="loader">
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                />
                            </div>
                            :
                            <div className='real-box__img'>
                                {
                                    images.map(({ id, title, cover, alt, index }) => (
                                        <article className='real-acticle' key={id}>
                                            <Cards key={`${id}-${index}`} id={id} cover={cover} alt={alt} title={title} />
                                        </article>
                                    ))
                                }
                            </div>
                    }
                </ErrorBoundary>
                <Link
                    to='https://www.facebook.com/people/OlivAuto-Clean/100022508387801/?sk=photos'
                    className='btn-home'
                    target='_blank'
                    rel='noreferrer'
                >
                    <motion.button
                        type='button'
                        className='btn'
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: .2 },
                        }}
                    >
                        Voir plus des réalisations
                    </motion.button>
                </Link>


            </motion.main>
        </>
    )
}
export default Realisation;