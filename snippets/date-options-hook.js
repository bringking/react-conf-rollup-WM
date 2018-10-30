import { useContext, useState } from "react";
import getDaysInMonth from 'date-fns/get_days_in_month';
import IntlContext from 'mythical-intl-context';

export function useDateOptions(props) {
  // get date options from il8n Context
  const intlContext = useContext(IntlContext);

  const [selectedYear, selectedMonth] = props.startDate
    ? props.startDate.split('-').map(
      (s, i) =>
        // stupid base 0 months in JavaScript
        i === 1 ? parseInt(s, 10) - 1 : parseInt(s, 10),
    )
    : new Array(3).fill(null);

  const monthOptions = [{ text: `- ${intlContext.messages.month} -` }].concat(
    Array.from({ length: 12 }).map((_, i) => ({
      value: i,
      text: `${(i + 1).toString().length < 2 ? 0 : ''}${i +
      1} - ${intlContext.formatDate(new Date(1979, i, 1), {
        month: 'long',
      })}`,
    })),
  );

  const yearOptions = [{ text: `- ${intlContext.messages.year} -` }].concat(
    Array.from({ length: 100 }).map((_, i) => {
      const yearOption = new Date().getFullYear() - props.offsetYears - i;
      return { value: yearOption, text: `${yearOption}` };
    }),
  );

  const dateOptions = [{ text: `- ${intlContext.messages.day} -` }].concat(
    Array.from({
      length: getDaysInMonth(new Date(selectedYear || 2000, selectedMonth || 0)),
    }).map((_, i) => ({
      value: i + 1,
      text: `${i + 1}`,
    })),
  );

  return useState({
    dateOptions,
    monthOptions,
    yearOptions
  });
}
