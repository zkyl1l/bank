import React from 'react';
import s from './Heading.module.css';
import classNames from "classnames";

interface IProps {
    title?: string;
    titleSpan?: string;
    description?: string;
    welcome?: boolean;
}

const Heading = (props: IProps) => {
    return (
        <div className={s.text}>
            <h2>
                {props.title}<span>{props.titleSpan}</span>
            </h2>
            <p className={classNames(s.desc, props.welcome ? s.welcome__color : {})}>{props.description}</p>
        </div>
    );
};

export default Heading;