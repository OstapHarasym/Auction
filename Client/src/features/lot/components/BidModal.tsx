import {BidService} from '../services/BidService';
import {Button} from '../../../ui/Button';
import {TextInput} from '../../../ui/inputs/TextInput';
import {useState} from 'react';

interface Props {
  closeModal: () => void
  lotId?: string
}

export default function  BidModal(props: Props) {
  const [amount, setAmount] = useState<number>(0)

  function onSubmit() {
    if (props.lotId) {
      BidService.addBid({ amount: amount, lotId: props.lotId }).then(() => props.closeModal());
    }
  }

  return (
    <div className="grid h-screen place-items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow md:p-8">
          <div className="mb-4 text-sm font-light text-gray-500">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">Bid</h3>
            <TextInput label='Amount' type='number' placeholder='100' onChange={(newValue) => setAmount(+newValue)}/>
          </div>
          <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0 mx-10">
            <Button title='Cancel' colour='red' onClick={() => props.closeModal()}/>
            <Button title='Submit' colour='blue' onClick={() => onSubmit()}/>
          </div>
        </div>
      </div>
    </div>
  )
}
