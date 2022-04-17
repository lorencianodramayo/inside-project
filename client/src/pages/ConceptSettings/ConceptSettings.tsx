import React, { FC, useEffect } from 'react';
import axios from 'axios';

//hooks
import useUserAuth from '../../hooks/concept/useUserAuth';

//components
import ModalTS from '../../components/ModalTS';
import LoaderTS from '../../components/LoaderTS';
import StepperTS from '../../components/StepperTS';
import ResultSuccess from '../../components/ResultSuccess';

//children
import InitializeConcept from './InitializeConcept/InitializeConcept';
import SelectTemplate from './SelectTemplate/SelectTemplate';

//css
import './ConceptSettings.less';

const steps = [
    {
      title: 'Initialize Concept',
      content: <InitializeConcept />,
    },
    {
      title: 'Select Template',
      content: <SelectTemplate />,
    },
    {
      title: 'Finishing',
      content: <ResultSuccess />,
    },
  ];
  

const ConceptSettings: FC = () => {
    const [token, setToken] = useUserAuth('');

    useEffect(()=>{
        axios.get('/adlib/').then((response: any) => {
            setToken(response.data.token);
            sessionStorage.setItem("adlib-token", response.data.token)
        })
    }, [setToken]);

    return(
        <LoaderTS 
            isSpinning={token !== '' ? false : true} 
            delay={100}
            content={
            <div className="ConceptSettings">
                <ModalTS isClosable={false} isVisible={token !== '' ? true : false} component={<StepperTS steps={steps}/>} hasFooter={null} title="Concept QA Tool"/>
            </div>
            }
        />
    )
}

export default ConceptSettings;