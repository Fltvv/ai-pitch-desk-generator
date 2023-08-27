import React, {useContext, useState} from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Flex,
  FormControl,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
// Assets
import {formJson} from "../../../mockData/mockFormJson";
import FormStep from "./FormStep";
import { FormContext } from "contexts/FormContext";

function Form() {
  const [stepNumber, setStepNumber] = useState<number>(1);

  const [show, setShow] = React.useState(false);

  const {formAnswers, setFormAnswers} = useContext(FormContext)
//@ts-ignore
  const changeInputHandler = (value, field) => {

    }

  const stepsCount = formJson.content.length
  return (
      <Flex
        maxW={{ base: "100%" }}
        w='100%'
        mx={{ base: "auto" }}
        me='auto'
        mt='50px'
        h='100%'
        alignItems='center'
        justifyContent='center'
        // mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        // mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
            {<FormStep stepNumber={stepNumber} stepOptions={{setStepNumber, stepsCount}} step={formJson.content[stepNumber - 1]} formAnswers={formAnswers} setFormAnswers={setFormAnswers} />}
        </Flex>
      </Flex>
  );
}

export default Form;
