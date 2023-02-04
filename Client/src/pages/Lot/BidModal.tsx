import {useForm} from 'react-hook-form';
import {AddBidModel} from '../../models/AddBidModel';
import {BidsService} from '../../services/BidsService';

interface Props {
  closeModal: () => void
  lotId?: string
}

export default function  BidModal(props: Props) {
  const { register, handleSubmit } = useForm<AddBidModel>();

  function onSubmit(data : AddBidModel) {
    if (props.lotId) {
      BidsService.addBid({ amount: data.amount, lotId: props.lotId }).then(() => props.closeModal());
    }
  }

  return (
    <>
      <button onClick={() => props.closeModal()} className='bg-red-600 py-1 px-5 m-1'>Close</button>
      <form className='bg-amber-100' onSubmit={handleSubmit(onSubmit)}>
        <h3>Bid amount</h3>
        <input type='number' {...register('amount', { required: true })}/>
        <input className='bg-red-700 text-white p-2 ml-20' type="submit"/>
      </form>
    </>
  )
}
