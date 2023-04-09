import moment from "moment/moment";

function Header() {
    const today = moment()

    return (
    <>
        <div className="ui-datepicker"></div>
        <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{today.day()}</div>
        <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{today.format('D')}</div>
        <div className="ui-datepicker-material-month">{today.format('MMMM')}</div>
        <div className="ui-datepicker-material-year">{today.format('YYYY')}</div>
        </div>
        </div>
    </>
  
    )
  }
  
  export default Header