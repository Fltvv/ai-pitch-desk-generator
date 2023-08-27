import React, {useEffect, useState} from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text, Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import {Step} from "../../../mockData/mockFormJson";
import {sendNewForm} from "../../../methods/sendNewForm";
import {FormAnswers} from "../../../contexts/FormContextProvider";
import {Success} from "./Success";
interface FormStepProps {
  stepNumber: number,
  stepOptions: {
    // @ts-ignore
    setStepNumber: (callback) => void,
    stepsCount: number
  },
  step: Step,
  formAnswers: FormAnswers,
  setFormAnswers: any
}

function FormStep(props: FormStepProps) {
  const {stepOptions: { setStepNumber, stepsCount}, stepNumber, step, formAnswers, setFormAnswers } = props

  const [stepData, setStepData] = useState(step);

  useEffect(() => {
    const listener = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if(e.key == 'ArrowRight' || e.key == 'Enter'){
        goToNextStep()
      }else if(e.key == 'ArrowLeft'){
        goToPrevStep()
      }
    }
    //@ts-ignore
    document.addEventListener('keydown', listener)
    return () => {
      //@ts-ignore
      document.removeEventListener('keydown', listener)
    }
  }, []);

  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const sendForm = () => {
    //@ts-ignore
    sendNewForm(formAnswers)
  }

  function goToNextStep()  {
    if(stepNumber === stepsCount) {
      // @ts-ignore
      sendForm(formAnswers)
    }
      setStepNumber((step: number) => step + 1)
  }
  function goToPrevStep() {
    if(+step.id > 1){
      setStepNumber((step: number) => step - 1)
    }
  }

  const onChangeHandler = (value: string, i: number) => {
    setFormAnswers({...formAnswers, [step.questions[i].value]: value})
  }

  return (
      <>
        {stepNumber <= stepsCount ? <Flex
            maxW={{ base: "100%", md: "max-content" }}
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
          <Box me='auto'>
            <Heading color={textColor} fontSize='36px' mb='10px'>
              {step.title}
            </Heading>
            <Text
                mb='36px'
                ms='4px'
                color={textColorSecondary}
                fontWeight='400'
                fontSize='md'>
              {step.description}
            </Text>
          </Box>
          <Flex
              zIndex='2'
              direction='column'
              w={{ base: "100%", md: "420px" }}
              maxW='100%'
              background='transparent'
              borderRadius='15px'
              mx={{ base: "auto", lg: "unset" }}
              me='auto'
              mb={{ base: "20px", md: "auto" }}>
            <FormControl>
              {step.questions && step.questions.map((question, index) => {
                return (
                    <div key={question.id}>
                      <FormLabel
                          display='flex'
                          ms='4px'
                          fontSize='sm'
                          fontWeight='500'
                          color={textColor}
                          mb='8px'>
                        {question.question}
                        <Text color={brandStars}> *</Text>
                      </FormLabel>
                      <Textarea
                          isRequired={true}
                          variant='auth'
                          fontSize='sm'
                          ms={{ base: "0px", md: "0px" }}
                          resize='none'
                          // type='text'
                          placeholder={question.placeholder}
                          mb='24px'
                          fontWeight='500'
                          size='lg'
                          //@ts-ignore
                          value={formAnswers[question.value]}
                          onChange={(e) => onChangeHandler(e.target.value, index)}
                      />
                    </div>

                )
              })}
              <Flex justifyContent='space-between' align='center' mb='24px'>
              </Flex>
              <Flex
                  justifyContent='space-between'
              >
                {stepNumber > 1 ? <Button
                    variant='lightBrand'
                    fontSize='sm'
                    fontWeight='500'
                    w='48%'
                    h='50'
                    mb='24px'
                    onClick={goToPrevStep}
                >
                  Назад
                </Button> : null}
                <Button
                    type='submit'
                    fontSize='sm'
                    variant='brand'
                    fontWeight='500'
                    w={stepNumber > 1 ? '50%' : '100%'}
                    h='50'
                    mb='24px'
                    onClick={goToNextStep}
                >
                  {stepNumber < stepsCount ? 'Далее' : 'Отправить'}
                </Button>
              </Flex>
            </FormControl>
            <Flex
                flexDirection='column'
                justifyContent='center'
                alignItems='start'
                maxW='100%'
                mt='0px'>
            </Flex>
          </Flex>
        </Flex> : <Success />
        }
      </>

  );
}

export default FormStep;
