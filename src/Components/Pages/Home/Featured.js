import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
    {
        name: 'Competitive parts material',
        description:
            'We always try to make a competative product to stay better than any other company in the globe.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'No extra charges for buying any items here. We also make sure your safe shipment here. Very cheap for buying.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'After placing order, our worker work fast to safely deliver the product as soon as possible. No delay.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Every single activities are notified via mobile and email instantly. No insecure feel will arise on you.',
        icon: AnnotationIcon,
    },
]

const Featured = () => {
    return (
        <div className="py-12 bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to source car parts
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Since 1998, we are providing the best deals to our customer. This is the best platform for reliable product source and stay longer.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Featured;
