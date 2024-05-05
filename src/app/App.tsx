import Providers from "@/app/providers/providers";
import AppRouter from "@/app/routers/app-router";
import dayjs from "dayjs";
import dayjsRuLocale from "dayjs/locale/ru";

dayjs.locale(dayjsRuLocale);

function App() {
    return (
        <Providers>
            <AppRouter />
        </Providers>
    );
}

export default App;
