import React, { useState } from 'react';
import { ShoppingCart, Hammer, Info, Store } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  artisan: string;
  price: number;
  category: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Hand-Carved Soapstone Chess Set", artisan: "Kisii Craftsmen", price: 4500, category: "Decor", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=200" },
  { id: 2, name: "Recycled Iron Charcoal Jiko", artisan: "Kamukunji Metal Works", price: 1200, category: "Kitchen", image: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?auto=format&fit=crop&q=80&w=200" },
  { id: 3, name: "Maasai Beaded Leather Belt", artisan: "Narok Artisans", price: 1500, category: "Fashion", image: "https://images.unsplash.com/photo-1621339699196-0373802b54bc?auto=format&fit=crop&q=80&w=200" },
  { id: 4, name: "Hand-Woven Sisal Basket (Kiondo)", artisan: "Machakos Weavers", price: 2200, category: "Fashion", image: "https://images.unsplash.com/photo-1590736961918-3693245f782c?auto=format&fit=crop&q=80&w=200" },
];

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      <header className="bg-orange-600 text-white p-4 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Hammer size={24} />
            <h1 className="text-2xl font-bold tracking-tight">Jua Kali Digital</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:underline">Sell with us</button>
            <div className="relative">
              <ShoppingCart size={28} />
              <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">{cartCount}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold text-orange-900 mb-4">Support Local Kenyan Artisans</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Connecting the craftsmanship of Jua Kali to urban doorsteps. Authentically handmade, uniquely Kenyan.</p>
        </section>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['All', 'Decor', 'Kitchen', 'Fashion'].map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border-2 border-orange-600 font-semibold transition-colors ${filter === cat ? 'bg-orange-600 text-white' : 'text-orange-600 hover:bg-orange-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-orange-600 text-xs font-bold uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                  <Store size={14} /> {product.artisan}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Ksh {product.price.toLocaleString()}</span>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-orange-900 text-orange-100 py-10 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-2">Jua Kali Digital</h4>
            <p className="text-sm">Nairobi, Kenya. Since 2026.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Logistics</a>
          </div>
        </div>
      </footer>
    </div>
  );
}