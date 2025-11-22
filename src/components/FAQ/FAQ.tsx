'use client'

import React from 'react';
import s from './FAQ.module.css'
import Heading from "@/components/Heading/Heading";
import {useState} from 'react';

interface IProps{
    id: number;
    title: string;
    answer: string;
}

const fakeDataFAQ: IProps[] = [
    {
        id: 1,
        title: 'How do I open an account with YourBank?',
        answer: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.'
    },
    {
        id: 2,
        title: 'What documents do I need to provide to apply for a loan?',
        answer: 'The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver\'s license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.',
    },
    {
        id: 3,
        title: 'How can I access my accounts online?',
        answer: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
    },
    {
        id: 4,
        title: 'Are my transactions and personal information secure?',
        answer: 'At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.',
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 6,
        title: 'Lorem ipsum dolor sit amet?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
]

const FAQ = () => {
    return (
        <section className={s.faq}>
            <div className='container'>
                <Heading titleSpan={"Asked Questions"} title={"Frequently "} description={"Still you have any questions? Contact our Team via support@yourbank.com"} faq={true} />
                <div className={s.blocks}>
                    {fakeDataFAQ.map((item) => (
                        <div className={s.block} key={item.id}>
                            <h3>{item.title}</h3>
                            <div className={s.separator}></div>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;