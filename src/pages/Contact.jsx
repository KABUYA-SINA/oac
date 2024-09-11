/* eslint-disable no-useless-escape */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import FormInput from '../components/Form/FormInput';
import TextArea from '../components/Form/TextArea';
import Header from '../components/Header';
import '../sass/base/_base.scss';
import '../sass/pages/_contact.scss';

const Contact = () => {

    const form = useRef();
    const history = useNavigate()

    const [textareaValues, setTextAreaValues] = useState('')
    const [values, setValues] = useState({
        nom: "",
        prenom: "",
        mail: "",
        phone: "",
    })

    const inputs = [
        {
            id: "Nom",
            label: 'Nom',
            name: 'Nom',
            type: 'text',
            maxLength: '15',
            errorMessage: " The name should be 3-15 characters, allow spaces between words and shouldn't include any special character or a nummber !",
            required: true,
            pattern: '^[A-Za-z ]{3,15}$'
        },
        {
            id: "Prénom",
            label: 'Prénom',
            name: 'Prénom',
            type: 'text',
            maxLength: '10',
            errorMessage: "The last name should be 3-10 characters and shouldn't include any special character !",
            required: true,
            pattern: '^[A-Za-z0-9]{3,10}$'
        }, {
            id: "Email",
            name: 'email',
            label: 'Email',
            type: 'email',
            errorMessage: "The email must be valable",
            maxLength: '15',
            required: true,
            pattern: '/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[a-zA-Z]{2,4}$/i'
        }, {
            id: "Téléphone",
            name: 'Téléphone',
            label: 'Téléphone',
            type: 'tel',
            errorMessage: "10 number allowed !",
            minLength: "3",
            maxLength: "10",
            required: true,
            pattern: '^[0-9]{3,10}$'
        }

    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    function refreshPage() {
        window.location.reload(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_API_SERVICE, process.env.REACT_APP_API_TEMP, form.current, process.env.REACT_APP_API_PUBLIC)
            .then((result) => {
                if (result.status === 200) {
                    alert("Votre message a bien été envoyé")
                    refreshPage();
                } else {
                    alert("Une erreur est survenue veuillez réessayer plus tard");
                    history('/')
                }
            }, (error) => {
                console.log(error);
            });
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
            <motion.div
                variants={routeVariants}
                initial="initial"
                animate="final"
                className="contact"
            >
                <main className='main-contact'>
                    <div className="contact-menu">
                        <div className="map">
                            <iframe
                                aria-label="google map"
                                title="google-map"
                                width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=212%20Chemin%20du%20Gu%C3%A9ret,%2069210%20Bully+(Oliv'%20Auto%20Clean)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                <a href="https://www.maps.ie/population/">Population mapping</a>
                            </iframe>

                        </div>
                        <div className="form">
                            <h2>Contactez nous !</h2>
                            <form className='for-form' ref={form} onSubmit={handleSubmit}>
                                {
                                    inputs.map((input) => (
                                        <FormInput key={input.id} {...input} value={values[input.name] || ''} onChange={onChange} className="form-input" />
                                    ))
                                }
                                <TextArea placeholder="Laissez-nous un message ainsi qu'un numéro de téléphone" setTextAreaValues={setTextAreaValues} value={textareaValues} />
                                <button type="submit" >Envoyer</button>
                            </form>
                            <div className="adress">
                                <p>Ouvert de 13h à 21h </p>
                                <p>Du lundi au vendredi</p>
                                <p>olivautoclean@gmail.com</p>
                                <p>SIRET: 885 378 455 00012</p>
                                <p>212 Chémin du Guéret, 69210 Bully</p>
                            </div>
                        </div>
                    </div>
                </main>
            </motion.div>
        </>
    )
}

export default Contact;
