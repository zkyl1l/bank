'use client'
import React, {useState} from 'react';
import s from './Products.module.css';
import Heading from "@/components/Heading/Heading";
import { Tabs } from '@mantine/core';
import Image from 'next/image';

interface IData {
    id: number;
    icon: {
        url: string;
        alt: string;
    };
    title: string;
    description: string;
}

const fakeData: IData[] = [
    {
        id: 1,
        icon: {
            url: '/icons/case.svg',
            alt: 'Case',
        },
        title: 'Checking Accounts',
        description: 'Enjoy easy and convenient access to your funds with our range of checking account\n' +
            '                                        options. Benefit from features such as online and mobile banking, debit cards,\n' +
            '                                        and free ATM access.',
    },
    {
        id: 2,
        icon: {
            url:'/icons/box.svg',
            alt: 'Box'
        },
        title: 'Savings Accounts',
        description: 'Build your savings with our competitive interest rates and flexible savings account options. Whether you\'re saving for a specific goal or want to grow your wealth over time, we have the right account for you.',
    },
    {
        id: 3,
        icon: {
            url:'/icons/money.svg',
            alt: 'Money',
        },
        title: 'Loans and Mortgages',
        description: 'Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.',
    }
]





const Products = () => {
    const [activeTab, setActiveTab] = useState<string | null>('individuals');
    return (
        <section className={s.tabs}>
            <div className='container'>
                <div className={s.headingTabs}>
                    <Heading title={'Our'} titleSpan={' Products'} description={'Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations'} />
                    <Tabs value={activeTab} onChange={setActiveTab} variant="pills">
                        <Tabs.List>
                            <Tabs.Tab value="individuals">For Individuals</Tabs.Tab>
                            <Tabs.Tab value="business">For Business</Tabs.Tab>
                        </Tabs.List>
                    </Tabs>
                </div>
                <Tabs value={activeTab} onChange={setActiveTab}>
                    <Tabs.Panel value="individuals" defaultValue="individuals" className={s.products}>
                        {fakeData.map((item) => (
                            <React.Fragment key={item.id}>
                                <div className={s.product}>
                                    <Image src={item.icon.url} alt={item.icon.alt} width={98} height={98}/>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                {item.id != fakeData.length && <div className={s.separator}></div>}
                            </React.Fragment>
                        ))}
                    </Tabs.Panel>
                    <Tabs.Panel value="business" className={s.products}>
                        {fakeData.map((item) => (
                            <React.Fragment key={item.id}>
                                <div className={s.product}>
                                    <Image src={item.icon.url} alt={item.icon.alt} width={98} height={98}/>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                {item.id != fakeData.length && <div className={s.separator}></div>}
                            </React.Fragment>
                        ))}
                    </Tabs.Panel>
                </Tabs>
            </div>
        </section>
    );
};

export default Products;