import React from 'react';
import s from './Heading.module.css';
import classNames from "classnames";

interface IProps {
    title?: string;
    titleSpan?: string;
    description?: string;
    welcome?: boolean;
    faq?: boolean;
}

const Heading = (props: IProps) => {
    return (
        <div className={s.text}>
            <h2 className={classNames(s.title, props.faq ? s.faq__title : {})}>
                {props.title}<span className={classNames(s.titleSpan, props.faq ? s.faq__titleSpan : {})}>{props.titleSpan}</span>
            </h2>
            <p className={classNames(s.desc, props.welcome ? s.welcome__color : {})}>{props.description}</p>
        </div>
    );
};

export default Heading;