import {useForm, SubmitHandler} from "react-hook-form";
import {CreateLotModel} from '../types/CreateLotModel';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {LotCreationService} from '../services/LotCreationService';
import {Button} from '../../../ui/inputs/Button';
import {useState} from 'react';

export default function CreateLotForm() {
  const { register, handleSubmit, setValue, getValues } = useForm<CreateLotModel>();
  const [startDate, setStartDate] = useState(getValues('start'))
  const [endDate, setEndDate] = useState(getValues('end'))

  const onSubmit: SubmitHandler<CreateLotModel> = data => {
    console.log(data.title)
    console.log(data.startingPrice)
    console.log(data.bidIncrement)
    console.log(data.start)
    console.log(data.end)
    console.log(data.description)
    LotCreationService.createLot(data).then()
  }

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Create a new lot</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">


            <div className="sm:col-span-2">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
                Lot title
              </label>
              <input {...register('title')} type="text" name="title" id="title"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                     placeholder="Type lot title"
                     />
            </div>


            <div className="w-full">
              <label htmlFor="startingPrice"
                     className="block mb-2 text-sm font-medium text-gray-900">Starting price</label>
              <input {...register('startingPrice')}
                     type="number" name="startingPrice" id="startingPrice"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                     placeholder="Starting price"
                     required={true}/>
            </div>


            <div className="w-full">
              <label htmlFor="bidIncrement"
                     className="block mb-2 text-sm font-medium text-gray-900">Bid increment</label>
              <input {...register('bidIncrement')}
                     type="number" name="bidIncrement" id="bidIncrement"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                     placeholder="Bid increment"
                     required={true}/>
            </div>


            <div className="w-full">
              <label htmlFor="start"
                     className="block mb-2 text-sm font-medium text-gray-900">Start</label>
              <DatePicker
                {...register('start')}
                className='bg-gray-50 border border-gray-300 rounded-lg block w-full px-2.5 py-2'
                placeholderText='DD/MM/YYYY'
                dateFormat='dd/MM/yyyy'
                showTimeSelect
                id='start-date'
                autoComplete='off'
                onChange={(newDate: Date) => {
                  setValue('start', newDate)
                  setStartDate(newDate)
                }}
                required={true}
                value={startDate ? `${startDate.toDateString()} ${startDate.toLocaleTimeString()}` : ''}
              />
            </div>


            <div className="w-full">
              <label htmlFor="end"
                     className="block mb-2 text-sm font-medium text-gray-900">End</label>
              <DatePicker
                className='bg-gray-50 border border-gray-300 rounded-lg block w-full px-2.5 py-2'
                placeholderText='DD/MM/YYYY'
                dateFormat='dd/MM/yyyy'
                showTimeSelect
                id='start-date'
                autoComplete='off'
                onChange={(newDate: Date) => {
                  setValue('end', newDate)
                  setEndDate(newDate)
                }}
                required={true}
                value={endDate ? `${endDate.toDateString()} ${endDate.toLocaleTimeString()}` : ''}
              />
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="description"
                     className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea {...register('description')}
                        id="description" rows={8}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your description here"/>
            </div>


          </div>


          <button type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
            Create
          </button>


        </form>
      </div>
    </section>
  )
}
