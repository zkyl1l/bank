import React from 'react';
import s from './Cases.module.css'
import Heading from "@/components/Heading/Heading";
import Link from "next/link";
import {string} from "postcss-selector-parser";
import Image from "next/image";

interface ICasesProps {
    id: number;
    icon:{
        url: string;
        alt: string;
    },
    title: string;

}

interface IPercent{
    id: number;
    percentage: string;
    title: string;
}

const fakeDataDeversesI: ICasesProps[] = [
    {
        id: 1,
        icon:{
            url: '/icons/handmoney.svg',
            alt: 'HandMoney'
        },
        title:'Managing Personal Finances',
    },
    {
        id: 2,
        icon:{
            url: '/icons/lovemoney.svg',
            alt: 'LoveMoney'
        },
        title:'Saving for the Future',
    },
    {
        id: 3,
        icon:{
            url: '/icons/bank.svg',
            alt: 'Bank'
        },
        title: 'Homeownership'
    },
    {
        id: 4,
        icon:{
            url: 'icons/book.svg',
            alt: 'Book'
        },
        title: 'Education Funding'
    }
]

const fakeDataIndividuals: IPercent[] = [
    {
        id: 1,
        percentage: '78%',
        title: 'Secure Retirement Planning'
    },
    {
        id: 2,
        percentage: '63%',
        title: 'Manageable Debt Consolidation'
    },
    {
        id: 3,
        percentage: '91%',
        title: 'Reducing financial burdens'
    }
]

const fakeDataBusiness: IPercent[] = [
    {
        id: 1,
        percentage: '78%',
        title: 'Secure Retirement Planning'
    },
    {
        id: 2,
        percentage: '63%',
        title: 'Manageable Debt Consolidation'
    },
    {
        id: 3,
        percentage: '91%',
        title: 'Reducing financial burdens'
    }
]


const Cases = () => {
    return (
        <section className={s.cases}>
            <div className='container'>
                <Heading title={''} titleSpan={'Our Cases'}
                         description={'At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions'}/>
                <div className={s.individuals}>
                    <div className={s.deverses}>
                        {fakeDataDeversesI.map((item) => (
                                <div className={s.case} key={item.id}>
                                    <Image src={item.icon.url} alt={item.icon.alt} width={78} height={78}/>
                                    <h2>{item.title}</h2>
                                </div>
                            ))}
                    </div>
                    <div className={s.text}>
                        <div className={s.label}>
                        <h3>For Individuals</h3>
                        <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal
                            loans provide vital support during various life milestones. We also prioritize retirement
                            planning, ensuring a financially secure future for our customers</p>
                        </div>
                        <div className={s.percent__wrapper}>
                            {fakeDataIndividuals.map((item) => (
                                <React.Fragment key={item.id}>
                                    <div className={s.percent}>
                                        <h3>{item.percentage}</h3>
                                        <p>{item.title}</p>
                                    </div>
                                    {item.id != fakeDataIndividuals.length && <div className={s.separator}></div>}
                                </React.Fragment>
                            ))}
                        </div>
                        <Link href="#" className={s.learn}>Learn More</Link>
                    </div>
                </div>
                <div className={s.bussines}>
                    <div className={s.text}>

                    </div>
                    <div className={s.deverses}>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cases;