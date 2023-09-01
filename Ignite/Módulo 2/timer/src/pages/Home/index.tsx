import { HandPalm, Play } from "phosphor-react"
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./styles"

import { useContext } from "react";
import NewCycleForm from "./components/NewCycleForm";
import Countdown from "./components/Countdown";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { CycleContext } from "../../contexts/CycleContext";





const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O cicle precisa ser no minimo de 5 minutos')
    .max(60, 'O cicle precisa ser no máximo de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
  const {
    createNewCycle,
    interruptCurrentCycle,
    activeCycle
  } = useContext(CycleContext)


  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, /* reset */ watch } = newCycleForm;








  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)} action="">


        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />




        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>

        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}



      </form>
    </HomeContainer>
  )
}
