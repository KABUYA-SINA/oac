import React, { useState, useEffect } from 'react';
import ImgSecSection from '../assets/pages/car_wash.webp';
import ImgService from "../data/service";
import { ErrorBoundary } from 'react-error-boundary';
import { ColorRing } from 'react-loader-spinner';
import CardService from '../components/CardService';
import { motion } from 'framer-motion';
import Header  from '../components/Header';

import '../sass/base/_base.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_home.scss';

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setData(ImgService)
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
                className='main_home'
            >
                <section className='first_section'>
                    <div className="welcom">
                        <div className="welcom-txt">
                            <span className='welc-home'>Welcome to our website</span>
                            <p className='welc-home--para'>Bienvenue chez Oliv' Auto Clean - Votre destination de confiance pour un lavage de voiture exceptionnel. Depuis Août 2020, nous nous sommes engagés à fournir à nos clients des services de lavage de voitures de qualité supérieure avec un service exceptionnel.
                                Nous sommes fiers d'être la première choix de la communauté pour le soin de leurs véhicules.
                            </p>
                        </div>
                    </div>
                    <img src={ImgSecSection} alt='second section a man washing a car' />
                </section>

                <section className='second_section'>
                    <div className="mission">
                        <h2>Notre Mission</h2>
                        <p>Notre <span className='bold'>mission</span> est de rendre chaque voiture propre et étincelante tout en <span className='bold'>fournissant</span> une expérience client exceptionnelle.
                            Nous croyons que chaque véhicule mérite <span className='bold'>le meilleur traitement,</span> c'est pourquoi nous utilisons uniquement des produits de lavage <span className='bold'>de haute qualité</span> et une équipe de professionnels formés pour donner à votre véhicule l'amour et l'attention qu'il mérite.
                        </p>
                        <br />
                        <p>
                            Nous nous engageons à utiliser <span className='bold'>des produits écologiques, </span><span className='bold'>des technologies modernes</span> et la formation en continue <span className='bold'>pour garantir</span> que chaque véhicule soit traité avec soin et attention.
                            Notre objectif est de redonner à chaque voiture <span className='bold'>un aspect impeccable</span> tout en minimisant notre impact écologique, assurant ainsi une expérience client exceptionnelle.
                        </p>
                    </div>
                </section>
                <section className='third_section'>
                    <div className="service">
                        <h2>Nos Services</h2>
                        <p><span className='under'>Notre service</span> de lavage auto offre un nettoyage complet et minutieux de votre véhicule, garantissant une propreté impeccable à l'intérieur comme à l'extérieur.
                            Nous utilisons des produits <span className='under'>de haute qualité</span> et des techniques modernes pour éliminer efficacement la saleté, la poussière et les taches tout en respectant la peinture et les matériaux de votre voiture.
                            <span className='under'> Que ce soit pour un lavage express ou un nettoyage en profondeur,</span> notre équipe d'experts est à votre disposition pour vous offrir un service rapide, fiable et personnalisé, <span className='under'>afin de redonner à votre véhicule tout son éclat.</span>
                        </p>
                    </div>
                    <div className="service_img">
                        <ErrorBoundary FallbackComponent={Error} >

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
                                    <>
                                        {
                                            images.map(({ id, title, cover, alt, index }) => (
                                                <article className='article-services' key={id}>
                                                    <CardService key={`${id}-${index}`} id={id} cover={cover} alt={alt} title={title} />
                                                </article>
                                            ))
                                        }
                                    </>
                            }
                        </ErrorBoundary>
                    </div>

                </section>

            </motion.main>
        </>
    )
}
export default Home;