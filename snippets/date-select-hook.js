import { useState } from 'react';
import useDateOptions from '../hooks/use-date-options';

export function useDateSelector(props) {
  const [dateOptions] = useDateOptions(props);
  const [selectedYear, selectedMonth, selectedDate] = props.startDate;
  const [dateState, setSelectedDate] = useState({
    selectedYear,
    selectedMonth,
    selectedDate
  })

  const onChange = (e) => {
    const { value: rawValue } = e.target;
    const value = parseInt(rawValue, 10);

    if (Number.isNaN(value)) return;
    const { selectedMonth, selectedYear } = dateState;
    const newState = {};
    newState[e.target.name] = value;
    switch (e.target.name) {
      case 'selectedYear':
        if (selectedMonth) {
          newState.dateOptions = dateOptions.getDateOptions(value, selectedMonth);
        }
        break;
      case 'selectedMonth':
        if (selectedYear) {
          newState.dateOptions = dateOptions.getDateOptions(selectedYear, value);
        }
        break;
      default:
    }

    // update state
    setSelectedDate({...dateState, ...newState});
  }

  return {currentDate: dateState, dateOptions, onChange};
}
