import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek)); // adiciona os dias da semana que passaram ao final da lista, para termos 7 dias a partir do dia de hoje
console.log(data);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded> {/*allowZeroExpanded permite todas as abas fechadas*/}
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>

                </div>
              </AccordionItemButton>
            </AccordionItemHeading> {/* o que vai aparecer quando o acordeão estiver fechado */}
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
        <AccordionItem></AccordionItem>
      </Accordion>
    </>);
}

export default Forecast;