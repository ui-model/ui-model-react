import React, {Component} from 'react';
import './Calendar.css';
import 'moment/locale/zh-cn';
import {Calendar as CalendarModel} from 'ui-model';

export default class Calendar extends Component {
  calendar = new CalendarModel(undefined, this, 'calendar');

  get columns() {
    return this.calendar.weekdayNames.map((name) => {
      return <th key={name}>{name}</th>
    });
  }

  classNamesOf(day) {
    const result = [];
    if (this.calendar.isActive(day)) {
      result.push('active');
    }
    if (this.calendar.isToday(day)) {
      result.push('today');
    }
    if (!this.calendar.inSameMonth(day)) {
      result.push('other-month');
    }
    if (this.calendar.isWeekEnd(day)) {
      result.push('weekend');
    }
    return result.join(' ');
  }

  daysOf(week) {
    return this.calendar.dates(week).map((day) => {
      return <td key={day} className={this.classNamesOf(day)}
                 onClick={() => this.calendar.goTo(day)}>{day.getDate()}</td>
    })
  }

  get weeks() {
    return this.calendar.weeks.map((index) => {
      return <tr key={index}>
        <td className="week">{index}</td>
        {this.daysOf(index)}
      </tr>
    })
  }

  render() {
    return <table>
      <caption>
        <button type="button" className="btn btn-secondary float-xs-left" onClick={() => this.calendar.goToPrevMonth()} title="Previous Month">
          &lt;
        </button>
        {this.calendar.value ? this.calendar.value.toLocaleDateString() : '- Choose -'}
        <button type="button" className="btn btn-danger float-xs-right" onClick={()=>this.calendar.clear()}>X</button>
        <button type="button" className="btn btn-secondary float-xs-right" onClick={() => this.calendar.goToNextMonth()} title="Next Month">
          &gt;
        </button>
      </caption>
      <thead>
      <tr>
        <th />
        {this.columns}
      </tr>
      </thead>
      <tbody>
      {this.weeks}
      </tbody>
    </table>
  }
}