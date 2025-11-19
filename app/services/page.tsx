"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    title: "Car Wrapping",
    description:
      "Transform your vehicle with our premium vinyl wraps. Choose from a wide range of colors and finishes.",
  },
  {
    title: "Paint Protection Film",
    description: "Protect your car's paint from chips, scratches, and environmental damage with our high-quality PPF.",
  },
  {
    title: "Ceramic Coating",
    description:
      "Enhance your car's shine and protect it from the elements with our professional ceramic coating service.",
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-16 pt-32">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Car Protection Services Catalog */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Car Protection Excellence
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-27%20at%2021.43.48_3b5022d9.jpg-1TZlpcZUnX20ei3TxNw5goHMkplQtD.jpeg"
                    alt="Professional paint protection detail work showcasing premium finish quality"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Precision Detail Work</h3>
                  <p className="text-gray-300">
                    Experience the difference of professional-grade paint protection that enhances your vehicle'natural
                    beauty while providing long-lasting protection.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="/images/services/luxury-detailing.jpg"
                    alt="Luxury vehicle detailing showcasing deep blue metallic finish and professional surface treatment"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Luxury Vehicle Detailing</h3>
                  <p className="text-gray-300">
                    Experience the pinnacle of automotive craftsmanship with our luxury vehicle detailing services.
                    Specializing in premium finishes and high-end surface treatments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden h-full">
                <div className="relative h-80 md:h-96">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-27%20at%2021.43.48_fc510ff9.jpg-jZdEmSn0kW7UMFTijyqnMpsZ4RIJam.jpeg"
                    alt="Complete vehicle protection service showing finished results"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Complete Vehicle Care</h3>
                  <p className="text-gray-300">
                    From comprehensive paint protection to ceramic coating applications, we provide complete vehicle
                    care solutions. Our expert services ensure your investment maintains its pristine condition and
                    retains maximum value for years to come.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Gallery
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[1, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={`/images/services/gallery-${num}.jpg`}
                  alt={`Gallery image ${num} - Professional car wrap and PPF installation`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
