import { MenuItem, OrderItem } from '../types'
import { formatCurrency } from '../helpers/index'

type OrderContentsType = {
  order: OrderItem[]
  removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({
  order,
  removeItem
}: OrderContentsType) {
  return (
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>
      <div className='space-y-3 mt-5'>
        {
          order.map((item) => (
            <div
              className='flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center'
              key={item.id}>
              <div>
                <p className='text-lg'>
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className='font-black'>
                  Cantidad: {item.quantity} -{' '}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>

              <button
                className='bg-red-600 h-8 w-8 rounded-full text-white font-black'
                onClick={() => removeItem(item.id)}>
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
