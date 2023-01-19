import {useForm, SubmitHandler} from "react-hook-form";
import {CreateLotModel} from '../../models/CreateLotModel';
import {LotsService} from '../../services/LotsService';

export default function CreateLotForm() {
  const { register, handleSubmit } = useForm<CreateLotModel>();
  const onSubmit: SubmitHandler<CreateLotModel> = data => {
    LotsService.createLot(data).then()
  }

  return (
    <form className='bg-amber-100' onSubmit={handleSubmit(onSubmit)}>
      <h3>Title</h3>
      <input {...register('title', { required: true })}/>
      <h3>Start price</h3>
      <input {...register('startingPrice', { required: true })}/>
      <h3>Step</h3>
      <input {...register('bidIncrement', { required: true })}/>
      <input className='bg-red-700 text-white p-2 ml-20' type="submit"/>
    </form>
  );
}
