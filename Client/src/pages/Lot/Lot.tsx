import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../../models/CatalogueItemModel';
import {LotsService} from '../../services/LotsService';
import BidModal from './BidModal';
import BidList from './BidList';

export default function Lot() {
  const { id } = useParams<string>()
  const [lot, setLot] = useState<CatalogueItemModel>()
  const [bidModalOpen, setBidModalOpen] = useState(false)

  useEffect(() => {
    LotsService.getLot(id ?? '').then(data => setLot(data))
  }, [id])

  return (
    <>
      {!bidModalOpen ? (
        <>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
                {lot?.title}
              </h2>
              <p className="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">
                ${lot?.startingPrice}
              </p>
              <dl>
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deserunt, ducimus ea eum id itaque minima molestias omnis, possimus, praesentium quia repellendus sint sit vero voluptas. Asperiores et expedita itaque.
                </dd>
              </dl>
              <div className="flex items-center space-x-4">
                <button onClick={() => setBidModalOpen(true)} type="button" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Bid
                </button>
              </div>


            </div>
            <div className="px-4 mx-auto max-w-2xl">

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">
                      Silver
                    </td>
                    <td className="px-6 py-4">
                      Laptop
                    </td>
                    <td className="px-6 py-4">
                      $2999
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">
                      White
                    </td>
                    <td className="px-6 py-4">
                      Laptop PC
                    </td>
                    <td className="px-6 py-4">
                      $1999
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">
                      Black
                    </td>
                    <td className="px-6 py-4">
                      Accessories
                    </td>
                    <td className="px-6 py-4">
                      $99
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>


          </section>
          <BidList lotId={lot?.id}/>

        </>
      ) : (<BidModal closeModal={() => setBidModalOpen(false)} lotId={lot?.id}/>)}

    </>
  )
}
