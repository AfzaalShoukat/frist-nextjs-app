import { title } from 'process'
import Cards from './cards'
import { section } from 'framer-motion/client'

export default function CardsGrid(){
    const cards = [
        {
            title: 'Easy to use',
            discription: 'our platform is designed to be intuitive and user-friendly'
            ,
            price:'20$'
        },
        {
            title: 'Easy to use',
            discription: 'our platform is designed to be intuitive and user-friendly'
            ,
            price:'20$'
        },
        {
            title: 'Easy to use',
            discription: 'our platform is designed to be intuitive and user-friendly'
            ,
            price:'20$'
        },

    ]
    return(
        <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              description={card.discription}
              price={card.price}
            />
          ))}
        </div>
      </div>
    </section>
    )
}