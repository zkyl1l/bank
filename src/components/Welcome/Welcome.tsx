'use client'
import Link from "next/link"
import s from "./Welcome.module.css"
import {BsPatchCheckFill} from "react-icons/bs"
import {RiExchangeFill} from "react-icons/ri";
import {Button, NumberInput, Select} from "@mantine/core";
import {useEffect, useState} from "react";
import axios from "axios";
import Heading from "@/components/Heading/Heading";

interface CurrencyRate {
    code: string;
    value: number;
}

interface CurrencyData {
    [key: string]: CurrencyRate;
}

interface MetaData {
    last_updated_at: string;
}

interface CurrencyResponse {
    meta: MetaData;
    data: CurrencyData;
}

export function Welcome() {
    const [value1, setValue1] = useState<string | number>('');
    const [value, setValue] = useState<string | number>('');
    const [pickCurrency, setPickCurrency] = useState<string | null>('');
    const [pickCurrency1, setPickCurrency1] = useState<string | null>('');
    const [currencies, setCurrencies] = useState<CurrencyResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    async function fetchData() {
        setLoading(true);
        const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_g6ArLX78qIHNmcsZvnitd8KUw3K5ruOGAoU38maR")
        setCurrencies(response.data)
        console.log(response.data)
        setLoading(false)
    }

    const handleExchange = () => {
        if (currencies && value && pickCurrency && pickCurrency1) {
            const rateFrom = currencies.data[pickCurrency].value;
            const rateTo = currencies.data[pickCurrency1].value;
            const exchangedValue = (Number(value) / rateFrom) * rateTo;
            setValue1(exchangedValue.toFixed(2));
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    return <section className={s.welcome}>
        <div className="container">
            <div className={s.welcome__wrapper}>
                <div className={s.journey}>
                    <div className={s.label}>
                        <BsPatchCheckFill color={"#CAFF33"} size={"1.5rem"}/>
                        <span>No LLC Required, No Credit Check</span>
                    </div>
                    <Heading title={"Welcome to YourBank Empowering Your "} titleSpan={"Financial Journey"}
                             description={"At YourBank, our mission is to provide comprehensive banking solutions that empower\n" +
                                 "                            individuals and businesses to achieve their financial goals. We are committed to delivering\n" +
                                 "                            personalized and innovative services that prioritize our customers needs."} welcome={true}/>
                    <Link href="#">Open Account</Link>
                </div>
                <div className={s.transactions__wrapper}>
                    <div className={s.transactions}>
                        <div className={s.history}>
                            <h3>Your Transactions</h3>
                            <div className={s.history__blocks}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} className={s.transaction} style={{
                                        zIndex: i == 1 ? 1 : 0 - i,
                                        transform: i != 1 ? `scale(${1 - i * 0.05})` : undefined,
                                        opacity: i != 1 ? `${1 - i * 0.25}` : undefined,
                                    }}>
                                        <div className={s.info}>
                                            <RiExchangeFill color={"#CAFF33"} size={"2.25rem"}/>
                                            <div className={s.name}>
                                                <p>Transaction</p>
                                                <strong>Name</strong>
                                            </div>
                                        </div>
                                        <div className={s.money}>
                                            <strong>$68.00</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={s.exchange}>
                            <h3>Money Exchange</h3>
                            <div>
                                {!loading && <div className={s.currency}>
                                    <Select searchable
                                            value={pickCurrency}
                                            onChange={setPickCurrency}
                                            placeholder="Pick currency"
                                            data={Object.keys(currencies!.data!).map(i => ({
                                                value: i,
                                                label: currencies!.data[i].code
                                            }))}

                                    />
                                    <Select searchable
                                            value={pickCurrency1}
                                            onChange={setPickCurrency1}
                                            placeholder="Pick currency"
                                            data={Object.keys(currencies!.data!).map(i => ({
                                                value: i,
                                                label: currencies!.data[i].code
                                            }))}
                                    />
                                </div>}
                                <div className={s.values}>
                                    <NumberInput
                                        min={0}
                                        value={value}
                                        onChange={setValue}
                                        variant="filled"
                                        placeholder="Input placeholder"
                                    />
                                    <div className={s.exchangeValue}>{value1}</div>
                                </div>
                            </div>
                            <Button onClick={handleExchange} className={s.button}>Exchange</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
