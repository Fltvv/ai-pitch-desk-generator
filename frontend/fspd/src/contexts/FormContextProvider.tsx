import React, {useState} from 'react';
import {FormContext} from "./FormContext";
import React_2 from "framer-motion/dist/framer-motion";

export interface FormAnswers {
    name: string,
    problem: string,
    product: string,
    description: string,
    solution: string,
    tam: string,
    som: string,
    sam: string,
    '1opponent':string,
    '2opponent': string,
    '3opponent': string,
    totalopponents: string,
    businessmodeltxt: string,
    revenue: string,
    futurerevenue: string,
    ltv: string,
    cac: string,
    businessmodeldescription: string,
    photomember1: string,
    member1: string,
    member1txt: string,
    size: string,
    sizetxt: string,
    usingtxt: string,
    roadmaptxt: string,
    contacts: string,
}
//@ts-ignore
const FormContextProvider = ({children}) => {
    const [formAnswers, setFormAnswers] = useState<FormAnswers>({
        name: '',
        problem: '',
        product: '',
        description: '',
        solution: '',
        tam: '',
        som: '',
        sam: '',
        '1opponent': '',
        '2opponent': '',
        '3opponent': '',
        totalopponents: '',
        businessmodeltxt: '',
        revenue: '',
        futurerevenue: '',
        ltv: '',
        cac: '',
        businessmodeldescription: '',
        photomember1: '',
        member1: '',
        member1txt: '',
        size: '',
        sizetxt: '',
        usingtxt: '',
        roadmaptxt: '',
        contacts: '',
    });

    return (
        <FormContext.Provider
            value={{formAnswers, setFormAnswers}}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;
