import React, { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { CycleContext } from '../..';
import { useFormContext } from 'react-hook-form';



const NewCycleForm = () => {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <>
      <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-sugestion"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="task-sugestion">
            <option value="Front-End" />
            <option value="Back-End" />
            <option value="Full-Stack" />
            <option value="Mobile" />
            <option value="Data Science" />
            <option value="Machine Learning" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>
    </>
  )
}

export default NewCycleForm