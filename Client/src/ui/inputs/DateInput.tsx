import DatePicker from 'react-datepicker';
import {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

interface Params {
  label: string
  onChange: (newDate: Date) => void
}

export function DateInput(params: Params) {
  const [date, setDate] = useState<Date>()

  function isTimeUpdated(newDate: Date) {
    return newDate.getHours() !== 0
  }

  function updateDay(newDate: Date) {
    const updatedDate = new Date(date?.getTime() ?? newDate)
    updatedDate?.setHours(newDate.getHours())
    updatedDate?.setMinutes(newDate.getMinutes())
    setDate(updatedDate)
    params.onChange(updatedDate)
  }

  function updateTime(newDate: Date) {
    newDate.setHours(date?.getHours() ?? 0)
    newDate.setMinutes(date?.getMinutes() ?? 0)
    setDate(newDate)
    params.onChange(newDate)
  }

  function updateDate(newDate : Date) {
    if (!isTimeUpdated(newDate)) {
      updateTime(newDate)
    }
    else {
      updateDay(newDate)
    }
  }

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">{params.label}</label>
      <DatePicker
        className='bg-gray-50 border border-gray-300 rounded-lg block w-full px-2.5 py-2'
        placeholderText='DD/MM/YYYY'
        dateFormat='dd/MM/yyyy'
        showTimeSelect
        id='start-date'
        autoComplete='off'
        onChange={(newDate: Date) => updateDate(newDate)}
        required={true}
        value={date ? `${date.toDateString()} ${date.toLocaleTimeString()}` : ''}
      />
    </div>
  )
}