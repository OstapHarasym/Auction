import {useForm, SubmitHandler} from "react-hook-form";
import {CreateLotModel} from '../types/CreateLotModel';
import {LotCreationService} from '../services/LotCreationService';
import {DateInput} from '../../../ui/inputs/DateInput';
import {TextArea} from '../../../ui/inputs/TextArea';
import {TextInput} from '../../../ui/inputs/TextInput';
import {Button} from '../../../ui/Button';

export default function CreateLotForm() {
  const { handleSubmit, setValue } = useForm<CreateLotModel>();

  const onSubmit: SubmitHandler<CreateLotModel> = data => {
    LotCreationService.createLot(data).then()
  }

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Create a new lot</h2>
        <form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 pb-5">
            <div className='col-span-2'>
              <TextInput label='Lot title' type='text' placeholder='Lot title' onChange={(newValue) => setValue('title', newValue)}/>
            </div>

            <TextInput label='Starting price' type='number' placeholder='Starting price' onChange={(newValue) => setValue('startingPrice', +newValue)}/>

            <TextInput label='Bid increment' type='number' placeholder='Bid increment' onChange={(newValue) => setValue('bidIncrement', +newValue)}/>

            <DateInput label='Start' onChange={(newValue) => setValue('start', newValue)}/>

            <DateInput label='End' onChange={(newValue) => setValue('end', newValue)}/>

            <TextArea label='Description' onChange={(newValue) => setValue('description', newValue)}/>
          </div>

          <Button title='Create' colour='blue' onClick={handleSubmit(onSubmit)}/>
        </form>
      </div>
    </section>
  )
}
