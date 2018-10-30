import React, { useContext } from 'react';
import { rem } from 'polished';
import { injectIntl } from 'react-intl';
import { Box, Flex } from '@ghostgroup/grid-styled';
import useDateSelect from '../hooks/date-select-hook';
import IntlContext from 'mythical-intl-context';

export default function DateSelector(props) {
  const { currentDate, dateOptions, onChange } = useDateSelect(props);
  const { date, month, year } = dateOptions;
  const { selectedYear, selectedMonth, selectedDate } = currentDate;
  const intlContext = useContext(IntlContext);

  return (
    <Flex flexDirection={['column', 'row']} {...props}>
      <Box w={[1, 'auto']} flex={['auto', 1]} mr={[0, 2]}>
        <Label htmlFor="MonthSelect">{intlContext.messages.month}</Label>
        <Select
          id="MonthSelect"
          name="selectedMonth"
          onChange={onChange}
          value={selectedMonth === null ? '' : selectedMonth}
        >
          {month.map(monthOption => (
            <option key={monthOption.text} value={monthOption.value}>
              {monthOption.text}
            </option>
          ))}
        </Select>
      </Box>
      <Box w={[1, 'auto']} mr={[0, 2]}>
        <Label htmlFor="DateSelect">{intlContext.messages.day}</Label>
        <Select
          id="DateSelect"
          name="selectedDate"
          onChange={onChange}
          value={selectedDate || ''}
        >
          {date.map(dateOption => (
            <option key={dateOption.text} value={dateOption.value || ''}>
              {dateOption.text}
            </option>
          ))}
        </Select>
      </Box>
      <Box w={[1, 'auto']}>
        <Label htmlFor="YearSelect">{intlContext.messages.year}</Label>
        <Select
          id="YearSelect"
          name="selectedYear"
          onChange={onChange}
          value={selectedYear || ''}
        >
          {year.map(yearOption => (
            <option key={yearOption.text} value={yearOption.value || ''}>
              {yearOption.text}
            </option>
          ))}
        </Select>
      </Box>
    </Flex>
  );
}
