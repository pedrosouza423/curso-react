import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CycleContext } from '../../contexts/CycleContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const History = () => {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>{formatDistanceToNow(cycle.startDate, {
                  addSuffix: true,
                  locale: ptBR
                })}</td>
                <td>
                  {cycle.fineshedDate && <Status statusColor='green'>Concluído</Status>}
                  {cycle.interruptedDate && <Status statusColor='red'>Interrompido</Status>}
                  {!cycle.fineshedDate && !cycle.interruptedDate && <Status statusColor='yellow'>Em andamento</Status>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
