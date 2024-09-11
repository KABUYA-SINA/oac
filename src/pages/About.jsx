import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import '../sass/pages/_about.scss';

const About = () => {
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
                className="about"
            >
                <section className="about-first">
                    <div className="about-first__el--fir">
                        <h2>À Propos de Moi</h2>
                        <p>Bienvenue sur Oliv' Auto Clean, votre destination pour un lavage automobile de qualité supérieure.
                            <span className='back-color bold'> Je suis Olivier,</span> le fondateur et propriétaire de cette entreprise, et je suis ravi de partager mon histoire avec vous.
                        </p>
                    </div>
                    <div className="about-first__el--sec">
                        <h3>Ma Passion pour les Voitures</h3>
                        <p>Depuis que je suis enfant, j'ai toujours été passionné par les voitures.
                            Qu'il s'agisse de leur design, de leur mécanique ou simplement de leur apparence, j'ai toujours été fasciné par cet univers.
                            <span className='back-color bold'> Mon rêve a toujours été de créer un espace où les amateurs de voitures peuvent prendre soin de leurs précieux véhicules.</span>
                        </p>
                    </div>
                </section>
                <section className="about-second">
                    <div className="about-second__el--fir">
                        <h3>L'Aventure Oliv' Auto Clean</h3>
                        <p>L'aventure Oliv' Auto Clean a commencé il y a quelques années lorsque j'ai décidé de concrétiser ce rêve.
                            J'ai réuni une équipe dévouée de professionnels qui partagent <span className='bold'> ma passion pour les voitures</span> et qui comprennent l'importance d'un lavage automobile de qualité.
                            Notre mission est de fournir des services de lavage automobile exceptionnels <span className='bold'> et de garantir la satisfaction totale de nos clients.</span>
                        </p>
                    </div>
                </section>
                <section className="about-third">
                    <div className="about-third__el--fir">
                        <h3>Notre Engagement envers la Qualité</h3>
                        <p><span className='bold'>Chez Oliv' Auto Clean, </span>nous croyons fermement que chaque voiture mérite un traitement de qualité.
                            C'est pourquoi nous utilisons uniquement les meilleurs produits et équipements de lavage.
                            <span className='bold'> Nous sommes également déterminés à être respectueux de l'environnement en adoptant des pratiques éco-responsables.</span>
                        </p>
                    </div>
                    <div className="about-third__el-sec">
                        <h3>Votre Satisfaction est Notre Priorité</h3>
                        <p>Chez Oliv' Auto Clean, votre satisfaction est notre priorité numéro un. Nous nous efforçons de dépasser vos attentes à chaque visite.
                            Si vous avez des commentaires, des questions ou des suggestions, n'hésitez pas à nous contacter. Nous sommes là pour vous.
                        </p>
                        <p><span className='back-color bold'>Merci de nous faire confiance pour prendre soin de votre voiture.
                            Nous attendons avec impatience de vous accueillir chez Oliv' Auto Clean.</span>
                        </p>
                    </div>
                    <br />
                    <div className="about-third__el-thi">
                        <h4>Olivier TAQUET</h4>
                        <p>Fondateur de Oliv' Auto Clean</p>
                    </div>
                </section>
            </motion.main>
        </>
    )
}
export default About;