import moment from "moment/moment";
import DoFW from "./DoFW";
import MothAndyear from "./MothAndyear";
import Header from "./Header";

function spliceIntoChunks(arr, chunkSize) {
  const res = [];
  while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
  }
  return res;
}

function Calendar() {
   const startDay = moment().startOf('month').startOf('week')
   const day = startDay.clone().subtract()
   const dayMouth = [...Array(28)].map(() => day.add(1, 'day').clone())
    const dayWeeks = spliceIntoChunks(dayMouth, 7)

  return (
    <>
    <Header />
    <MothAndyear />

    <table className="ui-datepicker-calendar">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>

      

      <DoFW />

      <tbody>
     <tr>
       {dayWeeks[0].map((dateItem) => {
        return <td>{dateItem.format('D')}</td>
      })}
        </tr>
        <tr>
        {dayWeeks[1].map((dateItem) => {
          return <td>{dateItem.format('D')}</td>
        })}
        </tr>
        <tr>
        {dayWeeks[2].map((dateItem) => {
          return <td>{dateItem.format('D')}</td>
        })}
        </tr>
        <tr>
        {dayWeeks[3].map((dateItem) => {
          return <td>{dateItem.format('D')}</td>
        })} 
        </tr>  
      </tbody>
    </table>

</>
  )
}

export default Calendar
