'use client'
import React from 'react';
import s from './Features.module.css';
import Heading from "@/components/Heading/Heading";
import {Tabs} from "@mantine/core";
import {MdOutlineArrowOutward} from "react-icons/md";
import {IconType} from "react-icons";

interface IProps {
    id: number;
    title: string;
    icon: IconType;
    description: string;
}

const fakeDataFeatures: IProps[] = [
    {
        id: 1,
        title: '24/7 Account Access',
        icon: MdOutlineArrowOutward,
        description: 'Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.',
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        icon: MdOutlineArrowOutward,
        description: 'Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.',
    },
    {
        id: 3,
        title: 'Secure Transactions',
        icon: MdOutlineArrowOutward,
        description: 'Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.',
    },
    {
        id: 4,
        title: 'Bill Pay and Transfers',
        icon: MdOutlineArrowOutward,
        description: 'Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.',
    }]


const Features = () => {
    return (
        <section className={s.features}>
            <div className='container'>
                <Heading title={'Our'} titleSpan={' Features'}
                         description={'Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience'}></Heading>
                <div className={s.tabs}>
                    <Tabs defaultValue="Banking" orientation="vertical">
                        <Tabs.List>
                            <Tabs.Tab value="Banking">Online Banking</Tabs.Tab>
                            <Tabs.Tab value="Tools">Financial Tools</Tabs.Tab>
                            <Tabs.Tab value="Support">Customer Support</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="Banking">
                            <div className={s.content}>
                                {fakeDataFeatures.map((item, IProps) => (
                                    <div className={s.cases} key={item.id}>
                                        <div className={s.label}>
                                            <h1>{item.title}</h1>
                                            <item.icon size={"2.125rem"} color={"#CAFF33"}/>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="Tools">
                            <div className={s.content}>
                                {fakeDataFeatures.map((item, IProps) => (
                                    <div className={s.cases} key={item.id}>
                                        <div className={s.label}>
                                            <h1>{item.title}</h1>
                                            <item.icon size={"2.125rem"} color={"#CAFF33"}/>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Panel>
                        <Tabs.Panel value="Support">
                            <div className={s.content}>
                                {fakeDataFeatures.map((item, IProps) => (
                                    <div className={s.cases} key={item.id}>
                                        <div className={s.label}>
                                            <h1>{item.title}</h1>
                                            <item.icon size={"2.125rem"} color={"#CAFF33"}/>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Features;