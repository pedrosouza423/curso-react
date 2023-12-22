import React from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export const NewCycleForm = () => {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para o seu projeto"
        type="text"
        id="task"
        list="taskList"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="taskList">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
        <option value="Work" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <MinutesAmountInput
        step={5}
        min={5}
        max={60}
        placeholder="00"
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
