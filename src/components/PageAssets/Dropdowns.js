import React from "react";
import {Dropdown} from 'semantic-ui-react';

const timeRangeOptions = [
  {text: "4 weeks", value: "short_term"},
  {text: "6 months", value: "medium_term"},
  {text: "several years", value: "long_term"}
]

export const topTimeRangeDropDown = ({timeRange, changeRangeCallback, fetchCallback}) => {

  const matchDefault = () => {
    // Return the timeRangeOption that matches the timeRange prop, which is the timeRange
    // in the store (and therefore what results are being shown)
    const match = timeRangeOptions.filter(option => option.value === timeRange)
    return match[0]
  }

  const handleChange = (event, data) => {
    // call action to update the store's value for artists.topTimeRange, and
    // make api call to get that data
    changeRangeCallback(data.value)
    fetchCallback(data.value)
  }

  return (<span>
  {' '}
  <Dropdown inline options={timeRangeOptions} defaultValue={matchDefault().value} onChange={handleChange}/>
  </span>)
}
