import {useForm, SubmitHandler} from "react-hook-form";
import {CreateLotModel} from '../../models/CreateLotModel';
import {LotsService} from '../../services/LotsService';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateLotForm() {
  const { register, handleSubmit } = useForm<CreateLotModel>();
  const onSubmit: SubmitHandler<CreateLotModel> = data => {
    LotsService.createLot(data).then()
  }

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new product</h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Product
                Name</label>
              <input type="text" name="name" id="name"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                     placeholder="Type product name" required={true}/>
            </div>
            <div className="w-full">
              <label htmlFor="brand"
                     className="block mb-2 text-sm font-medium text-gray-900">Brand</label>
              <input type="text" name="brand" id="brand"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                     placeholder="Product brand" required={true}/>
            </div>
            <div className="w-full">
              <label htmlFor="price"
                     className="block mb-2 text-sm font-medium text-gray-900">Price</label>
              <input type="number" name="price" id="price"
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                     placeholder="$2999" required={true}/>
            </div>
            <div className="w-full">
              <label htmlFor="price"
                     className="block mb-2 text-sm font-medium text-gray-900">Price</label>
              <div className="">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div className="flex flex-row w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block p-2.5">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd">
                    </path>
                  </svg>
                </div>
                <DatePicker
                  className='ml-5 w-full mr-5 flex flex-row'
                  placeholderText='DD/MM/YYYY'
                  dateFormat='dd/MM/yyyy'
                  showTimeSelect
                  id='start-date'
                  autoComplete='off'
                  onChange={() => console.log()}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description"
                     className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea id="description" rows={8}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your description here"></textarea>
            </div>
          </div>
          <button type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
            Add product
          </button>
        </form>
      </div>
    </section>
  )
}
