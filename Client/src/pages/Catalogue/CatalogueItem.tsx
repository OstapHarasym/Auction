import {CatalogueItemModel} from '../../models/CatalogueItemModel';
import {NavLink} from 'react-router-dom';

export interface params {
  item: CatalogueItemModel,
  deleteItem: () => void
}

export default function CatalogueItem(params: params) {
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
        {params.item.title}
      </td>
      <td className="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
        {params.item.startingPrice}
      </td>
      <td className='text-sm text-blue-600 text-center font-light px-6 py-4 whitespace-nowrap'>
        <button onClick={params.deleteItem} className='hover:text-red-900'>
          Delete
        </button>
      </td>
      <td className='text-sm text-blue-600 text-center font-light px-6 py-4 whitespace-nowrap'>
        <NavLink to={'/lots/' + params.item.id}>
          Open
        </NavLink>
      </td>
    </tr>
  )
}
