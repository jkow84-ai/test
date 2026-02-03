import { useState } from 'react';

interface SelectedOptions {
  category: string;
  size: string;
  color: string;
  features: string[];
  subscription: string;
}

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    category: '',
    size: '',
    color: '',
    features: [],
    subscription: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { id: 'elektronika', name: 'Elektronika', icon: '💻', desc: 'Laptopy, telefony, tablety' },
    { id: 'moda', name: 'Moda', icon: '👔', desc: 'Ubrania, buty, akcesoria' },
    { id: 'sport', name: 'Sport', icon: '⚽', desc: 'Sprzęt sportowy, odzież' },
    { id: 'dom', name: 'Dom i ogród', icon: '🏡', desc: 'Meble, narzędzia, dekoracje' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { name: 'Czerwony', value: '#ef4444' },
    { name: 'Niebieski', value: '#3b82f6' },
    { name: 'Zielony', value: '#22c55e' },
    { name: 'Żółty', value: '#eab308' },
    { name: 'Fioletowy', value: '#8b5cf6' },
    { name: 'Czarny', value: '#171717' },
    { name: 'Biały', value: '#ffffff' },
    { name: 'Szary', value: '#6b7280' },
  ];

  const features = [
    { id: 'darmowa-wysylka', name: 'Darmowa wysyłka' },
    { id: 'garancja', name: 'Rozszerzona gwarancja' },
    { id: 'zwrot', name: '30-dniowy zwrot' },
    { id: 'rabat', name: 'Kupon rabatowy 10%' },
    { id: 'pakowanie', name: 'Ekologiczne opakowanie' },
  ];

  const subscriptions = [
    { id: 'basic', name: 'Basic', price: '0 zł', period: '/miesiąc', features: ['Podstawowe funkcje', 'Wsparcie email'] },
    { id: 'premium', name: 'Premium', price: '29 zł', period: '/miesiąc', features: ['Wszystkie funkcje', 'Priorytetowe wsparcie', 'Ekskluzywne oferty'] },
    { id: 'pro', name: 'Pro', price: '59 zł', period: '/miesiąc', features: ['Nieograniczony dostęp', 'Wsparcie 24/7', 'Dedykowany opiekun', 'API'] },
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedOptions(prev => ({ ...prev, category: categoryId }));
  };

  const handleSizeSelect = (size: string) => {
    setSelectedOptions(prev => ({ ...prev, size }));
  };

  const handleColorSelect = (colorName: string) => {
    setSelectedOptions(prev => ({ ...prev, color: colorName }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleSubscriptionSelect = (subscriptionId: string) => {
    setSelectedOptions(prev => ({ ...prev, subscription: subscriptionId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const resetForm = () => {
    setSelectedOptions({
      category: '',
      size: '',
      color: '',
      features: [],
      subscription: '',
    });
    setIsSubmitted(false);
  };

  const getSelectedCategoryName = () => {
    const cat = categories.find(c => c.id === selectedOptions.category);
    return cat ? cat.name : 'Nie wybrano';
  };

  const getSelectedSubName = () => {
    const sub = subscriptions.find(s => s.id === selectedOptions.subscription);
    return sub ? sub.name : 'Nie wybrano';
  };

  const getSelectedFeatureNames = () => {
    return features
      .filter(f => selectedOptions.features.includes(f.id))
      .map(f => f.name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-800 text-center">
            🛒 Konfigurator Zakupów
          </h1>
          <p className="text-slate-500 text-center mt-2">
            Wybierz opcje, które najlepiej Ci odpowiadają
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Kategorie */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">1</span>
              Wybierz kategorię
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategorySelect(category.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 ${selectedOptions.category === category.id ? 'border-blue-500 bg-blue-50 shadow-md transform scale-105' : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'}`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <div className="font-semibold text-slate-800">{category.name}</div>
                  <div className="text-sm text-slate-500 mt-1">{category.desc}</div>
                </button>
              ))}
            </div>
          </section>

          {/* Rozmiar */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">2</span>
              Wybierz rozmiar
            </h2>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => handleSizeSelect(size)}
                  className={`w-16 h-16 rounded-xl font-bold text-lg transition-all duration-200 ${selectedOptions.size === size ? 'bg-green-500 text-white shadow-lg transform scale-110' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </section>

          {/* Kolor */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">3</span>
              Wybierz kolor
            </h2>
            <div className="flex flex-wrap gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => handleColorSelect(color.name)}
                  className={`w-14 h-14 rounded-full border-4 transition-all duration-200 hover:scale-110 ${selectedOptions.color === color.name ? 'border-slate-800 ring-4 ring-offset-2 ring-slate-300' : 'border-slate-300'}`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {selectedOptions.color === color.name && (
                    <span className={`text-lg ${color.value === '#ffffff' || color.value === '#eab308' ? 'text-slate-800' : 'text-white'}`}>✓</span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-slate-500 mt-3">
              Wybrany kolor: <span className="font-semibold text-slate-800">{selectedOptions.color || 'Nie wybrano'}</span>
            </p>
          </section>

          {/* Dodatkowe funkcje */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">4</span>
              Dodatkowe funkcje
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((feature) => (
                <label
                  key={feature.id}
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedOptions.features.includes(feature.id) ? 'border-orange-400 bg-orange-50' : 'border-slate-200 hover:border-orange-300'}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.features.includes(feature.id)}
                    onChange={() => handleFeatureToggle(feature.id)}
                    className="w-5 h-5 text-orange-500 border-slate-300 rounded focus:ring-orange-500"
                  />
                  <span className="ml-3 text-slate-700 font-medium">{feature.name}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Subskrypcja */}
          <section className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600">5</span>
              Wybierz plan subskrypcji
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subscriptions.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => handleSubscriptionSelect(sub.id)}
                  className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${selectedOptions.subscription === sub.id ? 'border-teal-500 bg-teal-50 shadow-lg' : 'border-slate-200 hover:border-teal-300'}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-slate-800">{sub.name}</h3>
                    {selectedOptions.subscription === sub.id && (
                      <span className="text-teal-500">✓</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-800">{sub.price}</span>
                    <span className="text-slate-500">{sub.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {sub.features.map((feat, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className="text-teal-500">•</span> {feat}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </section>

          {/* Przyciski */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              ✨ Zatwierdź wybór
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="px-8 py-4 bg-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-300 transition-all duration-200"
            >
              🔄 Resetuj formularz
            </button>
          </div>
        </form>

        {/* Podsumowanie */}
        {isSubmitted && (
          <section className="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              📋 Podsumowanie Twojego wyboru
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-blue-100 mb-2">Kategoria</h3>
                <p className="text-xl font-bold">{getSelectedCategoryName()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-blue-100 mb-2">Rozmiar</h3>
                <p className="text-xl font-bold">{selectedOptions.size || 'Nie wybrano'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-blue-100 mb-2">Kolor</h3>
                <p className="text-xl font-bold">{selectedOptions.color || 'Nie wybrano'}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <h3 className="font-semibold text-blue-100 mb-2">Plan subskrypcji</h3>
                <p className="text-xl font-bold">{getSelectedSubName()}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 md:col-span-2">
                <h3 className="font-semibold text-blue-100 mb-2">Dodatkowe funkcje</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {getSelectedFeatureNames().length > 0 ? (
                    getSelectedFeatureNames().map((name, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        ✓ {name}
                      </span>
                    ))
                  ) : (
                    <span className="text-blue-100">Brak wybranych funkcji</span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-xl">
              <p className="text-center text-lg">
                🎉 Dziękujemy za dokonanie wyboru! Twój pakiet został przygotowany.
              </p>
            </div>
          </section>
        )}

        {/* Statystyki */}
        <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-3xl font-bold text-blue-500">5</div>
            <div className="text-slate-500 text-sm mt-1">Kategorii</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-3xl font-bold text-green-500">{selectedOptions.category ? 1 : 0}</div>
            <div className="text-slate-500 text-sm mt-1">Wybranych kategorii</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-3xl font-bold text-orange-500">{selectedOptions.features.length}</div>
            <div className="text-slate-500 text-sm mt-1">Dodatkowych funkcji</div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 text-center">
            <div className="text-3xl font-bold text-teal-500">{selectedOptions.subscription ? 1 : 0}</div>
            <div className="text-slate-500 text-sm mt-1">Aktywny plan</div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-slate-500">
          <p>© 2024 Konfigurator Zakupów. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
