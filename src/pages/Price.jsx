import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ColorRing } from 'react-loader-spinner';
import PriceBoxes from '../components/PriceBoxes';
import { motion } from 'framer-motion';
import Prices from '../data/BoxesPrice';
import Header from '../components/Header';
import '../sass/pages/_prices.scss';

const Price = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setData(Prices)
        setIsLoading(false)
    }, [])
    const ourPrices = Object.values(data)
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
            <Header  />
            <motion.main
                variants={routeVariants}
                initial="initial"
                animate="final"
                className="price"
            >
                <div className="price-txt">
                    <h2>Engagez-vous pour l'environnement</h2>
                    <p>
                        <span className='bold'>Chez Oliv' Auto Clean, nous nous soucions de l'environnement.</span> C'est pourquoi nous utilisons des produits de nettoyage respectueux de l'environnement et adoptons des pratiques de lavage éco-responsables.
                        Notre installation est conçue pour minimiser la consommation d'eau et réduire notre empreinte carbone.
                    </p>
                    <p>
                        Nous croyons fermement que la propreté de votre véhicule ne doit pas se faire au détriment de notre planète.
                        C'est pourquoi nous avons adopté des pratiques écoresponsables dans tous nos services de lavage auto. <span className='bold'>Nous utilisons des produits biodégradables et non toxiques, qui sont doux pour votre voiture mais puissants contre la saleté.</span>
                        De plus, nos équipements sont conçus pour minimiser la consommation d'eau et d'énergie, réduisant ainsi notre empreinte écologique tout en vous offrant un service de qualité.
                    </p>
                </div>
                <section className="price-prices">
                    <div className="price-txt">
                        <h2>Nos Tarifs</h2>
                        <p>
                            Nous offrons une gamme de tarifs adaptés à tous les besoins et à tous les budgets.
                            Que vous recherchiez un lavage express pour rafraîchir votre véhicule ou un nettoyage complet en profondeur, nous avons une solution pour vous. <span className='bold'> Nos tarifs sont transparents et compétitifs, avec des formules qui couvrent le lavage extérieur, le nettoyage intérieur, le lustrage, et bien plus encore.</span>
                            De plus, nous proposons des forfaits d'abonnement pour ceux qui souhaitent maintenir leur voiture en parfait état tout au long de l'année, avec des réductions avantageuses pour nos clients fidèles.
                        </p>
                    </div>
                    <div className="prices--boxes">
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
                                    <>
                                        {
                                            ourPrices.map(({ id, title, price, list, index }) => (
                                                <article className='prices__el' key={id}>
                                                    <PriceBoxes key={`${id}-${index}`} id={id} title={title} price={price} list={list} />
                                                </article>
                                            ))
                                        }
                                    </>
                            }
                        </ErrorBoundary>
                    </div>
                    <div className="price-txt">
                        <p>
                            Nous croyons que la qualité ne doit pas être un luxe, c'est pourquoi nous nous engageons à offrir des services haut de gamme à des prix abordables.
                            Chaque prestation est réalisée par une équipe de professionnels qualifiés, utilisant des produits et des techniques de pointe pour garantir votre satisfaction.
                            <span className='bold back-color'> Pour plus de détails sur nos tarifs et pour choisir la formule qui vous convient, n'hésitez pas à nous contacter ou à consulter notre grille tarifaire disponible en ligne ou sur place.</span> Avec OAC, prenez soin de votre voiture sans vous ruiner.
                        </p>
                    </div>
                </section>
            </motion.main>
        </>
    )
}
export default Price;