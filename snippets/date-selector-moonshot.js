import React, { Component } from 'react';
import getDaysInMonth from 'date-fns/get_days_in_month';
import { rem } from 'polished';
import { injectIntl } from 'react-intl';
import { Box, Flex } from '@ghostgroup/grid-styled';

export class DateSelector extends Component {
  constructor(props) {
    super(props);

    const [selectedYear, selectedMonth, selectedDate] = props.startDate
      ? props.startDate.split('-').map(
        (s, i) =>
          // stupid base 0 months in JavaScript
          i === 1 ? parseInt(s, 10) - 1 : parseInt(s, 10),
      )
      : new Array(3).fill(null);

    const monthOptions = [{ text: `- ${props.intl.messages.month} -` }].concat(
      Array.from({ length: 12 }).map((_, i) => ({
        value: i,
        text: `${(i + 1).toString().length < 2 ? 0 : ''}${i +
        1} - ${this.props.intl.formatDate(new Date(1979, i, 1), {
          month: 'long',
        })}`,
      })),
    );

    const yearOptions = [{ text: `- ${props.intl.messages.year} -` }].concat(
      Array.from({ length: 100 }).map((_, i) => {
        const yearOption = new Date().getFullYear() - props.offsetYears - i;
        return { value: yearOption, text: `${yearOption}` };
      }),
    );

    const dateOptions = this.getDateOptions(selectedYear, selectedMonth);

    this.state = {
      dateOptions,
      monthOptions,
      yearOptions,
      selectedYear,
      selectedMonth,
      selectedDate,
    };
  }

  getDateOptions = (year, month) =>
    [{ text: `- ${this.props.intl.messages.day} -` }].concat(
      Array.from({
        length: getDaysInMonth(new Date(year || 2000, month || 0)),
      }).map((_, i) => ({
        value: i + 1,
        text: `${i + 1}`,
      })),
    );

  getDate = () => {
    const { selectedYear, selectedMonth, selectedDate } = this.state;
    if (!selectedYear || !selectedDate || selectedMonth === null) return null;
    return new Date(selectedYear, selectedMonth, selectedDate);
  };

  onSelectChange = ({ target }) => {
    const { value: rawValue } = target;
    const value = parseInt(rawValue, 10);
    const { onDateChange } = this.props;

    if (Number.isNaN(value)) return;
    const { selectedMonth, selectedYear } = this.state;
    const newState = {};
    newState[target.name] = value;
    switch (target.name) {
      case 'selectedYear':
        if (selectedMonth) {
          newState.dateOptions = this.getDateOptions(value, selectedMonth);
        }
        break;
      case 'selectedMonth':
        if (selectedYear) {
          newState.dateOptions = this.getDateOptions(selectedYear, value);
        }
        break;
      default:
    }
    this.setState(
      newState,
      () =>
        onDateChange &&
        typeof onDateChange === 'function' &&
        onDateChange(this.getDate()),
    );
  };

  render() {
    const {
      dateOptions,
      monthOptions,
      yearOptions,
      selectedYear,
      selectedMonth,
      selectedDate,
    } = this.state;
    const { intl: { messages: m }, ...rest } = this.props;
    const { onSelectChange } = this;

    return (
      <Flex flexDirection={['column', 'row']} {...rest}>
        <Box w={[1, 'auto']} flex={['auto', 1]} mr={[0, 2]}>
          <Label htmlFor="MonthSelect">{m.month}</Label>

          <Select
            id="MonthSelect"
            name="selectedMonth"
            onChange={onSelectChange}
            value={selectedMonth === null ? '' : selectedMonth}
          >
            {monthOptions.map(monthOption => (
              <option key={monthOption.text} value={monthOption.value}>
                {monthOption.text}
              </option>
            ))}
          </Select>
        </Box>
        <Box w={[1, 'auto']} mr={[0, 2]}>
          <Label htmlFor="DateSelect">{m.day}</Label>
          <Select
            id="DateSelect"
            name="selectedDate"
            onChange={onSelectChange}
            value={selectedDate || ''}
          >
            {dateOptions.map(dateOption => (
              <option key={dateOption.text} value={dateOption.value || ''}>
                {dateOption.text}
              </option>
            ))}
          </Select>
        </Box>
        <Box w={[1, 'auto']}>
          <Label htmlFor="YearSelect">{m.year}</Label>
          <Select
            id="YearSelect"
            name="selectedYear"
            onChange={onSelectChange}
            value={selectedYear || ''}
          >
            {yearOptions.map(yearOption => (
              <option key={yearOption.text} value={yearOption.value || ''}>
                {yearOption.text}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>
    );
  }
}

export default injectIntl(DateSelector);
