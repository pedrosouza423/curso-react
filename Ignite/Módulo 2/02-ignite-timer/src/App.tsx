import { Button } from './components/Button'
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary'/>
      <Button variant='secondary' />
      <Button variant='danger' />
      <Button variant='success' />
      <Button />
    </ThemeProvider>
  )
}
