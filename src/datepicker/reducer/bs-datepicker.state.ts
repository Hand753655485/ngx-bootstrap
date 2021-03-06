import {
  BsDatepickerViewMode,
  DatepickerFormatOptions, DatepickerRenderOptions, DaysCalendarModel,
  DaysCalendarViewModel, MonthsCalendarViewModel,
  MonthViewOptions, YearsCalendarViewModel
} from '../models/index';
import { defaultMonthOptions } from './_defaults';
import { BsDatepickerConfig } from '../bs-datepicker.config';

export interface BsDatepickerViewState {
  date: Date;
  mode: BsDatepickerViewMode;
}

export class BsDatepickerState implements DatepickerRenderOptions, DatepickerFormatOptions {
  // date picker
  selectedDate?: Date;
  // daterange picker
  selectedRange?: Date[];

  // initial date of calendar, today by default
  view: BsDatepickerViewState;

  // bounds
  minDate?: Date;
  maxDate?: Date;

  hoveredDate?: Date;
  hoveredMonth?: Date;
  hoveredYear?: Date;

  // days calendar
  monthsModel?: DaysCalendarModel[];
  formattedMonths?: DaysCalendarViewModel[];
  flaggedMonths?: DaysCalendarViewModel[];

  // months calendar
  monthsCalendar?: MonthsCalendarViewModel[];
  flaggedMonthsCalendar?: MonthsCalendarViewModel[];

  // years calendar
  yearsCalendarModel?: YearsCalendarViewModel[];
  yearsCalendarFlagged?: YearsCalendarViewModel[];

  // options
  monthViewOptions: MonthViewOptions;

  // DatepickerRenderOptions
  showWeekNumbers?: boolean;
  displayMonths?: number;

  // DatepickerFormatOptions
  locale: string;

  monthTitle: string;
  yearTitle: string;

  dayLabel: string;
  monthLabel: string;
  yearLabel: string;

  weekNumbers: string;
}

export const initialDatepickerState: BsDatepickerState = Object.assign(
  new BsDatepickerConfig(), {
    view: {date: new Date(), mode: 'day'} as BsDatepickerViewState,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
  });
