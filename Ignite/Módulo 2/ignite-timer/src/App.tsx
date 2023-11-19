import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button variant="primary" />
      <GlobalStyle />
    </ThemeProvider>
  )
}
