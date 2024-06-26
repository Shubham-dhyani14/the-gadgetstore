import React from 'react'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOverviewFalse } from '../store/overviewSlice'
import { add } from '../store/cartSlice'





const LaptopOverview = () => {

  const dispatch = useDispatch();

  const overviewState = useSelector((state) => state.overview.overview);
  const overviewProduct = useSelector((state) => state.overview.product);

  return (
    <Transition.Root show={overviewState} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => dispatch(toggleOverviewFalse())}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => dispatch(toggleOverviewFalse())}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img src={overviewProduct.img_url} alt='Product Image' className="object-contain object-center" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{overviewProduct.brand} {overviewProduct.model}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-red-700 font-medium text-gray-900">${overviewProduct.price}</p>


                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <div>
                          <h4 className="text-xl text-indigo-700 font-medium text-gray-900">Specifications</h4>
                          <p className="mt-1 text-sm text-gray-700">{overviewProduct.processor}</p>
                          <p className="mt-1 text-sm text-gray-700">{overviewProduct.ram.size} {overviewProduct.ram.type}</p>
                          <p className="mt-1 text-sm text-gray-700"> Grpahics- {overviewProduct.graphics_card.model}</p>
                          <p className="mt-1 text-sm text-gray-700">GPU TGP-  {overviewProduct.graphics_card.tgp}</p>
                          <p className="mt-1 text-sm text-gray-700">Storage-  {overviewProduct.storage.size} {overviewProduct.storage.type}</p>
                          <p className="mt-1 text-sm text-gray-700"> Display- {overviewProduct.display.type} {overviewProduct.display.resolution} {overviewProduct.display.size} In</p>
                          <p className="mt-1 text-sm text-gray-700">Battery-  {overviewProduct.battery.capacity} ({overviewProduct.battery.charging_wattage}) charging </p>
                          <p className="mt-1 text-sm text-gray-700">{overviewProduct.wifi}</p>
                          <p className="mt-1 text-sm text-gray-700">{overviewProduct.bluetooth}</p>
                          <p className="mt-1 text-sm text-gray-700">{overviewProduct.microsoft_office == true ? "Microsoft Office included" : ""}</p>

                        </div>


                        <button onClick={() => {
                          dispatch(add(overviewProduct))
                          dispatch(toggleOverviewFalse())
                        }}
                          type="submit"
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Add to bag
                        </button>

                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default LaptopOverview
