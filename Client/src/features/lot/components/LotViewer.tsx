import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../../catalogue/types/CatalogueItemModel';
import {LotService} from '../services/LotService';
import BidModal from './BidModal';
import BidList from './BidList';

export default function LotViewer() {
  const { id } = useParams<string>()
  const [lot, setLot] = useState<CatalogueItemModel>()
  const [bidModalOpen, setBidModalOpen] = useState(false)

  useEffect(() => {
    LotService.getLot(id ?? '').then(data => setLot(data))
  }, [id])

  return (
    <>
      {!bidModalOpen ? (
        <>
          <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl">
                {lot?.title}
              </h2>
              <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl">
                ${lot?.startingPrice}
              </p>
              <dl>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5">
                  {lot?.description}
                </dd>
              </dl>
              <div className="flex items-center space-x-4">
                <button onClick={() => setBidModalOpen(true)} type="button" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Bid
                </button>
              </div>


            </div>
            <div className="px-4 mx-auto max-w-2xl">

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bidder
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <BidList lotId={lot?.id}/>
                  </tbody>
                </table>
              </div>

            </div>


          </section>
        </>
      ) : (<BidModal closeModal={() => setBidModalOpen(false)} lotId={lot?.id}/>)}

    </>
  )
}
