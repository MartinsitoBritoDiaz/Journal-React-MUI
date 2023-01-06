import { HomePage } from "./journal/pages/HomePage"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

function JournalApp() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}

export default JournalApp
